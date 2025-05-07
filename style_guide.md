# Shorts Killer UI Style Guide

## Color Palette

- **Background Gradient:** `linear-gradient(135deg, #18181b 0%, #23272f 100%)`
- **Container Background:** `rgba(36, 39, 48, 0.95)`
- **Primary Accent:** `#0ff1ce` (cyan)
- **Secondary Accent:** `#5c5cff` (blue)
- **Text:** `#e0e7ef` (light gray)
- **Container Shadow:** `0 4px 32px 0 #0ff1ce33`
- **Button/Link Shadow:** `0 2px 8px 0 #0ff1ce22`

## Typography

- **Font Family:** `'Inter', 'Segoe UI', Arial, sans-serif`
- **Heading:** Bold, 2rem, gradient text
- **Body:** Regular, 1rem

## Border Radius

- **Container:** `1.25rem`
- **Button/Link:** `9999px` (fully rounded) or `0.75rem` for smaller elements

## Box Shadows

- **Container:** `0 4px 32px 0 #0ff1ce33`
- **Button/Link:** `0 2px 8px 0 #0ff1ce22`

## Gradients

- **Heading/Text:** `linear-gradient(90deg, #0ff1ce 0%, #5c5cff 100%)`
- **Button/Link:** `linear-gradient(90deg, #23272f 0%, #0ff1ce 100%)` (default), `linear-gradient(90deg, #0ff1ce 0%, #5c5cff 100%)` (hover)

## Buttons & Links

- **Primary Link/Button:**
  - Background: Gradient
  - Text: Light gray
  - Border: None or accent color
  - Hover: Invert gradient, text dark
  - Padding: `0.5rem 1.25rem`
  - Font-weight: 600

## Utility Class Equivalents (Tailwind-like)

- `bg-gradient-dark`: `background: linear-gradient(135deg, #18181b 0%, #23272f 100%)`
- `bg-container`: `background: rgba(36, 39, 48, 0.95)`
- `text-gradient`: `background: linear-gradient(90deg, #0ff1ce 0%, #5c5cff 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;`
- `rounded-xl`: `border-radius: 1.25rem`
- `rounded-full`: `border-radius: 9999px`
- `shadow-cyan`: `box-shadow: 0 4px 32px 0 #0ff1ce33`
- `shadow-cyan-sm`: `box-shadow: 0 2px 8px 0 #0ff1ce22`
- `text-light`: `color: #e0e7ef`
- `accent-cyan`: `color: #0ff1ce`
- `accent-blue`: `color: #5c5cff`

## Usage Notes

- Use the dark gradient background for all main pages and popups.
- Use the container style for cards, popups, and settings panels.
- Use gradient text for headings.
- Use rounded corners and soft shadows for a modern, friendly look.
- Accent colors should be used for interactive elements (links, buttons, toggles).
- Maintain high contrast for accessibility.
