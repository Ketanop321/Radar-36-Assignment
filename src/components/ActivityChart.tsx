import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const data = [
  { name: 'Jan', value: 18 },
  { name: 'Feb', value: 32 },
  { name: 'Mar', value: 22 },
  { name: 'Apr', value: 35 },
  { name: 'May', value: 15 },
  { name: 'Jun', value: 28 },
  { name: 'Jul', value: 18 },
  { name: 'Aug', value: 30 },
  { name: 'Sep', value: 22 },
  { name: 'Oct', value: 38 },
  { name: 'Nov', value: 26 },
  { name: 'Dec', value: 28 },
];

const ActivityChart: React.FC = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Projects Activity</CardTitle>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          2025 <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#888' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#888' }}
            />
            <Bar 
              dataKey="value" 
              radius={[8, 8, 0, 0]}
              fill="hsl(var(--activity-primary))"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ActivityChart;