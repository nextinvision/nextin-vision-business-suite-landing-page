"use client";

import React from "react";
import BlurText from "@/components/BlurText";
import { Button } from "@/components/ui/button";
import {
    LayoutGrid,
    ShieldCheck,
    Scaling,
    Smile,
    Wallet,
    MessageCircle,
    ChevronDown,
    ChevronUp,
} from "lucide-react";

const benefits = [
    {
        title: "Complete Business Suite",
        description: "One Platform, Multiple Solutions",
        details: [
            "Project management",
            "CRM (Lead management)",
            "Invoicing & billing",
            "Expense tracking",
            "HR management",
        ],
        icon: LayoutGrid,
        color: "text-blue-400",
        bg: "bg-blue-500/20",
    },
    {
        title: "Enterprise Security",
        description: "Your Data is Safe",
        details: [
            "Multi-tenant architecture",
            "Optional dedicated databases",
            "Encrypted connections",
            "Role-based access control",
            "GDPR-ready architecture",
        ],
        icon: ShieldCheck,
        color: "text-green-400",
        bg: "bg-green-500/20",
    },
    {
        title: "Scalable & Flexible",
        description: "Grows with You",
        details: [
            "Support for unlimited companies",
            "Horizontal scaling",
            "Custom database per company",
            "Feature flags and customizations",
            "API-ready for integrations",
        ],
        icon: Scaling,
        color: "text-purple-400",
        bg: "bg-purple-500/20",
    },
    {
        title: "User-Friendly Interface",
        description: "Intuitive & Modern",
        details: [
            "Clean, modern design",
            "Responsive (mobile-friendly)",
            "Dark mode support",
            "Fast and responsive",
            "Easy navigation",
        ],
        icon: Smile,
        color: "text-yellow-400",
        bg: "bg-yellow-500/20",
    },
    {
        title: "Cost-Effective",
        description: "Save Money",
        details: [
            "One platform instead of multiple tools",
            "No per-user pricing complexity",
            "Transparent pricing",
            "Reduce tool sprawl",
            "Lower total cost of ownership",
        ],
        icon: Wallet,
        color: "text-red-400",
        bg: "bg-red-500/20",
    },
    {
        title: "Real-Time Collaboration",
        description: "Stay Connected",
        details: [
            "Real-time notifications",
            "Activity feeds",
            "Team collaboration",
            "Instant updates",
            "Comment threads (future)",
        ],
        icon: MessageCircle,
        color: "text-indigo-400",
        bg: "bg-indigo-500/20",
    },
];

export default function Benefits() {
    const [showAll, setShowAll] = React.useState(false);

    const displayedBenefits = showAll ? benefits : benefits.slice(0, 3);

    return (
        <section className="py-20 w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <BlurText
                    text="Why Choose Nextin Project Management?"
                    className="text-3xl md:text-5xl text-white justify-center font-heading"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    as="h2"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedBenefits.map((benefit, index) => (
                    <div
                        key={index}
                        className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                    >
                        <div
                            className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${benefit.bg}`}
                        >
                            <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                        </div>
                        <h3 className="text-xl font-bold text-neutral-200 mb-2">
                            {benefit.title}
                        </h3>
                        <p className="text-neutral-400 font-medium mb-4">
                            {benefit.description}
                        </p>
                        <ul className="space-y-2">
                            {benefit.details.map((detail, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-center gap-2 text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-12">
                <Button
                    variant="outline"
                    onClick={() => setShowAll(!showAll)}
                    className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white min-w-[140px]"
                >
                    {showAll ? (
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
