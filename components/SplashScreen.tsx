
import React from 'react';
import { useTheme } from '../theme/ThemeConfig';

export const SplashScreen: React.FC = () => {
  const theme = useTheme();

  return (
    <div 
      className="flex items-center justify-center w-full h-full animate-fade-in"
      style={{ backgroundColor: theme.colors.surface.base }}
    >
      <div className="flex flex-col items-center gap-4">
        <div 
          className="w-12 h-1 rounded-full overflow-hidden relative"
          style={{ backgroundColor: theme.colors.primary.container }}
        >
          <div 
            className="absolute inset-y-0 left-0 animate-loading-bar w-full origin-left"
            style={{ backgroundColor: theme.colors.primary.base }}
          ></div>
        </div>
      </div>
      <style>{`
        @keyframes loading-bar {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .animate-loading-bar {
          animation: loading-bar 2s linear forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};
