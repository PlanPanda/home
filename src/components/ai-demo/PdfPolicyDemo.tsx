import { Bar, Collapse, Stage, type Act } from '../stageshow'
import { ASK, Ask, ChatShell, Composer, FIELDS, PolicyCard, Steps, type Save } from './parts'

// Study 1 — "the review card". Solid Plan's ผู้ช่วย AI window. Beats: a policy
// PDF already sits in the composer; the ask is typed and sent; the mascot
// reads the file; the steps line settles; a review card opens in the thread,
// its rows arriving one by one (read, missing, default); the agent confirms
// on the card's own button. Plays once; the still is the payoff.
//
// Real strings: the file, the ask, the steps line, the card's rows, the button.

type S = { draft: string; attached: boolean; sent: boolean; phase: 'idle' | 'reading' | 'done'; card: boolean; rows: number; save: Save }

const initial: S = { draft: '', attached: true, sent: false, phase: 'idle', card: false, rows: 0, save: 'idle' }
const poster: S = { draft: '', attached: false, sent: true, phase: 'done', card: true, rows: FIELDS.length, save: 'done' }

async function script(a: Act<S>) {
  await a.wait(700)
  a.mark('type')
  await a.type('draft', ASK, { interval: 45 })
  await a.wait(350)
  a.mark('send')
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
  await a.wait(450)
  for (let i = 1; i <= FIELDS.length; i++) {
    a.put({ rows: i })
    await a.wait(i >= FIELDS.length - 1 ? 420 : 220)
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

export default function SpPdfOne() {
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
      {(s, _rect, layout) => {
        const chat = (
          <>
            <div className="sp1-thread">
              {/* An earlier turn as placeholder: it goes up out of view */}
              <div className="sp1-past">
                <Bar w={170} h={30} r={15} tone={1} className="sp1-past-q" />
                <Bar w="84%" h={8} r={4} tone={2} />
                <Bar w="58%" h={8} r={4} tone={2} />
              </div>
              <Ask sent={s.sent} />
              {/* The steps line closes as the card opens: the card names its file */}
              <Steps phase={s.card ? 'idle' : s.phase} />
              <Collapse open={s.card} reveal="drop">
                <PolicyCard rows={s.rows} save={s.save} />
              </Collapse>
            </div>
            <Composer draft={s.draft} attached={s.attached} focused={!s.sent} />
          </>
        )
        return <ChatShell layout={layout}>{chat}</ChatShell>
      }}
    </Stage>
  )
}
