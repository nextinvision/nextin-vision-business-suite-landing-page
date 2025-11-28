"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
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

const content = features.map((feature) => ({
    title: feature.title,
    description: feature.description,
    content: (
        <div className="h-full w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
            <span className="text-center px-4 font-bold">{feature.title} Placeholder</span>
        </div>
    ),
}));

export function FeaturesStickyScroll() {
    return (
        <div className="w-full py-2">
            <StickyScroll content={content} />
        </div>
    );
}
