"use client";

import { useState } from "react";
import BackgroundGradients from "@/components/layout/Background";
import Footer from "@/components/layout/Footer";
import StickyNavbar from "@/components/layout/StickyNavbar";
import BlurText from "@/components/common/BlurText";
import ShinyText from "@/components/common/ShinyText";
import AnimatedContent from "@/components/common/AnimatedContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
                text="Get in Touch"
                className="text-4xl md:text-6xl lg:text-7xl text-white justify-center font-heading font-extrabold tracking-tight leading-tight mb-4"
                delay={100}
              />
              <ShinyText
                text="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
                disabled={false}
                speed={3}
                className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-neutral-200 leading-relaxed tracking-wide font-light"
              />
            </AnimatedContent>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 w-full max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Information Cards */}
            <div className="md:col-span-1 space-y-6">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-[#005B82]/20 flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-[#005B82]" />
                  </div>
                  <CardTitle className="text-white text-xl md:text-2xl font-extrabold tracking-tight">Email Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-200 mb-2 font-semibold tracking-wide text-sm md:text-base">General Inquiries</p>
                  <a
                    href="mailto:support@nextin.com"
                    className="text-[#005B82] hover:text-[#004A6B] transition-colors font-bold tracking-wide text-sm md:text-base"
                  >
                    support@nextin.com
                  </a>
                  <p className="text-neutral-300 mt-4 mb-2">Sales</p>
                  <a
                    href="mailto:sales@nextin.com"
                    className="text-[#005B82] hover:text-[#004A6B] transition-colors font-bold tracking-wide text-sm md:text-base"
                  >
                    sales@nextin.com
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <CardTitle className="text-white">Call Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-300 mb-2">Phone</p>
                  <a
                    href="tel:+1234567890"
                    className="text-[#005B82] hover:text-[#004A6B] transition-colors font-bold tracking-wide text-sm md:text-base"
                  >
                    +1 (234) 567-890
                  </a>
                  <p className="text-neutral-300 mt-4 mb-2">Business Hours</p>
                  <p className="text-neutral-300 text-sm md:text-base tracking-wide font-light">Mon - Fri: 9:00 AM - 6:00 PM EST</p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-white">Visit Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-300 mb-2">Office Address</p>
                  <p className="text-neutral-300 text-sm md:text-base leading-relaxed tracking-wide font-light">
                    123 Business Street<br />
                    Suite 100<br />
                    City, State 12345<br />
                    United States
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-orange-400" />
                  </div>
                  <CardTitle className="text-white">Response Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-300 mb-2">We typically respond within</p>
                  <p className="text-[#F16822] font-extrabold text-lg md:text-xl tracking-tight">24 hours</p>
                  <p className="text-neutral-300 text-sm md:text-base mt-2 leading-relaxed tracking-wide font-light">
                    For urgent matters, please call us directly.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl text-white font-extrabold tracking-tight flex items-center gap-2">
                    <MessageSquare className="w-6 h-6" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-neutral-200 font-semibold tracking-wide text-sm md:text-base">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus:border-[#005B82] font-light tracking-wide text-sm md:text-base"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-neutral-300">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus:border-[#005B82] font-light tracking-wide text-sm md:text-base"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-neutral-300">
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus:border-[#005B82] font-light tracking-wide text-sm md:text-base"
                          placeholder="Acme Inc."
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-neutral-300">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus:border-[#005B82] font-light tracking-wide text-sm md:text-base"
                          placeholder="+1 (234) 567-890"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-neutral-300">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus:border-[#005B82]"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-neutral-300">
                        Message *
                      </Label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="flex w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#005B82] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    {submitStatus === "success" && (
                      <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/50">
                        <p className="text-green-400 text-sm">
                          Thank you! Your message has been sent successfully. We'll get back to you soon.
                        </p>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/50">
                        <p className="text-red-400 text-sm">
                          Something went wrong. Please try again later.
                        </p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#F16822] hover:bg-[#D85A1A] text-white border-none py-6 text-base font-semibold"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Information Section */}
        <section className="py-20 w-full max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl text-white">Sales Inquiries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-300 mb-4">
                  Interested in learning more about our plans or need a custom quote? Our sales team is here to help.
                </p>
                <a
                  href="mailto:sales@nextin.com"
                  className="text-[#005B82] hover:text-[#004A6B] transition-colors inline-flex items-center gap-2"
                >
                  Contact Sales <Mail className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl text-white">Technical Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-300 mb-4">
                  Need help with your account or have technical questions? Our support team is available 24/7.
                </p>
                <a
                  href="mailto:support@nextin.com"
                  className="text-[#005B82] hover:text-[#004A6B] transition-colors inline-flex items-center gap-2"
                >
                  Get Support <MessageSquare className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Map Placeholder Section */}
        <section className="py-20 w-full max-w-7xl mx-auto px-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-[#005B82]/20 to-[#F16822]/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#005B82] mx-auto mb-4" />
                <p className="text-neutral-300 text-lg">Map Integration</p>
                <p className="text-neutral-500 text-sm mt-2">
                  Interactive map would be displayed here
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

