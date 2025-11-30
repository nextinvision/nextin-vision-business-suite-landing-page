"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
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
    Settings
} from "lucide-react";

const content = [
    {
        title: "Complete Project Control",
        description: (
            <div className="flex flex-col gap-4">
                <p>Organize your work with powerful project management tools. Create projects, break them down into tasks, assign team members, and track progress with multiple visualization options.</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-400">
                    <li><strong>Kanban Board</strong>: Visual task management</li>
                    <li><strong>Gantt Charts</strong>: Timeline view for planning</li>
                    <li><strong>Calendar Integration</strong>: Tasks and deadlines</li>
                    <li><strong>File Management</strong>: Upload docs and images</li>
                    <li><strong>Project Sharing</strong>: Secure external links</li>
                    <li><strong>Activity Tracking</strong>: Complete audit trail</li>
                </ul>
            </div>
        ),
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <KanbanSquare className="h-20 w-20 text-white" />
            </div>
        ),
    },
    {
        title: "Stay on Top of Every Task",
        description: (
            <div className="flex flex-col gap-4">
                <p>Never miss a deadline. Create, assign, and track tasks with priority levels, due dates, and status updates. Filter and search to find exactly what you need.</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-400">
                    <li>Rich task descriptions</li>
                    <li>Priority levels (Low, Medium, High)</li>
                    <li>Status tracking (To Do, In Progress, Done)</li>
                    <li>Team member assignment</li>
                    <li>Due date management</li>
                    <li>Advanced filtering and search</li>
                </ul>
            </div>
        ),
        content: (
            <div className="h-full w-full flex items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))]">
                <CheckSquare className="h-20 w-20 text-white" />
            </div>
        ),
    },
    {
        title: "Convert Leads into Customers",
        description: (
            <div className="flex flex-col gap-4">
                <p>Manage your sales pipeline from first contact to closing the deal. Track leads, add notes, monitor status, and convert won leads directly into projects.</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-400">
                    <li>Lead creation & contact info</li>
                    <li>Sales pipeline tracking</li>
                    <li>Interaction history & notes</li>
                    <li>Lead assignment</li>
                    <li>Estimated value tracking</li>
                    <li>Convert leads to projects</li>
                </ul>
            </div>
        ),
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))] flex items-center justify-center text-white">
                <Users className="h-20 w-20 text-white" />
            </div>
        ),
    },
    {
        title: "Professional Invoicing Made Simple",
        description: (
            <div className="flex flex-col gap-4">
                <p>Create professional invoices, quotations, and proposals. Generate PDFs, track payments, and manage your financial records with ease.</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-400">
                    <li>Invoices, quotations, proposals</li>
                    <li>Multiple currency support</li>
                    <li>Tax calculation & discounts</li>
                    <li>PDF generation & download</li>
                    <li>Payment status tracking</li>
                    <li>Client information management</li>
                </ul>
            </div>
        ),
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--cyan-500))] flex items-center justify-center text-white">
                <FileText className="h-20 w-20 text-white" />
            </div>
        ),
    },
    {
        title: "Track Every Expense",
        description: (
            <div className="flex flex-col gap-4">
                <p>Keep track of all business expenses with categories, project associations, and detailed reporting. Export data for accounting purposes.</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-400">
                    <li>Expense creation with categories</li>
                    <li>Project association</li>
                    <li>Multiple currency support</li>
                    <li>Custom expense categories</li>
                    <li>Export to Excel/CSV</li>
                    <li>Expense reports & analytics</li>
                </ul>
            </div>
        ),
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--emerald-500),var(--teal-500))] flex items-center justify-center text-white">
                <Receipt className="h-20 w-20 text-white" />
            </div>
        ),
    },
    {
        title: "Complete HR Solution",
        description: (
            <div className="flex flex-col gap-4">
                <p>Manage your workforce with comprehensive HR tools. Track employees, manage departments, handle leave requests, monitor attendance, and process payroll.</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-400">
                    <li><strong>Employee Management</strong>: Records & details</li>
                    <li><strong>Department Organization</strong>: Structure teams</li>
                    <li><strong>Leave Management</strong>: Request & approve</li>
                    <li><strong>Attendance Tracking</strong>: Check-in/out</li>
                    <li><strong>Payroll Management</strong>: Earnings & deductions</li>
                    <li><strong>Onboarding Forms</strong>: Public links</li>
                </ul>
            </div>
        ),
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
                <UserCheck className="h-20 w-20 text-white" />
            </div>
        ),
    },
    {
        title: "Work Together, Seamlessly",
        description: (
            <div className="flex flex-col gap-4">
                <p>Foster collaboration with team invitations, role-based access, real-time notifications, and activity feeds. Everyone stays in the loop.</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-400">
                    <li>Team invitations via email</li>
                    <li>Role-based access control</li>
                    <li>Real-time notifications</li>
                    <li>Activity feeds</li>
                    <li>Global search</li>
                    <li>Multi-company support</li>
                </ul>
            </div>
        ),
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--purple-500))] flex items-center justify-center text-white">
                <MessageSquare className="h-20 w-20 text-white" />
            </div>
        ),
    },
    {
        title: "Data-Driven Decisions",
        description: (
            <div className="flex flex-col gap-4">
                <p>Get insights into your business performance with comprehensive reports and analytics. Track project progress, team productivity, financial summaries, and lead conversion rates.</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-400">
                    <li>Project performance reports</li>
                    <li>Task completion rates</li>
                    <li>Financial summaries</li>
                    <li>Team productivity metrics</li>
                    <li>Lead conversion analytics</li>
                    <li>Visual charts & graphs</li>
                </ul>
            </div>
        ),
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--red-500))] flex items-center justify-center text-white">
                <BarChart3 className="h-20 w-20 text-white" />
            </div>
        ),
    },
    {
        title: "Centralized Resource Library",
        description: (
            <div className="flex flex-col gap-4">
                <p>Store and organize company resources in one place. Upload files, images, create notes, and save links for easy access by your team.</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-400">
                    <li>File uploads (docs, images)</li>
                    <li>Text notes & documentation</li>
                    <li>External link storage</li>
                    <li>Resource categorization</li>
                    <li>Search & filter</li>
                    <li>Team sharing</li>
                </ul>
            </div>
        ),
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--teal-500),var(--blue-500))] flex items-center justify-center text-white">
                <Folder className="h-20 w-20 text-white" />
            </div>
        ),
    },
    {
        title: "Make It Yours",
        description: (
            <div className="flex flex-col gap-4">
                <p>Customize the platform to match your brand. Upload your favicon, set custom site titles, and configure page access based on roles.</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-400">
                    <li>Custom favicon upload</li>
                    <li>Custom site title</li>
                    <li>Role-based page access</li>
                    <li>Company-specific configs</li>
                    <li>Feature flags</li>
                    <li>Custom domain support</li>
                </ul>
            </div>
        ),
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--slate-800),var(--slate-900))] flex items-center justify-center text-white">
                <Settings className="h-20 w-20 text-white" />
            </div>
        ),
    },
];

export function FeaturesStickyScroll() {
    return (
        <div className="w-full py-2">
            <div className="w-full flex justify-center mt-6 md:mt-10 mb-2">
                <BlurText
                    text="Powerful Features for Modern Businesses"
                    className="text-4xl text-white text-center font-heading justify-center"
                    delay={50}
                />
            </div>
            <div className="w-11/12 mx-auto">
                <StickyScroll content={content} />
            </div>
        </div>
    );
}
