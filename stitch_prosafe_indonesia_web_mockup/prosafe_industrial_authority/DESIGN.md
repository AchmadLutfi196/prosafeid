---
name: ProSafe Industrial Authority
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
  on-surface-variant: '#43474e'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0ef'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#476083'
  primary: '#000613'
  on-primary: '#ffffff'
  primary-container: '#001f3f'
  on-primary-container: '#6f88ad'
  inverse-primary: '#afc8f0'
  secondary: '#5c5f60'
  on-secondary: '#ffffff'
  secondary-container: '#e1e3e4'
  on-secondary-container: '#626566'
  tertiary: '#0e0300'
  on-tertiary: '#ffffff'
  tertiary-container: '#351600'
  on-tertiary-container: '#d36900'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#afc8f0'
  on-primary-fixed: '#001c3a'
  on-primary-fixed-variant: '#2f486a'
  secondary-fixed: '#e1e3e4'
  secondary-fixed-dim: '#c5c7c8'
  on-secondary-fixed: '#191c1d'
  on-secondary-fixed-variant: '#454748'
  tertiary-fixed: '#ffdcc7'
  tertiary-fixed-dim: '#ffb787'
  on-tertiary-fixed: '#311300'
  on-tertiary-fixed-variant: '#723600'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
  safety-orange: '#FF851B'
  alert-red: '#FF4136'
  surface-gray: '#F8F9FA'
  deep-navy: '#001F3F'
  ink-black: '#0A0A0A'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-xl-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-padding: 80px
---

## Brand & Style

This design system establishes a high-authority, industrial-grade visual language for national OHS (K3) training and certification. The brand personality is **formal, competent, and solution-oriented**, reflecting the gravity of workplace safety while remaining **approachable** for trainees and corporate partners.

The design style is **Corporate / Modern with Industrial accents**. It utilizes a structured, high-contrast aesthetic that prioritizes clarity and immediate recognition. By combining generous whitespace with rigid grid structures and safety-themed iconography, the system evokes a "premium safety" feel—moving away from cluttered government portals toward a modern, efficient certification ecosystem.

**Key Visual Principles:**
- **Clarity First:** No decorative elements without functional purpose; every line and color serves a hierarchy.
- **Safety Utility:** Use of bold borders and "safety signal" colors for critical actions.
- **Corporate Scale:** Large-scale navigation systems (mega-menus) to manage complex branched certification categories.

## Colors

The palette is rooted in industrial tradition but refined for digital professional services.

- **Primary (Deep Navy):** Represents stability, trust, and institutional authority. Used for headers, primary navigation backgrounds, and high-level typography.
- **Accent (Safety Orange):** Reserved strictly for Primary CTAs (e.g., "Register Now") and critical progress indicators. It provides high-visibility contrast against the Navy and White.
- **Alert Red:** Used exclusively for urgent safety alerts, expiring certifications, or required fields.
- **Secondary (Light Gray):** Provides structural separation through cards, subtle borders, and background layering without adding visual noise.
- **Neutral (Ink Black/White):** High-contrast foundation for maximum legibility.

## Typography

This system pairs **Montserrat** for headlines with **Inter** for body content to balance industrial strength with modern utility.

- **Headlines (Montserrat):** Geometric and bold. Use `headline-xl` for landing hero sections. Ensure H1s are always bold to convey a sense of authority.
- **Body (Inter):** Highly legible at all sizes. Use `body-md` as the standard for all course descriptions and documentation.
- **Labels:** Use uppercase with increased letter spacing for category tags (e.g., "K3 UMUM", "K3 KONSTRUKSI") to mimic industrial labeling systems.

## Layout & Spacing

The layout utilizes a **Fixed Grid** system for desktop and a **Fluid Grid** for mobile.

- **Mega Menus:** Inspired by complex directory structures, the navigation uses a multi-column mega menu to categorize certifications by industry (Construction, Electricity, Fire Safety, etc.).
- **Rhythm:** A strict 8px base grid ensures alignment across dense data tables and forms.
- **White Space:** Generous vertical padding (`section-padding`) between content blocks prevents the "government portal" clutter and reinforces the premium nature of the training.
- **Breakpoints:**
  - Desktop: 1280px container with 12 columns.
  - Tablet: 768px with 8 columns, 24px margins.
  - Mobile: 4 columns, 16px margins, vertical stacking for all cards.

## Elevation & Depth

This design system uses **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows to maintain a clean, professional appearance.

- **Level 0 (Background):** Pure White (#FFFFFF) for primary content areas.
- **Level 1 (Sub-surface):** Light Gray (#F8F9FA) used for section backgrounds and card containers to provide subtle separation.
- **Level 2 (Interactive):** 1px borders in a darker gray (#E5E7EB) define form fields and card boundaries.
- **Shadows:** Use only one "Soft Ambient" shadow for active elements (hovered cards or modals): `0px 10px 15px -3px rgba(0, 31, 63, 0.1)`. Note the subtle Navy tint in the shadow to maintain brand harmony.

## Shapes

The shape language is **Soft (0.25rem)**, reflecting a professional and structured environment.

- **Standard Radius:** 4px (Soft) for buttons, inputs, and small cards. This conveys precision and technical reliability.
- **Large Radius:** 8px for main content containers and certification badges.
- **Iconography:** Use geometric, "shield-like" shapes. Icons should be encased in circular or hexagonal frames when used as primary feature drivers.

## Components

- **Buttons:** 
  - *Primary:* Safety Orange background, White text, bold Montserrat. Used for "Book Training."
  - *Secondary:* Deep Navy background or border. Used for "View Details" or "Download Syllabus."
- **Input Fields:** 1px solid gray borders that turn Deep Navy on focus. Labels should use the `label-bold` typography style.
- **Certification Cards:** Feature a top-border accent color corresponding to the training category. Include a clear "Status" chip (e.g., "KEMNAKER Certified").
- **Client Logos:** Displayed in a grayscale strip. On hover, the logo transitions to its full brand color with a subtle scale-up effect.
- **Safety Icons:** Line-art style with a consistent 2px stroke weight. Use shields, helmets, and checklists to reinforce the OHS theme.
- **Mega Menu:** A full-width dropdown with clear category headings and bulleted lists for specific certification types.