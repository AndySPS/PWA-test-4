
import React from 'react';
import { 
  Home, 
  Settings, 
  User, 
  Search, 
  Menu, 
  ArrowLeft, 
  Plus, 
  Check, 
  X,
  Bell,
  Info,
  ChevronRight,
  LayoutGrid,
  Mail,
  LogIn,
  UserCog,
  FileText,
  LogOut
} from 'lucide-react';

export enum IconName {
  Home = 'home',
  Settings = 'settings',
  User = 'user',
  Search = 'search',
  Menu = 'menu',
  Back = 'back',
  Add = 'add',
  Check = 'check',
  Close = 'close',
  Notifications = 'notifications',
  Info = 'info',
  ChevronRight = 'chevron-right',
  Dashboard = 'dashboard',
  Mail = 'mail',
  LogIn = 'login',
  AccountManagement = 'account-management',
  Legal = 'legal',
  LogOut = 'logout'
}

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
}

const iconMap: Record<IconName, React.FC<any>> = {
  [IconName.Home]: Home,
  [IconName.Settings]: Settings,
  [IconName.User]: User,
  [IconName.Search]: Search,
  [IconName.Menu]: Menu,
  [IconName.Back]: ArrowLeft,
  [IconName.Add]: Plus,
  [IconName.Check]: Check,
  [IconName.Close]: X,
  [IconName.Notifications]: Bell,
  [IconName.Info]: Info,
  [IconName.ChevronRight]: ChevronRight,
  [IconName.Dashboard]: LayoutGrid,
  [IconName.Mail]: Mail,
  [IconName.LogIn]: LogIn,
  [IconName.AccountManagement]: UserCog,
  [IconName.Legal]: FileText,
  [IconName.LogOut]: LogOut,
};

export const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'currentColor', className }) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <IconComponent size={size} color={color} className={className} />;
};
