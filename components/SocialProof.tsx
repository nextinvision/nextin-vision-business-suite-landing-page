"use client";

import React from "react";
import BlurText from "@/components/BlurText";

const stats = [
    { value: "X+", label: "Companies" },
    { value: "X+", label: "Active Users" },
    { value: "X+", label: "Projects Managed" },
    { value: "99.9%", label: "Uptime SLA" },
];

export default function SocialProof() {
    return (
        <section className="py-12 w-full border-y border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-10">
                    <p className="text-neutral-400 text-sm font-medium uppercase tracking-widest text-justify">
                        Trusted by Businesses Worldwide
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-neutral-400">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Logos Placeholder */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
                    {/* Placeholder Logos - In a real app, these would be SVGs or Images */}
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="h-8 w-24 bg-white/20 rounded animate-pulse" />
                    ))}
                </div>
            </div>
        </section>
    );
}
