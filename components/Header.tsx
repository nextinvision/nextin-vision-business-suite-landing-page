import BlurText from "@/components/BlurText"
import ShinyText from '@/components/ShinyText';
import { Button } from "@/components/ui/button";
import AnimatedContent from '@/components/AnimatedContent';

export default function Header() {
    return (
        <section className="relative z-10">
            <div className="w-full min-h-screen flex flex-col pt-24 md:pt-32">
                <div className="flex flex-col items-center justify-center w-full px-4 text-center flex-1">
                    <BlurText className="text-white text-4xl md:text-6xl mb-2 justify-center font-heading" text="All-in-One" />
                    <BlurText className="text-white text-4xl md:text-6xl mb-4 justify-center font-heading" text="Business Management Platform" />
                    <ShinyText
                        text="Streamline your projects, manage your team, track finances, and grow your business—all from one powerful platform. Built for teams that demand efficiency, security, and scalability."
                        disabled={false}
                        speed={3}
                        className='custom-class text-sm md:text-base max-w-2xl'
                    />
                    <div className="flex items-center justify-center mt-8 mb-12">
                        <AnimatedContent
                            distance={80}
                            direction="vertical"
                            reverse={false}
                            duration={2.0}
                            ease="power3.out"
                            initialOpacity={0.0}
                            animateOpacity
                            scale={1.0}
                            threshold={0.2}
                            delay={0.2}
                            className="flex items-center gap-8"
                        >
                            <Button className="bg-[#0066CC] hover:bg-[#0055AA] text-white border-none">Start Free Trial</Button>
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white">Watch Demo</Button>
                        </AnimatedContent>
                    </div>

                    {/* Hero Image Placeholder */}
                    <div className="w-full max-w-6xl flex-1 min-h-[300px] rounded-t-2xl border-x border-t border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white/20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                        Modern dashboard interface showing project overview, task management, and analytics in a clean, professional design
                    </div>
                </div>
            </div>
        </section>
    )
}
