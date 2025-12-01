"use client";

import React from "react";
import BlurText from "@/components/BlurText";
import {
    KanbanSquare,
    CheckSquare,
    Users,
    FileText,
    Receipt,
    UserCheck,
    MessageSquare,
    BarChart3,
    Folder,
    Settings,
    Check,
} from "lucide-react";

const features = [
    {
        title: "Project Management",
        headline: "Complete Project Control",
        description:
            "Organize your work with powerful project management tools. Create projects, break them down into tasks, assign team members, and track progress with multiple visualization options.",
        keyFeatures: [
            "Kanban Board: Visual task management",
            "Gantt Charts: Timeline view",
            "Calendar Integration: Tasks and deadlines",
            "File Management: Upload docs and images",
            "Project Sharing: Secure external links",
            "Activity Tracking: Complete audit trail",
        ],
        icon: KanbanSquare,
        color: "text-blue-400",
        bg: "bg-blue-500/20",
    },
    {
        title: "Task Management",
        headline: "Stay on Top of Every Task",
        description:
            "Never miss a deadline. Create, assign, and track tasks with priority levels, due dates, and status updates. Filter and search to find exactly what you need.",
        keyFeatures: [
            "Task creation with rich descriptions",
            "Priority levels (Low, Medium, High)",
            "Status tracking (To Do, In Progress, Done)",
            "Assignment to team members",
            "Due date management",
            "Task filtering and search",
        ],
        icon: CheckSquare,
        color: "text-green-400",
        bg: "bg-green-500/20",
    },
    {
        title: "Lead Management (CRM)",
        headline: "Convert Leads into Customers",
        description:
            "Manage your sales pipeline from first contact to closing the deal. Track leads, add notes, monitor status, and convert won leads directly into projects.",
        keyFeatures: [
            "Lead creation with contact information",
            "Sales pipeline tracking",
            "Lead notes and interaction history",
            "Lead assignment to team members",
            "Estimated value tracking",
            "Convert leads to projects",
        ],
        icon: Users,
        color: "text-purple-400",
        bg: "bg-purple-500/20",
    },
    {
        title: "Invoicing & Financial Management",
        headline: "Professional Invoicing Made Simple",
        description:
            "Create professional invoices, quotations, and proposals. Generate PDFs, track payments, and manage your financial records with ease.",
        keyFeatures: [
            "Create invoices, quotations, and proposals",
            "Multiple currency support",
            "Tax calculation and discounts",
            "PDF generation and download",
            "Payment status tracking",
            "Invoice item management",
        ],
        icon: FileText,
        color: "text-yellow-400",
        bg: "bg-yellow-500/20",
    },
    {
        title: "Expense Tracking",
        headline: "Track Every Expense",
        description:
            "Keep track of all business expenses with categories, project associations, and detailed reporting. Export data for accounting purposes.",
        keyFeatures: [
            "Expense creation with categories",
            "Project association",
            "Multiple currency support",
            "Custom expense categories",
            "Export to Excel/CSV",
            "Expense reports and analytics",
        ],
        icon: Receipt,
        color: "text-red-400",
        bg: "bg-red-500/20",
    },
    {
        title: "HR Management",
        headline: "Complete HR Solution",
        description:
            "Manage your workforce with comprehensive HR tools. Track employees, manage departments, handle leave requests, monitor attendance, and process payroll.",
        keyFeatures: [
            "Employee Management: Records & details",
            "Department Organization: Structure teams",
            "Leave Management: Request & approve",
            "Attendance Tracking: Check-in/out",
            "Payroll Management: Earnings & deductions",
            "Onboarding Forms: Public links",
        ],
        icon: UserCheck,
        color: "text-pink-400",
        bg: "bg-pink-500/20",
    },
    {
        title: "Team Collaboration",
        headline: "Work Together, Seamlessly",
        description:
            "Foster collaboration with team invitations, role-based access, real-time notifications, and activity feeds. Everyone stays in the loop.",
        keyFeatures: [
            "Team member invitations via email",
            "Role-based access control",
            "Real-time notifications",
            "Activity feeds for projects and leads",
            "Global search across all entities",
            "Team member management",
        ],
        icon: MessageSquare,
        color: "text-indigo-400",
        bg: "bg-indigo-500/20",
    },
    {
        title: "Reports & Analytics",
        headline: "Data-Driven Decisions",
        description:
            "Get insights into your business performance with comprehensive reports and analytics. Track project progress, team productivity, financial summaries, and lead conversion rates.",
        keyFeatures: [
            "Project performance reports",
            "Task completion rates",
            "Financial summaries",
            "Team productivity metrics",
            "Lead conversion analytics",
            "Visual charts and graphs",
        ],
        icon: BarChart3,
        color: "text-orange-400",
        bg: "bg-orange-500/20",
    },
    {
        title: "Resource Management",
        headline: "Centralized Resource Library",
        description:
            "Store and organize company resources in one place. Upload files, images, create notes, and save links for easy access by your team.",
        keyFeatures: [
            "File uploads (documents, images)",
            "Text notes and documentation",
            "External link storage",
            "Resource categorization",
            "Search and filter resources",
            "Share resources with team",
        ],
        icon: Folder,
        color: "text-teal-400",
        bg: "bg-teal-500/20",
    },
    {
        title: "Customization & Branding",
        headline: "Make It Yours",
        description:
            "Customize the platform to match your brand. Upload your favicon, set custom site titles, and configure page access based on roles.",
        keyFeatures: [
            "Custom favicon upload",
            "Custom site title",
            "Page access control per role",
            "Company-specific configurations",
            "Feature flags (advanced)",
            "Custom domain support",
        ],
        icon: Settings,
        color: "text-gray-400",
        bg: "bg-gray-500/20",
    },
];

export default function FeaturesGrid() {
    return (
        <section className="py-20 w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <BlurText
                    text="Powerful Features for Modern Businesses"
                    className="text-3xl md:text-5xl text-white justify-center font-heading"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    as="h2"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                        <div
                            className={`w-12 h-12 rounded-lg flex items-center justify-center mb-2 ${feature.bg}`}
                        >
                            <feature.icon className={`w-6 h-6 ${feature.color}`} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-neutral-200 mb-1">
                                {feature.headline}
                            </h3>
                            <p className="text-sm text-neutral-400 font-medium mb-4 uppercase tracking-wider">
                                {feature.title}
                            </p>
                            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                                {feature.description}
                            </p>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
