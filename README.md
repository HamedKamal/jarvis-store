# JARVIS - Local Development Website (Phase 1)

This repository contains the approved pixel-perfect Jarvis UI/UX built as a modern Next.js 15 development website using TypeScript, Tailwind CSS, and Framer Motion. 

This local site serves as the visual development prototype (Phase 1). After visual approval, the layouts will be translated into Shopify Liquid code (Phase 2).

---

## Tech Stack
* **Framework**: Next.js 15+ (App Router)
* **Language**: TypeScript
* **Styling**: Tailwind CSS v4
* **Animations**: Framer Motion
* **Icons**: Google Material Symbols Outlined

---

## Local Setup & Installation

Follow these steps to run the website locally on your machine:

1. **Install Dependencies**:
   Run the following command in the root folder to download and install all necessary packages (`next`, `react`, `typescript`, `framer-motion`, etc.):
   ```bash
   npm install
   ```

2. **Start the Development Server**:
   Start the local Next.js dev server:
   ```bash
   npm run dev
   ```

3. **Open the Website**:
   Once the server is running, navigate to:
   [http://localhost:3000](http://localhost:3000)

---

## Folder Structure

* **`app/`**: App Router page layouts and style configurations.
  * **`layout.tsx`**: Loads custom Google Fonts (`Chivo`, `Hanken Grotesk`, `JetBrains Mono`), Material Symbols, wraps the context providers, and renders global navigation.
  * **`globals.css`**: Tailwind v4 theme configuration (brand colors, typography scales, customized grids, and scroll bar resets).
  * **`page.tsx`**: Homepage featuring the Hero banner, Bento category grid, and Brand Statement.
  * **`collections/page.tsx`**: Bento grid index of all collections.
  * **`collections/[id]/page.tsx`**: Dynamic collections category listing in an asymmetrical staggered grid.
  * **`products/[id]/page.tsx`**: Dynamic product detail page featuring thumbnails gallery, active selector states, and details accordions.
* **`components/`**: Reusable React components.
  * **`AnnouncementBar.tsx`**: Announcement line at the top.
  * **`Header.tsx`**: Nav controls featuring scroll-shrink padding.
  * **`Footer.tsx`**: Text-link minimal footer.
  * **`CartDrawer.tsx`**: Sliding cart panel animated via Framer Motion, with dynamic free-shipping calculations.
  * **`ProductCard.tsx`**: borderless card with scale hover transition.
  * **`Accordion.tsx`**: Expandable details drawers with slide transitions.
* **`context/`**: Cart React state management (`CartContext.tsx`).
* **`data/`**: Product and Collection mock databases (`dummyData.ts`).
