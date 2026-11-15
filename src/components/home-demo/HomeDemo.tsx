import { useEffect, useRef, useState, type ComponentType } from 'react'
import UploadB from './UploadB'
import SummaryDemo from './SummaryDemo'
import AddCustomerDemo from './AddCustomerDemo'
import FollowUpDemo from './FollowUpDemo'

// The home hero's demo: four short scenes and the bar under them. Scenes
// advance on their own while the hero is in view; picking a tab or pressing
// pause stops that. The bar keeps the page's existing classes (ref-scenarios,
// demo-toggle, demo-countdown), so it looks as it did before.

const SCENES: { key: string; label: string; Scene: ComponentType; ms: number }[] = [
  { key: 'upload', label: 'อัปโหลดกรมธรรม์', Scene: UploadB, ms: 16500 },
  { key: 'summary', label: 'สรุปลูกค้า', Scene: SummaryDemo, ms: 15000 },
  { key: 'add', label: 'เพิ่มลูกค้า', Scene: AddCustomerDemo, ms: 16500 },
  { key: 'follow', label: 'ใครควรติดตาม', Scene: FollowUpDemo, ms: 15000 },
]

export default function HomeDemo() {
  const [active, setActive] = useState(0)
  const [auto, setAuto] = useState(true)
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setAuto(false)
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setInView(!!e?.isIntersecting), { threshold: 0.35 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const running = auto && inView
  useEffect(() => {
    if (!running) return
    const t = window.setTimeout(() => setActive((i) => (i + 1) % SCENES.length), SCENES[active]!.ms)
    return () => window.clearTimeout(t)
  }, [running, active])

  const { Scene } = SCENES[active]!
  return (
    <div ref={ref}>
      <Scene key={active} />
      <div className="demo-toolbar">
        <button
          className="demo-toggle"
          type="button"
          aria-pressed={auto}
          aria-label={auto ? 'หยุดเล่นอัตโนมัติ' : 'เล่นอัตโนมัติ'}
          title={auto ? 'หยุดเล่นอัตโนมัติ' : 'เล่นอัตโนมัติ'}
          onClick={() => setAuto((a) => !a)}
        >
          <svg className="demo-icon pause" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5v14M15 5v14" /></svg>
          <svg className="demo-icon play" viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7z" /></svg>
        </button>
        <div className="ref-scenarios" aria-label="เลือกตัวอย่างการใช้งาน">
          {SCENES.map((s, i) => (
            <button key={s.key} type="button" aria-pressed={i === active} onClick={() => { setAuto(false); setActive(i) }}>
              <span>{s.label}</span>
            </button>
          ))}
        </div>
        <span
          key={`${active}-${running}`}
          className={`demo-countdown${running ? ' is-running' : ''}`}
          style={{ ['--scenario-duration' as string]: `${SCENES[active]!.ms}ms` }}
          aria-hidden="true"
        >
          <i />
        </span>
      </div>
    </div>
  )
}
