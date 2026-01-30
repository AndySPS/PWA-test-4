
/**
 * Material 3 Design Tokens
 * Strictly following the M3 specification
 */

export const M3Colors = {
  primary: {
    base: '#006FFE',
    on: '#FFFFFF',
    container: '#D7E2FF',
    onContainer: '#001A41',
  },
  secondary: {
    base: '#0D3A74',
    on: '#FFFFFF',
    container: '#D1E4FF',
    onContainer: '#001D36',
  },
  tertiary: {
    base: '#7D5260',
    on: '#FFFFFF',
    container: '#FFD8E4',
    onContainer: '#31111D',
  },
  error: {
    base: '#B3261E',
    on: '#FFFFFF',
    container: '#F9DEDC',
    onContainer: '#410E0B',
  },
  surface: {
    base: '#FFFFFF', // Changed to pure white as per reference
    on: '#1D1B20',
    variant: '#F1F0F4',
    onVariant: '#49454F',
    container: '#F3F3F7',
  },
  outline: '#C4C7C5', // Standardized M3 outline color
  outlineVariant: '#E1E2EC',
  inverseSurface: '#313033',
  inverseOnSurface: '#F4EFF4',
};

// Fixed: renamed custom keys (size, weight, tracking, leading) to CSS standard keys for direct object spreading in React styles
export const M3Typography = {
  display: {
    large: { fontSize: '57px', fontWeight: '400', letterSpacing: '-0.25px', lineHeight: '64px' },
    medium: { fontSize: '45px', fontWeight: '400', letterSpacing: '0px', lineHeight: '52px' },
    small: { fontSize: '36px', fontWeight: '400', letterSpacing: '0px', lineHeight: '44px' },
  },
  headline: {
    large: { fontSize: '32px', fontWeight: '400', letterSpacing: '0px', lineHeight: '40px' },
    medium: { fontSize: '28px', fontWeight: '400', letterSpacing: '0px', lineHeight: '36px' },
    small: { fontSize: '24px', fontWeight: '400', letterSpacing: '0px', lineHeight: '32px' },
  },
  title: {
    large: { fontSize: '22px', fontWeight: '600', letterSpacing: '0px', lineHeight: '28px' }, // Made bolder for logo/titles
    medium: { fontSize: '16px', fontWeight: '500', letterSpacing: '0.15px', lineHeight: '24px' },
    small: { fontSize: '14px', fontWeight: '500', letterSpacing: '0.1px', lineHeight: '20px' },
  },
  body: {
    large: { fontSize: '16px', fontWeight: '400', letterSpacing: '0.5px', lineHeight: '24px' },
    medium: { fontSize: '14px', fontWeight: '400', letterSpacing: '0.25px', lineHeight: '20px' },
    small: { fontSize: '12px', fontWeight: '400', letterSpacing: '0.4px', lineHeight: '16px' },
  },
  label: {
    large: { fontSize: '14px', fontWeight: '500', letterSpacing: '0.1px', lineHeight: '20px' },
    medium: { fontSize: '12px', fontWeight: '500', letterSpacing: '0.5px', lineHeight: '16px' },
    small: { fontSize: '11px', fontWeight: '500', letterSpacing: '0.5px', lineHeight: '16px' },
  },
};

export const M3Spacing = (n: number) => `${n * 8}px`;

export const M3Shadows = {
  level1: '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
  level2: '0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
  level3: '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.30)',
};
