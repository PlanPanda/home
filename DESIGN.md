---
version: alpha
name: Solid Plan Marketing
description: A warm-off-white marketing system for Solid Plan. Confident near-black ink on a paper-warm canvas (#F9F8F6), a single high-voltage orange accent (#FF4800), and full-bleed saturated feature cards (lime, orange, sky, mint, blush, magenta, royal blue, forest) that punctuate long editorial scrolls. Display type is clean and confident in Sarabun (Thai-first, looped forms); dark navy (#081D34) and deep purple (#240642) bands carry the closing CTA. Built Thai-first for life-insurance agents.

colors:
  primary: "#000000"
  primary-active: "#181818"
  ink: "#000000"
  body: "#55534E"
  body-strong: "#181818"
  muted: "#9F9B93"
  muted-soft: "#85817A"
  canvas: "#F9F8F6"
  surface-soft: "#F3F2ED"
  surface-card: "#FFFFFF"
  surface-strong: "#F4F3F0"
  on-primary: "#FFFFFF"
  on-dark: "#FFFFFF"
  on-dark-soft: "#9F9B93"
  accent: "#FF4800"
  accent-soft: "#FF7614"
  dark-navy: "#081D34"
  dark-purple: "#240642"
  brand-lime: "#CBD810"
  brand-orange: "#FF7614"
  brand-sky: "#429DFF"
  brand-mint: "#3BD3FD"
  brand-blush: "#F8B9E3"
  brand-magenta: "#8B045C"
  brand-royal: "#0667D9"
  brand-forest: "#02693E"
  success: "#02693E"
  warning: "#FDAD15"
  error: "#FF3737"
  hairline: "#DAD4C8"
  hairline-cool: "#E6E8EC"

typography:
  display-2xl:
    fontFamily: "Sarabun, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 80px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -1px
  display-xl:
    fontFamily: "Sarabun, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 60px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.8px
  display-lg:
    fontFamily: "Sarabun, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.5px
  display-md:
    fontFamily: "Sarabun, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.3px
  title-lg:
    fontFamily: "Sarabun, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  title-md:
    fontFamily: "Sarabun, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: 0
  title-sm:
    fontFamily: "Sarabun, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  body-lg:
    fontFamily: "Sarabun, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-md:
    fontFamily: "Sarabun, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0
  body-sm:
    fontFamily: "Sarabun, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0
  body-xs:
    fontFamily: "Sarabun, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  label-md:
    fontFamily: "Sarabun, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  label-caps:
    fontFamily: "Sarabun, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 1px
  button:
    fontFamily: "Sarabun, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0
  nav-link:
    fontFamily: "Sarabun, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  band: 40px
  full: 9999px

spacing:
  base: 16px
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    height: 48px
    padding: 12px 20px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    height: 48px
    padding: 12px 20px
  button-toggle:
    backgroundColor: "#EFEFEF"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
  button-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
  text-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 64px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-2xl}"
    padding: 96px
  feature-card-lime:
    backgroundColor: "{colors.brand-lime}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.band}"
    padding: 32px
  feature-card-orange:
    backgroundColor: "{colors.brand-orange}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.band}"
    padding: 32px
  feature-card-sky:
    backgroundColor: "{colors.brand-sky}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.band}"
    padding: 32px
  feature-card-mint:
    backgroundColor: "{colors.brand-mint}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.band}"
    padding: 32px
  feature-card-blush:
    backgroundColor: "{colors.brand-blush}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.band}"
    padding: 32px
  feature-card-magenta:
    backgroundColor: "{colors.brand-magenta}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.band}"
    padding: 32px
  feature-card-royal:
    backgroundColor: "{colors.brand-royal}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.band}"
    padding: 32px
  feature-card-forest:
    backgroundColor: "{colors.brand-forest}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.band}"
    padding: 32px
  product-mockup-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: 24px
  testimonial-card:
    backgroundColor: "{colors.brand-lime}"
    textColor: "{colors.ink}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.band}"
    padding: 32px
  pricing-tier-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    rounded: "{rounded.md}"
    padding: 32px
  stat-pill:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-md}"
    rounded: "{rounded.band}"
    padding: 16px 24px
  dark-band-navy:
    backgroundColor: "{colors.dark-navy}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.band}"
    padding: 80px
  dark-band-purple:
    backgroundColor: "{colors.dark-purple}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.band}"
    padding: 80px
  badge-pill:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.ink}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: 80px
