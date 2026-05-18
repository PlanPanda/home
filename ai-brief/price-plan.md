# Design Brief: Price Plan Feature

## 1. Feature Summary

A pricing section on the landing page that sells four prepaid tiers (Starter, Growth, Pro, Enterprise) to Thai life insurance agents. The core proposition is not the tiers themselves — it's the **mobile-top-up flexibility**: prepaid daily, no contracts, downgrade anytime. The design must make this model feel simple, trustworthy, and modern — not like clunky enterprise SaaS billing.

## 2. Primary User Action

An invited agent should **understand the pricing model in under 5 seconds** and feel confident that the Growth plan (฿30/day) is a low-risk, high-value investment they can adjust anytime.

## 3. Design Direction

- **Color strategy**: **Committed** — the brand pink (`#ff4d8b`) carries the CTA and recommended-plan energy. Cream canvas (`#fffaf0`) keeps the surface warm and approachable. This is a brand moment, not a restrained product surface.
- **Theme scene sentence**: A Thai insurance agent sitting in a cafe on their iPad, invited by a colleague, casually exploring whether this CRM is worth switching to — they want to feel smart, not sold to, in bright daylight.
- **Anchor references**:
  - **Apple's pricing pages** for clarity and calm hierarchy
  - **Thai mobile carrier top-up apps** (e.g., TrueMoney, MyAIS) for the familiar prepaid mental model
  - **Notion's pricing** for transparent feature comparison without intimidation

## 4. Scope

- **Fidelity**: Production-ready
- **Breadth**: One section on `Landing.astro` — pricing cards + explanation + CTA
- **Interactivity**: Static display with hover states, highlighted recommended tier, smooth scroll-to or modal CTA
- **Time intent**: Ship-ready

## 5. Layout Strategy

- **Headline first**: Lead with the flexibility story ("Pay daily. Change anytime. No lock-in.") — not the tier names.
- **Four cards, horizontal on desktop, stacked on iPad/mobile**: Starter (left), Growth (center-left, highlighted as recommended), Pro (center-right), Enterprise (right).
- **Visual hierarchy**: Price per month is the biggest number. Daily deduction note shows transparency. Customer limit is secondary. Feature list is minimal — because there's only one real feature dimension (customer count).
- **Trust signal**: A small "Like topping up your phone" metaphor + icon to anchor the prepaid concept.
- **1000+ customers**: The Enterprise tier handles customers over 1,000.

## 6. Key States

| State                  | What the user sees/feels                                                  |
| ---------------------- | ------------------------------------------------------------------------- |
| **Default**            | Four cards, Growth highlighted with brand pink accent. Clear daily price. |
| **Hover (desktop)**    | Card lifts slightly, CTA button darkens.                                  |
| **Tap (iPad)**         | Card presses subtly, CTA clearly tappable.                                |
| **Empty/No selection** | N/A — this is display-only, no form state.                                |
| **Contact us**         | Clear micro-CTA for 1000+ customers, Enterprise option available.         |

## 7. Interaction Model

- Agent scrolls to the pricing section.
- Reads the headline → grasps the prepaid model instantly.
- Scans four cards left-to-right. Growth is visually primary.
- Taps CTA on chosen plan → either scrolls to signup form or opens a simple modal.
- No checkout flow here — this is landing-page persuasion, not billing.

## 8. Content Requirements

- **Headline**: "Pay daily. Change anytime. No lock-in."
- **Subheadline**: "Like topping up your mobile — top up, use, adjust. Downgrade tomorrow if today doesn't fit."
- **Tier cards**:
  - Starter: "฿450 / เดือน" — "Up to 200 customers" — CTA: "Get Started" — Note: "หักเงินรายวัน ฿15/วัน"
  - Growth: "฿900 / เดือน" — "Up to 500 customers" — CTA: "Get Growth" — Badge: "Most Popular" — Note: "หักเงินรายวัน ฿30/วัน"
  - Pro: "฿1,800 / เดือน" — "Up to 1,000 customers" — CTA: "Go Pro" — Note: "หักเงินรายวัน ฿60/วัน"
  - Enterprise: "฿5,400 / เดือน" — "More than 1,000 customers" — CTA: "Go Enterprise" — Note: "หักเงินรายวัน ฿180/วัน"
- **Trust line**: "฿450/month for Starter. Switch plans any day. No contracts."
- **Enterprise CTA**: "Managing more than 1,000 customers? Let's talk."

## 9. Recommended References

- spatial-design.md — card rhythm and spacing
- typography.md — price hierarchy (big number, small /day)
- interaction-design.md — hover/tap feedback on cards
- color-and-contrast.md — committed color strategy on cream canvas

## 10. Open Questions

- Should the CTA scroll to an inline signup form, or open a modal with plan pre-selected?
- Is there a free-trial duration for the Trial tier, or is it free forever at 10 customers?
- Do you want an annual equivalent shown (e.g., "~฿300/mo") or keep it strictly daily?
