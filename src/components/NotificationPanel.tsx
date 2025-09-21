import React from 'react';
import { X, AlertTriangle, UserPlus, Bug, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const notifications = [
  {
    type: 'bug',
    icon: Bug,
    title: 'You fixed a bug.',
    time: 'Just now',
    color: 'text-red-500'
  },
  {
    type: 'user',
    icon: UserPlus,
    title: 'New user registered.',
    time: '59 minutes ago',
    color: 'text-blue-500'
  },
  {
    type: 'bug',
    icon: Bug,
    title: 'You fixed a bug.',
    time: '12 hours ago',
    color: 'text-red-500'
  },
  {
    type: 'subscription',
    icon: Users,
    title: 'Andi Lane subscribed to you.',
    time: 'Today, 11:59 AM',
    color: 'text-green-500'
  },
  {
    type: 'user',
    icon: UserPlus,
    title: 'New user registered.',
    time: '59 minutes ago',
    color: 'text-blue-500'
  },
  {
    type: 'bug',
    icon: Bug,
    title: 'You fixed a bug.',
    time: '12 hours ago',
    color: 'text-red-500'
  },
  {
    type: 'subscription',
    icon: Users,
    title: 'Andi Lane subscribed to you.',
    time: 'Today, 11:59 AM',
    color: 'text-green-500'
  },
  {
    type: 'user',
    icon: UserPlus,
    title: 'New user registered.',
    time: '59 minutes ago',
    color: 'text-blue-500'
  },
  {
    type: 'bug',
    icon: Bug,
    title: 'You fixed a bug.',
    time: '12 hours ago',
    color: 'text-red-500'
  },
  {
    type: 'subscription',
    icon: Users,
    title: 'Andi Lane subscribed to you.',
    time: 'Today, 11:59 AM',
    color: 'text-green-500'
  },
  {
    type: 'user',
    icon: UserPlus,
    title: 'New user registered.',
    time: '59 minutes ago',
    color: 'text-blue-500'
  },
];

const NotificationPanel: React.FC<NotificationPanelProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40" 
          onClick={onClose}
        />
      )}
      
      {/* Panel */}
      <div className={cn(
        "fixed top-0 right-0 h-full w-80 bg-background border-l border-border z-50 transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Notifications</h3>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-4 max-h-[80vh] overflow-y-auto">
            {notifications.map((notification, index) => (
              <div key={index} className="flex items-start gap-3 p-3 hover:bg-muted/50 rounded-lg cursor-pointer">
                <div className={cn("p-2 rounded-full bg-muted", notification.color)}>
                  <notification.icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{notification.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationPanel;