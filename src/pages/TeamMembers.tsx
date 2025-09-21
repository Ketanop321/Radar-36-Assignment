import React from 'react';
import { Plus, Search, Mail, Shield, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';

const TeamMembers = () => {
  const members = [
    {
      id: 1,
      name: "Charlie Rodriguez",
      email: "charlie@radar36.com",
      role: "Security Lead",
      department: "Security",
      projects: 8,
      status: "Active",
      avatar: "CR"
    },
    {
      id: 2,
      name: "Alex Johnson",
      email: "alex@radar36.com",
      role: "Penetration Tester",
      department: "Security",
      projects: 12,
      status: "Active",
      avatar: "AJ"
    },
    {
      id: 3,
      name: "Sarah Chen",
      email: "sarah@radar36.com",
      role: "Security Analyst",
      department: "Security",
      projects: 6,
      status: "Active",
      avatar: "SC"
    },
    {
      id: 4,
      name: "Mike Wilson",
      email: "mike@radar36.com",
      role: "Compliance Officer",
      department: "Compliance",
      projects: 4,
      status: "Away",
      avatar: "MW"
    }
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Security Lead': return 'bg-purple-500/20 text-purple-700';
      case 'Penetration Tester': return 'bg-red-500/20 text-red-700';
      case 'Security Analyst': return 'bg-blue-500/20 text-blue-700';
      case 'Compliance Officer': return 'bg-green-500/20 text-green-700';
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
            <h2 className="text-2xl font-semibold">Team Members</h2>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="mr-2 h-4 w-4" />
              Invite Member
            </Button>
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search team members..." className="pl-10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {members.map((member) => (
              <Card key={member.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <Badge className={getRoleColor(member.role)} variant="secondary">
                        {member.role}
                      </Badge>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${
                      member.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'
                    }`} />
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{member.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{member.department}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{member.projects} Active Projects</span>
                  </div>
                  <div className="pt-3 border-t">
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      member.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {member.status}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default TeamMembers;