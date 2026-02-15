"use client";

import React, { useState } from "react";
import BlurText from "@/components/common/BlurText";
import { Button } from "@/components/ui/button";
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
    ChevronDown,
    ChevronUp,
} from "lucide-react";

const features = [
    {
        title: "Project Management",
        headline: "Complete Project Control",
        description:
            "Organize your work with powerful project management tools. Create projects, break them down into tasks, assign team members, and track progress with multiple visualization options.",
        icon: KanbanSquare,
        color: "text-[#005B82]",
        bg: "bg-[#005B82]/20",
    },
    {
        title: "Task Management",
        headline: "Stay on Top of Every Task",
        description:
            "Never miss a deadline. Create, assign, and track tasks with priority levels, due dates, and status updates. Filter and search to find exactly what you need.",
        icon: CheckSquare,
        color: "text-green-400",
        bg: "bg-green-500/20",
    },
    {
        title: "Lead Management (CRM)",
        headline: "Convert Leads into Customers",
        description:
            "Manage your sales pipeline from first contact to closing the deal. Track leads, add notes, monitor status, and convert won leads directly into projects.",
        icon: Users,
        color: "text-purple-400",
        bg: "bg-purple-500/20",
    },
    {
        title: "Invoicing & Financial Management",
        headline: "Professional Invoicing Made Simple",
        description:
            "Create professional invoices, quotations, and proposals. Generate PDFs, track payments, and manage your financial records with ease.",
        icon: FileText,
        color: "text-yellow-400",
        bg: "bg-yellow-500/20",
    },
    {
        title: "Expense Tracking",
        headline: "Track Every Expense",
        description:
            "Keep track of all business expenses with categories, project associations, and detailed reporting. Export data for accounting purposes.",
        icon: Receipt,
        color: "text-red-400",
        bg: "bg-red-500/20",
    },
    {
        title: "HR Management",
        headline: "Complete HR Solution",
        description:
            "Manage your workforce with comprehensive HR tools. Track employees, manage departments, handle leave requests, monitor attendance, and process payroll.",
        icon: UserCheck,
        color: "text-pink-400",
        bg: "bg-pink-500/20",
    },
    {
        title: "Team Collaboration",
        headline: "Work Together, Seamlessly",
        description:
            "Foster collaboration with team invitations, role-based access, real-time notifications, and activity feeds. Everyone stays in the loop.",
        icon: MessageSquare,
        color: "text-indigo-400",
        bg: "bg-indigo-500/20",
    },
    {
        title: "Reports & Analytics",
        headline: "Data-Driven Decisions",
        description:
            "Get insights into your business performance with comprehensive reports and analytics. Track project progress, team productivity, financial summaries, and lead conversion rates.",
        icon: BarChart3,
        color: "text-orange-400",
        bg: "bg-orange-500/20",
    },
    {
        title: "Resource Management",
        headline: "Centralized Resource Library",
        description:
            "Store and organize company resources in one place. Upload files, images, create notes, and save links for easy access by your team.",
        icon: Folder,
        color: "text-teal-400",
        bg: "bg-teal-500/20",
    },
    {
        title: "Customization & Branding",
        headline: "Make It Yours",
        description:
            "Customize the platform to match your brand. Upload your favicon, set custom site titles, and configure page access based on roles.",
        icon: Settings,
        color: "text-gray-400",
        bg: "bg-gray-500/20",
    },
];

export default function FeaturesGrid() {
    const [isExpanded, setIsExpanded] = useState(false);
    const visibleFeatures = isExpanded ? features : features.slice(0, 3);

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

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
                {visibleFeatures.map((feature, index) => (
                    <div
                        key={index}
                        className="group flex flex-col gap-4 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30"
                    >
                        <div
                            className={`w-14 h-14 rounded-xl flex items-center justify-center mb-2 ${feature.bg} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}
                        >
                            <feature.icon className={`w-7 h-7 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                                {feature.headline}
                            </h3>
                            <p className="text-xs md:text-sm text-[#F16822] font-semibold mb-4 uppercase tracking-widest">
                                {feature.title}
                            </p>
                            <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-6 text-justify">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center">
                <Button
                    variant="outline"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="bg-white/5 border-2 border-white/10 text-white hover:bg-white/10 hover:border-white/20 hover:text-white min-w-[160px] px-8 py-6 font-semibold hover:scale-105 transition-all duration-300"
                >
                    {isExpanded ? (
                        <>
                            View Less <ChevronUp className="ml-2 h-4 w-4" />
                        </>
                    ) : (
                        <>
                            View More <ChevronDown className="ml-2 h-4 w-4" />
                        </>
                    )}
                </Button>
            </div>
        </section>
    );
}

