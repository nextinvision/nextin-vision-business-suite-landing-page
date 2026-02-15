import Link from "next/link";
import BackgroundGradients from "@/components/layout/Background";
import Footer from "@/components/layout/Footer";
import StickyNavbar from "@/components/layout/StickyNavbar";
import BlurText from "@/components/common/BlurText";
import ShinyText from "@/components/common/ShinyText";
import AnimatedContent from "@/components/common/AnimatedContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Zap, Shield, Heart, Rocket } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <StickyNavbar />
      <BackgroundGradients />
      <div className="w-full overflow-x-hidden min-h-screen">
        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <AnimatedContent
              distance={50}
              direction="vertical"
              duration={1.0}
              className="space-y-6"
            >
              <BlurText
                text="About Nextin Project Management"
                className="text-4xl md:text-6xl text-white justify-center font-heading mb-4"
                delay={100}
              />
              <ShinyText
                text="Empowering businesses worldwide with comprehensive, secure, and scalable project management solutions. We're on a mission to simplify how teams work together."
                disabled={false}
                speed={3}
                className="text-lg md:text-xl max-w-3xl mx-auto text-neutral-300"
              />
            </AnimatedContent>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 w-full max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <BlurText
                text="Our Story"
                className="text-3xl md:text-5xl text-white font-heading"
                delay={50}
              />
              <ShinyText
                text="Founded with a vision to revolutionize business management, Nextin Project Management was born from the frustration of juggling multiple tools and platforms. We recognized that businesses needed a unified solution that could scale with their growth while maintaining enterprise-grade security."
                disabled={false}
                speed={3}
                className="text-base md:text-lg text-neutral-300 leading-relaxed"
              />
              <p className="text-neutral-400 leading-relaxed">
                Today, we serve businesses of all sizes—from startups to enterprise organizations—helping them streamline operations, improve collaboration, and achieve their goals more efficiently. Our platform combines the power of project management, CRM, invoicing, HR, and more into one seamless experience.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:bg-white/10 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#005B82]/20 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-[#005B82]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">2020</h3>
                    <p className="text-neutral-400 text-sm">Founded</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">10,000+</h3>
                    <p className="text-neutral-400 text-sm">Active Users</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">50+</h3>
                    <p className="text-neutral-400 text-sm">Countries Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <BlurText
              text="Our Mission & Vision"
              className="text-3xl md:text-5xl text-white justify-center font-heading"
              delay={150}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-[#005B82]/20 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-[#005B82]" />
                </div>
                <CardTitle className="text-2xl text-white">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-300 leading-relaxed">
                  To empower businesses of all sizes with powerful, intuitive, and secure project management tools that enable them to work smarter, collaborate better, and achieve their goals faster. We believe that every business deserves access to enterprise-grade solutions without the complexity.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-2xl text-white">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-300 leading-relaxed">
                  To become the world&apos;s most trusted and comprehensive business management platform, where teams can manage every aspect of their operations in one place. We envision a future where businesses can focus on what they do best, while we handle the complexity of project management, collaboration, and operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <BlurText
              text="Our Core Values"
              className="text-3xl md:text-5xl text-white justify-center font-heading"
              delay={150}
            />
            <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Security First",
                description: "We prioritize the security and privacy of our users' data above all else. Enterprise-grade security is not optional—it's fundamental.",
                color: "text-green-400",
                bg: "bg-green-500/20",
              },
              {
                icon: Zap,
                title: "Innovation",
                description: "We continuously innovate to stay ahead of the curve, bringing cutting-edge features that solve real business problems.",
                color: "text-yellow-400",
                bg: "bg-yellow-500/20",
              },
              {
                icon: Heart,
                title: "Customer-Centric",
                description: "Our customers are at the heart of everything we do. We listen, learn, and evolve based on their feedback and needs.",
                color: "text-pink-400",
                bg: "bg-pink-500/20",
              },
              {
                icon: Users,
                title: "Transparency",
                description: "We believe in honest communication, transparent pricing, and clear expectations. No hidden fees, no surprises.",
                color: "text-[#005B82]",
                bg: "bg-[#005B82]/20",
              },
              {
                icon: Target,
                title: "Excellence",
                description: "We strive for excellence in every aspect of our platform—from code quality to user experience to customer support.",
                color: "text-purple-400",
                bg: "bg-purple-500/20",
              },
              {
                icon: Rocket,
                title: "Scalability",
                description: "We build for scale, ensuring our platform grows seamlessly with businesses from startup to enterprise level.",
                color: "text-orange-400",
                bg: "bg-orange-500/20",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${value.bg}`}>
                    <value.icon className={`w-6 h-6 ${value.color}`} />
                  </div>
                  <CardTitle className="text-xl text-white">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-400 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <BlurText
              text="Built with Modern Technology"
              className="text-3xl md:text-5xl text-white justify-center font-heading"
              delay={150}
            />
            <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
              We leverage the latest technologies to deliver a fast, secure, and scalable platform
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Next.js 15", description: "Latest React framework" },
              { name: "React 19", description: "Modern UI library" },
              { name: "TypeScript", description: "Type-safe development" },
              { name: "MongoDB", description: "Scalable database" },
              { name: "Prisma", description: "Modern ORM" },
              { name: "Tailwind CSS", description: "Utility-first styling" },
              { name: "Multi-Tenant", description: "Enterprise architecture" },
              { name: "Cloud-Native", description: "Scalable infrastructure" },
            ].map((tech, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors text-center"
              >
                <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-sm text-neutral-400">{tech.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 w-full max-w-7xl mx-auto px-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-12 text-center">
            <BlurText
              text="Join Us on This Journey"
              className="text-3xl md:text-5xl text-white justify-center font-heading mb-6"
              delay={100}
            />
            <ShinyText
              text="Whether you're a startup or an enterprise, we're here to help you succeed. Experience the power of unified business management."
              disabled={false}
              speed={3}
              className="text-lg text-neutral-300 max-w-2xl mx-auto mb-8"
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-[#F16822] hover:bg-[#D85A1A] text-white rounded-lg font-semibold transition-colors inline-block text-center"
              >
                Get in Touch
              </Link>
              <Link
                href="/#pricing"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-lg font-semibold transition-colors inline-block text-center"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

