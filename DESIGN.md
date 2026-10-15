---
name: Solid Plan Public Website
description: Owner-approved prototype C; Thai-first white and black product storytelling with an iPad chat demonstration.
colors:
  primary: "#1d1d1f"
  primary-hover: "#333"
  canvas: "#fff"
  ink: "#1d1d1f"
  muted: "#525258"
  soft: "#f5f5f7"
  hairline: "#d2d2d7"
  edge: "#ececf0"
  dark: "#111"
  black: "#000"
  on-dark-muted: "#a1a1a6"
  focus-success: "#15734b"
  selection: "#d5ebdf"
typography:
  display:
    fontFamily: "Sarabun, sans-serif"
    fontSize: "64px"
    fontWeight: 700
    lineHeight: 1.22
    letterSpacing: "0"
  page-headline:
    fontFamily: "Sarabun, sans-serif"
    fontSize: "52px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0"
  headline:
    fontFamily: "Sarabun, sans-serif"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0"
  body:
    fontFamily: "Sarabun, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0"
  button:
    fontFamily: "Sarabun, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.7
    letterSpacing: "0"
  nav:
    fontFamily: "Sarabun, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0"
rounded:
  control: "8px"
  scenario: "999px"
  confirmation: "16px"
  device: "34px"
spacing:
  sm: "12px"
  md: "24px"
  lg: "32px"
  band: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.canvas}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    height: "48px"
    padding: "10px 24px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "10px 24px"
  scenario:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.scenario}"
    height: "44px"
    padding: "0 18px"
  scenario-selected:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.canvas}"
  product-example:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
---

## Overview
**Creative North Star: "Product Clarity"**

Solid Plan presents a professional Thai-first assistant for insurance agents. White surfaces, dark actions, cool neutral bands, real tabletop photographs and legible HTML product examples let the work carry the identity.

**Key Characteristics:**
- Neutral public surfaces and restrained black actions.
- Sarabun throughout Thai and Latin text.
- Unframed page bands with an inspectable iPad chat demonstration.

Authority: the owner's prototype C approval and direction contract in `ai-brief/website-refresh.md` supersede the former cream, pink and saturated-card aesthetics. Durable audience and Thai-first constraints in `PRODUCT.md` still apply; its old aesthetic tokens are historical drift.

## Colors
Primary is dark ink; neutral canvas, soft bands and hairlines organize content. Black and dark bands provide the closing contrast. Green is a functional focus, hover and status cue, not the dominant brand fill. Photography may contain natural color.

**The Neutral Canvas Rule.** Use white and cool neutral surfaces for public pages.

## Typography
Sarabun is loaded at weights 400, 500, 600 and 700 with display swap. The frontmatter records desktop roles; hero display steps to 42px below 800px and 34px below 480px. Page headlines step to 34px below 640px. Body copy retains comfortable Thai line height. Legal prose is constrained to 75ch.

**The Thai Legibility Rule.** Keep letter spacing at zero and allow Thai text to wrap.

## Layout
The shared shell is capped at 1200px with 48px total desktop inset. The sticky header has a 68px minimum height. Secondary pages use 64px bands and two-column examples; pricing uses four columns, then two below 900px and one below 640px. Navigation wraps into a horizontally scrollable second row below 640px. The landing shell narrows below 800px; its iPad stage is capped at 900px and collapses the rail on smaller screens. Landing bands use 110px desktop rhythm and 78px below 800px.

## Elevation & Depth
Public page bands are flat. Thin borders distinguish examples and pricing. The iPad uses a physical bezel and inset plus cast shadows; confirmation panels have a restrained shadow. The black After panel also retains a soft cast shadow. These exceptions communicate product objects, not decorative page containers.

## Shapes
Shared buttons, examples, pricing and Before/After panels use the control radius. Scenario selectors are pill-shaped. Device bezel, chat messages, composer and confirmation panel preserve the approved product demo's larger corners; do not transfer their geometry to page sections.

## Components
Primary actions are dark with white labels; hover uses the darker-neutral hover token. Ghost actions use a hairline border and soft hover surface. LINE is the primary conversion and signup is secondary. Shared action height is a minimum, allowing wrapped labels.

Navigation uses compact Thai labels, an underline for the current page and a visible focus outline. The footer uses a soft neutral band.

Scenario buttons show selection with dark fill and expose pressed state. The demo includes confirmation before AI writes, fictional records, a pause control and reduced-motion handling. Its conversation is a labeled, keyboard-focusable scroll region with a thin neutral scrollbar; confirmation opens at the top of its card. Pointer interaction or focus in the conversation pauses autoplay for reading. Its composer is a visual example, not an input form.

Product examples and pricing cards have hairline borders and compact padding. FAQ rows use disclosure controls separated by hairlines. Before panels use photographic tabletop assets; After panels use inspectable HTML product output.

## Do's and Don'ts
### Do:
- Do use the neutral public palette and dark primary actions.
- Do keep Sarabun and zero letter spacing across Thai pages.
- Do show product workflows with fictional data and confirmation states.
- Do preserve visible keyboard focus and reduced-motion behavior.

### Don't:
- Don't restore cream, pink, orange or saturated feature-card themes.
- Don't frame page sections as floating cards.
- Don't make the decorative demo composer appear to accept input.
