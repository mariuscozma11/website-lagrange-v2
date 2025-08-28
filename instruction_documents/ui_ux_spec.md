# UI and UX Specification

## Scope
Define visual rules, layout patterns, and interaction guidelines across the website. Mobile-first priority with light and dark themes. Tailwind CSS + shadcn/ui baseline. Emerald 500 as primary brand hue.

---

## Global Rules
- **Mobile-first**: All layouts designed for small screens first, scale gracefully upwards.
- **Themes**: Light and Dark, toggle available in nav.
- **Typography**: Clean sans-serif, bold geometric for headings, humanist sans for body.
- **Color Palette**:
  - Primary: Emerald 500 look
  - Neutral surfaces: Slate/Zinc ranges
  - Success: Emerald variants
  - Warning: Amber 500 look
  - Danger: Rose 500 look
- **Spacing**: Generous padding, vertical rhythm, avoid clutter.
- **Icons**: Outline style, consistent stroke.
- **Images**: Crisp, minimal background, alt text in EN/RO.
- **Motion**: Subtle, fast (under 200ms). Avoid bounce. Respect reduced motion.

---

## Components
- **Buttons**
  - Primary: Solid emerald, white text
  - Secondary: Outline neutral, emerald text
  - Destructive: Rose tone, white text
  - Corners: rounded-xl for approachable look
  - Mobile: full width when context requires

- **Forms**
  - Inputs: clean borders, subtle focus highlight
  - Labels always visible
  - Errors in red with concise copy
  - Mobile: full width, clear spacing between fields

- **Cards**
  - Neutral background, thin border
  - Hover lift (desktop), static (mobile)
  - Uniform padding and consistent title/body structure

- **Navigation (Nav Bar)**
  - Compact bar on desktop, hamburger drawer on mobile
  - Logo left, links centered or right, CTA button right
  - Active link indicated by underline or subtle dot

- **Footer**
  - Stacked layout on mobile, columns on desktop
  - Contains legal info, links, ANPC, services, copyright

---

## Sections
- **Hero Section**
  - Strong headline, supportive subheadline
  - Primary CTA, optional secondary CTA
  - Background can be gradient or image but never cluttered
  - Mobile: headline max 2–3 lines

- **About Overview**
  - Short mission and values
  - Button to About page
  - Visual: one image or icon

- **Services Overview**
  - Three cards: Applications, Websites, Consulting
  - Consistent icons, short copy
  - CTA to Services page

- **Case Studies Teaser**
  - 2–3 featured projects
  - Card format: client, short description, metric

- **Process**
  - 3–4 steps visualized
  - Mobile: vertical list, Desktop: horizontal timeline

- **Testimonials**
  - 2–3 short quotes with photos/initials
  - Carousel optional on mobile

- **CTA Band**
  - Full-width, high contrast strip
  - One clear action

---

## Accessibility
- Contrast meets WCAG AA
- Focus rings visible
- Touch targets ≥44px
- Font size ≥16px on mobile

---

## Responsiveness
- **Mobile (default)**: vertical stacks, full width components
- **Tablet**: grid of 2–3 columns, increased spacing
- **Desktop**: 12-column grid, max width 1280px
- **Breakpoints**: Tailwind defaults (sm, md, lg, xl)

---

## Microcopy
- Tone: professional, direct, trustworthy
- Sentences: concise, plain technical language
- Bilingual content: consistent tone across EN and RO