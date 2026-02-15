"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import BlurText from "@/components/common/BlurText";
import { Check } from "lucide-react";

const useCases = [
    {
        title: "Small to Medium Businesses",
        headline: "All-in-One Solution for Growing Teams",
        description:
            "Perfect for businesses that need a comprehensive solution without the complexity. Manage projects, track expenses, send invoices, and collaborate with your team—all from one platform.",
        benefits: [
            "No need for multiple tools",
            "Affordable pricing",
            "Easy to set up and use",
            "Scales as you grow",
        ],
    },
    {
        title: "Agencies & Consultancies",
        headline: "Manage Multiple Client Projects",
        description:
            "Ideal for agencies managing multiple client projects. Track leads, convert them to projects, manage tasks, send invoices, and keep clients updated through shareable project links.",
        benefits: [
            "Client project isolation",
            "Lead to project conversion",
            "Professional invoicing",
            "Client portal via sharing",
        ],
    },
    {
        title: "Development Teams",
        headline: "Agile Project Management",
        description:
            "Built for software development teams. Use Kanban boards for sprints, Gantt charts for releases, track tasks, manage files, and collaborate in real-time.",
        benefits: [
            "Kanban board for sprints",
            "Gantt charts for planning",
            "File management for code/docs",
            "Activity tracking for audits",
        ],
    },
    {
        title: "Construction & Manufacturing",
        headline: "Project Phases and Resource Management",
        description:
            "Manage complex projects with phases, track resources, monitor expenses, manage team members, and maintain detailed project documentation.",
        benefits: [
            "Project phase tracking",
            "Resource management",
            "Expense tracking per project",
            "Document management",
        ],
    },
    {
        title: "Professional Services",
        headline: "Client Management & Billing",
        description:
            "Perfect for law firms, accounting firms, and consulting businesses. Manage client leads, track billable hours through tasks, create professional invoices, and manage expenses.",
        benefits: [
            "Lead management",
            "Time tracking via tasks",
            "Professional invoicing",
            "Expense categorization",
        ],
    },
    {
        title: "Enterprise Organizations",
        headline: "White-Label Solution with Custom Domain",
        description:
            "Ideal for large enterprises requiring complete brand control and professional identity. Integrate your custom company domain to maintain brand authenticity, enhance credibility, and provide a seamless branded experience for your team and clients.",
        benefits: [
            "Custom company domain integration",
            "Complete brand authenticity",
            "Enhanced professional credibility",
            "White-label capabilities",
        ],
    },
];

export default function UseCases() {
    return (
        <section className="py-20 w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <BlurText
                    text="Perfect for Every Business"
                    className="text-3xl md:text-5xl text-white justify-center font-heading"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    as="h2"
                />
            </div>

            <div className="w-full flex justify-center">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-6xl"
                >
                    <CarouselContent>
                        {useCases.map((useCase, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                                <div className="p-1 h-full">
                                    <Card className="h-full bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/30 flex flex-col">
                                        <CardHeader>
                                            <CardTitle className="text-white text-xl md:text-2xl lg:text-3xl mb-3 font-extrabold tracking-tight leading-tight">
                                                {useCase.title}
                                            </CardTitle>
                                            <CardDescription className="text-neutral-200 font-bold text-base md:text-lg lg:text-xl tracking-wide leading-relaxed">
                                                {useCase.headline}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex-1 flex flex-col justify-between gap-6">
                                            <p className="text-neutral-200 text-sm md:text-base lg:text-lg leading-relaxed text-justify tracking-wide font-light">
                                                {useCase.description}
                                            </p>
                                            <div>
                                                <h4 className="text-white text-sm md:text-base lg:text-lg font-extrabold mb-4 tracking-wide uppercase">
                                                    Key Benefits:
                                                </h4>
                                                <ul className="space-y-3">
                                                    {useCase.benefits.map((benefit, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="flex items-start gap-3 text-sm md:text-base text-neutral-200 leading-relaxed tracking-wide font-normal"
                                                        >
                                                            <Check className="w-5 h-5 text-[#F16822] mt-0.5 shrink-0" />
                                                            {benefit}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex -left-12 bg-white/5 border-2 border-white/10 text-white hover:bg-white/10 hover:border-white/20 hover:text-white hover:scale-110 transition-all duration-300" />
                    <CarouselNext className="hidden md:flex -right-12 bg-white/5 border-2 border-white/10 text-white hover:bg-white/10 hover:border-white/20 hover:text-white hover:scale-110 transition-all duration-300" />
                </Carousel>
            </div>
        </section>
    );
}

