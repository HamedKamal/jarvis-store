---
name: Architectural Minimalist
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#44474c'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0ef'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#535f74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#101c2e'
  on-primary-container: '#79849b'
  inverse-primary: '#bbc7df'
  secondary: '#5e5f5c'
  on-secondary: '#ffffff'
  secondary-container: '#e0e0dc'
  on-secondary-container: '#626360'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#2f1500'
  on-tertiary-container: '#ae784d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e3fc'
  primary-fixed-dim: '#bbc7df'
  on-primary-fixed: '#101c2e'
  on-primary-fixed-variant: '#3c475b'
  secondary-fixed: '#e3e2df'
  secondary-fixed-dim: '#c7c7c3'
  on-secondary-fixed: '#1b1c1a'
  on-secondary-fixed-variant: '#464744'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#f8b989'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#673c17'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  headline-xl:
    fontFamily: Chivo
    fontSize: 80px
    fontWeight: '800'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Chivo
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Chivo
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.1'
  display-md:
    fontFamily: Chivo
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
spacing:
  base: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is rooted in the intersection of premium Egyptian heritage and modern architectural streetwear. It targets a discerning audience that values structural integrity, "silent luxury," and technical precision. The visual language is confident and intelligent, avoiding fleeting trends in favor of a timeless, editorial aesthetic.

The design style is **Minimalist with Architectural influences**. It utilizes heavy whitespace to allow product photography to breathe, high-contrast typography for a bold editorial feel, and a rigid adherence to a structured grid. The mood is intentionally reserved—sophisticated but grounded in the raw, tactile reality of high-quality textiles.

## Colors

The palette is driven by "Performance Navy" as the primary anchor for text and structural elements, providing a deeper, more intellectual alternative to pure black. "Off White" serves as the foundational canvas, offering a warmer, more premium feel than stark white, reminiscent of raw cotton and parchment. 

"Muted Copper" is used sparingly as a sophisticated accent for call-to-actions or technical highlights, bridging the gap between the cool navy and the warm off-white. The secondary neutral is a deep slate for secondary text and borders, ensuring legibility without breaking the high-contrast aesthetic.

## Typography

The typography strategy focuses on "Industrial Elegance." **Chivo** provides a bold, confident weight for headlines, mimicking the high-impact layouts of luxury fashion magazines. Its tight tracking and heavy weight create a sense of structural permanence.

**Hanken Grotesk** is the workhorse for body copy, offering exceptional legibility and a contemporary, sharp finish. For technical data, sizes, and stock indicators, **JetBrains Mono** is introduced to evoke a sense of "performance" and architectural specifications. Use all-caps sparingly for labels to maintain the "premium street" hierarchy.

## Layout & Spacing

This design system employs a **12-column fixed grid** on desktop (max-width 1440px) to ensure a disciplined, architectural alignment of elements. On mobile, it transitions to a 4-column fluid grid. 

Margins are intentionally generous to create an "editorial gallery" feel. Horizontal rhythm is dictated by the 24px gutter, while vertical rhythm uses a 4px base unit. Product cards and imagery should span varying column counts (e.g., 6 columns for hero features, 3-4 columns for standard listings) to create visual interest and break the monotony of standard e-commerce layouts.

## Elevation & Depth

To maintain the "Minimal Architectural" style, depth is created through **Tonal Layers** and **Low-contrast Outlines** rather than traditional shadows. 

1. **Surfaces:** Use the primary "Off White" for the base background. Secondary surfaces (like drawers or modals) use a slightly darker tint or a subtle 1px border in Performance Navy at 10% opacity.
2. **Backdrop:** Navigation bars use a high-density backdrop blur (20px) with a semi-transparent Off White fill to maintain context while ensuring legibility.
3. **Contrast:** Visual hierarchy is achieved through color blocking—specifically using solid Performance Navy blocks for primary buttons or section headers against the Off White canvas.

## Shapes

The shape language is strictly **Sharp (0px)**. To reflect architectural precision and the "Representative" aesthetic, all buttons, input fields, image containers, and cards feature 90-degree corners. This creates a more aggressive, confident, and high-end streetwear silhouette. The only exception is for functional iconography which should maintain geometric clarity.

## Components

- **Buttons:** Primary buttons are solid Performance Navy with Off White text in `label-caps`. Secondary buttons are outlined (1px) with no fill. "Buy It Now" buttons utilize the Muted Copper for high-impact conversion.
- **Input Fields:** Minimalist 1px bottom-border only, or a full 1px border with 0px radius. Use `label-caps` for placeholder text.
- **Product Cards:** Image-centric with no visible border. Information is stacked below using a combination of `body-md` for the title and `label-caps` for the price. 
- **Inventory Labels:** Use the monospaced `label-caps` font. For "Low Stock," use a small solid circle in Muted Copper next to the text.
- **Navigation:** A centered logo with wide-tracked menu items. The active state is indicated by a simple 1px underline or a weight shift to bold.
- **Accordions:** Clean horizontal dividers (1px) with sharp '+' and '-' icons for expansion, as seen in the reference images for "Details" and "Delivery."