import React from 'react';
import { Search, MessageCircle, Book, Mail, Phone, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';

const HelpSupport = () => {
  const faqItems = [
    {
      question: "How do I start a new security audit?",
      answer: "Navigate to Projects and click 'New Project'. Select 'Security Audit' and follow the setup wizard."
    },
    {
      question: "What types of vulnerabilities can Radar36 detect?",
      answer: "Our platform can identify SQL injection, XSS, CSRF, authentication bypasses, and many other security vulnerabilities."
    },
    {
      question: "How do I generate compliance reports?",
      answer: "Go to Projects, select your project, and use the 'Generate Report' feature to create compliance-ready documentation."
    },
    {
      question: "Can I customize the vulnerability scanning rules?",
      answer: "Yes, you can customize scanning rules in the project settings under 'Advanced Configuration'."
    }
  ];

  const resources = [
    {
      title: "Getting Started Guide",
      description: "Learn the basics of using Radar36",
      icon: Book,
      link: "#"
    },
    {
      title: "API Documentation",
      description: "Integrate Radar36 with your workflow",
      icon: ExternalLink,
      link: "#"
    },
    {
      title: "Best Practices",
      description: "Security testing best practices guide",
      icon: Book,
      link: "#"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      icon: ExternalLink,
      link: "#"
    }
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-8">
          <div className="max-w-6xl">
            <h2 className="text-2xl font-semibold mb-8">Help & Support</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact & Quick Actions */}
              <div className="lg:col-span-1 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5" />
                      Contact Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <Mail className="h-5 w-5" />
                      <div>
                        <p className="font-medium">Email Support</p>
                        <p className="text-sm text-muted-foreground">support@radar36.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <Phone className="h-5 w-5" />
                      <div>
                        <p className="font-medium">Phone Support</p>
                        <p className="text-sm text-muted-foreground">+1 (555) 123-RADAR</p>
                      </div>
                    </div>
                    <Button className="w-full">Start Live Chat</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {resources.map((resource, index) => {
                      const IconComponent = resource.icon;
                      return (
                        <div key={index} className="flex items-center gap-3 p-2 hover:bg-muted rounded-lg cursor-pointer">
                          <IconComponent className="h-4 w-4" />
                          <div className="flex-1">
                            <p className="font-medium text-sm">{resource.title}</p>
                            <p className="text-xs text-muted-foreground">{resource.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Search */}
                <Card>
                  <CardContent className="p-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search help articles..." className="pl-10" />
                    </div>
                  </CardContent>
                </Card>

                {/* FAQ */}
                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {faqItems.map((item, index) => (
                      <div key={index} className="border-b pb-4 last:border-b-0">
                        <h4 className="font-medium mb-2">{item.question}</h4>
                        <p className="text-sm text-muted-foreground">{item.answer}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Contact Form */}
                <Card>
                  <CardHeader>
                    <CardTitle>Submit a Support Ticket</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="Brief description of your issue" />
                      </div>
                      <div>
                        <Label htmlFor="priority">Priority</Label>
                        <Input id="priority" placeholder="Low, Medium, High" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea 
                        id="description" 
                        placeholder="Please describe your issue in detail..."
                        rows={6}
                      />
                    </div>
                    <Button>Submit Ticket</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HelpSupport;