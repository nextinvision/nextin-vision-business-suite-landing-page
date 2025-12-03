"use client";

import React from "react";
import BlurText from "@/components/BlurText";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Starter Plan",
        description: "Perfect for Small Teams",
        price: "$X",
        period: "/month",
        features: [
            "Up to 10 team members",
            "Unlimited projects",
            "Unlimited tasks",
            "Lead management",
            "Invoicing (up to 50/month)",
            "Expense tracking",
            "Basic HR features",
            "Email support",
            "Standard database (shared)",
        ],
        cta: "Start Free Trial",
        popular: false,
    },
    {
        name: "Professional Plan",
        description: "For Growing Businesses",
        price: "$X",
        period: "/month",
        features: [
            "Up to 50 team members",
            "Unlimited projects",
            "Unlimited tasks",
            "Advanced lead management",
            "Unlimited invoicing",
            "Advanced expense tracking",
            "Full HR suite",
            "Priority support",
            "Custom database option",
            "Custom branding",
            "Advanced reports",
        ],
        cta: "Start Free Trial",
        popular: true,
    },
    {
        name: "Enterprise Plan",
        description: "For Large Organizations",
        price: "Custom",
        period: "",
        features: [
            "Unlimited team members",
            "Unlimited everything",
            "Dedicated database",
            "Custom domain",
            "Advanced customizations",
            "Feature flags",
            "API access",
            "Dedicated support",
            "SLA guarantee",
            "Onboarding assistance",
            "Custom integrations",
        ],
        cta: "Contact Sales",
        popular: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-20 w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <BlurText
                    text="Simple, Transparent Pricing"
                    className="text-3xl md:text-5xl text-white justify-center font-heading"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    as="h2"
                />
                <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
                    Choose the plan that fits your business needs. No hidden fees.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 flex flex-col ${plan.popular
                            ? "bg-white/10 border-blue-500/50 shadow-lg shadow-blue-500/10 scale-105 z-10"
                            : "bg-white/5 border-white/10 hover:bg-white/10"
                            }`}
                    >
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                Most Popular
                            </div>
                        )}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-neutral-200 mb-2">
                                {plan.name}
                            </h3>
                            <p className="text-sm text-neutral-400 mb-6">
                                {plan.description}
                            </p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-white">
                                    {plan.price}
                                </span>
                                <span className="text-neutral-400">{plan.period}</span>
                            </div>
                        </div>

                        <div className="flex-1 mb-8">
                            <ul className="space-y-3">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                                        <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Button
                            className={`w-full py-6 text-base font-semibold ${plan.popular
                                ? "bg-blue-600 hover:bg-blue-700 text-white"
                                : "bg-white/10 hover:bg-white/20 text-white"
                                }`}
                        >
                            {plan.cta}
                        </Button>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center text-sm text-neutral-500 space-y-2">
                <p>All plans include: Project management, Task management, Calendar, File management</p>
                <p>Free trial: 14 days (no credit card required) • Annual billing: Save 20%</p>
            </div>
        </section>
    );
}
