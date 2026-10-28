# Aarav Facilities: design tokens

These match the `:root` variables in `assets/css/styles.css`. When rebuilding in Elementor, enter them once under **Site Settings → Global Colors / Global Fonts / Layout**, and point every widget at the globals instead of setting local values.

## Colours (Elementor Global Colors)

| Elementor slot | Name | Hex | Use |
|---|---|---|---|
| Primary | Brand blue | `#3557D0` | Buttons, links, icons, focus ring on light backgrounds. A deeper shade of the logo's blue (#4169E1) so text passes WCAG AA on white and on Surface. |
| Secondary | Navy | `#0E1A33` | Headings, the hero, the process section, the footer |
| Text | Slate | `#46536B` | Body copy |
| Accent | Hi-vis yellow | `#F2C230` | Key-figures band, primary button on navy, step numbers, placeholder tags. Use it on navy or as a solid band. Never use it as text on white. |
| Custom | Brand blue hover | `#2A47B3` | Hover state for Primary buttons and links |
| Custom | Surface | `#F1F4FA` | Background for every other section |
| Custom | Border | `#D6DDEB` | Card outlines, dividers |
| Custom | White | `#FFFFFF` | Page background, cards, form panel |

Utility colours (not global): error `#B4232A`, success `#1D5A37` on `#E7F4EC`, input border `#8D99B3`, light text on navy `#C9D3E8`.

### Contrast checks (WCAG 2.1)
- Navy on White: 17.3:1. Slate on White: 7.8:1. Slate on Surface: 7.0:1
- Brand blue on White: 6.1:1. White on Brand blue (buttons): 6.1:1
- Yellow on Navy and Navy on Yellow: 10.3:1
- `#C9D3E8` on Navy: 11.5:1
- The logo's original blue `#4169E1` on Surface is only 4.4:1, so it is kept for the logo alone.

## Fonts (Elementor Global Fonts)

| Slot | Family | Weights | Use |
|---|---|---|---|
| Primary (headings) | **Sora** | 600, 700 | H1–H3, buttons, step numbers, key figures |
| Text (body) | **Manrope** | 400, 500, 600, 700 | Paragraphs, lists, labels, form fields |

### Type scale

| Style | Desktop | Tablet (≤1024) | Mobile (≤767) | Line height | Weight |
|---|---|---|---|---|---|
| H1 | 56px | 44px | 36px | 1.08 | Sora 700, letter-spacing −0.025em |
| H2 | 40px | 34px | 28px | 1.15 | Sora 700, −0.02em |
| H3 | 20px | 20px | 18px | 1.3 | Sora 600 |
| Lead paragraph | 19px | 19px | 17px | 1.6 | Manrope 400 |
| Body | 17px | 17px | 16px | 1.6 | Manrope 400 |
| Small / meta | 14–15px | n/a | n/a | 1.6 | Manrope 500–600 |
| Button | 16px | n/a | n/a | 1.2 | Sora 600 |

Headings use sentence case. There are no all-caps labels.

