import { Bar, Stage, Stream, Collapse, type Act } from '../stageshow'
import { Ask, ChatShell, Composer, Steps } from './parts'

// "ถามข้อมูลก่อนเข้าพบลูกค้า". Beats: the agent asks for a summary before
// a meeting; the mascot searches the customer's records; the answer is
// written in the app's own style, the policies and last contact as a list
// with the values bold; the records it read arrive last as sources. No
// confirm: nothing is written, the answer is the payoff.
//
// Real strings: the ask, the answer, the three sources.

const ASK = 'สรุปคุณกานต์ให้หน่อย บ่ายนี้จะเข้าพบ'
const INTRO = 'คุณกานต์ พูนสุข มีกรมธรรม์ 2 ฉบับค่ะ'
const LIST = [
  { label: 'ตลอดชีพ', value: 'เบี้ย 24,000 บาท / ปี' },
  { label: 'สุขภาพ', value: 'เบี้ย 18,500 บาท / ปี' },
  { label: 'คุยล่าสุด', value: 'สนใจเพิ่มความคุ้มครองโรคร้ายแรง' },
]
const NOTE = 'นัดนี้เหมาะจะนำแผนโรคร้ายแรงไปคุยต่อค่ะ'
const SOURCES = ['ข้อมูลลูกค้า', 'กรมธรรม์ 2 รายการ', 'บันทึกการติดต่อ']
const words = (t: string) => t.split(' ').length

type S = { draft: string; sent: boolean; phase: 'idle' | 'reading' | 'done'; answer: boolean; intro: number; items: number; note: number; sources: boolean }

const initial: S = { draft: '', sent: false, phase: 'idle', answer: false, intro: 0, items: 0, note: 0, sources: false }
const poster: S = { draft: '', sent: true, phase: 'done', answer: true, intro: words(INTRO), items: LIST.length, note: words(NOTE), sources: true }

async function script(a: Act<S>) {
  await a.wait(700)
  a.mark('type')
  await a.type('draft', ASK, { interval: 45 })
  await a.wait(350)
  a.mark('send')
  await a.click({ at: 'send' })
  a.put({ sent: true, draft: '' })
  await a.wait(500)
  a.mark('search')
  a.put({ phase: 'reading' })
  await a.wait(1700)
  a.put({ phase: 'done' })
  await a.wait(250)
  a.mark('answer')
  a.put({ answer: true })
  for (let i = 1; i <= words(INTRO); i++) { a.put({ intro: i }); await a.wait(80) }
  for (let i = 1; i <= LIST.length; i++) { a.put({ items: i }); await a.wait(320) }
  for (let i = 1; i <= words(NOTE); i++) { a.put({ note: i }); await a.wait(80) }
  await a.wait(350)
  a.mark('sources')
  a.put({ sources: true })
  await a.move({ wide: { x: 470, y: 470 }, compact: { x: 300, y: 505 } })
  await a.wait(3000)
}

export default function MeetingPrepDemo() {
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
              <Bar w={150} h={30} r={15} tone={1} className="sp1-past-q" />
              <Bar w="80%" h={8} r={4} tone={2} />
              <Bar w="64%" h={8} r={4} tone={2} />
              <Bar w="42%" h={8} r={4} tone={2} />
            </div>
            <Ask sent={s.sent} text={ASK} file={false} />
            <Steps phase={s.phase} reading="กำลังค้นข้อมูลคุณกานต์" done="ขั้นตอนเสร็จแล้ว · 3 ขั้นตอน" />
            <Collapse open={s.answer}>
              <div className="sp-answer">
                <Stream className="sp-p" text={INTRO} count={s.intro} />
                <ul className="sp-list">
                  {LIST.map((f, i) => (
                    <li key={f.label} data-on={i < s.items || undefined}>
                      {f.label} <b>{f.value}</b>
                    </li>
                  ))}
                </ul>
                <Stream className="sp-p" text={NOTE} count={s.note} />
                <div className="sp-sources" data-on={s.sources || undefined}>
                  {SOURCES.map((t) => <span key={t} className="sp-source">{t}</span>)}
                </div>
              </div>
            </Collapse>
          </div>
          <Composer draft={s.draft} focused={!s.sent} />
        </ChatShell>
      )}
    </Stage>
  )
}
