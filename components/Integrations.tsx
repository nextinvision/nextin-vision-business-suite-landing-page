"use client";

import React from "react";
import BlurText from "@/components/BlurText";
import {
    Mail,
    Calendar,
    HardDrive,
    Calculator,
    MessageSquare,
    Code2,
} from "lucide-react";

const integrations = [
    {
        name: "Email",
        description: "Send invoices and notifications",
        icon: Mail,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
    },
    {
        name: "Calendar",
        description: "Sync with Google Calendar, Outlook",
        icon: Calendar,
        color: "text-green-400",
        bg: "bg-green-500/10",
    },
    {
        name: "Storage",
        description: "Connect with Google Drive, Dropbox",
        icon: HardDrive,
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
    },
    {
        name: "Accounting",
        description: "QuickBooks, Xero integration",
        icon: Calculator,
        color: "text-purple-400",
        bg: "bg-purple-500/10",
    },
    {
        name: "Communication",
        description: "Slack, Microsoft Teams",
        icon: MessageSquare,
        color: "text-pink-400",
        bg: "bg-pink-500/10",
    },
    {
        name: "API",
        description: "Custom integrations via REST API",
        icon: Code2,
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
    },
];

export default function Integrations() {
    return (
        <section className="py-20 w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <BlurText
                    text="Connect with Your Favorite Tools"
                    className="text-3xl md:text-5xl text-white justify-center font-heading"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    as="h2"
                />
                <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
                    Seamlessly integrate Nextin with the tools you already use.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {integrations.map((integration, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
                    >
                        <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${integration.bg} group-hover:scale-110 transition-transform`}
                        >
                            <integration.icon className={`w-6 h-6 ${integration.color}`} />
                        </div>
                        <h3 className="text-neutral-200 font-semibold mb-1">
                            {integration.name}
                        </h3>
                        <p className="text-xs text-neutral-500 text-center">
                            {integration.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <p className="text-sm text-neutral-500 italic">
                    *Note: Some integrations may be planned for future releases
                </p>
            </div>
        </section>
    );
}
