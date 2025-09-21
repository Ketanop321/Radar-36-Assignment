import React from 'react';
import { Plus, Search, Target, Globe, Server, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';

const Scope = () => {
  const scopeItems = [
    {
      id: 1,
      name: "Web Application",
      target: "https://app.techcorp.com",
      type: "Web",
      status: "In Scope",
      priority: "High",
      description: "Main customer-facing web application",
      icon: Globe
    },
    {
      id: 2,
      name: "API Gateway",
      target: "api.techcorp.com",
      type: "API",
      status: "In Scope",
      priority: "Critical",
      description: "REST API endpoints for mobile app",
      icon: Server
    },
    {
      id: 3,
      name: "Mobile App",
      target: "TechCorp iOS/Android",
      type: "Mobile",
      status: "Out of Scope",
      priority: "Medium",
      description: "Customer mobile application",
      icon: Smartphone
    },
    {
      id: 4,
      name: "Admin Panel",
      target: "admin.techcorp.com",
      type: "Web",
      status: "In Scope",
      priority: "High",
      description: "Internal administration interface",
      icon: Globe
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Scope': return 'bg-green-500/20 text-green-700';
      case 'Out of Scope': return 'bg-red-500/20 text-red-700';
      case 'Pending': return 'bg-yellow-500/20 text-yellow-700';
      default: return 'bg-gray-500/20 text-gray-700';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'bg-red-500/20 text-red-700';
      case 'High': return 'bg-orange-500/20 text-orange-700';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-700';
      case 'Low': return 'bg-blue-500/20 text-blue-700';
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
            <h2 className="text-2xl font-semibold">Scope Management</h2>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="mr-2 h-4 w-4" />
              Add Target
            </Button>
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search targets..." className="pl-10" />
          </div>

          <div className="grid gap-6">
            {scopeItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Card key={item.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-muted rounded-lg">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{item.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{item.target}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Badge className={getStatusColor(item.status)}>
                          {item.status}
                        </Badge>
                        <Badge className={getPriorityColor(item.priority)}>
                          {item.priority}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-sm">
                          <span className="text-muted-foreground">Type: </span>
                          <span className="font-medium">{item.type}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">{item.description}</p>
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

export default Scope;