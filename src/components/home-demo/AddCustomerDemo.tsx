import { Check as Tick } from 'lucide-react'
import { Collapse, Stage, type Act } from '../stageshow'
import { Ask, Composer, ConfirmCard, Steps, type Save } from '../ai-demo/parts'
import { AppWindow } from './frame'
import { AssistantPanel, CustomerList, type Person } from './customers'

// Home · เพิ่มลูกค้า. The customers list with the assistant over its right
// side. The agent says, in one line, who to add and when they meet; the
// mascot checks for a duplicate; a review card; the agent confirms; the new
// person opens at the top of the list behind, lit for a moment, and the
// list's count rolls from 32 to 33.
//
// Real strings: the list's chrome and people, the ask, the card. The phone
// number is fictional.

const ASK = 'เพิ่มคุณมาลี 081-555-0142 นัดพฤหัส 14:00'
const ROWS = [
  { label: 'ชื่อ', value: 'คุณมาลี' },
  { label: 'โทรศัพท์', value: '081-555-0142' },
  { label: 'นัดหมาย', value: 'พฤหัสบดี 14:00' },
]
const MALEE: Person = { nick: 'มาลี', full: '081-555-0142', tags: [{ label: 'ผู้มุ่งหวัง', tone: 'lead' }], note: [64, 0] }

type S = { draft: string; sent: boolean; phase: 'idle' | 'reading' | 'done'; card: boolean; rows: number; save: Save; added: boolean; lit: boolean; total: number }

const initial: S = { draft: '', sent: false, phase: 'idle', card: false, rows: 0, save: 'idle', added: false, lit: false, total: 32 }
const poster: S = { draft: '', sent: true, phase: 'done', card: true, rows: ROWS.length, save: 'done', added: true, lit: false, total: 33 }

async function script(a: Act<S>) {
  await a.wait(600)
  a.mark('type')
  await a.type('draft', ASK, { interval: 40 })
  await a.wait(300)
  await a.click({ at: 'send' })
  a.put({ sent: true, draft: '' })
  await a.wait(500)
  a.mark('check')
  a.put({ phase: 'reading' })
  await a.wait(1500)
  a.put({ phase: 'done', card: true })
  await a.wait(400)
  for (let i = 1; i <= ROWS.length; i++) { a.put({ rows: i }); await a.wait(220) }
  await a.wait(1100)
  a.mark('confirm')
  await a.click({ at: 'confirm', x: 0.5, y: 0.55 })
  a.put({ save: 'busy' })
  await a.wait(900)
  a.mark('add')
  a.put({ save: 'done', added: true, lit: true })
  await a.wait(600)
  a.put({ total: 33 })
  await a.move({ wide: { x: 900, y: 530 }, compact: { x: 320, y: 530 } })
  await a.wait(1600)
  a.put({ lit: false })
  await a.wait(1800)
}

export default function AddCustomerDemo() {
  return (
    <Stage width={960} height={560} compact={{ below: 640, width: 358, height: 560 }} initial={initial} poster={poster} script={script} play="once" cursor={{ at: { wide: { x: 900, y: 530 }, compact: { x: 320, y: 530 } } }} className="sp sp1 hd hdb">
      {(s) => (
        <>
          <AppWindow active="customers" className="hdb-win">
            <CustomerList total={s.total} fresh={{ person: MALEE, open: s.added, lit: s.lit }} />
          </AppWindow>
          <AssistantPanel>
            <div className="sp1-thread">
              <Ask sent={s.sent} text={ASK} file={false} />
              <Steps phase={s.card ? 'idle' : s.phase} reading="กำลังตรวจรายชื่อซ้ำ" />
              <Collapse open={s.card} reveal="drop">
                <ConfirmCard
                  title="ยืนยันการสร้างลูกค้าใหม่"
                  sub={<span className="hd-ok"><Tick size={12} strokeWidth={2.2} />ไม่พบชื่อซ้ำในระบบ</span>}
                  save={s.save}
                  verb={{ idle: 'ยืนยันสร้าง', busy: 'กำลังสร้าง', done: 'สร้างแล้ว', saved: 'เพิ่มลูกค้าและนัดหมายแล้ว' }}
                >
                  {ROWS.map((r, i) => (
                    <div key={r.label} className="sp-row" data-on={i < s.rows || undefined}>
                      <span className="sp-row__label">{r.label}</span>
                      <span className="sp-row__value">{r.value}</span>
                    </div>
                  ))}
                </ConfirmCard>
              </Collapse>
            </div>
            <Composer draft={s.draft} focused={!s.sent} />
          </AssistantPanel>
        </>
      )}
    </Stage>
  )
}
