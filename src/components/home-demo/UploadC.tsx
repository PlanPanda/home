import { Check as Tick, FileText, ShieldCheck } from 'lucide-react'
import type { CSSProperties } from 'react'
import { Bar, Button, Check, Stage, States, type Act } from '../stageshow'
import { FILE } from '../ai-demo/parts'
import { AppWindow } from './frame'

// Home · อัปโหลดกรมธรรม์ · C "read into the form". The policy PDF lies over
// the app's edge; the app shows its own policy form. A reading line passes
// down the page; each line it reads is highlighted on the page as the field
// it fills lands in the form, tinted as filled by the assistant. The rider
// stays empty and is flagged, the status is the system default. The agent
// saves; the tint clears.
//
// Real strings: the file name, the form's labels and values, the status
// line, the button. The page is filler apart from its title.

type Field = { label: string; value: string; span?: number; src?: number; kind?: 'missing' | 'default' }
const FIELDS: Field[] = [
  { label: 'แบบประกัน', value: 'ตลอดชีพ ชำระเบี้ย 20 ปี', span: 2, src: 0 },
  { label: 'ประเภทผลิตภัณฑ์', value: 'ตลอดชีพ', src: 0 },
  { label: 'บริษัทประกัน', value: 'บริษัทประกันตัวอย่าง จำกัด', span: 2, src: 1 },
  { label: 'เลขกรมธรรม์', value: 'SP-2569-001263', src: 1 },
  { label: 'วันที่เริ่มสัญญา', value: '18/09/2569', src: 2 },
  { label: 'ทุนประกันชีวิต', value: '1,000,000', src: 3 },
  { label: 'เบี้ยประกัน', value: '24,000', src: 4 },
  { label: 'สถานะ', value: 'มีผลบังคับ', kind: 'default' },
  { label: 'งวดชำระเบี้ย', value: 'รายปี', src: 4 },
  { label: 'สัญญาเพิ่มเติม', value: 'ไม่พบในเอกสาร', kind: 'missing' },
]
const BLOCKS = 5

type S = { phase: 'idle' | 'reading' | 'done'; scan: number; filled: number; save: 'idle' | 'busy' | 'done' }

const initial: S = { phase: 'idle', scan: -1, filled: 0, save: 'idle' }
const poster: S = { phase: 'done', scan: BLOCKS, filled: FIELDS.length, save: 'done' }

// The fields each page block fills, in order
const upTo = (block: number) => FIELDS.filter((f) => f.src !== undefined && f.src <= block).length

async function script(a: Act<S>) {
  await a.wait(700)
  a.mark('read')
  a.put({ phase: 'reading' })
  await a.wait(500)
  for (let b = 0; b < BLOCKS; b++) {
    a.put({ scan: b })
    await a.wait(420)
    a.put({ filled: upTo(b) })
    await a.wait(380)
  }
  a.put({ scan: BLOCKS })
  await a.wait(300)
  a.put({ filled: FIELDS.length, phase: 'done' })
  await a.wait(1500)
  a.mark('save')
  await a.click({ at: 'save', x: 0.5, y: 0.55 })
  a.put({ save: 'busy' })
  await a.wait(900)
  a.mark('done')
  a.put({ save: 'done' })
  await a.move({ x: 900, y: 520 })
  await a.wait(2800)
}

// Fields fill in source order: those from the page first, then the rest
const order = FIELDS.map((f, i) => ({ f, i })).sort((x, y) => (x.f.src ?? 99) - (y.f.src ?? 99)).map(({ i }) => i)

export default function UploadC() {
  return (
    <Stage width={960} height={560} initial={initial} poster={poster} script={script} play="once" cursor={{ at: { x: 900, y: 520 } }} className="sp hd hdc">
      {(s) => (
        <>
          <AppWindow active="customers" className="hdc-win">
            <div className="hdc-form" data-saved={s.save === 'done' || undefined}>
              <div className="hdc-title"><ShieldCheck size={16} strokeWidth={1.75} />ข้อมูลกรมธรรม์</div>
              <div className="hdc-status">
                <States
                  align="start"
                  value={s.phase}
                  states={{
                    idle: <span className="hdc-status__line"><FileText size={14} strokeWidth={2} />แนบ {FILE} แล้ว</span>,
                    reading: <span className="hdc-status__line"><span className="sp-mascot hdc-mascot" />ผู้ช่วย AI กำลังกรอกจากไฟล์</span>,
                    done: (
                      <span className="hdc-status__line">
                        <Tick size={14} strokeWidth={2.2} />
                        {s.save === 'done' ? 'บันทึกกรมธรรม์แล้ว' : 'กรอกจากไฟล์ 8 ช่อง · ตรวจก่อนบันทึก'}
                      </span>
                    ),
                  }}
                />
                <Button
                  variant="primary"
                  size="large"
                  data-target="save"
                  data-cursor="pointer"
                  icon={s.save === 'idle' ? undefined : <Check on={s.save === 'done'} pending={s.save === 'busy'} size={14} />}
                >
                  {s.save === 'done' ? 'บันทึกแล้ว' : s.save === 'busy' ? 'กำลังบันทึก' : 'บันทึกกรมธรรม์'}
                </Button>
              </div>
              <div className="hdc-grid">
                {FIELDS.map((f, i) => (
                  <label key={f.label} className="hdc-field" style={{ gridColumn: f.span ? `span ${f.span}` : undefined }}>
                    <span className="hdc-field__label">{f.label}</span>
                    <span className="hdc-field__box" data-on={order.indexOf(i) < s.filled || undefined} data-kind={f.kind}>
                      <span className="hdc-field__value">{f.value}</span>
                      {f.kind && <span className={`sp-tag sp-tag--${f.kind}`}>{f.kind === 'missing' ? 'ตรวจเพิ่ม' : 'ค่าเริ่มต้น'}</span>}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </AppWindow>

          {/* The PDF, laid over the app's edge */}
          <div className="hdc-paper">
            <div className="hdc-paper__tab"><FileText size={13} strokeWidth={2} />{FILE}</div>
            <div className="hdc-page">
              <div className="hdc-page__title">กรมธรรม์ประกันชีวิต</div>
              <Bar w="74%" h={6} r={3} tone={2} />
              <Bar w="56%" h={6} r={3} tone={2} />
              {Array.from({ length: BLOCKS }, (_, b) => (
                <div key={b} className="hdc-block" data-hit={s.scan > b || (s.scan === b && s.filled >= upTo(b)) || undefined}>
                  <Bar w={44 + (b % 3) * 10} h={6} r={3} tone={3} />
                  <Bar w={84 + ((b * 7) % 4) * 14} h={7} r={3} tone={4} className="hdc-block__value" />
                </div>
              ))}
              <Bar w="86%" h={6} r={3} tone={2} />
              <Bar w="78%" h={6} r={3} tone={2} />
              <Bar w="82%" h={6} r={3} tone={2} />
              <Bar w="64%" h={6} r={3} tone={2} />
              <span className="hdc-scan" data-on={(s.phase === 'reading' && s.scan >= 0 && s.scan < BLOCKS) || undefined} style={{ '--i': Math.max(0, s.scan) } as CSSProperties} />
            </div>
          </div>
        </>
      )}
    </Stage>
  )
}
