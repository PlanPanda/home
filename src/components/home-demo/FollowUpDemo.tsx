import { Collapse, Stage, Stream, type Act } from '../stageshow'
import { Ask, Composer, Steps } from '../ai-demo/parts'
import { AppWindow } from './frame'
import { AssistantPanel, CustomerList } from './customers'

// Home · ใครควรติดตาม. The customers list with the assistant over its right
// side. The agent asks who to follow up this week; the mascot reads the
// contact history; the answer lists three people with the reason for each,
// and as each one is written their row in the list behind is marked. The
// sources arrive last. Nothing is written.
//
// Real strings: the list's chrome and people, the ask, the answer, the sources.

const ASK = 'สัปดาห์นี้ลูกค้าคนไหนควรติดตามบ้าง?'
const INTRO = 'พบ 3 รายที่ควรติดตามสัปดาห์นี้ค่ะ'
const LIST = [
  { row: 0, label: 'คุณวิชัย', value: 'ส่งใบเสนอราคาไป 5 วัน ยังไม่ตอบ' },
  { row: 2, label: 'คุณนภา', value: 'ครบชำระเบี้ย 20 ต.ค.' },
  { row: 3, label: 'คุณธนา', value: 'นัดเยี่ยมหลังเรื่องเคลมเสร็จ' },
]
const SOURCES = ['วันครบชำระ', 'นัดหมาย', 'ประวัติการติดต่อ']
const words = (t: string) => t.split(' ').length

type S = { draft: string; sent: boolean; phase: 'idle' | 'reading' | 'done'; answer: boolean; intro: number; items: number; sources: boolean }

const initial: S = { draft: '', sent: false, phase: 'idle', answer: false, intro: 0, items: 0, sources: false }
const poster: S = { draft: '', sent: true, phase: 'done', answer: true, intro: words(INTRO), items: LIST.length, sources: true }

async function script(a: Act<S>) {
  await a.wait(600)
  a.mark('type')
  await a.type('draft', ASK, { interval: 45 })
  await a.wait(300)
  await a.click({ at: 'send' })
  a.put({ sent: true, draft: '' })
  await a.wait(500)
  a.mark('read')
  a.put({ phase: 'reading' })
  await a.wait(1800)
  a.put({ phase: 'done', answer: true })
  a.mark('answer')
  for (let i = 1; i <= words(INTRO); i++) { a.put({ intro: i }); await a.wait(90) }
  for (let i = 1; i <= LIST.length; i++) { a.put({ items: i }); await a.wait(520) }
  await a.wait(200)
  a.mark('sources')
  a.put({ sources: true })
  await a.move({ wide: { x: 900, y: 530 }, compact: { x: 320, y: 530 } })
  await a.wait(3200)
}

export default function FollowUpDemo() {
  return (
    <Stage width={960} height={560} compact={{ below: 640, width: 358, height: 560 }} initial={initial} poster={poster} script={script} play="once" cursor={{ at: { wide: { x: 900, y: 530 }, compact: { x: 320, y: 530 } } }} className="sp sp1 hd hdb">
      {(s) => {
        const marked = new Set(LIST.slice(0, s.items).map((l) => l.row))
        return (
          <>
            <AppWindow active="customers" className="hdb-win">
              <CustomerList total={32} state={(i) => (marked.has(i) ? 'marked' : undefined)} />
            </AppWindow>
            <AssistantPanel>
              <div className="sp1-thread">
                <Ask sent={s.sent} text={ASK} file={false} />
                <Steps phase={s.phase} reading="กำลังดูประวัติการติดต่อ" />
                <Collapse open={s.answer}>
                  <div className="sp-answer">
                    <Stream className="sp-p" text={INTRO} count={s.intro} />
                    <ul className="sp-list">
                      {LIST.map((f, i) => <li key={f.label} data-on={i < s.items || undefined}><b>{f.label}</b> {f.value}</li>)}
                    </ul>
                    <div className="sp-sources" data-on={s.sources || undefined}>
                      {SOURCES.map((t) => <span key={t} className="sp-source">{t}</span>)}
                    </div>
                  </div>
                </Collapse>
              </div>
              <Composer draft={s.draft} focused={!s.sent} />
            </AssistantPanel>
          </>
        )
      }}
    </Stage>
  )
}
