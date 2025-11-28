import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Layout,
    CheckSquare,
    Target,
    FileText,
    Receipt,
    Users2,
    MessageSquare,
    BarChart3,
    FolderOpen,
    Palette
} from "lucide-react";

const features = [
    {
        title: "Project Management",
        headline: "Complete Project Control",
        description: "Organize your work with powerful project management tools. Create projects, break them down into tasks, assign team members, and track progress with multiple visualization options.",
        keyFeatures: ["Kanban Board", "Gantt Charts", "Calendar Integration", "File Management", "Project Sharing", "Activity Tracking"],
        icon: Layout
    },
    {
        title: "Task Management",
        headline: "Stay on Top of Every Task",
        description: "Never miss a deadline. Create, assign, and track tasks with priority levels, due dates, and status updates. Filter and search to find exactly what you need.",
        keyFeatures: ["Rich Descriptions", "Priority Levels", "Status Tracking", "Team Assignment", "Due Dates", "Filtering & Search"],
        icon: CheckSquare
    },
    {
        title: "Lead Management (CRM)",
        headline: "Convert Leads into Customers",
        description: "Manage your sales pipeline from first contact to closing the deal. Track leads, add notes, monitor status, and convert won leads directly into projects.",
        keyFeatures: ["Lead Creation", "Pipeline Tracking", "Interaction History", "Team Assignment", "Value Tracking", "Conversion Analytics"],
        icon: Target
    },
    {
        title: "Invoicing & Finance",
        headline: "Professional Invoicing Made Simple",
        description: "Create professional invoices, quotations, and proposals. Generate PDFs, track payments, and manage your financial records with ease.",
        keyFeatures: ["Invoices & Proposals", "Multi-currency", "Tax & Discounts", "PDF Generation", "Secure Sharing", "Payment Tracking"],
        icon: FileText
    },
    {
        title: "Expense Tracking",
        headline: "Track Every Expense",
        description: "Keep track of all business expenses with categories, project associations, and detailed reporting. Export data for accounting purposes.",
        keyFeatures: ["Categorization", "Project Association", "Multi-currency", "Filtering", "Excel/CSV Export", "Analytics"],
        icon: Receipt
    },
    {
        title: "HR Management",
        headline: "Complete HR Solution",
        description: "Manage your workforce with comprehensive HR tools. Track employees, manage departments, handle leave requests, monitor attendance, and process payroll.",
        keyFeatures: ["Employee Records", "Department Org", "Leave Management", "Attendance Tracking", "Payroll", "Onboarding"],
        icon: Users2
    },
    {
        title: "Team Collaboration",
        headline: "Work Together, Seamlessly",
        description: "Foster collaboration with team invitations, role-based access, real-time notifications, and activity feeds. Everyone stays in the loop.",
        keyFeatures: ["Team Invitations", "RBAC", "Real-time Notifications", "Activity Feeds", "Global Search", "Member Management"],
        icon: MessageSquare
    },
    {
        title: "Reports & Analytics",
        headline: "Data-Driven Decisions",
        description: "Get insights into your business performance with comprehensive reports and analytics. Track project progress, team productivity, financial summaries, and lead conversion rates.",
        keyFeatures: ["Performance Reports", "Task Completion", "Financial Summaries", "Productivity Metrics", "Conversion Analytics", "Visual Charts"],
        icon: BarChart3
    },
    {
        title: "Resource Management",
        headline: "Centralized Resource Library",
        description: "Store and organize company resources in one place. Upload files, images, create notes, and save links for easy access by your team.",
        keyFeatures: ["File Uploads", "Notes & Docs", "Link Storage", "Categorization", "Search & Filter", "Sharing"],
        icon: FolderOpen
    },
    {
        title: "Customization & Branding",
        headline: "Make It Yours",
        description: "Customize the platform to match your brand. Upload your favicon, set custom site titles, and configure page access based on roles.",
        keyFeatures: ["Custom Favicon", "Site Title", "Access Control", "Company Config", "Feature Flags", "Custom Domain"],
        icon: Palette
    }
];

export function FeatureCarousel() {
    return (
        <div className="w-full flex justify-center px-4 md:px-10">
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-7xl"
            >
                <CarouselContent>
                    {features.map((feature, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                            <div className="p-1 h-full">
                                <Card className="bg-white/5 border-white/10 h-full hover:bg-white/10 transition-colors duration-300">
                                    <CardContent className="flex flex-col p-6 h-full">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="p-3 rounded-xl bg-[#0066CC]/20 text-[#0066CC]">
                                                <feature.icon className="w-8 h-8" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white font-heading">{feature.title}</h3>
                                        </div>

                                        <h4 className="text-lg font-semibold text-gray-200 mb-2">{feature.headline}</h4>
                                        <p className="text-muted-foreground text-sm mb-6 flex-grow">{feature.description}</p>

                                        <div className="space-y-2">
                                            {feature.keyFeatures.slice(0, 4).map((kf, i) => (
                                                <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                                                    <div className="w-1 h-1 rounded-full bg-[#0066CC]" />
                                                    {kf}
                                                </div>
                                            ))}
                                            {feature.keyFeatures.length > 4 && (
                                                <div className="text-xs text-[#0066CC] pl-3 pt-1">
                                                    + {feature.keyFeatures.length - 4} more
                                                </div>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex bg-black/50 border-white/10 text-white hover:bg-[#0066CC] hover:text-white" />
                <CarouselNext className="hidden md:flex bg-black/50 border-white/10 text-white hover:bg-[#0066CC] hover:text-white" />
            </Carousel>
        </div>
    )
}
