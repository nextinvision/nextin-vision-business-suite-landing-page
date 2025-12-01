"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import BlurText from "@/components/BlurText";

export default function FAQ() {
    return (
        <div className="w-11/12 max-w-5xl mx-auto mt-6 mb-6 md:mt-20 md:mb-20 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
                <div>
                    <BlurText
                        text="Frequently Asked Questions"
                        className="text-3xl md:text-5xl text-white font-heading"
                        delay={50}
                    />
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
                        <AccordionTrigger className="text-slate-100 hover:no-underline hover:text-white">Is my data secure?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-slate-300">
                            <p>
                                Yes, absolutely. Nextin uses enterprise-grade security with complete data isolation between companies. You can optionally configure your own dedicated database for maximum security. All connections are encrypted, and we follow industry best practices for data protection.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border-b border-white/10">
                        <AccordionTrigger className="text-slate-100 hover:no-underline hover:text-white">Can I use my own database?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-slate-300">
                            <p>
                                Yes! Enterprise plans support custom database configuration. You can connect your own MongoDB instance for complete data control and compliance requirements.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="border-b border-white/10">
                        <AccordionTrigger className="text-slate-100 hover:no-underline hover:text-white">How many team members can I have?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-slate-300">
                            <p>
                                It depends on your plan. Starter plans support up to 10 members, Professional up to 50, and Enterprise has unlimited members. Contact us for custom requirements.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className="border-b border-white/10">
                        <AccordionTrigger className="text-slate-100 hover:no-underline hover:text-white">Can I customize the platform for my company?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-slate-300">
                            <p>
                                Yes! You can customize branding (favicon, site title), configure page access per role, and Enterprise plans include advanced customizations like feature flags and custom components.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5" className="border-b border-white/10">
                        <AccordionTrigger className="text-slate-100 hover:no-underline hover:text-white">Do you offer a free trial?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-slate-300">
                            <p>
                                Yes, we offer a 14-day free trial with full access to all features. No credit card required.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6" className="border-b border-white/10">
                        <AccordionTrigger className="text-slate-100 hover:no-underline hover:text-white">Can I export my data?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-slate-300">
                            <p>
                                Yes, you can export data in various formats. Reports can be exported to Excel/CSV, and invoices can be downloaded as PDFs.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7" className="border-b border-white/10">
                        <AccordionTrigger className="text-slate-100 hover:no-underline hover:text-white">Is there a mobile app?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-slate-300">
                            <p>
                                The platform is fully responsive and works great on mobile browsers. A native mobile app is planned for future releases.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8" className="border-b border-white/10">
                        <AccordionTrigger className="text-slate-100 hover:no-underline hover:text-white">What kind of support do you offer?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-slate-300">
                            <p>
                                We offer email support for all plans, priority support for Professional plans, and dedicated support with SLA for Enterprise plans.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9" className="border-b border-white/10">
                        <AccordionTrigger className="text-slate-100 hover:no-underline hover:text-white">Can I integrate with other tools?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-slate-300">
                            <p>
                                Enterprise plans include API access for custom integrations. We&apos;re also working on pre-built integrations with popular tools (coming soon).
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-10" className="border-b-0">
                        <AccordionTrigger className="text-slate-100 hover:no-underline hover:text-white">What happens if I need to cancel?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-slate-300">
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
