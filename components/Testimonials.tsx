"use client";

import React from "react";
import BlurText from "@/components/BlurText";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Nextin Project Management has transformed how we work. We've consolidated five different tools into one platform, saving us time and money. The multi-tenant architecture gives us the security we need for our enterprise clients.",
        author: "Sarah Johnson",
        role: "CEO",
        company: "TechFlow Solutions",
        industry: "Technology",
    },
    {
        quote: "As a growing agency, we needed a solution that could handle multiple client projects. Nextin's project sharing feature allows us to keep clients updated without giving them full access. The lead management has helped us convert 30% more leads.",
        author: "Michael Chen",
        role: "Operations Manager",
        company: "Creative Pulse",
        industry: "Marketing Agency",
    },
    {
        quote: "The HR features are exactly what we needed. From employee onboarding to leave management, everything is in one place. The custom database option gives us the flexibility we need for our compliance requirements.",
        author: "Emily Rodriguez",
        role: "HR Director",
        company: "Global Consulting Partners",
        industry: "Professional Services",
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <BlurText
                    text="Loved by Teams Worldwide"
                    className="text-3xl md:text-5xl text-white justify-center font-heading"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    as="h2"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="flex flex-col p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors relative"
                    >
                        <Quote className="w-10 h-10 text-blue-500/20 absolute top-6 right-6" />
                        <p className="text-neutral-300 text-lg leading-relaxed mb-8 flex-1 italic">
                            &quot;{testimonial.quote}&quot;
                        </p>
                        <div className="mt-auto">
                            <div className="font-bold text-white text-lg">
                                {testimonial.author}
                            </div>
                            <div className="text-blue-400 text-sm font-medium mb-1">
                                {testimonial.role}
                            </div>
                            <div className="text-neutral-500 text-sm">
                                {testimonial.company} • {testimonial.industry}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
