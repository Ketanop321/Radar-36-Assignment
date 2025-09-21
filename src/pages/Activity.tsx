import React from 'react';
import { Clock, User, FileText, Shield, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';

const Activity = () => {
  const activities = [
    {
      id: 1,
      user: "Charlie Rodriguez",
      action: "Created new project",
      target: "TechCorp Security Audit",
      timestamp: "2 hours ago",
      type: "project",
      icon: FileText,
      avatar: "CR"
    },
    {
      id: 2,
      user: "Alex Johnson",
      action: "Found vulnerability",
      target: "SQL Injection in login form",
      timestamp: "4 hours ago",
      type: "vulnerability",
      icon: AlertTriangle,
      avatar: "AJ"
    },
    {
      id: 3,
      user: "Sarah Chen",
      action: "Updated security policy",
      target: "Access Control Guidelines",
      timestamp: "6 hours ago",
      type: "security",
      icon: Shield,
      avatar: "SC"
    },
    {
      id: 4,
      user: "Mike Wilson",
      action: "Completed compliance review",
      target: "GDPR Compliance Checklist",
      timestamp: "8 hours ago",
      type: "compliance",
      icon: FileText,
      avatar: "MW"
    },
    {
      id: 5,
      user: "Alex Johnson",
      action: "Started penetration test",
      target: "FinanceApp API Endpoints",
      timestamp: "1 day ago",
      type: "test",
      icon: Shield,
      avatar: "AJ"
    },
    {
      id: 6,
      user: "Charlie Rodriguez",
      action: "Generated security report",
      target: "Monthly Security Summary",
      timestamp: "2 days ago",
      type: "report",
      icon: FileText,
      avatar: "CR"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'vulnerability': return 'bg-red-500/20 text-red-700';
      case 'security': return 'bg-blue-500/20 text-blue-700';
      case 'compliance': return 'bg-green-500/20 text-green-700';
      case 'project': return 'bg-purple-500/20 text-purple-700';
      case 'test': return 'bg-orange-500/20 text-orange-700';
      case 'report': return 'bg-indigo-500/20 text-indigo-700';
      default: return 'bg-gray-500/20 text-gray-700';
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">Activity Feed</h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Last updated: Just now</span>
            </div>
          </div>

          <div className="space-y-4">
            {activities.map((activity) => {
              const IconComponent = activity.icon;
              return (
                <Card key={activity.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {activity.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold">{activity.user}</span>
                          <span className="text-muted-foreground">{activity.action}</span>
                          <Badge className={getTypeColor(activity.type)} variant="secondary">
                            {activity.type}
                          </Badge>
                        </div>
                        <p className="text-sm font-medium text-foreground">{activity.target}</p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.timestamp}</p>
                      </div>
                      <div className="p-2 bg-muted rounded-lg">
                        <IconComponent className="h-5 w-5" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Activity;