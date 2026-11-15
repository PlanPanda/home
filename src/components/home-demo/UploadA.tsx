import { FileText, PanelLeft } from 'lucide-react'
import { Collapse, Stage, type Act, type Point } from '../stageshow'
import { Ask, Composer, ConfirmCard, FILE, Steps, type Save } from '../ai-demo/parts'
import { AppWindow } from './frame'

// Home · อัปโหลดกรมธรรม์ · A "drag it in". The whole app in the browser. A
// policy PDF is carried in from past the stage's edge and drops
// into the composer; the ask is typed and sent; the mascot reads it; a card
// laid out like the app's own policy form opens with every field filled (the
// rider flagged as not found, the payment mode as the system default); the
// agent confirms on the card.
//
// Real strings: the file, the ask, the form's fields, the button.

const ASK = 'เพิ่มกรมธรรม์ให้คุณกานต์จากไฟล์นี้'

type Cell = { label: string; value: string; span?: number; kind?: 'missing' | 'default' }
const CELLS: Cell[] = [
  { label: 'แบบประกัน', value: 'ตลอดชีพ ชำระเบี้ย 20 ปี', span: 2 },
  { label: 'ทุนประกันชีวิต', value: '1,000,000 บาท' },
  { label: 'บริษัทประกัน', value: 'บริษัทประกันตัวอย่าง จำกัด', span: 2 },
  { label: 'เลขกรมธรรม์', value: 'SP-2569-001263' },
  { label: 'เบี้ยประกัน', value: '24,000 บาท' },
  { label: 'งวดชำระ', value: 'รายปี', kind: 'default' },
  { label: 'วันเริ่มสัญญา', value: '18 ก.ย. 2569' },
  { label: 'สัญญาเพิ่มเติม', value: 'ไม่พบในเอกสาร', span: 3, kind: 'missing' },
]

type S = {
  ghost: { on: boolean; at: Point; off: Point }
  over: boolean
  attached: boolean
  draft: string
  sent: boolean
  phase: 'idle' | 'reading' | 'done'
  card: boolean
  cells: number
  save: Save
}

const initial: S = { ghost: { on: false, at: { x: -400, y: 300 }, off: { x: 0, y: 0 } }, over: false, attached: false, draft: '', sent: false, phase: 'idle', card: false, cells: 0, save: 'idle' }
const poster: S = { ...initial, sent: true, phase: 'done', card: true, cells: CELLS.length, save: 'done' }

async function script(a: Act<S>) {
  // The file arrives held, from past the stage's left edge, as if dragged
  // in from the desktop beside the browser
  const off = { x: 36, y: 40 }
  const drop = a.rect('drop')
  const to = { x: drop.x + drop.width * 0.5, y: drop.y + drop.height * 0.62 }
  a.place({ x: -70, y: 300 })
  await a.cursor('grab')
  await a.wait(500)
  a.mark('drag')
  await a.move(to, {
    duration: 1500,
    onMove: (at) => a.put({ ghost: { on: true, at, off }, over: at.x > drop.x + 24 }),
  })
  a.mark('drop')
  await a.cursor('pointer')
  a.put({ ghost: { on: false, at: to, off }, over: false, attached: true })
  await a.wait(600)
  a.mark('type')
  await a.type('draft', ASK, { interval: 42 })
  await a.wait(300)
  await a.click({ at: 'send' })
  a.put({ sent: true, attached: false, draft: '' })
  await a.wait(500)
  a.mark('read')
  a.put({ phase: 'reading' })
  await a.wait(1700)
  a.put({ phase: 'done' })
  await a.wait(300)
  a.mark('card')
  a.put({ card: true })
  await a.wait(400)
  for (let i = 1; i <= CELLS.length; i++) {
    a.put({ cells: i })
    await a.wait(150)
  }
  await a.wait(1200)
  a.mark('confirm')
  await a.click({ at: 'confirm', x: 0.5, y: 0.55 })
  a.put({ save: 'busy' })
  await a.wait(1000)
  a.mark('done')
  a.put({ save: 'done' })
  await a.move({ x: 900, y: 520 })
  await a.wait(2800)
}

export default function UploadA() {
  return (
    <Stage width={960} height={560} initial={initial} poster={poster} script={script} play="once" cursor={{ at: { x: 900, y: 520 } }} className="sp sp1 hd hda">
      {(s) => (
        <>
          <AppWindow active="ai" className="hda-win">
            <div className="hd-head"><PanelLeft size={18} strokeWidth={1.75} />ผู้ช่วย AI</div>
            <div className="hda-chat" data-target="drop" data-over={s.over || undefined}>
              <div className="sp1-thread">
                <Collapse open={!s.sent}>
                  <div className="hda-welcome">
                    <span className="sp-mascot hda-welcome__mascot" />
                    <span className="hda-welcome__title">มีอะไรให้ช่วยไหม?</span>
                    <span className="hda-welcome__sub">ถามข้อมูลลูกค้า งานกรมธรรม์ หรือให้ช่วยบันทึกได้เลย</span>
                  </div>
                </Collapse>
                <Ask sent={s.sent} text={ASK} />
                <Steps phase={s.card ? 'idle' : s.phase} done="ขั้นตอนเสร็จแล้ว · 5 ขั้นตอน" />
                <Collapse open={s.card} reveal="drop">
                  <ConfirmCard
                    title="ยืนยันการสร้างกรมธรรม์"
                    sub={<><FileText size={12} strokeWidth={2} />อ่านจาก {FILE}</>}
                    who="คุณกานต์ พูนสุข"
                    save={s.save}
                    verb={{ idle: 'ยืนยันสร้าง', busy: 'กำลังสร้าง', done: 'สร้างแล้ว', saved: 'บันทึกลงแฟ้มลูกค้าแล้ว' }}
                  >
                    <div className="hda-form">
                      {CELLS.map((c, i) => (
                        <div key={c.label} className="hda-cell" data-on={i < s.cells || undefined} data-kind={c.kind} style={{ gridColumn: c.span ? `span ${c.span}` : undefined }}>
                          <span className="hda-cell__label">{c.label}</span>
                          <span className="hda-cell__value">
                            {c.value}
                            {c.kind && <span className={`sp-tag sp-tag--${c.kind}`}>{c.kind === 'missing' ? 'ตรวจเพิ่ม' : 'ค่าเริ่มต้น'}</span>}
                          </span>
                        </div>
                      ))}
                    </div>
                  </ConfirmCard>
                </Collapse>
              </div>
              <Composer draft={s.draft} attached={s.attached} focused={s.attached && !s.sent} />
              <span className="hda-drop" aria-hidden>วางไฟล์เพื่อแนบ</span>
            </div>
          </AppWindow>

          <div
            className="hda-ghost"
            data-on={s.ghost.on || undefined}
            style={{ left: s.ghost.at.x - s.ghost.off.x, top: s.ghost.at.y - s.ghost.off.y }}
          >
            <span className="hda-desk__icon"><FileText size={30} strokeWidth={1.5} /></span>
            <span className="hda-desk__name">{FILE}</span>
          </div>
        </>
      )}
    </Stage>
  )
}
