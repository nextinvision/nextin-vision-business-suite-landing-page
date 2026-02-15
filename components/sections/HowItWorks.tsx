"use client";

import React from "react";
import BlurText from "@/components/common/BlurText";
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
                <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#005B82]/0 via-[#005B82]/50 to-[#005B82]/0" />

                {steps.map((step, index) => (
                    <div key={index} className="relative flex flex-col items-center text-center group">
                        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white/5 border-2 border-white/10 backdrop-blur-sm flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-all duration-500 shadow-xl shadow-black/30 group-hover:shadow-2xl group-hover:shadow-[#F16822]/20">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#005B82]/20 to-[#F16822]/10 blur-xl group-hover:from-[#005B82]/30 group-hover:to-[#F16822]/20 transition-all duration-500" />
                            <step.icon className="w-12 h-12 md:w-14 md:h-14 text-[#005B82] group-hover:text-[#F16822] transition-colors duration-300 relative z-10" />
                            <div className="absolute -top-2 -right-2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#F16822] to-[#D85A1A] flex items-center justify-center text-white font-bold text-sm md:text-base border-4 border-[#0a0a0a] shadow-lg shadow-[#F16822]/40 group-hover:scale-110 transition-transform duration-300">
                                {index + 1}
                            </div>
                        </div>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-3 group-hover:text-white transition-colors tracking-tight leading-tight">
                            {step.headline}
                        </h3>
                        <p className="text-sm md:text-base text-[#F16822] font-bold mb-4 uppercase tracking-[0.2em] letter-spacing-widest">
                            {step.title}
                        </p>
                        <p className="text-neutral-200 text-sm md:text-base lg:text-lg leading-relaxed max-w-[280px] tracking-wide font-light">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

