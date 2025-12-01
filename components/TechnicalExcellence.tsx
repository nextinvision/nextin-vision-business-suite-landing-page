"use client";

import BlurText from "@/components/BlurText";
import { BentoGridShowcase } from "@/components/21st/bento-product-features";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Database,
    Shield,
    Server,
    Zap,
    Code,
    Layers,
    Lock,
    Globe,
    Cpu,
} from "lucide-react";

export default function TechnicalExcellence() {
    return (
        <section className="py-20 w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <BlurText
                    text="Built for Scale, Designed for Security"
                    className="text-3xl md:text-5xl text-white justify-center font-heading"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    as="h2"
                />
                <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
                    Enterprise-grade architecture that grows with your business.
                </p>
            </div>

            <BentoGridShowcase
                integration={<MultiTenantCard />}
                trackers={<ScalablePerformanceCard />}
                statistic={<ScalableStorageCard />}
                focus={<FrontendStackCard />}
                productivity={<BackendStackCard />}
                shortcuts={<SecurityCard />}
            />
        </section>
    );
}

function MultiTenantCard() {
    return (
        <Card className="h-full bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-2">
                    <Database className="w-5 h-5 text-blue-400" />
                </div>
                <CardTitle className="text-neutral-200">Multi-Tenant Architecture</CardTitle>
                <CardDescription className="text-neutral-400">
                    Enterprise-Grade Data Isolation
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3 text-sm text-neutral-400">
                    <li className="flex items-start gap-2">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        Complete data isolation between companies
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        Optional dedicated database per company
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        Flexible database routing
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        Support for unlimited companies
                    </li>
                </ul>
            </CardContent>
        </Card>
    );
}

function SecurityCard() {
    return (
        <Card className="h-full bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-2">
                    <Shield className="w-5 h-5 text-green-400" />
                </div>
                <CardTitle className="text-neutral-200">Security First</CardTitle>
                <CardDescription className="text-neutral-400">
                    Your Data is Protected
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-3 text-sm text-neutral-400">
                        <li className="flex items-center gap-2">
                            <Lock className="w-4 h-4 text-green-500" />
                            JWT-based auth with HTTP-only cookies
                        </li>
                        <li className="flex items-center gap-2">
                            <Lock className="w-4 h-4 text-green-500" />
                            Role-based access control (RBAC)
                        </li>
                        <li className="flex items-center gap-2">
                            <Lock className="w-4 h-4 text-green-500" />
                            Encrypted database connections
                        </li>
                    </ul>
                    <ul className="space-y-3 text-sm text-neutral-400">
                        <li className="flex items-center gap-2">
                            <Lock className="w-4 h-4 text-green-500" />
                            Rate limiting on API routes
                        </li>
                        <li className="flex items-center gap-2">
                            <Lock className="w-4 h-4 text-green-500" />
                            Input validation and sanitization
                        </li>
                        <li className="flex items-center gap-2">
                            <Lock className="w-4 h-4 text-green-500" />
                            Comprehensive audit trails
                        </li>
                    </ul>
                </div>
            </CardContent>
        </Card>
    );
}

function ScalablePerformanceCard() {
    return (
        <Card className="h-full bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center mb-2">
                    <Zap className="w-5 h-5 text-orange-400" />
                </div>
                <CardTitle className="text-neutral-200 text-lg">Performance</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2 text-sm text-neutral-400">
                    <li className="flex items-center gap-2">
                        <Server className="w-4 h-4 text-orange-500" />
                        Horizontal scaling support
                    </li>
                    <li className="flex items-center gap-2">
                        <Server className="w-4 h-4 text-orange-500" />
                        Connection pooling
                    </li>
                    <li className="flex items-center gap-2">
                        <Server className="w-4 h-4 text-orange-500" />
                        Efficient caching strategies
                    </li>
                </ul>
            </CardContent>
        </Card>
    );
}

function ScalableStorageCard() {
    return (
        <Card className="h-full bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-2">
                    <Database className="w-5 h-5 text-purple-400" />
                </div>
                <CardTitle className="text-neutral-200 text-lg">Storage</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2 text-sm text-neutral-400">
                    <li className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-purple-500" />
                        Stateless API design
                    </li>
                    <li className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-purple-500" />
                        Query optimization
                    </li>
                    <li className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-purple-500" />
                        GridFS for large files
                    </li>
                </ul>
            </CardContent>
        </Card>
    );
}

function FrontendStackCard() {
    return (
        <Card className="h-full bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-2">
                    <Code className="w-5 h-5 text-cyan-400" />
                </div>
                <CardTitle className="text-neutral-200 text-lg">Frontend</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2 text-sm text-neutral-400">
                    <li className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-cyan-500" />
                        Next.js 15 & React 19
                    </li>
                    <li className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-cyan-500" />
                        TypeScript
                    </li>
                    <li className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-cyan-500" />
                        Tailwind CSS
                    </li>
                </ul>
            </CardContent>
        </Card>
    );
}

function BackendStackCard() {
    return (
        <Card className="h-full bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center mb-2">
                    <Layers className="w-5 h-5 text-pink-400" />
                </div>
                <CardTitle className="text-neutral-200 text-lg">Backend</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2 text-sm text-neutral-400">
                    <li className="flex items-center gap-2">
                        <Database className="w-4 h-4 text-pink-500" />
                        MongoDB
                    </li>
                    <li className="flex items-center gap-2">
                        <Database className="w-4 h-4 text-pink-500" />
                        Prisma ORM
                    </li>
                    <li className="flex items-center gap-2">
                        <Database className="w-4 h-4 text-pink-500" />
                        Server Actions
                    </li>
                </ul>
            </CardContent>
        </Card>
    );
}