---

# Design System: Solid Plan Marketing

**Source:** Figma "Learn" file (`rdPgFdYei0fDUFOd90Z1wC`), nodes 130:2119, 130:249, 130:3172. This is the target visual language for the Solid Plan homepage.

## Overview

Solid Plan's homepage speaks like a modern data platform, not a clinical SaaS template. The base atmosphere is **paper-warm off-white** (`{colors.canvas}` — #F9F8F6) holding **near-black ink** type and a **single high-voltage orange accent** (`{colors.accent}` — #FF4800). Where competitor CRMs lean cool-gray and corporate, this system leans warm, editorial, and confident.

The dominant visual voltage comes from **full-bleed saturated feature cards**. Eight vivid fills — lime, orange, sky, mint, blush, magenta, royal blue, forest — each carry a product story, a testimonial, or a stat. The colored card IS the primary visual element on every long-scroll section. Cards are generously rounded (`{rounded.band}` — 40px), giving the page a soft, contemporary cadence against the sharp ink type.

Type voice runs **Sarabun** — a clean, well-behaved Thai-first typeface with looped (มีหัว) Thai forms for comfortable long-form reading. Display sizes (up to 80px hero) use weight 700 for confidence; body uses Regular (400) at 16px with generous line-height. Letter-spacing is eased toward 0 — Sarabun's Thai vowels and tone marks need room, so the aggressive negative tracking typical of Latin display type is avoided.

