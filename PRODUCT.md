# Design Context

### Users
Thai life insurance agents managing customers, appointments, and team. Use the app on iPad (primary) and desktop while on the go — meeting clients, reviewing profiles, logging activities. They need speed, clarity, and trust. The interface must feel like a premium tool they rely on daily, not a toy or a chore.

### Brand Personality
Modern, sharp, professional. Three words: **refined, purposeful, trustworthy.**

The agent should feel like they're using a high-end CRM that respects their time and expertise. Clean surfaces, intentional color, no decorative noise. Think Salesforce density meets Apple Notes restraint.

**Emotional goal**: Agents should feel this is the new standard — modern, sharp, ahead of the curve.

### Aesthetic Direction
- **Visual tone**: Refined minimal — data-dense but breathable. White space earned, not wasted.
- **References**: Salesforce/HubSpot for information architecture and data density; Apple Notes/Bear for restraint and typographic calm.
- **Anti-references**: Information overload — too much content competing for attention, no clear visual hierarchy. Generic SaaS dashboards. Clunky enterprise software.
- **Theme**: Light mode default (cream canvas #fffaf0). No dark mode yet.
- **Accent**: `#ff4d8b` (brand-pink) — used sparingly for primary actions, selections, and brand moments.
- **Font**: Inter + Sarabun (Thai-first). Never replace with generic sans-serif.
- **Platform**: iPad-first design, desktop for landing page.

### Design Tokens (Clay-inspired)
- **Canvas**: `#fffaf0` (warm cream) — the warm tint differentiates from cool-gray competitors
- **Brand palette**: Pink `#ff4d8b`, Teal `#1a3a3a`, Lavender `#b8a4ed`, Peach `#ffb084`, Ochre `#e8b94a`, Mint `#a4d4c5`
- **Surfaces**: Soft `#faf5e8`, Card `#f5f0e0`, Strong `#ebe6d6`
- **Text**: Ink `#0a0a0a`, Body `#3a3a3a`, Muted `#6a6a6a`
- **Radius**: xs 6px → sm 8px → md 12px → lg 16px → xl 24px → pill 9999px
- **Spacing**: 4px grid. Section rhythm 96px between major bands.
- **Feature cards**: xl radius (24px) with saturated brand-color fills, no shadows
- **Buttons**: md radius (12px), dark primary CTAs on cream canvas

### Design Principles

1. **Purposeful density** — Show what agents need, hide what they don't. Every pixel earns its place. Data-dense without feeling cluttered.
2. **Sharp confidence** — The UI feels modern and cutting-edge. Muted surfaces with one strong accent, clear hierarchy. Agents should feel ahead of the curve, not overwhelmed.
3. **Thai-first** — All text in Thai. Sarabun font. Layouts must handle Thai text lengths and character forms correctly. No assumptions from English-centric design.
4. **iPad-first** — Primary target is iPad. Tap targets 44px minimum, spacing and interaction patterns must work for touch. No hover-dependent workflows.
5. **Professional restraint** — No decorative gradients, no glassmorphism, no gratuitous animations. Polish through precision, not effects.
6. **Cream canvas warmth** — The warm cream (#fffaf0) base is non-negotiable. It differentiates Solid Plan from cold, clinical SaaS competitors. No cool grays.
