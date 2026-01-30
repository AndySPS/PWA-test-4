
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './theme/ThemeConfig';
import { MainLayout } from './components/layout/MainLayout';
import { SplashScreen } from './components/SplashScreen';
import { WelcomeScreen } from './components/WelcomeScreen';
import { useTheme } from './theme/ThemeConfig';
import { Icon, IconName } from './components/Icons';

type AppState = 'splash' | 'welcome' | 'dashboard';

const HomeScreen: React.FC = () => {
  const theme = useTheme();

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full px-4 overflow-hidden">
      {/* Faded Background Image */}
      <img 
        src="https://sevenpeakssoftware.com/hubfs/Vertical=True%2c%20Horizontal=False%2c%20Type=Seven%20Peaks%2c%20Color=Dark.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.03] pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center gap-6 mb-12">
        {/* Stylized Logo Shape Removed per request */}
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
      className="w-full flex items-center gap-4 px-4 h-14 active:bg-black/5 transition-colors border-b"
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

const AccountScreen: React.FC<{onSignOut: () => void}> = ({ onSignOut }) => {
  const theme = useTheme();
  
  return (
    <div className="flex flex-col w-full h-full overflow-y-auto">
      {/* Profile Section */}
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

      {/* Navigation List */}
      <div className="flex flex-col px-2">
        <AccountItem icon={IconName.AccountManagement} label="Account Management" />
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

  return (
    <MainLayout 
      title={activeTab === 'home' ? "Home" : "Account"} 
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'home' ? (
        <HomeScreen />
      ) : (
        <AccountScreen onSignOut={() => setAppState('welcome')} />
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
