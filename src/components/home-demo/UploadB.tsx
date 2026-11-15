import { Activity, FileText, Plus, ShieldCheck, Sparkles } from 'lucide-react'
import { Bar, Collapse, Count, Stage, type Act } from '../stageshow'
import { Ask, Composer, ConfirmCard, FILE, Steps, type Save } from '../ai-demo/parts'
import { AppWindow } from './frame'

// Home · อัปโหลดกรมธรรม์ · B "it lands in the file". The customer's policies
// tab, as the app draws it: policies grouped by type on the left, the form
// beside them. The assistant panel sits over the form. The ask is sent with
// the PDF; the mascot reads it; a short review card; the agent confirms; the
// new policy opens into the list on the left in its own group, and the
// yearly premium total under the list rolls a beat later.
//
// Real strings: the customer, the tabs, the two policies, the total, the ask,
// the card. The form behind the panel is filler.

const ASK = 'เพิ่มกรมธรรม์ให้คุณกานต์จากไฟล์นี้'
const TABS = ['ส่วนตัว', 'ติดต่อ', 'ความชอบ', 'ไฟล์', 'กิจกรรม', 'กรมธรรม์']
const ROWS = [
  { label: 'แบบประกัน', value: 'ตลอดชีพ ชำระเบี้ย 20 ปี' },
  { label: 'ทุนประกัน', value: '1,000,000 บาท' },
  { label: 'เบี้ยประกัน', value: '24,000 บาท / ปี' },
  { label: 'สัญญาเพิ่มเติม', value: 'ไม่พบในเอกสาร', kind: 'missing' as const },
]

type S = { draft: string; attached: boolean; sent: boolean; phase: 'idle' | 'reading' | 'done'; card: boolean; rows: number; save: Save; landed: boolean; fresh: boolean; total: number }

const initial: S = { draft: '', attached: true, sent: false, phase: 'idle', card: false, rows: 0, save: 'idle', landed: false, fresh: false, total: 18500 }
const poster: S = { draft: '', attached: false, sent: true, phase: 'done', card: true, rows: ROWS.length, save: 'done', landed: true, fresh: false, total: 42500 }

async function script(a: Act<S>) {
  await a.wait(600)
  a.mark('type')
  await a.type('draft', ASK, { interval: 42 })
  await a.wait(300)
  await a.click({ at: 'send' })
  a.put({ sent: true, attached: false, draft: '' })
  await a.wait(500)
  a.mark('read')
  a.put({ phase: 'reading' })
  await a.wait(1600)
  a.put({ phase: 'done', card: true })
  await a.wait(400)
  for (let i = 1; i <= ROWS.length; i++) {
    a.put({ rows: i })
    await a.wait(200)
  }
  await a.wait(1100)
  a.mark('confirm')
  await a.click({ at: 'confirm', x: 0.5, y: 0.55 })
  a.put({ save: 'busy' })
  await a.wait(900)
  a.mark('land')
  a.put({ save: 'done', landed: true, fresh: true })
  await a.wait(700)
  a.put({ total: 42500 })
  await a.move({ wide: { x: 900, y: 530 }, compact: { x: 320, y: 530 } })
  await a.wait(1600)
  a.put({ fresh: false })
  await a.wait(1800)
}

export default function UploadB() {
  return (
    <Stage width={960} height={560} compact={{ below: 640, width: 358, height: 560 }} initial={initial} poster={poster} script={script} play="once" cursor={{ at: { wide: { x: 900, y: 530 }, compact: { x: 320, y: 530 } } }} className="sp sp1 hd hdb">
      {(s) => (
        <>
          <AppWindow active="customers" className="hdb-win">
            <div className="hdb-head">
              <span className="hdb-name">คุณกานต์ พูนสุข</span>
              <span className="hdb-pdpa"><ShieldCheck size={12} strokeWidth={2} />PDPA</span>
            </div>
            <div className="hdb-tabs">
              {TABS.map((t) => <span key={t} data-on={t === 'กรมธรรม์' || undefined}>{t}</span>)}
            </div>
            <div className="hdb-split">
              <div className="hdb-list">
                <span className="hdb-add"><Plus size={16} strokeWidth={2} />เพิ่มกรมธรรม์</span>
                <Collapse open={s.landed} reveal="drop">
                  <div className="hdb-group">
                    <div className="hdb-type hdb-type--life"><ShieldCheck size={16} strokeWidth={2} />ตลอดชีพ<span>1M ฿</span></div>
                    <div className="hdb-policy" data-fresh={s.fresh || undefined}>
                      <b>ตลอดชีพ ชำระเบี้ย 20 ปี</b>
                      <small>บริษัทประกันตัวอย่าง จำกัด · SP-2569-001263</small>
                      <span className="hdb-policy__nums"><span>ทุน 1M ฿</span><span>เบี้ย 24K ฿</span></span>
                    </div>
                  </div>
                </Collapse>
                <div className="hdb-group">
                  <div className="hdb-type hdb-type--health"><Activity size={16} strokeWidth={2} />สุขภาพ<span>0 ฿</span></div>
                  <div className="hdb-policy">
                    <b>สุขภาพเหมาจ่าย</b>
                    <small>บริษัทประกันตัวอย่าง จำกัด · SP-2566-004120</small>
                    <span className="hdb-policy__nums"><span>ทุน 0 ฿</span><span>เบี้ย 18.5K ฿</span></span>
                  </div>
                </div>
                <div className="hdb-total">
                  <span>เบี้ยรวม/ปี</span>
                  <b><Count value={s.total} /> ฿</b>
                </div>
              </div>
              <div className="hdb-form" aria-hidden>
                {[0, 1, 2, 3].map((r) => (
                  <div key={r} className="hdb-form__row">
                    {[0, 1, 2].map((c) => (
                      <span key={c} className="hdb-field">
                        <Bar w={40 + ((r * 3 + c) % 4) * 12} h={6} r={3} tone={2} />
                        <span className="hdb-field__box"><Bar w={60 + ((r + c) % 3) * 24} h={7} r={3} tone={1} /></span>
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </AppWindow>

          {/* The assistant panel, over the form beside the list */}
          <div className="hdb-panel">
            <div className="hdb-panel__head"><Sparkles size={15} strokeWidth={1.75} />ผู้ช่วย AI</div>
            <div className="hdb-panel__body">
              <div className="sp1-thread">
                <Ask sent={s.sent} text={ASK} />
                <Steps phase={s.card ? 'idle' : s.phase} />
                <Collapse open={s.card} reveal="drop">
                  <ConfirmCard
                    title="ยืนยันการสร้างกรมธรรม์"
                    sub={<><FileText size={12} strokeWidth={2} />อ่านจาก {FILE}</>}
                    save={s.save}
                    verb={{ idle: 'ยืนยันสร้าง', busy: 'กำลังสร้าง', done: 'สร้างแล้ว', saved: 'เพิ่มในแฟ้มคุณกานต์แล้ว' }}
                  >
                    {ROWS.map((r, i) => (
                      <div key={r.label} className="sp-row" data-kind={r.kind} data-on={i < s.rows || undefined}>
                        <span className="sp-row__label">{r.label}</span>
                        <span className="sp-row__value">{r.value}</span>
                        {r.kind && <span className="sp-tag sp-tag--missing">ตรวจเพิ่ม</span>}
                      </div>
                    ))}
                  </ConfirmCard>
                </Collapse>
              </div>
              <Composer draft={s.draft} attached={s.attached} focused={!s.sent} />
            </div>
          </div>
        </>
      )}
    </Stage>
  )
}
