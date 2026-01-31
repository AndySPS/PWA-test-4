
import React, { ReactNode } from 'react';
import { useTheme } from '../../theme/ThemeConfig';
import { Icon, IconName } from '../Icons';

interface MainLayoutProps {
  title: string;
  children: ReactNode;
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  onMenuClick?: () => void;
  onBack?: () => void;
  hideBottomNav?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ 
  title, 
  children, 
  activeTab = 'home',
  onTabChange,
  onMenuClick,
  onBack,
  hideBottomNav = false
}) => {
  const theme = useTheme();

  return (
    <div className="flex flex-col h-screen w-full overflow-hidden" style={{ backgroundColor: theme.colors.surface.base }}>
      {/* Top App Bar (M3 Center-aligned style with optional back button) */}
      <header 
        className="flex items-center px-4 h-16 shrink-0 z-10"
        style={{ color: theme.colors.surface.on }}
      >
        <div className="w-12 flex items-center justify-start">
          {onBack && (
            <button 
              onClick={onBack}
              className="p-2 rounded-full active:bg-black/5 outline-none"
            >
              <Icon name={IconName.Back} size={24} color={theme.colors.surface.on} />
            </button>
          )}
        </div>
        <h1 
          className="flex-1 text-center font-normal"
          style={{ 
            fontSize: theme.typography.title.large.fontSize,
            lineHeight: theme.typography.title.large.lineHeight,
            color: '#1D1B20'
          }}
        >
          {title}
        </h1>
        <div className="w-12" /> {/* Right spacer for symmetry */}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden relative">
        {children}
      </main>

      {/* Navigation Bar (Bottom Nav) */}
      {!hideBottomNav && (
        <nav 
          className="h-20 flex justify-around items-center px-8 pb-safe z-20 border-t"
          style={{ 
            backgroundColor: theme.colors.surface.base,
            borderColor: theme.colors.outlineVariant
          }}
        >
          <NavItem 
            label="Home" 
            icon={IconName.Home} 
            active={activeTab === 'home'} 
            onClick={() => onTabChange?.('home')} 
          />
          <NavItem 
            label="Account" 
            icon={IconName.User} 
            active={activeTab === 'account'} 
            onClick={() => onTabChange?.('account')} 
          />
        </nav>
      )}
    </div>
  );
};

interface NavItemProps {
  label: string;
  icon: IconName;
  active: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, icon, active, onClick }) => {
  const theme = useTheme();

  return (
    <button 
      onClick={onClick}
      className="flex flex-col items-center justify-center w-24 h-full outline-none"
    >
      <div 
        className={`w-16 h-8 rounded-full flex items-center justify-center transition-all duration-200`}
        style={{ 
          backgroundColor: active ? '#D7E2FF' : 'transparent' 
        }}
      >
        <Icon 
          name={icon} 
          size={24}
          color={active ? theme.colors.secondary.base : theme.colors.surface.onVariant} 
        />
      </div>
      <span 
        className="mt-1 font-medium transition-colors"
        style={{ 
          fontSize: theme.typography.label.medium.fontSize,
          color: active ? theme.colors.secondary.base : theme.colors.surface.onVariant
        }}
      >
        {label}
      </span>
    </button>
  );
};
