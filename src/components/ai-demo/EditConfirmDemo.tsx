import { Bar, Collapse, Stage, type Act } from '../stageshow'
import { Ask, ChatShell, Composer, ConfirmCard, Steps, type Save } from './parts'

// "เพิ่ม แก้ไข และลบ โดยคุณเป็นคนยืนยัน". Beats: the agent asks, in plain
// words, to change a customer's phone number; the mascot finds the record;
// a review card opens with the old value struck through and the new one
// marked; nothing is saved until the agent confirms on the card's button.
//
// Real strings: the ask, the card's rows, the button. The numbers are
// fictional (555 numbers).

const ASK = 'แก้เบอร์โทรคุณกานต์เป็น 089-555-0123'
const OLD = '081-555-0187'
const NEW = '089-555-0123'

type S = { draft: string; sent: boolean; phase: 'idle' | 'reading' | 'done'; card: boolean; rows: number; save: Save }

const initial: S = { draft: '', sent: false, phase: 'idle', card: false, rows: 0, save: 'idle' }
const poster: S = { draft: '', sent: true, phase: 'done', card: true, rows: 3, save: 'done' }

async function script(a: Act<S>) {
  await a.wait(700)
  a.mark('type')
  await a.type('draft', ASK, { interval: 45 })
  await a.wait(350)
  a.mark('send')
  await a.click({ at: 'send' })
  a.put({ sent: true, draft: '' })
  await a.wait(500)
  a.mark('find')
  a.put({ phase: 'reading' })
  await a.wait(1400)
  a.put({ phase: 'done' })
  await a.wait(300)
  a.mark('card')
  a.put({ card: true })
  await a.wait(450)
  for (let i = 1; i <= 3; i++) {
    a.put({ rows: i })
    await a.wait(i === 3 ? 500 : 260)
  }
  await a.wait(1100)
  a.mark('confirm')
  await a.click({ at: 'confirm', x: 0.5, y: 0.55 })
  a.put({ save: 'busy' })
  await a.wait(1000)
  a.mark('done')
  a.put({ save: 'done' })
  await a.move({ wide: { x: 470, y: 470 }, compact: { x: 300, y: 505 } })
  await a.wait(2600)
}

export default function EditConfirmDemo() {
  return (
    <Stage
      width={544}
      height={500}
      compact={{ below: 420, width: 358, height: 540 }}
      initial={initial}
      poster={poster}
      script={script}
      play="once"
      cursor={{ at: { wide: { x: 470, y: 470 }, compact: { x: 300, y: 505 } } }}
      className="sp sp1"
    >
      {(s, _rect, layout) => (
        <ChatShell layout={layout}>
          <div className="sp1-thread">
            <div className="sp1-past">
              <Bar w={170} h={30} r={15} tone={1} className="sp1-past-q" />
              <Bar w="84%" h={8} r={4} tone={2} />
              <Bar w="58%" h={8} r={4} tone={2} />
            </div>
            <Ask sent={s.sent} text={ASK} file={false} />
            <Steps phase={s.phase} reading="กำลังหาข้อมูลคุณกานต์" done="ขั้นตอนเสร็จแล้ว · 1 ขั้นตอน" />
            <Collapse open={s.card} reveal="drop">
              <ConfirmCard
                title="ตรวจการเปลี่ยนแปลง"
                sub="แก้ไข 1 รายการ"
                who="คุณกานต์ พูนสุข"
                save={s.save}
                verb={{ idle: 'ยืนยันแก้ไข', busy: 'กำลังบันทึก', done: 'แก้ไขแล้ว', saved: 'อัปเดตแฟ้มลูกค้าแล้ว' }}
              >
                <div className="sp-row" data-on={s.rows > 0 || undefined}>
                  <span className="sp-row__label">ข้อมูลที่เปลี่ยน</span>
                  <span className="sp-row__value">เบอร์โทรศัพท์</span>
                </div>
                <div className="sp-row" data-on={s.rows > 1 || undefined}>
                  <span className="sp-row__label">ค่าเดิม</span>
                  <span className="sp-row__value sp-row__old">{OLD}</span>
                </div>
                <div className="sp-row" data-on={s.rows > 2 || undefined}>
                  <span className="sp-row__label">ค่าใหม่</span>
                  <span className="sp-row__value sp-row__new">{NEW}</span>
                </div>
              </ConfirmCard>
            </Collapse>
          </div>
          <Composer draft={s.draft} focused={!s.sent} />
        </ChatShell>
      )}
    </Stage>
  )
}
