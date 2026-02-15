"use client";

import React from "react";
import BlurText from "@/components/common/BlurText";

const stats = [
    { value: "12+", label: "Companies" },
    { value: "110+", label: "Active Users" },
    { value: "900+", label: "Projects Managed" },
    { value: "99.9%", label: "Uptime SLA" },
];

export default function SocialProof() {
    return (
        <section className="py-16 md:py-20 w-full border-y border-white/10 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-neutral-300 text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-center mb-2 letter-spacing-widest">
                        Trusted by Businesses Worldwide
                    </p>
                    <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#F16822]/50 to-transparent mx-auto"></div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
                    {stats.map((stat, index) => (
                        <div 
                            key={index} 
                            className="text-center group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#F16822]/5 to-[#005B82]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                            <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2 bg-gradient-to-br from-white via-white to-white/90 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 tracking-tight leading-none">
                                {stat.value}
                            </div>
                            <div className="text-xs md:text-sm text-neutral-400 font-semibold uppercase tracking-[0.15em] letter-spacing-wider">
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

