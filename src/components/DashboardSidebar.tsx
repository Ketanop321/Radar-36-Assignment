import React from 'react';
import { 
  BarChart3, 
  FolderOpen, 
  Users, 
  UserCheck, 
  Target, 
  FileText, 
  Activity, 
  Settings, 
  HelpCircle, 
  LogOut 
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  to: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200",
        isActive 
          ? "bg-dashboard-sidebar-active text-dashboard-sidebar-active-text" 
          : "text-dashboard-sidebar-text hover:bg-muted"
      )}
    >
      <Icon className="h-5 w-5" />
      <span className="font-medium">{label}</span>
    </Link>
  );
};

const DashboardSidebar: React.FC = () => {
  return (
    <div className="w-64 bg-dashboard-sidebar border-r border-border p-6 flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
          <span className="text-white text-sm font-bold">R</span>
        </div>
        <span className="text-lg font-semibold">Radar 36</span>
      </div>

      {/* Menu */}
      <div className="space-y-2 mb-8">
        <div className="text-xs font-semibold text-dashboard-sidebar-text mb-4">Menu</div>
        <SidebarItem icon={BarChart3} label="Dashboard" to="/" />
        <SidebarItem icon={FolderOpen} label="Projects" to="/projects" />
        <SidebarItem icon={Users} label="Clients" to="/clients" />
        <SidebarItem icon={UserCheck} label="Team Members" to="/team-members" />
        <SidebarItem icon={Target} label="Scope" to="/scope" />
        <SidebarItem icon={FileText} label="Files" to="/files" />
        <SidebarItem icon={Activity} label="Activity" to="/activity" />
      </div>

      {/* Generals */}
      <div className="space-y-2 flex-1">
        <div className="text-xs font-semibold text-dashboard-sidebar-text mb-4">Generals</div>
        <SidebarItem icon={Settings} label="Settings" to="/settings" />
        <SidebarItem icon={HelpCircle} label="Help & Support" to="/help-support" />
      </div>

      {/* Logout */}
      <div className="mt-auto">
        <SidebarItem icon={LogOut} label="Log out" to="/logout" />
      </div>
    </div>
  );
};

export default DashboardSidebar;