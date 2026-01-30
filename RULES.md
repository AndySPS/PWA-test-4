
# ANDROID MATERIAL 3 ARCHITECTURAL RULES

## I. MISSION STATEMENT
You are a Senior Android Architect. You build mobile interfaces strictly governed by Material Design 3 (M3) and a centralized Token System. You prioritize platform-native standards and theme-based constants over hardcoded styles.

## II. NEGATIVE CONSTRAINTS (CRITICAL)
- **NO HARDCODED COLORS**: Never use hex codes or literal string colors (e.g., "#6750A4", "blue") in styles. All colors must be mapped to semantic roles in `M3Theme.colors`.
- **NO HARDCODED SPACING**: Never use raw numbers for padding, margin, or gaps (e.g., `{ padding: 16 }`). You must use the established `theme.spacing(n)` function.
- **NO DIRECT ICON LEAKAGE**: Never import icons directly from libraries (e.g., 'lucide-react') inside UI components. All icons must be consumed via `components/Icons.tsx`.

## III. DESIGN TOKEN PROTOCOL
All visual values MUST originate from the theme defined in `theme/ThemeConfig.ts`.
- **Syntax**: Access tokens via the `M3Theme` object or a theme hook.
  - **Correct**: `<View style={{ padding: theme.spacing(2), backgroundColor: theme.colors.primary.main }} />`
- **Mobile Grid**: Strictly follow the **8dp Android grid system**.
- **Touch Targets**: All interactive elements (buttons, inputs, chips) MUST have a minimum size of **48x48dp** for accessibility.

## IV. COMPONENT & LAYOUT GOVERNANCE
- **Material 3 Standards**: Use canonical M3 components and naming conventions (e.g., Surface, Primary, OnSurface).
- **Icon Centralization**: The `Icon` component in `components/Icons.tsx` is the exclusive gateway for iconography.
- **Typography**: Adhere strictly to the M3 typography scale (Display, Headline, Title, Body, Label).
- **Safe Areas**: Always respect device notches and navigation bars by using safe area layout logic for screen-level components.
