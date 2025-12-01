"use client";

import React from "react";
import BlurText from "@/components/BlurText";
import { UserPlus, Users, FolderPlus, BarChart2 } from "lucide-react";

const steps = [
    {
        title: "Sign Up",
        headline: "Create Your Account",
        description:
            "Sign up with your email, create your company, and set up your profile in seconds.",
        icon: UserPlus,
    },
    {
        title: "Invite Your Team",
        headline: "Bring Your Team Onboard",
        description:
            "Invite team members via email, assign roles (Admin, Manager, Member), and set up departments.",
        icon: Users,
    },
    {
        title: "Create Your First Project",
        headline: "Start Managing",
        description:
            "Create a project, add tasks, assign team members, and set deadlines to get started.",
        icon: FolderPlus,
    },
    {
        title: "Track & Collaborate",
        headline: "Stay Organized",
        description:
            "Monitor progress, track expenses, send invoices, and manage leads all in one place.",
        icon: BarChart2,
    },
];

export default function HowItWorks() {
    return (
        <section className="py-20 w-full max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-16">
                <BlurText
                    text="Get Started in Minutes"
                    className="text-3xl md:text-5xl text-white justify-center font-heading"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    as="h2"
                />
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Connecting Line (Desktop) */}
                <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0" />

                {steps.map((step, index) => (
                    <div key={index} className="relative flex flex-col items-center text-center group">
                        <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/20">
                            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl group-hover:bg-blue-500/20 transition-colors" />
                            <step.icon className="w-10 h-10 text-blue-400" />
                            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm border-4 border-[#0a0a0a]">
                                {index + 1}
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-200 mb-2">
                            {step.headline}
                        </h3>
                        <p className="text-sm text-blue-400 font-medium mb-3 uppercase tracking-wider">
                            {step.title}
                        </p>
                        <p className="text-neutral-400 text-sm leading-relaxed max-w-[250px]">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
