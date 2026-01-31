
import React from 'react';
import { useTheme } from '../theme/ThemeConfig';
import { Icon, IconName } from './Icons';

interface AccountManagementItemProps {
  icon: IconName;
  label: string;
  isDestructive?: boolean;
  onClick?: () => void;
}

const AccountManagementItem: React.FC<AccountManagementItemProps> = ({ icon, label, isDestructive, onClick }) => {
  const theme = useTheme();
  return (
    <button 
      onClick={onClick}
      className="w-full flex items-center gap-4 px-6 h-[72px] active:bg-black/5 transition-colors"
      style={{ 
        borderColor: theme.colors.outlineVariant,
        borderBottomWidth: '1px'
      }}
    >
      <div className="shrink-0">
        <Icon 
          name={icon} 
          size={24} 
          color={isDestructive ? theme.colors.error.base : theme.colors.surface.onVariant} 
        />
      </div>
      <span 
        className="flex-1 text-left"
        style={{ 
          fontSize: theme.typography.body.large.fontSize,
          color: isDestructive ? theme.colors.error.base : theme.colors.surface.on,
          fontWeight: '400'
        }}
      >
        {label}
      </span>
      <Icon 
        name={IconName.ChevronRight} 
        size={16} 
        color={theme.colors.surface.onVariant} 
      />
    </button>
  );
};

export const AccountManagementScreen: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col pt-2">
        <AccountManagementItem 
          icon={IconName.User} 
          label="Profile" 
        />
        <AccountManagementItem 
          icon={IconName.Password} 
          label="Change Password" 
        />
        <AccountManagementItem 
          icon={IconName.Delete} 
          label="Delete Account" 
          isDestructive 
        />
      </div>
    </div>
  );
};
