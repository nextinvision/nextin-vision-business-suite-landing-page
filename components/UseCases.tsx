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
import BlurText from "@/components/BlurText";
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
                                    <Card className="h-full bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors flex flex-col">
                                        <CardHeader>
                                            <CardTitle className="text-neutral-200 text-xl mb-2">
                                                {useCase.title}
                                            </CardTitle>
                                            <CardDescription className="text-neutral-100 font-semibold text-base">
                                                {useCase.headline}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex-1 flex flex-col justify-between gap-6">
                                            <p className="text-neutral-400 text-sm leading-relaxed">
                                                {useCase.description}
                                            </p>
                                            <div>
                                                <h4 className="text-neutral-300 text-sm font-semibold mb-3">
                                                    Key Benefits:
                                                </h4>
                                                <ul className="space-y-2">
                                                    {useCase.benefits.map((benefit, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="flex items-start gap-2 text-sm text-neutral-400"
                                                        >
                                                            <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
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
                    <CarouselPrevious className="hidden md:flex -left-12 bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white" />
                    <CarouselNext className="hidden md:flex -right-12 bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white" />
                </Carousel>
            </div>
        </section>
    );
}
