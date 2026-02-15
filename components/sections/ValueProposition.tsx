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
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="space-y-8">
                    <BlurText
                        text="Everything Your Business Needs, in One Place"
                        className="text-3xl md:text-5xl lg:text-6xl text-white font-heading font-extrabold leading-tight tracking-tight"
                        delay={50}
                    />

                    <div>
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

                {/* Right Content */}
                <div className="space-y-4">
                    {[
                        "Complete Business Suite: Project management, CRM, invoicing, HR, and more",
                        "Enterprise-Grade Security: Multi-tenant architecture with complete data isolation",
                        "Scalable Infrastructure: Built to grow with your business, from startup to enterprise",
                        "Customizable: Tailor the platform to your company's unique needs",
                        "Real-Time Collaboration: Stay connected with your team through instant notifications",
                    ].map((item, index) => (
                        <div
                            key={item}
                            className={`group flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-6 shadow-sm hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${index >= 2 && !showAllItems ? 'hidden md:flex' : 'flex'}`}
                        >
                            <CheckCircle className="w-7 h-7 shrink-0 text-[#F16822] mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                            <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed font-semibold tracking-wide">{item}</p>
                        </div>
                    ))}
                    <button
                        onClick={() => setShowAllItems(!showAllItems)}
                        className="w-full py-2 text-sm text-[#F16822] hover:text-[#D85A1A] font-medium md:hidden focus:outline-none"
                    >
                        {showAllItems ? "View Less" : "View More"}
                    </button>
                </div>

            </div>
        </section >
    );
}

