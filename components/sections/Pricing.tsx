"use client";

import React from "react";
import BlurText from "@/components/common/BlurText";
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative p-8 md:p-10 rounded-3xl border backdrop-blur-md transition-all duration-500 flex flex-col group ${
                            plan.popular
                                ? "bg-gradient-to-br from-white/10 via-white/8 to-white/5 border-[#F16822]/60 shadow-2xl shadow-[#F16822]/20 scale-105 z-10 ring-2 ring-[#F16822]/20"
                                : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1"
                        }`}
                    >
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#F16822] to-[#D85A1A] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-[#F16822]/30">
                                Most Popular
                            </div>
                        )}
                        <div className="mb-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                                {plan.name}
                            </h3>
                            <p className="text-sm md:text-base text-neutral-300 mb-6 font-medium">
                                {plan.description}
                            </p>
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent">
                                    {plan.price}
                                </span>
                                <span className="text-neutral-400 text-lg">{plan.period}</span>
                            </div>
                        </div>

                        <div className="flex-1 mb-8">
                            <ul className="space-y-3">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                                        <Check className="w-4 h-4 text-[#F16822] mt-0.5 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Button
                            className={`w-full py-6 md:py-7 text-base font-semibold transition-all duration-300 ${
                                plan.popular
                                    ? "bg-gradient-to-r from-[#F16822] to-[#D85A1A] hover:from-[#D85A1A] hover:to-[#F16822] text-white shadow-lg shadow-[#F16822]/30 hover:shadow-xl hover:shadow-[#F16822]/40 hover:scale-[1.02]"
                                    : "bg-white/10 hover:bg-white/20 text-white border border-white/10 hover:border-white/20 hover:shadow-lg"
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

