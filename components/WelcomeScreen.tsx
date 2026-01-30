
import React from 'react';
import { useTheme } from '../theme/ThemeConfig';
import { Icon, IconName } from './Icons';

interface WelcomeScreenProps {
  onLogin: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onLogin }) => {
  const theme = useTheme();

  return (
    <div 
      className="flex flex-col items-center w-full h-full px-8 py-12"
      style={{ backgroundColor: theme.colors.surface.base }}
    >
      {/* Top Section: Branding */}
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <img 
          src="https://sevenpeakssoftware.com/hubfs/Seven%20Peaks%20Assets/Brand/Clip%20path%20group.svg" 
          alt="Seven Peaks Logo" 
          className="w-full max-w-[280px] mb-10" 
        />
        <h1 
          className="font-medium max-w-[280px]"
          style={{ 
            ...theme.typography.headline.small,
            color: theme.colors.surface.on 
          }}
        >
          Launch Faster with the Seven Peaks Product Accelerator
        </h1>
      </div>

      {/* Bottom Section: Auth Actions */}
      <div className="w-full space-y-4 max-w-sm mb-8">
        {/* Primary Action */}
        <button 
          onClick={onLogin}
          className="w-full h-[52px] rounded-full font-semibold transition-all active:scale-95"
          style={{ 
            backgroundColor: theme.colors.primary.base,
            color: theme.colors.primary.on
          }}
        >
          Sign up with email
        </button>

        {/* Separator */}
        <div className="flex items-center gap-4 py-2">
          <div className="flex-1 h-[1px]" style={{ backgroundColor: theme.colors.outlineVariant }} />
          <span 
            className="font-medium"
            style={{ 
              fontSize: theme.typography.label.large.fontSize,
              color: theme.colors.surface.onVariant 
            }}
          >
            or
          </span>
          <div className="flex-1 h-[1px]" style={{ backgroundColor: theme.colors.outlineVariant }} />
        </div>

        {/* Secondary Actions */}
        <button 
          onClick={onLogin}
          className="w-full h-[52px] rounded-full border flex items-center justify-center gap-3 transition-all active:bg-black/5"
          style={{ 
            borderColor: theme.colors.outline,
            color: theme.colors.surface.onVariant
          }}
        >
          <Icon name={IconName.Mail} size={20} />
          <span className="font-semibold">Log in with email</span>
        </button>

        <button 
          onClick={onLogin}
          className="w-full h-[52px] rounded-full border flex items-center justify-center gap-3 transition-all active:bg-black/5"
          style={{ 
            borderColor: theme.colors.outline,
            color: theme.colors.surface.onVariant
          }}
        >
          {/* Google Icon Placeholder */}
          <div className="w-5 h-5 flex items-center justify-center rounded-sm bg-white overflow-hidden">
             <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4 grayscale opacity-70" />
          </div>
          <span className="font-semibold">Continue with Google</span>
        </button>
      </div>

      {/* Home Indicator Spacer (Android standard) */}
      <div className="h-4 w-full" />
    </div>
  );
};
