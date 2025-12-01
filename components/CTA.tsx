"use client";
import React from "react";
import { Button } from "./ui/button";
import BlurText from "@/components/BlurText";

export default function CTA() {
    return (
        <div className="w-11/12 max-w-5xl mx-auto mt-6 mb-6 md:mt-20 md:mb-20 p-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl text-center relative overflow-hidden">
            <div className="relative z-10">
                <BlurText
                    text="Ready to Transform Your Business?"
                    className="text-3xl md:text-5xl text-white mb-6 font-heading justify-center"
                    delay={50}
                />
                <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    Join thousands of companies using Nextin to streamline their operations and drive growth. Start your 14-day free trial today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button className="bg-white text-black hover:bg-slate-200 text-lg px-8 py-6 rounded-full font-semibold transition-all hover:scale-105">
                        Get Started for Free
                    </Button>
                    <Button variant="outline" className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:text-white text-lg px-8 py-6 rounded-full font-semibold transition-all">
                        Schedule Demo
                    </Button>
                </div>
                <p className="text-slate-400 text-sm mt-6">
                    No credit card required • Cancel anytime
                </p>
            </div>
        </div>
    );
}
