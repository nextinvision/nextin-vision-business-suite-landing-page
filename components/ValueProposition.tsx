import { CheckCircle } from "lucide-react";
import BlurText from "@/components/BlurText";
import ShinyText from "@/components/ShinyText";

export default function ValueProposition() {
    return (
        <section className="w-full pt-6 md:pt-20 pb-6 md:pb-10 relative z-10">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="space-y-8">
                    <BlurText
                        text="Everything Your Business Needs, in One Place"
                        className="text-3xl md:text-5xl text-white font-heading leading-tight"
                        delay={50}
                    />

                    <ShinyText
                        text="Nextin Project Management is a comprehensive SaaS platform designed to help businesses of all sizes manage their operations efficiently. From project planning to team collaboration, from invoicing to HR management—we've got you covered."
                        disabled={false}
                        speed={3}
                        className="text-lg leading-relaxed text-muted-foreground"
                    />
                </div>

                {/* Right Content */}
                <div className="space-y-4">
                    {[
                        "Complete Business Suite: Project management, CRM, invoicing, HR, and more",
                        "Enterprise-Grade Security: Multi-tenant architecture with complete data isolation",
                        "Scalable Infrastructure: Built to grow with your business, from startup to enterprise",
                        "Customizable: Tailor the platform to your company's unique needs",
                        "Real-Time Collaboration: Stay connected with your team through instant notifications",
                    ].map((item) => (
                        <div
                            key={item}
                            className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4 shadow-sm hover:bg-white/10 transition-colors duration-300"
                        >
                            <CheckCircle className="w-6 h-6 shrink-0 text-[#0066CC] mt-0.5" />
                            <p className="text-gray-300 text-sm md:text-base">{item}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
