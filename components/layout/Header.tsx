import BlurText from "@/components/common/BlurText"
import ShinyText from '@/components/common/ShinyText';
import { Button } from "@/components/ui/button";
import AnimatedContent from '@/components/common/AnimatedContent';

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
                            <Button className="bg-gradient-to-r from-[#F16822] to-[#D85A1A] hover:from-[#D85A1A] hover:to-[#F16822] text-white border-none shadow-lg shadow-[#F16822]/30 hover:shadow-xl hover:shadow-[#F16822]/40 hover:scale-105 transition-all duration-300 px-8 py-6 text-base font-semibold">
                                Start Free Trial
                            </Button>
                            <Button variant="outline" className="bg-transparent text-white border-2 border-white/20 hover:bg-white/10 hover:border-white/30 hover:text-white transition-all duration-300 px-8 py-6 text-base font-semibold hover:scale-105">
                                Watch Demo
                            </Button>
                        </AnimatedContent>
                    </div>

                    {/* Hero Image Placeholder */}
                    {/* Hero Video */}
                    <div className="w-full max-w-6xl flex-1 min-h-[300px] md:min-h-[500px] rounded-2xl border border-white/10 backdrop-blur-sm flex items-center justify-center text-white/20 relative overflow-hidden shadow-[0_0_60px_-5px_rgba(255,255,255,0.3)] mx-auto">
                        {/* Premium Ambient Gradient Background - Orange Focused (Behind Video) */}
                        <div className="absolute inset-0 z-0 pointer-events-none">
                            {/* Primary gradient background - orange dominant blend */}
                            <div 
                                className="absolute inset-0"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(241, 104, 34, 0.6) 0%, rgba(241, 104, 34, 0.4) 30%, transparent 60%, rgba(241, 104, 34, 0.5) 100%)'
                                }}
                            />
                            
                            {/* Secondary gradient for depth */}
                            <div 
                                className="absolute inset-0"
                                style={{
                                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.3) 0%, transparent 50%, transparent 100%)'
                                }}
                            />
                            
                            {/* Radial gradients for ambient orange lighting effect */}
                            <div 
                                className="absolute inset-0"
                                style={{
                                    background: 'radial-gradient(circle at 30% 40%, rgba(241, 104, 34, 0.5) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(241, 104, 34, 0.45) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(241, 104, 34, 0.3) 0%, transparent 60%)'
                                }}
                            />
                            
                            {/* Orange corner accents for premium feel */}
                            <div 
                                className="absolute top-0 left-0 w-2/5 h-2/5 rounded-tl-2xl"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(241, 104, 34, 0.55) 0%, transparent 100%)'
                                }}
                            />
                            <div 
                                className="absolute bottom-0 right-0 w-2/5 h-2/5 rounded-br-2xl"
                                style={{
                                    background: 'linear-gradient(315deg, rgba(241, 104, 34, 0.6) 0%, transparent 100%)'
                                }}
                            />
                            
                            {/* Orange-tinted animated shimmer effect */}
                            <div 
                                className="absolute inset-0"
                                style={{
                                    background: 'linear-gradient(90deg, transparent 0%, rgba(241, 104, 34, 0.2) 50%, transparent 100%)',
                                    backgroundSize: '200% 100%',
                                    animation: 'shimmer 8s ease-in-out infinite'
                                }}
                            />
                        </div>
                        
                        {/* Video on top of background */}
                        <iframe
                            className="absolute inset-0 w-full h-full z-10 rounded-2xl"
                            src="https://www.youtube.com/embed/eIUqw3_YcCI?autoplay=1&mute=1&controls=0&loop=1&playlist=eIUqw3_YcCI"
                            title="Hero Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