The closing rhythm is **dark and intimate**: navy (`{colors.dark-navy}` — #081D34) and deep purple (`{colors.dark-purple}` — #240642) bands replace the warm canvas to carry the final CTA, then the footer returns to canvas. This warm → dark → warm pacing is the page's emotional arc.

**Key Characteristics:**
- Paper-warm off-white canvas (`{colors.canvas}` — #F9F8F6). Warm but not cream — whiter than beige, warmer than gray. Differentiates from both cool-gray competitors and the previous cream system.
- Near-black ink primary CTAs and headlines (`{colors.primary}` — #000000). Buttons rounded `{rounded.md}` (12px) — friendly modern, not pill.
- Single orange accent (`{colors.accent}` — #FF4800) used sparingly — highlights, stats, link focus. Never a card background.
- 8-color saturated feature-card palette: `{colors.brand-lime}`, `{colors.brand-orange}`, `{colors.brand-sky}`, `{colors.brand-mint}`, `{colors.brand-blush}`, `{colors.brand-magenta}`, `{colors.brand-royal}`, `{colors.brand-forest}`.
- Sarabun at weight 700 for display, 600 for titles, 400 for body — the Thai-first brand voice. Letter-spacing eased toward 0 to protect Thai legibility.
- Generous radius: `{rounded.md}` (12px) buttons/inputs, `{rounded.xl}` (24px) mockups, `{rounded.band}` (40px) feature + testimonial cards.
- Full-bleed feature cards showing product UI fragments — enrichment tables, workflow canvases, CRM outputs — at small scale inside vivid fills.
- Section rhythm `{spacing.section}` (96px) between major bands.
- Dark navy + purple closing bands, then a canvas footer — warm throughout, no dark footer.

## Colors

### Brand & Accent
- **Primary / Ink** (`{colors.primary}` — #000000): All headlines, primary CTAs, and primary text. Pure near-black.
- **Accent** (`{colors.accent}` — #FF4800): The single voltage color. Highlights, stat figures, link focus, active states. Used sparingly as the most attention-demanding element per view.
- **Accent Soft** (`{colors.accent-soft}` — #FF7614): A warmer, slightly softer orange. Secondary feature card and illustration accent.

### Surface
- **Canvas** (`{colors.canvas}` — #F9F8F6): The default page floor. Paper-warm off-white.
- **Surface Card** (`{colors.surface-card}` — #FFFFFF): Pure white for mockup cards and pricing tiers — lifts content off the warm canvas.
- **Surface Soft** (`{colors.surface-soft}` — #F3F2ED): Tinted warm panel for secondary bands.
- **Surface Strong** (`{colors.surface-strong}` — #F4F3F0): Slightly deeper tint for badges and pills.
- **Dark Navy** (`{colors.dark-navy}` — #081D34): Deep blue-black for closing CTA bands and dark feature cards.
- **Dark Purple** (`{colors.dark-purple}` — #240642): Deep indigo-violet for alternate dark bands.
- **Hairline** (`{colors.hairline}` — #DAD4C8): Warm 1px borders. `{colors.hairline-cool}` (#E6E8EC) for cooler-toned dividers.

### Feature Card Palette (saturated, vivid)
- **Brand Lime** (`{colors.brand-lime}` — #CBD810): High-energy lime. Featured testimonial and lead feature cards. Dark text.
- **Brand Orange** (`{colors.brand-orange}` — #FF7614): Warm orange card. Dark text.
- **Brand Sky** (`{colors.brand-sky}` — #429DFF): Bright sky-blue. White text.
- **Brand Mint** (`{colors.brand-mint}` — #3BD3FD): Cyan-mint. Dark text.
- **Brand Blush** (`{colors.brand-blush}` — #F8B9E3): Soft pink. Dark text.
- **Brand Magenta** (`{colors.brand-magenta}` — #8B045C): Deep magenta. White text.
- **Brand Royal** (`{colors.brand-royal}` — #0667D9): Royal blue. White text.
- **Brand Forest** (`{colors.brand-forest}` — #02693E): Deep green. White text.

### Text
- **Ink** (`{colors.ink}` — #000000): Headlines and primary text.
- **Body Strong** (`{colors.body-strong}` — #181818): Emphasized body, lead paragraphs.
- **Body** (`{colors.body}` — #55534E): Default warm running-text.
- **Muted** (`{colors.muted}` — #9F9B93): Sub-headings, captions, footer body.
- **Muted Soft** (`{colors.muted-soft}` — #85817A): Fine-print.
- **On Primary / On Dark** (`{colors.on-primary}` — #FFFFFF): Text on primary buttons and dark feature cards (sky, magenta, royal, forest).
- **On Dark Soft** (`{colors.on-dark-soft}` — #9F9B93): Secondary text on dark bands.

### Semantic
- **Success** (`{colors.success}` — #02693E): Success states (shares forest tone).
- **Warning** (`{colors.warning}` — #FDAD15): Warning callouts.
- **Error** (`{colors.error}` — #FF3737): Validation errors.

## Typography

### Font Family
The system runs **Sarabun** for everything — headlines, body, navigation, UI, Thai and Latin alike. A single Thai-first typeface with clean, well-behaved forms and **looped (มีหัว) Thai glyphs** for comfortable long-form reading. No serif, no second family. The fallback stack `Sarabun, -apple-system, BlinkMacSystemFont, sans-serif` hands off to the system face only if Sarabun fails to load.

Sarabun ships weights 100–800; this system uses **700 for display**, **600 for titles and buttons**, **500 for nav and labels**, **400 for body**.

> **Thai-first by default, not as a fallback.** Sarabun IS the primary face for both scripts — there is no Latin-first font ahead of it. This is the deliberate choice: the homepage is Thai-first, and a single coherent face across scripts looks more refined than a Latin/Thai pairing.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-2xl}` | 80px | 700 | 1.05 | -1px | Homepage hero h1 — the largest moment |
| `{typography.display-xl}` | 60px | 700 | 1.1 | -0.8px | Section heads, closing-CTA heads |
| `{typography.display-lg}` | 44px | 700 | 1.15 | -0.5px | Sub-section heads, feature-card titles |
| `{typography.display-md}` | 32px | 700 | 1.2 | -0.3px | Card heads, stat figures, pricing heads |
| `{typography.title-lg}` | 24px | 600 | 1.3 | 0 | Pricing plan names, larger card titles |
| `{typography.title-md}` | 20px | 600 | 1.35 | 0 | Card sub-titles, lead feature lines |
| `{typography.title-sm}` | 18px | 600 | 1.4 | 0 | Small card titles |
| `{typography.body-lg}` | 20px | 400 | 1.6 | 0 | Lead paragraphs, sub-headlines |
| `{typography.body-md}` | 16px | 400 | 1.7 | 0 | Default running-text |
| `{typography.body-sm}` | 14px | 400 | 1.7 | 0 | Secondary text, toggle labels |
| `{typography.body-xs}` | 12px | 400 | 1.6 | 0 | Fine-print |
| `{typography.label-md}` | 12px | 600 | 1.3 | 0 | Badge labels, captions |
| `{typography.label-caps}` | 12px | 700 | 1.3 | 1px | Section eyebrows, uppercase labels |
| `{typography.button}` | 16px | 600 | 1.0 | 0 | Button labels |
| `{typography.nav-link}` | 16px | 500 | 1.4 | 0 | Top-nav menu items |

### Principles
Sarabun's personality is **clean and dependable**, not loud. Confidence on display sizes comes from **weight 700 + generous size**, never from cramped tracking — negative letter-spacing is kept mild (-0.3 to -1px max) because Sarabun's looped Thai vowels and tone marks crowd badly under tight tracking. Body line-heights are generous (1.6–1.7) to give Thai ascenders/descenders room. The display-vs-body split is weight (700 vs 400); never introduce a second typeface.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- **Section padding:** `{spacing.section}` (96px) between major editorial bands.
- **Card internal padding:** `{spacing.xl}` (32px) for feature cards and pricing tiers; `{spacing.lg}` (24px) for mockup cards.

### Grid & Container
- **Max content width:** ~1280px centered (source frames render at 1193px).
- **Editorial body:** Single 12-column grid; hero often uses a left-heavy split (h1 dominant, supporting visual secondary).
- **Feature card grids:** 3-up at desktop, 2-up at tablet, 1-up at mobile.
- **Pricing grid:** 4-up at desktop (Free / Growth / Pro / Custom), 1-up at mobile.

### Whitespace Philosophy
Generous whitespace around big confident display headlines and saturated feature cards. The warm canvas + vivid cards + dark closing bands create an editorial, magazine-like pacing. Whitespace is earned, never filled.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, hero, dark bands |
| Hairline | 1px `{colors.hairline}` border | Dividers, subtle card edges |
| White card on canvas | `{colors.surface-card}` fill, no shadow | Product mockups, pricing tiers |
| Saturated card | Vivid brand fill — no shadow | Feature + testimonial cards |
| Soft drop shadow | Low-alpha `DROP_SHADOW` | Floating mockups, sticky nav on scroll |

Depth comes primarily from **color contrast** — warm canvas vs pure-white mockup cards vs vivid feature fills vs dark closing bands — not from heavy shadows. Shadows, when used, are whisper-soft.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Tab/panel seams, full-bleed bands |
| `{rounded.xs}` | 4px | Icon buttons, carousel arrows |
| `{rounded.sm}` | 8px | Small chips, toggle buttons |
| `{rounded.md}` | 12px | Standard CTA buttons, text inputs |
| `{rounded.lg}` | 16px | Outline buttons, secondary cards |
| `{rounded.xl}` | 24px | Product mockup cards |
| `{rounded.band}` | 40px | Feature cards, testimonial cards, dark CTA bands |
| `{rounded.full}` | 9999px | Pills, badges, avatars |

## Components

### Top Navigation
**`top-nav`** — Warm-canvas bar pinned to top. 64px tall, `{colors.canvas}` background. Logo + wordmark at left, horizontal menu center, right-side cluster with sign-in + primary CTA. Menu items in `{typography.nav-link}` (Sarabun 16px / 500). Gains a soft `DROP_SHADOW` on scroll.

### Buttons
**`button-primary`** — Background `{colors.primary}` (near-black), text `{colors.on-primary}` (white), type `{typography.button}` (Sarabun 16px / 600), height 48px, rounded `{rounded.md}` (12px).
**`button-secondary`** — White button. Background `{colors.surface-card}`, text `{colors.ink}`.
**`button-toggle`** — Monthly/Annual style toggles. Background `#EFEFEF`, rounded `{rounded.sm}` (8px), 14px label.
**`button-outline`** — Canvas-fill outline button, rounded `{rounded.lg}` (16px). Used for "See full plan comparison"-style links.
**`text-link`** — Inline body links in `{colors.ink}`, underline on hover.

### Cards & Containers
**`hero-band`** — Canvas hero carrying the `{typography.display-2xl}` (80px) headline, sub-headline, and button row. Padding `{spacing.section}` (96px).
**`feature-card-*`** — Eight saturated variants (lime, orange, sky, mint, blush, magenta, royal, forest). Background varies; rounded `{rounded.band}` (40px); padding `{spacing.xl}` (32px). Each carries an `{typography.display-lg}` (44px) headline, body description, and a product UI fragment. Text flips to `{colors.on-dark}` (white) on sky / magenta / royal / forest (the deeper saturations); `{colors.ink}` (dark) on lime / orange / mint / blush (the lighter saturations).
**`product-mockup-card`** — Card showing actual product UI (enrichment tables, workflow canvases). Background `{colors.surface-card}` (white), rounded `{rounded.xl}` (24px), padding `{spacing.lg}` (24px).
**`testimonial-card`** — Customer quotes. Saturated fill (default `{colors.brand-lime}` lime), rounded `{rounded.band}` (40px), quote in `{typography.body-lg}`.
**`pricing-tier-card`** — Tier card. Background `{colors.surface-card}` (white), rounded `{rounded.md}` (12px), padding `{spacing.xl}` (32px). Plan name in `{typography.display-md}`, price large and tight-set.
**`stat-pill`** — Vivid accent fill (`{colors.accent}`) holding a `{typography.display-md}` stat (+50%, 2x, 3M+). Rounded `{rounded.band}`.
**`dark-band-navy`** / **`dark-band-purple`** — Closing CTA band that flips the canvas to navy or purple. Background `{colors.dark-navy}` / `{colors.dark-purple}`, text `{colors.on-dark}`, rounded `{rounded.band}` (40px), padding 80px. Carries the `{typography.display-xl}` (60px) "Turn your growth ideas into reality today" CTA.
**`badge-pill`** — Small `{colors.surface-strong}` fill pill in `{typography.label-md}`, rounded `{rounded.full}`.

### Footer
**`footer`** — Canvas-tinted (NOT dark). Background `{colors.canvas}`, text `{colors.body}`. Multi-column link list, vertical padding 80px. The system deliberately closes on warm canvas, not dark.

## Do's and Don'ts

### Do
- Anchor every page on the warm off-white canvas (`{colors.canvas}` — #F9F8F6). The paper-warm tint is non-negotiable.
- Reserve `{colors.accent}` (#FF4800) for the single most attention-demanding element per view. It is a highlight, not a card background.
- Cycle saturated feature cards — lime → orange → sky → mint → blush → magenta → royal → forest. Avoid repeating the same fill twice in a row.
- Match text contrast to fill: dark text (`{colors.ink}`) on lime / orange / mint / blush; white text (`{colors.on-dark}`) on sky / magenta / royal / forest.
- Use Sarabun — weight 700 for display headlines, 600 for titles/buttons, 400 for body. Keep letter-spacing mild (max -1px) to protect Thai legibility.
- Show product UI fragments inside saturated feature cards — the voltage is product-driven.
- Close with a dark navy or purple band, then return to a canvas footer.
- Anchor every band with `{spacing.section}` (96px) vertical rhythm.

### Don't
- Don't revert to the cream (#fffaf0) canvas — this system is paper-warm off-white, not beige.
- Don't use orange (`{colors.accent}`) as a feature-card background — it is reserved for highlights.
- Don't bold display weight beyond 500.
- Don't introduce a second typeface — Sarabun is the only family, used for both Thai and Latin.
- Don't use a dark footer. The canvas footer closes the warm arc.
- Don't add a 9th feature-card color — the 8-fill palette is saturated enough.
- Don't use cool grays for canvas, cards, or dividers — borders are warm (`{colors.hairline}` — #DAD4C8).

## Known Gaps

- **Sarabun is the sole typeface** (Thai-first, looped forms). Load it from Google Fonts (`Sarabun: wght@400;500;600;700`) via `@import` or a `<link>` with `display=swap` so the system fallback (`-apple-system, sans-serif`) shows briefly before Sarabun loads — never a Latin-first font ahead of it. Source: https://fonts.google.com/specimen/Sarabun
- The Figma file uses **no design variables** — every color is hardcoded. The tokens above are extracted and normalized from the live node fills; remap them into the project's Tailwind `@theme` config when implementing.
- **Thai letter-spacing is deliberately mild** (max -1px on display). Sarabun's looped vowels and tone marks crowd badly under heavy negative tracking, so the Latin-style -2 to -2.4px tracking from the source was eased. If a Thai headline still reads tight at very large sizes, drop its tracking to 0 rather than tightening.
- **Icons** use Phosphor in Figma; the current site uses FontAwesome (`@fortawesome/fontawesome-free`). Either swap to Phosphor for full fidelity or treat icons as the one deliberate divergence.
- Animation and transition timings (carousel, scroll reveals, dark-band entrances) are not encoded as tokens.
- Form validation states beyond standard focus are not extracted from the source pages.
