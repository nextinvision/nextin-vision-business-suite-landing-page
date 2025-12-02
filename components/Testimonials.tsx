"use client";

import React from "react";
import { TestimonialsSection } from "@/components/21st/testimonials-with-marquee";

const testimonials = [
    {
        author: {
            name: "Sarah Johnson",
            handle: "CEO @ TechFlow Solutions",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces"
        },
        text: "Nextin Project Management has transformed how we work. We've consolidated five different tools into one platform, saving us time and money. The multi-tenant architecture gives us the security we need for our enterprise clients.",
        href: "#"
    },
    {
        author: {
            name: "Michael Chen",
            handle: "Ops Manager @ Creative Pulse",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
        },
        text: "As a growing agency, we needed a solution that could handle multiple client projects. Nextin's project sharing feature allows us to keep clients updated without giving them full access. The lead management has helped us convert 30% more leads.",
        href: "#"
    },
    {
        author: {
            name: "Emily Rodriguez",
            handle: "HR Director @ Global Consulting",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces"
        },
        text: "The HR features are exactly what we needed. From employee onboarding to leave management, everything is in one place. The custom database option gives us the flexibility we need for our compliance requirements.",
        href: "#"
    },
    {
        author: {
            name: "David Kim",
            handle: "CTO @ Innovate Inc",
            avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces"
        },
        text: "The API integration capabilities are outstanding. We were able to connect Nextin with our existing internal tools in less than a week. The documentation is clear and the support team is incredibly responsive.",
        href: "#"
    }
];

export default function Testimonials() {
    return (
        <TestimonialsSection
            title="Loved by Teams Worldwide"
            description="Join thousands of satisfied users who have transformed their workflow with Nextin."
            testimonials={testimonials}
        />
    );
}
