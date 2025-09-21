import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const activities = [
  {
    name: 'Natali Craig',
    action: 'You have a bug that needs to be fixed',
    time: 'Just now',
    avatar: 'NC'
  },
  {
    name: 'Andi Lane',
    action: 'Released a new version',
    time: '59 minutes ago',
    avatar: 'AL'
  },
  {
    name: 'Drew Cano',
    action: 'Modified A data in Page X',
    time: 'Today, 11:59 AM',
    avatar: 'DC'
  }
];

const MembersActivity: React.FC = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Members Activities</CardTitle>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          View Full Details <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                  {activity.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium text-sm">{activity.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{activity.action}</p>
                <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MembersActivity;