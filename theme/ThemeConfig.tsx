
import React, { createContext, useContext, useMemo, ReactNode } from 'react';
import { M3Colors, M3Typography, M3Spacing, M3Shadows } from './tokens';

interface ThemeContextType {
  colors: typeof M3Colors;
  typography: typeof M3Typography;
  spacing: (n: number) => string;
  shadows: typeof M3Shadows;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const value = useMemo(() => ({
    colors: M3Colors,
    typography: M3Typography,
    spacing: M3Spacing,
    shadows: M3Shadows,
  }), []);

  // Inject CSS variables for Tailwind integration where necessary
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--m3-primary', M3Colors.primary.base);
    root.style.setProperty('--m3-on-primary', M3Colors.primary.on);
    root.style.setProperty('--m3-surface', M3Colors.surface.base);
    root.style.setProperty('--m3-surface-variant', M3Colors.surface.variant);
    root.style.setProperty('--m3-on-surface', M3Colors.surface.on);
    root.style.setProperty('--m3-on-surface-variant', M3Colors.surface.onVariant);
  }, []);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
