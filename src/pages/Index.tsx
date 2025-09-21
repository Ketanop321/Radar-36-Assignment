import React from 'react';
import { FolderOpen, Clock, Shield, Users, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';
import MetricCard from '@/components/MetricCard';
import ProjectsChart from '@/components/ProjectsChart';
import VulnerabilitiesChart from '@/components/VulnerabilitiesChart';
import ActivityChart from '@/components/ActivityChart';
import MembersActivity from '@/components/MembersActivity';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-8">
          {/* Dashboard Overview Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">Dashboard Overview</h2>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                This Month <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Export Report
              </Button>
            </div>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            <MetricCard
              title="Total Projects"
              value="7,265"
              change="+11.01%"
              isPositive={true}
              icon={FolderOpen}
              bgColor="bg-metric-total-projects"
            />
            <MetricCard
              title="Active Projects"
              value="3,671"
              change="-0.03%"
              isPositive={false}
              icon={Clock}
              bgColor="bg-metric-active-projects"
            />
            <MetricCard
              title="Vulnerabilities"
              value="156"
              change="+15.03%"
              isPositive={true}
              icon={Shield}
              bgColor="bg-metric-vulnerabilities"
            />
            <MetricCard
              title="Clients"
              value="2,318"
              change="+6.08%"
              isPositive={true}
              icon={Users}
              bgColor="bg-metric-clients"
            />
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
            <ProjectsChart />
            <VulnerabilitiesChart />
          </div>

          {/* Activity Chart */}
          <div className="mb-8">
            <ActivityChart />
          </div>

          {/* Members Activity */}
          <MembersActivity />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
