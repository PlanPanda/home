import type { ReactNode } from 'react'
import { Plus, Search, Sparkles } from 'lucide-react'
import { Avatar, Bar, Collapse, Count } from '../stageshow'

// The customers page as the app draws it (ลูกค้า: search, the add button, the
// filter tabs, one row per person with their tags), and the assistant panel
// that sits over its right side. Shared by the home page's demos.

export type Person = {
  nick: string
  full: string
  tags?: { label: string; tone: 'vip' | 'family' | 'work' | 'lead' }[]
  note: number[]
}

export const PEOPLE: Person[] = [
  { nick: 'วิชัย', full: 'วิชัย ศรีสุข', tags: [{ label: 'VIP', tone: 'vip' }], note: [86, 54] },
  { nick: 'กานต์', full: 'กานต์ พูนสุข', tags: [{ label: 'ครอบครัว', tone: 'family' }], note: [78, 62] },
  { nick: 'นภา', full: 'นภา ใจดี', tags: [{ label: 'เพื่อนทำงาน', tone: 'work' }], note: [92, 40] },
  { nick: 'ธนา', full: 'ธนา มั่นคง', tags: [{ label: 'VIP', tone: 'vip' }], note: [70, 58] },
  { nick: '', full: '', note: [88, 46] },
  { nick: '', full: '', note: [74, 60] },
  { nick: '', full: '', note: [82, 50] },
]

export function PersonRow({ p, state }: { p: Person; state?: 'selected' | 'marked' | 'fresh' }) {
  const real = !!p.nick
  return (
    <div className="hdl-row" data-state={state}>
      {real ? <Avatar name={p.nick} size={36} /> : <Avatar plain size={36} />}
      <span className="hdl-who">
        {real ? <b>{p.nick}</b> : <Bar w={56} h={8} r={4} tone={3} />}
        {real ? <small>{p.full}</small> : <Bar w={84} h={6} r={3} tone={2} />}
      </span>
      <span className="hdl-note">
        <Bar w={`${p.note[0]}%`} h={7} r={3} tone={2} />
        {p.tags ? (
          <span className="hdl-tags">{p.tags.map((t) => <span key={t.label} className={`hdl-tag hdl-tag--${t.tone}`}>{t.label}</span>)}</span>
        ) : (
          <Bar w={`${p.note[1]}%`} h={7} r={3} tone={1} />
        )}
      </span>
    </div>
  )
}

/** The customers list; `fresh` opens a new person at the top. */
export function CustomerList({ total, fresh, state }: { total: number; fresh?: { person: Person; open: boolean; lit: boolean }; state?: (i: number) => 'selected' | 'marked' | undefined }) {
  return (
    <div className="hdl">
      <div className="hdl-top">
        <span className="hdl-title">ลูกค้า</span>
        <span className="hdl-search"><Search size={16} strokeWidth={1.75} />ค้นหาชื่อ</span>
        <span className="hdl-add"><Plus size={16} strokeWidth={2} />เพิ่มผู้มุ่งหวัง</span>
      </div>
      <div className="hdl-filters">
        <span data-on>ทั้งหมด<span className="hdl-badge"><Count value={total} /></span></span>
        <span>ผู้มุ่งหวัง<span className="hdl-badge">16</span></span>
        <span>ลูกค้า<span className="hdl-badge">16</span></span>
      </div>
      <div className="hdl-rows">
        {fresh && (
          <Collapse open={fresh.open} reveal="drop">
            <PersonRow p={fresh.person} state={fresh.lit ? 'fresh' : undefined} />
          </Collapse>
        )}
        {PEOPLE.map((p, i) => <PersonRow key={i} p={p} state={state?.(i)} />)}
      </div>
    </div>
  )
}

/** The assistant panel over the page's right side: its head, a thread, the composer. */
export function AssistantPanel({ children }: { children: ReactNode }) {
  return (
    <div className="hdb-panel">
      <div className="hdb-panel__head"><Sparkles size={15} strokeWidth={1.75} />ผู้ช่วย AI</div>
      <div className="hdb-panel__body">{children}</div>
    </div>
  )
}
