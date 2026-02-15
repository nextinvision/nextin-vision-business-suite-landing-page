"use client";

import BlurText from "@/components/common/BlurText";
import { motion } from "motion/react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Database,
    Zap,
    Layers,
    Globe,
    Shield,
} from "lucide-react";

export default function TechnicalExcellence() {
    return (
        <section className="py-20 w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <BlurText
                    text="Built for Scale, Designed for Security"
                    className="text-3xl md:text-5xl lg:text-6xl text-white justify-center font-heading font-extrabold tracking-tight leading-tight"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    as="h2"
                />
                <p className="mt-4 text-neutral-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed tracking-wide font-light">
                    Enterprise-grade architecture that grows with your business.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <MultiTenantCard />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <ScalablePerformanceCard />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <ScalableStorageCard />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <CustomDomainCard />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <BackendStackCard />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <SecurityCard />
                </motion.div>
            </div>
        </section>
    );
}

function MultiTenantCard() {
    return (
        <Card className="w-full h-full flex flex-col bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30">
            <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-[#005B82]/20 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Database className="w-6 h-6 text-[#005B82] group-hover:text-[#F16822] transition-colors duration-300" />
                </div>
                <CardTitle className="text-white text-xl md:text-2xl lg:text-3xl mb-2 font-extrabold tracking-tight leading-tight">Multi-Tenant Architecture</CardTitle>
                <CardDescription className="text-neutral-200 text-base md:text-lg mb-4 font-semibold tracking-wide leading-relaxed">
                    Enterprise-Grade Data Isolation & Scalability
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <ul className="space-y-3 text-sm md:text-base lg:text-lg text-neutral-200 leading-relaxed tracking-wide font-light">
                    <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F16822] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        Complete data isolation ensures your company&apos;s information remains private and secure
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F16822] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        Reduce operational costs with shared infrastructure while maintaining data security
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F16822] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        Meet strict compliance requirements with optional dedicated database options
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F16822] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        Scale your business without limits—add new companies or divisions seamlessly
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F16822] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        Zero downtime when expanding—your business operations continue uninterrupted
                    </li>
                </ul>
            </CardContent>
        </Card>
    );
}

function ScalablePerformanceCard() {
    return (
        <Card className="w-full h-full flex flex-col bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30">
            <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center mb-2">
                    <Zap className="w-5 h-5 text-orange-400" />
                </div>
                <CardTitle className="text-white text-lg md:text-xl font-extrabold tracking-tight">Scalable Infrastructure</CardTitle>
                <CardDescription className="text-neutral-200 text-base font-semibold tracking-wide">
                    Grows with Your Business
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <ul className="space-y-3 text-sm md:text-base lg:text-lg text-neutral-200 leading-relaxed tracking-wide font-light">
                    <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F16822] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        Grow your business without worrying about infrastructure limitations
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F16822] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        Handle increased traffic and users without performance degradation
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F16822] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        Fast response times keep your team productive and customers satisfied
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F16822] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        Automatic resource allocation adapts to your business needs in real-time
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F16822] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        Reliable uptime ensures your business operations never stop
                    </li>
                </ul>
            </CardContent>
        </Card>
    );
}

function ScalableStorageCard() {
    return (
        <Card className="w-full h-full flex flex-col bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30">
            <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-2">
                    <Database className="w-5 h-5 text-purple-400" />
                </div>
                <CardTitle className="text-white text-lg md:text-xl font-extrabold tracking-tight">Storage & Optimization</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
                <ul className="space-y-3 text-sm md:text-base lg:text-lg text-neutral-200 leading-relaxed tracking-wide font-light">
                    <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F16822] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        Store unlimited files, documents, and data without worrying about storage limits
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F16822] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        Optimized performance means faster access to your business data and files
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F16822] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        Reduce storage costs with intelligent data management and optimization
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F16822] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        Quick file retrieval helps your team work more efficiently and serve clients faster
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F16822] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        Secure data backup ensures your business information is always protected
                    </li>
                </ul>
            </CardContent>
        </Card>
    );
}

function BackendStackCard() {
    return (
        <Card className="w-full h-full flex flex-col bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30">
            <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center mb-2">
                    <Layers className="w-5 h-5 text-pink-400" />
                </div>
                <CardTitle className="text-white text-lg md:text-xl font-extrabold tracking-tight">Backend & Database</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
                <ul className="space-y-3 text-sm md:text-base lg:text-lg text-neutral-200 leading-relaxed tracking-wide font-light">
                    <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F16822] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        Robust database infrastructure ensures your business data is always accessible
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F16822] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        Fast data processing enables real-time insights for better business decisions
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F16822] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        Reliable backend systems keep your operations running smoothly 24/7
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F16822] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        Seamless data integration connects all your business processes in one place
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F16822] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        Future-proof architecture grows with your business needs and requirements
                    </li>
                </ul>
            </CardContent>
        </Card>
    );
}

function CustomDomainCard() {
    return (
        <Card className="w-full h-full flex flex-col bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30">
            <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-[#F16822]/20 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Globe className="w-6 h-6 text-[#F16822] group-hover:text-[#005B82] transition-colors duration-300" />
                </div>
                <CardTitle className="text-white text-xl md:text-2xl lg:text-3xl mb-2 font-extrabold tracking-tight leading-tight">Custom Domain Integration</CardTitle>
                <CardDescription className="text-neutral-200 text-base md:text-lg mb-4 font-semibold tracking-wide leading-relaxed">
                    Maintain Brand Authenticity & Professional Identity
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <ul className="space-y-3 text-sm md:text-base lg:text-lg text-neutral-200 leading-relaxed tracking-wide font-light">
                    <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F16822] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        Use your own company domain (e.g., app.yourcompany.com) to maintain brand authenticity
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F16822] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        Project a professional image that reinforces your brand identity with clients and partners
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F16822] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        Build trust and credibility by using your own domain instead of generic workspace URLs
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F16822] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        Seamlessly integrate with your existing IT infrastructure and domain management
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F16822] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        Ensure secure access with SSL certificates and professional domain routing
                    </li>
                </ul>
            </CardContent>
        </Card>
    );
}

function SecurityCard() {
    return (
        <Card className="w-full h-full flex flex-col bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30">
            <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Shield className="w-6 h-6 text-green-400 group-hover:text-[#F16822] transition-colors duration-300" />
                </div>
                <CardTitle className="text-white text-xl md:text-2xl lg:text-3xl mb-2 font-extrabold tracking-tight leading-tight">Security First</CardTitle>
                <CardDescription className="text-neutral-200 text-base md:text-lg mb-4 font-semibold tracking-wide leading-relaxed">
                    Your Data is Protected
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <ul className="space-y-3 text-sm md:text-base lg:text-lg text-neutral-200 leading-relaxed tracking-wide font-light">
                    <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F16822] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        Protect your business data with enterprise-grade security measures and encryption
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F16822] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        Control access with role-based permissions to ensure only authorized users see sensitive information
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F16822] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        Meet compliance requirements and industry standards for data protection and privacy
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F16822] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        Prevent unauthorized access and data breaches with advanced security protocols
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#F16822] shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        Maintain complete audit trails for regulatory compliance and business accountability
                    </li>
                </ul>
            </CardContent>
        </Card>
    );
}

