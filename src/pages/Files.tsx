import React from 'react';
import { Upload, Search, FileText, Download, Eye, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';

const Files = () => {
  const files = [
    {
      id: 1,
      name: "TechCorp_Security_Report.pdf",
      type: "Report",
      size: "2.4 MB",
      uploadDate: "2024-01-20",
      project: "TechCorp Security Audit",
      status: "Final"
    },
    {
      id: 2,
      name: "Vulnerability_Scan_Results.csv",
      type: "Data",
      size: "890 KB",
      uploadDate: "2024-01-18",
      project: "FinanceApp Penetration Test",
      status: "Processing"
    },
    {
      id: 3,
      name: "Network_Diagram.png",
      type: "Image",
      size: "1.2 MB",
      uploadDate: "2024-01-15",
      project: "Healthcare System Review",
      status: "Draft"
    },
    {
      id: 4,
      name: "Compliance_Checklist.docx",
      type: "Document",
      size: "456 KB",
      uploadDate: "2024-01-12",
      project: "TechCorp Security Audit",
      status: "Review"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Final': return 'bg-green-500/20 text-green-700';
      case 'Processing': return 'bg-blue-500/20 text-blue-700';
      case 'Draft': return 'bg-yellow-500/20 text-yellow-700';
      case 'Review': return 'bg-orange-500/20 text-orange-700';
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
            <h2 className="text-2xl font-semibold">Files & Documents</h2>
            <Button className="bg-primary hover:bg-primary/90">
              <Upload className="mr-2 h-4 w-4" />
              Upload File
            </Button>
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search files..." className="pl-10" />
          </div>

          <div className="grid gap-4">
            {files.map((file) => (
              <Card key={file.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-muted rounded-lg">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{file.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <span>{file.type}</span>
                          <span>{file.size}</span>
                          <span>{file.uploadDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="text-sm font-medium">{file.project}</p>
                        <Badge className={getStatusColor(file.status)} variant="secondary">
                          {file.status}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
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

export default Files;