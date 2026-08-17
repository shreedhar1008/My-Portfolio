---
name: Shreedhar Shiragur Portfolio System
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#d2bbff'
  on-secondary: '#3f008e'
  secondary-container: '#6001d1'
  on-secondary-container: '#c9aeff'
  tertiary: '#c2c6db'
  on-tertiary: '#2b3040'
  tertiary-container: '#8c90a4'
  on-tertiary-container: '#242939'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#eaddff'
  secondary-fixed-dim: '#d2bbff'
  on-secondary-fixed: '#25005a'
  on-secondary-fixed-variant: '#5a00c6'
  tertiary-fixed: '#dee1f7'
  tertiary-fixed-dim: '#c2c6db'
  on-tertiary-fixed: '#161b2b'
  on-tertiary-fixed-variant: '#414658'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-xl:
    fontFamily: Syne
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Syne
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1280px
---

## Brand & Style

This design system is engineered for a high-end technical portfolio, blending the precision of a developer tool with the visionary aesthetic of an AI laboratory. The personality is "Sophisticated Technicality"—it is authoritative and modern, yet accessible through tactile feedback.

The style is a disciplined **Hybrid of Glassmorphism and Neomorphism**. It utilizes frosted glass surfaces to create depth and transparency, while adopting neomorphic light-source principles for button states and container borders. The emotional response should be one of "Computational Elegance," where every element feels like a functional part of a high-performance engine. Expect heavy use of 1px translucent borders, subtle radial glows, and high-quality typography to signal professional rigor.

## Colors

The palette is anchored in a **Dark-mode First** philosophy. The core foundation is a near-black void (`#050810`), providing the maximum contrast required for glowing accents.

- **Primary (Electric Blue):** Used for interactive triggers, primary focus states, and "active" status indicators.
- **Secondary (Violet):** Used for secondary visual interest, gradients, and categorizing AI/ML-specific content.
- **Surface:** A deep navy (`#0a0f1e`) is used for container backgrounds, providing a subtle lift from the base background.
- **Functional Accents:** Success, warning, and error states should utilize desaturated versions of green and red to maintain the high-end technical vibe without appearing garish.
- **Gradients:** Linear gradients should flow from Primary to Secondary at a 135-degree angle to simulate motion and energy.

## Typography

The typographic system balances the expressive, avant-garde nature of **Syne** for headings with the functional clarity of **Inter** for long-form reading. **Space Grotesk** is introduced for labels and small UI elements to provide a technical, geometric "monospace-adjacent" feel without sacrificing legibility.

- **Headlines:** Use tight letter-spacing for large display sizes to create a "locked-in" architectural look.
- **Body:** Inter is used with generous line heights (1.6) to ensure technical documentation and case studies remain highly readable against dark backgrounds.
- **Labels:** Always use Space Grotesk for metadata, tags, and small captions to reinforce the developer-centric aesthetic.

## Layout & Spacing

This design system utilizes a **12-column Fluid Grid** for desktop and a **4-column grid** for mobile. The layout philosophy is centered around "intentional breathing room," using large vertical spacing (`xl`) to separate major sections of the portfolio.

- **Grid:** Columns are separated by 24px gutters. Elements should snap to the grid to maintain a structured, engineering-led feel.
- **Container:** Maximum content width is capped at 1280px to prevent excessive line lengths on ultra-wide monitors.
- **Padding:** Internal card padding should scale from 16px (mobile) to 24px or 32px (desktop) to maintain the "glass" container's integrity.

## Elevation & Depth

Depth is established through **Backdrop Blurs and 1px "Inner Light" strokes**, rather than heavy drop shadows.

- **Surfaces:** Use a `backdrop-filter: blur(12px)` on all floating containers. Background colors for these surfaces should be set to `#0a0f1e` with an opacity of 60-80%.
- **Strokes:** Apply a 1px solid border to all cards. Use a linear gradient for the stroke, flowing from a high-opacity white at the top-left (light source) to a low-opacity navy at the bottom-right.
- **Glows:** Primary interactive elements (like active buttons or cards) should emit a subtle radial-gradient glow (`blur(40px)`) behind them, using the primary or secondary accent colors at 15% opacity.

## Shapes

The shape language is **Refined and Geometric**. Elements use a consistent 0.5rem (8px) radius to maintain a professional, modern appearance that isn't overly "bubbly" but avoids the aggression of sharp corners.

- **Base Radius:** 8px (`0.5rem`) for standard cards, inputs, and buttons.
- **Large Radius:** 16px (`1rem`) for major section containers or "hero" images.
- **Pill:** Use fully rounded corners (999px) strictly for small status tags or "chips" to differentiate them from interactive buttons.

## Components

### Navigation
- **Sticky Navbar:** A floating bar at the top of the viewport with a `backdrop-filter: blur(20px)`. It features the 'SS' badge logo in a high-contrast white on the left and minimalist links on the right.
- **SS Badge:** A square with 4px rounded corners, utilizing a primary-to-secondary gradient fill.

### Buttons
- **Primary:** Solid gradient fill (Electric Blue to Violet). On hover, the button should gain an outer glow of the same color.
- **Ghost/Secondary:** 1px translucent border with a subtle background tint on hover. 
- **Typography:** All button labels use Space Grotesk, medium weight, for a technical feel.

### Cards
- **Glass Cards:** Semi-transparent background with a 1px top-weighted border. 
- **Interactive State:** On hover, the border opacity increases, and the backdrop blur intensifies.

### Input Fields
- Dark backgrounds (`#050810`) with 1px borders. Upon focus, the border transitions to the primary electric blue with a subtle inner glow.

### Chips/Tags
- Small, uppercase labels using Space Grotesk. Used for listing tech stacks (e.g., "PYTORCH", "NEXT.JS"). They should have a subtle background tint of the primary color at 10% opacity.

### Progress/ML Metrics
- Use thin, high-contrast lines for data visualization. For "AI Confidence" or "Accuracy" meters, use the primary electric blue gradient.