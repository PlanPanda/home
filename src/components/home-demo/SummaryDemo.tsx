import { Collapse, Stage, Stream, type Act } from '../stageshow'
import { Ask, Composer, Steps } from '../ai-demo/parts'
import { AppWindow } from './frame'
import { AssistantPanel, CustomerList } from './customers'

// Home · สรุปลูกค้า. The customers list with the assistant over its right
// side. The agent asks for a summary before a meeting; as the mascot searches,
// คุณกานต์'s row is selected in the list behind; the answer is written in the
// app's own style, her policies and last contact as a list with the values
// bold; the records it read arrive last as sources. Nothing is written.
//
// Real strings: the list's chrome and four people, the ask, the answer, the sources.

const ASK = 'สรุปคุณกานต์ให้หน่อย บ่ายนี้จะเข้าพบ'
const INTRO = 'สรุปคุณกานต์ พูนสุข ก่อนเข้าพบค่ะ'
const LIST = [
  { label: 'ตลอดชีพ', value: 'เบี้ย 24,000 บาท/ปี' },
  { label: 'สุขภาพ', value: 'เบี้ย 18,500 บาท/ปี' },
  { label: 'คุยล่าสุด 3 ต.ค.', value: 'สนใจเพิ่มความคุ้มครองโรคร้ายแรง' },
]
const SOURCES = ['ข้อมูลลูกค้า', 'กรมธรรม์ 2 รายการ', 'บันทึก 4 รายการ']
const words = (t: string) => t.split(' ').length

type S = { draft: string; sent: boolean; phase: 'idle' | 'reading' | 'done'; found: boolean; answer: boolean; intro: number; items: number; sources: boolean }

const initial: S = { draft: '', sent: false, phase: 'idle', found: false, answer: false, intro: 0, items: 0, sources: false }
const poster: S = { draft: '', sent: true, phase: 'done', found: true, answer: true, intro: words(INTRO), items: LIST.length, sources: true }

async function script(a: Act<S>) {
  await a.wait(600)
  a.mark('type')
  await a.type('draft', ASK, { interval: 45 })
  await a.wait(300)
  await a.click({ at: 'send' })
  a.put({ sent: true, draft: '' })
  await a.wait(500)
  a.mark('search')
  a.put({ phase: 'reading' })
  await a.wait(800)
  a.put({ found: true })
  await a.wait(1000)
  a.put({ phase: 'done', answer: true })
  a.mark('answer')
  for (let i = 1; i <= words(INTRO); i++) { a.put({ intro: i }); await a.wait(90) }
  for (let i = 1; i <= LIST.length; i++) { a.put({ items: i }); await a.wait(340) }
  await a.wait(300)
  a.mark('sources')
  a.put({ sources: true })
  await a.move({ wide: { x: 900, y: 530 }, compact: { x: 320, y: 530 } })
  await a.wait(3200)
}

export default function SummaryDemo() {
  return (
    <Stage width={960} height={560} compact={{ below: 640, width: 358, height: 560 }} initial={initial} poster={poster} script={script} play="once" cursor={{ at: { wide: { x: 900, y: 530 }, compact: { x: 320, y: 530 } } }} className="sp sp1 hd hdb">
      {(s) => (
        <>
          <AppWindow active="customers" className="hdb-win">
            <CustomerList total={32} state={(i) => (i === 1 && s.found ? 'selected' : undefined)} />
          </AppWindow>
          <AssistantPanel>
            <div className="sp1-thread">
              <Ask sent={s.sent} text={ASK} file={false} />
              <Steps phase={s.phase} reading="กำลังค้นข้อมูลคุณกานต์" />
              <Collapse open={s.answer}>
                <div className="sp-answer">
                  <Stream className="sp-p" text={INTRO} count={s.intro} />
                  <ul className="sp-list">
                    {LIST.map((f, i) => <li key={f.label} data-on={i < s.items || undefined}>{f.label} <b>{f.value}</b></li>)}
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
      )}
    </Stage>
  )
}
