import type { CSSProperties, ReactNode } from 'react'
import { CalendarDays, ChartNoAxesColumn, CircleUserRound, Settings, Sparkles, TrendingUp, Users } from 'lucide-react'
import { Avatar, Window } from '../stageshow'
import '../ai-demo/sp.css'
import './home.css'

// Solid Plan as it runs in the browser: the icon rail the app draws (its own
// Lucide icons, the sparkle is the app's ผู้ช่วย AI icon), then one white panel
// on the gray canvas. Shared by the home page's demos.

const RAIL = [
  { key: 'ai', label: 'ผู้ช่วย AI', Icon: Sparkles },
  { key: 'customers', label: 'ลูกค้า', Icon: Users },
  { key: 'calendar', label: 'ปฏิทิน', Icon: CalendarDays },
  { key: 'team', label: 'ทีมงาน', Icon: CircleUserRound },
  { key: 'sales', label: 'ยอดขาย', Icon: TrendingUp },
  { key: 'reports', label: 'รายงาน', Icon: ChartNoAxesColumn },
  { key: 'settings', label: 'ตั้งค่า', Icon: Settings },
] as const

export type RailKey = (typeof RAIL)[number]['key']

export function AppWindow({ active, className, style, children }: { active: RailKey; className?: string; style?: CSSProperties; children: ReactNode }) {
  return (
    <Window url="app.solidplan.ai" urlShape="pill" className={`hd-win${className ? ` ${className}` : ''}`} style={style} body={{ className: 'hd-body' }}>
      <div className="hd-app">
        <aside className="hd-rail">
          <img className="hd-logo" src="/brand/logo-192.png" width={26} height={26} alt="" />
          <nav className="hd-rail__menu">
            {RAIL.map(({ key, label, Icon }) => (
              <span key={key} className="hd-rail__item" data-on={key === active || undefined}>
                <Icon size={18} strokeWidth={1.75} />
                {label}
              </span>
            ))}
          </nav>
          <Avatar name="สุดา" size={30} className="hd-rail__me" />
        </aside>
        <div className="hd-main">{children}</div>
      </div>
    </Window>
  )
}
