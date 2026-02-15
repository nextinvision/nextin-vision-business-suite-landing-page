"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import BlurText from "@/components/common/BlurText";

export default function FAQ() {
    return (
        <div className="w-11/12 max-w-6xl mx-auto mt-6 mb-6 md:mt-24 md:mb-24 p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/3 to-white/5 backdrop-blur-md shadow-2xl shadow-black/20 flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="md:w-1/3">
                <div>
                    <BlurText
                        text="Frequently Asked Questions"
                        className="text-3xl md:text-5xl lg:text-6xl text-white font-heading font-extrabold mb-4 tracking-tight leading-tight"
                        delay={50}
                    />
                    <p className="text-neutral-200 text-sm md:text-base lg:text-lg leading-relaxed tracking-wide font-light">
                        Everything you need to know about Nextin Workspace. Can&apos;t find the answer you&apos;re looking for? Please contact our support team.
                    </p>
                </div>
            </div>
            <div className="md:w-2/3">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1" className="border-b border-white/10">
                        <AccordionTrigger className="text-white hover:no-underline hover:text-white font-bold text-base md:text-lg lg:text-xl py-6 tracking-wide">Is my data secure?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-neutral-200 leading-relaxed tracking-wide font-light text-base md:text-lg">
                            <p>
                                Yes, absolutely. Nextin uses enterprise-grade security with complete data isolation between companies. You can optionally configure your own dedicated database for maximum security. All connections are encrypted, and we follow industry best practices for data protection.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border-b border-white/10">
                        <AccordionTrigger className="text-white hover:no-underline hover:text-white font-bold text-base md:text-lg lg:text-xl py-6 tracking-wide">Can I use my own database?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-neutral-200 leading-relaxed tracking-wide font-light text-base md:text-lg">
                            <p>
                                Yes! Enterprise plans support custom database configuration. You can connect your own MongoDB instance for complete data control and compliance requirements.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="border-b border-white/10">
                        <AccordionTrigger className="text-white hover:no-underline hover:text-white font-bold text-base md:text-lg lg:text-xl py-6 tracking-wide">How many team members can I have?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-neutral-200 leading-relaxed tracking-wide font-light text-base md:text-lg">
                            <p>
                                It depends on your plan. Starter plans support up to 10 members, Professional up to 50, and Enterprise has unlimited members. Contact us for custom requirements.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className="border-b border-white/10">
                        <AccordionTrigger className="text-white hover:no-underline hover:text-white font-bold text-base md:text-lg lg:text-xl py-6 tracking-wide">Can I customize the platform for my company?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-neutral-200 leading-relaxed tracking-wide font-light text-base md:text-lg">
                            <p>
                                Yes! You can customize branding (favicon, site title), configure page access per role, and Enterprise plans include advanced customizations like feature flags and custom components.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4b" className="border-b border-white/10">
                        <AccordionTrigger className="text-white hover:no-underline hover:text-white font-bold text-base md:text-lg lg:text-xl py-6 tracking-wide">Can I use my own company domain?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-neutral-200 leading-relaxed tracking-wide font-light text-base md:text-lg">
                            <p>
                                Yes! Enterprise plans support custom company domain integration. You can use your own domain (e.g., app.yourcompany.com) instead of the default workspace URL. This maintains your brand authenticity, enhances professional credibility, and provides a seamless branded experience for your team and clients. Our team will assist with domain configuration and SSL certificate setup.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5" className="border-b border-white/10">
                        <AccordionTrigger className="text-white hover:no-underline hover:text-white font-bold text-base md:text-lg lg:text-xl py-6 tracking-wide">Do you offer a free trial?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-neutral-200 leading-relaxed tracking-wide font-light text-base md:text-lg">
                            <p>
                                Yes, we offer a 14-day free trial with full access to all features. No credit card required.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6" className="border-b border-white/10">
                        <AccordionTrigger className="text-white hover:no-underline hover:text-white font-bold text-base md:text-lg lg:text-xl py-6 tracking-wide">Can I export my data?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-neutral-200 leading-relaxed tracking-wide font-light text-base md:text-lg">
                            <p>
                                Yes, you can export data in various formats. Reports can be exported to Excel/CSV, and invoices can be downloaded as PDFs.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7" className="border-b border-white/10">
                        <AccordionTrigger className="text-white hover:no-underline hover:text-white font-bold text-base md:text-lg lg:text-xl py-6 tracking-wide">Is there a mobile app?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-neutral-200 leading-relaxed tracking-wide font-light text-base md:text-lg">
                            <p>
                                The platform is fully responsive and works great on mobile browsers. A native mobile app is planned for future releases.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8" className="border-b border-white/10">
                        <AccordionTrigger className="text-white hover:no-underline hover:text-white font-bold text-base md:text-lg lg:text-xl py-6 tracking-wide">What kind of support do you offer?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-neutral-200 leading-relaxed tracking-wide font-light text-base md:text-lg">
                            <p>
                                We offer email support for all plans, priority support for Professional plans, and dedicated support with SLA for Enterprise plans.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9" className="border-b border-white/10">
                        <AccordionTrigger className="text-white hover:no-underline hover:text-white font-bold text-base md:text-lg lg:text-xl py-6 tracking-wide">Can I integrate with other tools?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-neutral-200 leading-relaxed tracking-wide font-light text-base md:text-lg">
                            <p>
                                Enterprise plans include API access for custom integrations. We&apos;re also working on pre-built integrations with popular tools (coming soon).
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-10" className="border-b-0">
                        <AccordionTrigger className="text-white hover:no-underline hover:text-white font-semibold text-base md:text-lg py-6">What happens if I need to cancel?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-neutral-300 leading-relaxed">
                            <p>
                                You can cancel anytime. Your data will be available for export for 30 days after cancellation. No long-term contracts required.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}

