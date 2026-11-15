import { Check as Tick, FileText, Plus, ArrowUp } from 'lucide-react'
import { Button, Check, Collapse, Field, States, Text } from '../stageshow'
import './sp.css'

// Shared pieces for the three "จาก PDF สู่ข้อมูลกรมธรรม์" studies, drawn after
// Solid Plan's own ผู้ช่วย AI screen: a pale blue bubble for the person, the
// steps line, the blue mascot while it works, a rounded composer.

export const FILE = 'กรมธรรม์_กานต์.pdf'
export const ASK = 'เพิ่มกรมธรรม์ให้คุณกานต์จากไฟล์นี้'

// kind: read from the file, missing from it, or the system's default
export type Kind = 'read' | 'missing' | 'default'
export const FIELDS: { label: string; value: string; kind: Kind }[] = [
  { label: 'แบบประกัน', value: 'ตลอดชีพ ชำระเบี้ย 20 ปี', kind: 'read' },
  { label: 'ทุนประกัน', value: '1,000,000 บาท', kind: 'read' },
  { label: 'เบี้ยประกัน', value: '24,000 บาท / ปี', kind: 'read' },
  { label: 'วันเริ่มสัญญา', value: '18 ก.ย. 2569', kind: 'read' },
  { label: 'สัญญาเพิ่มเติม', value: 'ไม่พบในเอกสาร', kind: 'missing' },
  { label: 'งวดชำระ', value: 'รายปี', kind: 'default' },
]

export function Pdf({ size = 'md', className }: { size?: 'sm' | 'md'; className?: string }) {
  return (
    <span className={`sp-pdf sp-pdf--${size}${className ? ` ${className}` : ''}`}>
      <span className="sp-pdf__icon"><FileText size={size === 'sm' ? 14 : 16} strokeWidth={2} /></span>
      <span className="sp-pdf__main">
        <span className="sp-pdf__name">{FILE}</span>
        <span className="sp-pdf__meta">PDF · 4 หน้า</span>
      </span>
    </span>
  )
}

/** The person's turn: the file, then the ask, right-aligned. */
export function Ask({ sent }: { sent: boolean }) {
  return (
    <Collapse open={sent} reveal="drop" from="below">
      <div className="sp-ask">
        <Pdf />
        <Text className="sp-bubble">{ASK}</Text>
      </div>
    </Collapse>
  )
}

/** The mascot while it reads, then the product's steps line. One line, two states. */
export function Steps({ phase }: { phase: 'idle' | 'reading' | 'done' }) {
  return (
    <Collapse open={phase !== 'idle'}>
      <div className="sp-steps">
        <States
          value={phase === 'done' ? 'done' : 'reading'}
          align="start"
          states={{
            reading: <span className="sp-steps__line"><span className="sp-mascot" />กำลังอ่านไฟล์กรมธรรม์</span>,
            done: <span className="sp-steps__line sp-steps__line--done"><Tick size={14} strokeWidth={2.2} />ขั้นตอนเสร็จแล้ว · 2 ขั้นตอน</span>,
          }}
        />
      </div>
    </Collapse>
  )
}

export function Composer({ draft, attached, focused }: { draft: string; attached: boolean; focused: boolean }) {
  return (
    <div className="sp-composer">
      <Collapse open={attached}>
        <div className="sp-composer__files"><Pdf size="sm" /></div>
      </Collapse>
      <Field
        className="sp-composer__field"
        value={draft}
        placeholder="ถามผู้ช่วย AI..."
        focused={focused}
        leading={<span className="sp-round sp-round--plus"><Plus size={16} strokeWidth={2} /></span>}
        trailing={
          <span className="sp-round sp-round--send" data-target="send" data-cursor="pointer" data-ready={draft ? '' : undefined}>
            <ArrowUp size={16} strokeWidth={2.2} />
          </span>
        }
      />
    </div>
  )
}

export type Save = 'idle' | 'busy' | 'done'

/** The review card: rows arrive one by one, then it's confirmed on its own button. */
export function PolicyCard({ rows, save, mark }: { rows: number; save: Save; mark?: (i: number) => Record<string, unknown> }) {
  return (
    <div className="sp-card">
      <div className="sp-card__head">
        <span>
          <span className="sp-card__title">ยืนยันการสร้างกรมธรรม์</span>
          <span className="sp-card__src"><FileText size={12} strokeWidth={2} />อ่านจาก {FILE}</span>
        </span>
        <span className="sp-card__who">คุณกานต์ พูนสุข</span>
      </div>
      <div className="sp-card__rows">
        {FIELDS.map((f, i) => (
          <div key={f.label} className="sp-row" data-kind={f.kind} data-on={i < rows || undefined} {...mark?.(i)}>
            <span className="sp-row__label">{f.label}</span>
            <span className="sp-row__value">{f.value}</span>
            <KindTag kind={f.kind} />
          </div>
        ))}
      </div>
      <div className="sp-card__foot">
        <States
          className="sp-card__note"
          align="start"
          value={save === 'done' ? 'done' : 'idle'}
          states={{ idle: 'รอคุณตรวจ · ยังไม่ได้บันทึก', done: <span className="sp-saved">บันทึกลงแฟ้มลูกค้าแล้ว</span> }}
        />
        <Button
          variant="primary"
          size="large"
          data-target="confirm"
          data-cursor="pointer"
          icon={save === 'idle' ? undefined : <Check on={save === 'done'} pending={save === 'busy'} size={14} />}
        >
          {save === 'done' ? 'สร้างแล้ว' : save === 'busy' ? 'กำลังสร้าง' : 'ยืนยันสร้าง'}
        </Button>
      </div>
    </div>
  )
}

export function KindTag({ kind }: { kind: Kind }) {
  if (kind === 'read') return null
  return <span className={`sp-tag sp-tag--${kind}`}>{kind === 'missing' ? 'ตรวจเพิ่ม' : 'ค่าเริ่มต้น'}</span>
}
