
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './theme/ThemeConfig';
import { MainLayout } from './components/layout/MainLayout';
import { SplashScreen } from './components/SplashScreen';
import { WelcomeScreen } from './components/WelcomeScreen';
import { AccountManagementScreen } from './components/AccountManagementScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { useTheme } from './theme/ThemeConfig';
import { Icon, IconName } from './components/Icons';

type AppState = 'splash' | 'welcome' | 'dashboard';
type DashboardSubState = 'main' | 'account-management' | 'profile';

const HomeScreen: React.FC = () => {
  const theme = useTheme();

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full px-4 overflow-hidden">
      <img 
        src="https://sevenpeakssoftware.com/hubfs/Vertical=True%2c%20Horizontal=False%2c%20Type=Seven%20Peaks%2c%20Color=Dark.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.03] pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center gap-6 mb-12">
        <div className="w-48 h-48 relative flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path 
              d="M50 20 L85 80 Q87 85 80 85 L60 85 Q55 85 55 80 L50 70 Z" 
              fill="#E1E2E9" 
            />
            <path 
              d="M50 20 L15 80 Q13 85 20 85 L40 85 Q45 85 45 80 L50 70 Z" 
              fill="#E8F1FF" 
            />
          </svg>
        </div>
        
        <div 
          className="text-4xl font-black tracking-tighter opacity-20"
          style={{ color: theme.colors.secondary.base }}
        >
          SEVEN PEAKS
        </div>
      </div>
    </div>
  );
};

interface AccountItemProps {
  icon: IconName;
  label: string;
  isDestructive?: boolean;
  onClick?: () => void;
}

const AccountItem: React.FC<AccountItemProps> = ({ icon, label, isDestructive, onClick }) => {
  const theme = useTheme();
  return (
    <button 
      onClick={onClick}
      className="w-full flex items-center gap-4 px-6 h-16 active:bg-black/5 transition-colors border-b"
      style={{ borderColor: theme.colors.outlineVariant }}
    >
      <Icon 
        name={icon} 
        size={24} 
        color={isDestructive ? theme.colors.error.base : theme.colors.surface.onVariant} 
      />
      <span 
        className="flex-1 text-left font-medium"
        style={{ 
          fontSize: theme.typography.body.large.fontSize,
          color: isDestructive ? theme.colors.error.base : theme.colors.surface.on 
        }}
      >
        {label}
      </span>
      <Icon 
        name={IconName.ChevronRight} 
        size={20} 
        color={theme.colors.surface.onVariant} 
      />
    </button>
  );
};

const AccountScreen: React.FC<{onSignOut: () => void, onOpenMgmt: () => void}> = ({ onSignOut, onOpenMgmt }) => {
  const theme = useTheme();
  
  return (
    <div className="flex flex-col w-full h-full overflow-y-auto">
      <div className="flex items-center gap-4 px-6 py-8">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: theme.colors.surface.variant }}
        >
          <Icon name={IconName.User} size={32} color={theme.colors.outline} />
        </div>
        <div className="flex flex-col">
          <h2 
            className="font-semibold" 
            style={{ 
              fontSize: theme.typography.title.large.fontSize,
              color: theme.colors.secondary.base
            }}
          >
            John Doe
          </h2>
          <span 
            style={{ 
              fontSize: theme.typography.body.medium.fontSize,
              color: theme.colors.primary.base 
            }}
          >
            someone@email.com
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <AccountItem 
          icon={IconName.AccountManagement} 
          label="Account Management" 
          onClick={onOpenMgmt}
        />
        <AccountItem icon={IconName.Settings} label="App Setting" />
        <AccountItem icon={IconName.Legal} label="Legal & Regulatory" />
        <AccountItem icon={IconName.Legal} label="Subscription" />
        <AccountItem 
          icon={IconName.LogOut} 
          label="Sign Out" 
          isDestructive 
          onClick={onSignOut}
        />
      </div>
    </div>
  );
};

const AppContent: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('splash');
  const [dashboardSubState, setDashboardSubState] = useState<DashboardSubState>('main');
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    if (appState === 'splash') {
      const timer = setTimeout(() => {
        setAppState('welcome');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [appState]);

  if (appState === 'splash') {
    return <SplashScreen />;
  }

  if (appState === 'welcome') {
    return <WelcomeScreen onLogin={() => setAppState('dashboard')} />;
  }

  // Determine Title and Back action
  let title = activeTab === 'home' ? "Home" : "Account";
  let onBack: (() => void) | undefined = undefined;
  let hideBottomNav = false;

  if (activeTab === 'account') {
    if (dashboardSubState === 'account-management') {
      title = "Account Management";
      onBack = () => setDashboardSubState('main');
      hideBottomNav = true;
    } else if (dashboardSubState === 'profile') {
      title = "Profile";
      onBack = () => setDashboardSubState('account-management');
      hideBottomNav = true;
    }
  }

  return (
    <MainLayout 
      title={title} 
      activeTab={activeTab}
      onTabChange={(tab) => {
        setActiveTab(tab);
        setDashboardSubState('main'); 
      }}
      onBack={onBack}
      hideBottomNav={hideBottomNav}
    >
      {activeTab === 'home' ? (
        <HomeScreen />
      ) : (
        <>
          {dashboardSubState === 'main' && (
            <AccountScreen 
              onSignOut={() => setAppState('welcome')} 
              onOpenMgmt={() => setDashboardSubState('account-management')}
            />
          )}
          {dashboardSubState === 'account-management' && (
            <AccountManagementScreen onProfileClick={() => setDashboardSubState('profile')} />
          )}
          {dashboardSubState === 'profile' && (
            <ProfileScreen />
          )}
        </>
      )}
    </MainLayout>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