## Spacing (8px base)

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96` px

| Token | Value | Where |
|---|---|---|
| Section padding (top/bottom) | 96px desktop, 72px tablet, 56px mobile | Every section container |
| Content width | 1200px boxed | Elementor: Layout → Content Width 1200 |
| Side gutter | 24px desktop/tablet, 16px mobile | Container padding left/right |
| Intro → content | 48px | Under each section heading block |
| Card/column gap | 32px | Services, process, testimonials |
| Inside cards | 24px padding, 16px between widgets | |
| Form field gap | 24px | |

## Shape

- Radius **4px**: buttons, inputs, notices
- Radius **12px**: images, cards, form panel
- No drop shadows. Use a 1px Border colour outline instead.
- Buttons: minimum height 48px, padding 12px 24px

## Breakpoints (Elementor defaults)

- Desktop: above 1024px
- Tablet: 768–1024px
- Mobile: 767px and below

## Section-to-Elementor map

Each section is built only from Flexbox Containers and native widgets. Nothing is absolutely positioned and no layout depends on JavaScript.

| Section | Structure | Widgets |
|---|---|---|
| Header | Theme Builder header → Container row, space-between | Site Logo, Nav Menu (Pro; hamburger at tablet), Button |
| Hero | Full-width Container with background image and a gradient overlay (Navy 94%→35% left to right; flat 86% on tablet/mobile) → boxed inner Container, column, max-width 680 | Text (tagline), Heading H1, Text Editor, inner Container row → 2 Buttons |
| Key figures | Container, background Accent → row, wrap. Columns are 25% wide, 50% on tablet. | 4 × (Heading + Text), or 4 × Counter |
| Services | Container, background Surface → intro Container → row Container, gap 32. Columns are 3-up, 2+1 on tablet, stacked on mobile. | Per card: Image, Heading H3, Text Editor, Icon List, Button (link style) |
| About | Row Container: Image (44%) + Container column. Stacks on tablet. | Image, Heading H2, Text Editor ×2, 4 × Icon Box (no icon) for principles |
| Process | Container, background Navy → row, wrap, 4 columns with a 3px Accent top border. 2×2 on tablet, stacked on mobile. | Heading (number), Heading H3, Text Editor |
| Sectors | Intro row (Heading H2 left, Text right, 1px bottom border) → row Container, wrap, gap 16 → 5 Containers, each with a background image, a Navy gradient overlay (5% at the top to 94% at the bottom), min-height 380, content justified to the end and radius 12. 2 per row on tablet (last one full width), 1 per row on mobile. | Heading H3 + Text Editor per card |
| Testimonials | Container, background Surface → notice → row of 3 | Alert or Text Editor for the placeholder notice, 3 × Testimonial widget |
| FAQ | Row Container: 34% intro + 66% list. Stacks on tablet. | Heading H2, Text Editor, Button, Accordion (or Toggle) with title tag H3 and FAQ schema turned on |
| Contact | Row Container: 38% info + 60% form panel. Stacks on tablet. | Heading H2, Text Editor, Icon List, 3 × (Heading H3 + Text Editor), Form widget (Pro): 8 fields, two columns at 50% |
| Footer | Theme Builder footer → Container, background Navy → row, wrap → bottom bar row | Image (logo on a white rounded container), Text Editor, Heading + Icon List ×3, Text + Icon List (inline) |

## Pages

| File | WordPress page | Sections |
|---|---|---|
| `index.html` | Home (set as the static front page) | Hero, key figures, services overview, about teaser, process, sectors, testimonials, 4 FAQs, contact form |
| `services.html` | Services | Page hero, 3 division rows (CSS IDs `manpower`, `facility`, `automotive`), combined services, sectors, CTA band |
| `about.html` | About | Split hero (light), who we are + at-a-glance panel, mission and vision, values (Icon Boxes), our journey (placeholder timeline), leadership team (placeholder), why clients choose us, where we operate, CTA band |
| `process.html` | Process | Page hero, 4-step timeline, working principles, CTA band |
| `testimonials.html` | Testimonials | Page hero, 6 placeholder testimonials, key figures, CTA band |
| `faq.html` | FAQ | Page hero (no image), 13 questions in 3 groups, CTA band |
| `contact.html` | Contact | Page hero, contact details + enquiry form (CSS ID `enquiry-form`), offices |

Every "Request a proposal" button links to `contact.html#enquiry-form`. In WordPress, make that `/contact/#enquiry-form`.

### Reusable blocks (save as Elementor templates or global widgets)

| Block | Notes |
|---|---|
| Header | Theme Builder header on all pages. The menu holds the 7 pages, and Nav Menu styles the current page link (Primary colour, 2px underline). |
| Footer | Theme Builder footer on all pages |
| Page hero | Container with a background image and a Navy gradient overlay (95% → 60% left to right), 64px vertical padding, then Breadcrumbs, H1 at 86% of the H1 size, lead text and optional buttons |
| Key figures band | Same on Home and Testimonials. About shows the figures as an "At a glance" panel instead. |
| Sectors | Same on Home and Services |
| CTA band | Container with a Primary background, H2 + text on the left and a white button + outline button on the right. The heading changes per page. |

### About page components

| Component | Elementor build |
|---|---|
| Split hero | Container row with a Surface background: text column (Breadcrumbs, H1, lead, 2 buttons) + Image (4:3, radius 12). Stacks on tablet. |
| At a glance | Container with a 1px Border outline, a 4px Accent top border and radius 12. Holds an H3 plus 6 figures in a 2-column wrap (3 columns on tablet). Each figure is a Heading (Sora 700, 26px) + Text label. |
| Mission and vision | Two Containers side by side, each with 48px padding and radius 12. Mission has a Navy background with an Accent label; Vision has a Primary background. Statements are Sora 600, 24px, in white. |
| Values | 4 Icon Boxes with the icon on top, on white with a Border outline. Icon: 44px square with a Primary fill on #E6ECFC. |
| Journey | Container row with a 2px Border top line. Each milestone has a 16px circle marker, Year, H3 and Text. It becomes a vertical line on tablet and mobile. |
| Leadership | 4 columns (2 on tablet and mobile). Each has an Image (4:5, radius 12), the name in bold and the role. |
| Why choose us | Row: intro column (30%) + 6 Icon Boxes with the icon on the left, in 2 columns. Icon: 40px square with a Navy fill on Accent. |
| Where we operate | Navy band: H2 + text on the left, 3 Icon Boxes (pin icon in Accent) on the right |
