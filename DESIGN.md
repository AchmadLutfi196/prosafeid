---
name: ProSafe Indonesia
description: Visual Design System for ProSafe Indonesia Training & Certification
colors:
  primary: "#0F172A"
  secondary: "#334155"
  cta: "#0369A1"
  background: "#F8FAFC"
  text: "#020617"
  safety-orange: "#FF851B"
  deep-navy: "#001F3F"
typography:
  display:
    fontFamily: "Poppins, sans-serif"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Open Sans, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.cta}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
---

# Design System: ProSafe Indonesia

## 1. Overview

**Creative North Star: "The Industrial Shield"**

The ProSafe Indonesia visual system is engineered to project professional authority, safety-first trust, and expert confidence. Built for B2B decision-makers, HR managers, and corporate safety officers, the interface emphasizes solid, trustworthy layout blocks with sharp structural alignments. By blending Poppins for high-impact headlines and Open Sans for highly readable body text, the system delivers structured information with zero visual fatigue. 

The aesthetic rejects playful elements, neon gradients, and unstructured card grids. Instead, it relies on strict grid layouts, clean borders, and high-visibility CTAs that ensure frictionless paths to certification.

**Key Characteristics:**
- High contrast, navy-grounded professional hierarchy.
- Clear structural grids, badges, and trust metrics.
- Tactile interactives using smooth 200ms easing transitions.
- Highly legible type pairing of Poppins and Open Sans.

## 2. Colors

The color palette is selected to command authority while providing strong conversion signals via ocean-blue accents and brand-consistent safety highlights.

### Primary
- **High-Authority Deep Slate Navy** (`#0F172A` / `--color-primary`): Primary brand color used for navigation backgrounds, major card headings, and dark hero blocks.

### Secondary
- **Steel Blue Slate** (`#334155` / `--color-secondary`): Used for subheadings, descriptive texts, and secondary actions.

### CTA/Accent
- **Safety Ocean Blue** (`#0369A1` / `--color-cta`): The primary conversion color. Used exclusively for active links, buttons, and call-to-actions.

### Neutral
- **Clean Slate White** (`#F8FAFC` / `--color-background`): The global backdrop color for clean, breathing layouts.
- **Slate Ink Black** (`#020617` / `--color-text`): The primary text color for optimal contrast and readability.

### Named Rules
**The 10% CTA Rule.** The ocean-blue accent (`#0369A1`) and safety-orange highlight (`#FF851B`) are used on less than 10% of any given screen. Their scarcity ensures instant user focus on conversion buttons.

## 3. Typography

**Display Font:** Poppins (with sans-serif fallback)
**Body Font:** Open Sans (with sans-serif fallback)

**Character:** Bold, geometric Poppins headings command immediate attention with a corporate tone, while humanist Open Sans body copy provides approachable, readable prose.

### Hierarchy
- **Display** (Bold, 32px to 48px, 1.2): Hero titles and large statistics.
- **Headline** (Semi-Bold, 24px to 30px, 1.3): Major page sections and header banners.
- **Title** (Semi-Bold, 18px to 22px, 1.4): Card headers, list groups, and form titles.
- **Body** (Regular, 14px to 16px, 1.6): Paragraphs, descriptions, and user inputs. Max line length: 70ch.
- **Label** (Semi-Bold, 12px, 1.2, uppercase): Form labels, badges, and small tags.

## 4. Elevation

The system uses flat layers at rest with clean, subtle border outlines, using shadows strictly to highlight active states and overlay containers.

### Shadow Vocabulary
- **Subtle Lift** (`0 1px 2px rgba(0,0,0,0.05)`): Applied to inputs and basic flat elements.
- **Interactive Card** (`0 4px 6px rgba(0,0,0,0.1)`): Standard card shadow that lifts on hover.
- **Floating overlay** (`0 20px 25px rgba(0,0,0,0.15)`): Applied to dropdowns, modals, and sticky layouts.

### Named Rules
**The Flat-at-Rest Rule.** Containers and elements are flat with subtle borders at rest. Shadows and depth appear primarily as a dynamic response to user interactions (hover, active focus).

## 5. Components

### Buttons
- **Shape:** Rounded corners with a medium radius (8px).
- **Primary:** Background `#0369A1`, text `#FFFFFF`, bold weight (600), transition `all 200ms ease`.
- **Hover / Focus:** Opacity 90%, translate-y by -1px. Focus rings have 3px transparent outline with `#0369A1` glow.
- **Secondary:** Transparent background, text `#0F172A`, border `2px solid #0F172A`.

### Cards
- **Corner Style:** Rounded corners with a large radius (12px).
- **Background:** `#F8FAFC` or `#FFFFFF`.
- **Shadow Strategy:** Interactive card shadows (`--shadow-md` lifting to `--shadow-lg` on hover).
- **Border:** 1px solid border matching outline variants.

### Inputs / Fields
- **Style:** 1px solid `#E2E8F0` border, 8px border-radius, font size 16px.
- **Focus:** Border changes to `#0F172A`, outline none, box shadow `0 0 0 3px rgba(15, 23, 42, 0.12)`.

### Navigation
- **Style:** Sticky dark navy navigation (`#0F172A`) or clean white header with high contrast links. Hover states feature underline slide transitions or background fills.

## 6. Do's and Don'ts

### Do:
- **Do** use Poppins for headings and Open Sans for body copy.
- **Do** ensure all clickable elements have `cursor-pointer` and 150-300ms hover transitions.
- **Do** use verified badges and certification marks to build authority.
- **Do** maintain a minimum 4.5:1 text-to-background contrast ratio.

### Don't:
- **Don't** use playful emojis as icons; use professional SVG paths.
- **Don't** use neon pink, purple, or generic AI-style gradients.
- **Don't** allow layout shifts during hover transformations.
- **Don't** hide training credentials, badges, or contact numbers behind convoluted click steps.
