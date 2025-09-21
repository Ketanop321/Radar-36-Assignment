import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const data = [
  { name: 'Web', value: 18, color: 'hsl(var(--chart-web))' },
  { name: 'API', value: 30, color: 'hsl(var(--chart-api))' },
  { name: 'Cloud', value: 22, color: 'hsl(var(--chart-cloud))' },
  { name: 'Network', value: 35, color: 'hsl(var(--chart-network))' },
  { name: 'Android', value: 15, color: 'hsl(var(--chart-android))' },
  { name: 'Other', value: 28, color: 'hsl(var(--chart-other))' },
];

const ProjectsChart: React.FC = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Projects by Type</CardTitle>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          Aug <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
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
            <Bar dataKey="value" radius={[8, 8, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ProjectsChart;