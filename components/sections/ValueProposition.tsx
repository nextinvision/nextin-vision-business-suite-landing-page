"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import BlurText from "@/components/common/BlurText";
import ShinyText from "@/components/common/ShinyText";

export default function ValueProposition() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showAllItems, setShowAllItems] = useState(false);

    return (
        <section className="w-full pt-0 pb-6 md:pb-10 relative z-10">
            <div className="max-w-6xl mx-auto px-6">
                
                {/* Top Content - Centered */}
                <div className="text-center mb-12 md:mb-16 space-y-6">
                    <BlurText
                        text="Everything Your Business Needs, in One Place"
                        className="text-3xl md:text-5xl lg:text-6xl text-white font-heading font-extrabold leading-tight tracking-tight justify-center"
                        delay={50}
                    />

                    <div className="max-w-3xl mx-auto">
                        <div className={`text-muted-foreground ${isExpanded ? '' : 'line-clamp-4 md:line-clamp-none'}`}>
                            <ShinyText
                                text="Nextin Project Management is a comprehensive SaaS platform designed to help businesses of all sizes manage their operations efficiently. From project planning to team collaboration, from invoicing to HR management—we've got you covered."
                                disabled={false}
                                speed={3}
                                className="text-lg md:text-xl leading-relaxed text-muted-foreground !inline tracking-wide font-light"
                            />
                        </div>
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="mt-2 text-sm text-[#F16822] hover:text-[#D85A1A] font-medium md:hidden focus:outline-none"
                        >
                            {isExpanded ? "Read Less" : "Read More"}
                        </button>
                    </div>
                </div>

                {/* Feature List - Grid Layout */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {[
                        "Complete Business Suite: Project management, CRM, invoicing, HR, and more",
                        "Enterprise-Grade Security: Multi-tenant architecture with complete data isolation",
                        "Scalable Infrastructure: Built to grow with your business, from startup to enterprise",
                        "Custom Domain Integration: Use your own company domain to maintain brand authenticity and professional identity",
                        "Customizable: Tailor the platform to your company's unique needs with branding, domain, and feature customization",
                        "Real-Time Collaboration: Stay connected with your team through instant notifications",
                    ].map((item, index) => (
                        <div
                            key={item}
                            className={`group flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-6 shadow-sm hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${index >= 3 && !showAllItems ? 'hidden lg:flex' : 'flex'}`}
                        >
                            <CheckCircle className="w-7 h-7 shrink-0 text-[#F16822] mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                            <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed font-semibold tracking-wide">{item}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => setShowAllItems(!showAllItems)}
                        className="py-2 text-sm text-[#F16822] hover:text-[#D85A1A] font-medium md:hidden focus:outline-none"
                    >
                        {showAllItems ? "View Less" : "View More"}
                    </button>
                </div>

            </div>
        </section >
    );
}

