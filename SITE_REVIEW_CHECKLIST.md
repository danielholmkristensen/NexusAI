# Site Review Checklist

Run this checklist before every site update to maintain quality and consistency.

## Visual & Accessibility

### Contrast & Readability
- [ ] All text on dark (`bg-black`, `bg-[#111]`) backgrounds uses minimum `opacity-75` or higher
- [ ] Avoid `text-[#E6E6E1]/50` or `text-[#E6E6E1]/60` on dark backgrounds — use `/75`, `/80`, `/85`, or `/90`
- [ ] Border colors on dark backgrounds use minimum `border-white/20` or `/30`
- [ ] Monospace labels (dates, categories) can use slightly lower opacity (`/60`-`/70`) but must remain legible

### Floating Nav Clearance
- [ ] All page sections at bottom use `pb-32` minimum to prevent content clash with floating nav
- [ ] FAQ sections use `pb-32` (handled in FAQSection component)
- [ ] Final CTA sections include adequate bottom padding

### Scroll Animation Timing
- [ ] Blur/fade effects for stacking cards trigger at `start: 'top center'` not `start: 'top bottom'`
- [ ] This matches natural eye position (center of screen) rather than edge of viewport
- [ ] Card blur uses softer values (`blur(3px)`, `opacity: 0.6`, `scale: 0.95`) for better viewing

## Content & Tone

### No Alienating Language
- [ ] Review all copy for phrases that assume incompetence
- [ ] Avoid: "you probably don't know...", "most teams fail at...", "unlike other teams..."
- [ ] Replace exclusionary "Who It's Not For" with welcoming alternatives like "Interested but different background?"
- [ ] Frame prerequisites as guidance, not gatekeeping

### CTA on Exclusion Sections
- [ ] Any section discussing who shouldn't buy must include a pathway forward
- [ ] Include "Let's talk" or "Get in touch" CTA for edge cases
- [ ] Offer assessment or consultation for uncertain prospects

### Pricing Clarity
- [ ] Always specify participant counts alongside prices
- [ ] Use compact industry notation when space is limited (e.g., "3 pax", "≤12 pax")
- [ ] Distinguish between open (multi-company) and closed (exclusive) formats clearly
- [ ] Never leave ambiguity about what's included at each price point

## Animations & Interactions

### Animation Semantic Order
- [ ] Animated sequences (rotating cards, typewriter, etc.) reflect real workflow order
- [ ] Never use random or purely aesthetic arrangement for process animations
- [ ] TDD example: Define → Test → Implement (not random shuffle)
- [ ] Integration example: Analyze → Protect → Extend → Verify

### Three Chapters (Spark Page)
- [ ] **Greenfield**: Shows TDD flow (Define Acceptance Criteria → Generate Test Scaffolds → Implement to Pass)
- [ ] **Extension**: Shows integration flow (Analyze → Protect existing → Extend → Verify)
- [ ] **Stewardship**: Shows maintenance flow (Audit → Generate tests → Document → Validate)

## Dark Section Guidelines

### Recommended Opacity Values
| Element Type | Minimum Opacity |
|--------------|-----------------|
| Body text | `/80` or `/85` |
| Headers | `/100` (full white) |
| Secondary text | `/70` or `/75` |
| Labels/metadata | `/60` minimum |
| Borders | `/20` or `/30` |
| Backgrounds | `/10` or `/15` |

### Sections to Double-Check
- [ ] "Who It's For" / alternate sections
- [ ] Pricing cards (especially closed/dark variant)
- [ ] Phase cards on Catalyst timeline
- [ ] Pillar cards on Scale Engine
- [ ] Footer link sections

## Component-Specific Checks

### TargetAudienceSection
- [ ] Uses `alternateTitle` prop for welcoming framing
- [ ] Includes `alternateCTA` with contact option
- [ ] `requirement` text placed in "Who It's For" side
- [ ] Text contrast at `/80`-`/90` levels

### ProductLadderSection
- [ ] Current product highlighted with distinct styling
- [ ] "Your journey" variant shows clear progression
- [ ] CTAs link to appropriate next/previous steps

### FAQSection
- [ ] Bottom padding of `pb-32` applied
- [ ] Answer text at `/80` opacity for readability

## Pre-Deploy Verification

1. [ ] Run `npm run build` — no errors
2. [ ] Test all 5 routes locally (`/`, `/the-spark`, `/the-catalyst`, `/the-scale-engine`, `/about`)
3. [ ] Check mobile responsiveness on all pages
4. [ ] Verify animations work (scroll reveals, card stacking, typewriter effects)
5. [ ] Test floating nav behavior when scrolled to page bottom
6. [ ] Review dark sections for text readability

## Quick Reference: Opacity Scale

```
/50 = Too dark for body text, avoid
/60 = Minimum for labels/metadata only
/70 = Acceptable for secondary text
/75 = Good for secondary text
/80 = Standard body text
/85 = Emphasized body text
/90 = Strong emphasis
/100 = Headers, CTAs
```
