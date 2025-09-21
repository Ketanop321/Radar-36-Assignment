import React, { useState } from 'react';
import { Search, Sun, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import NotificationPanel from './NotificationPanel';

const DashboardHeader: React.FC = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <>
      <header className="bg-background border-b border-border px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold mb-1">Good Morning, Charlie</h1>
            <p className="text-muted-foreground">Here's an overview of your projects, vulnerabilities & more.</p>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search" 
                className="pl-10 w-64 bg-muted/50" 
              />
            </div>
            
            {/* Theme toggle */}
            <Button variant="ghost" size="icon">
              <Sun className="h-4 w-4" />
            </Button>
            
            {/* Notifications */}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>
      
      <NotificationPanel 
        isOpen={showNotifications} 
        onClose={() => setShowNotifications(false)} 
      />
    </>
  );
};

export default DashboardHeader;