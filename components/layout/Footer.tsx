import Link from "next/link";
// import Image from "next/image"; // Uncomment when adding logo image
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import type { FooterProps } from "@/types/layout";
import { COLORS } from "@/lib/constants";

const Footer = ({
  logo = {
    url: "/",
    alt: "Nextin Project Management",
    title: "Nextin Project Management",
  },
  tagline = "All-in-One Business Management Platform",
  menuItems = [
    {
      title: "Product",
      links: [
        { text: "Features", url: "#" },
        { text: "Pricing", url: "#" },
        { text: "Integrations", url: "#" },
        { text: "Roadmap", url: "#" },
        { text: "Security", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Documentation", url: "/coming-soon" },
        { text: "User Guide", url: "/coming-soon" },
        { text: "API Documentation", url: "/coming-soon" },
        { text: "Blog", url: "/#" },
        { text: "Support Center", url: "/coming-soon" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About Us", url: "/about" },
        { text: "Careers", url: "#" },
        { text: "Contact", url: "/contact" },
        { text: "Privacy Policy", url: "#" },
        { text: "Terms of Service", url: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy Policy", url: "#" },
        { text: "Terms of Service", url: "#" },
        { text: "Cookie Policy", url: "#" },
        { text: "GDPR Compliance", url: "#" },
        { text: "Data Processing Agreement", url: "#" },
      ],
    },
  ],
  copyright = "© 2025 Nextin Project Management. All rights reserved.",
  bottomLinks = [],
}: FooterProps) => {
  return (
    <section className="py-16 md:py-20 w-full border-t border-white/10 bg-gradient-to-b from-white/5 via-white/3 to-transparent backdrop-blur-md overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6 mb-12">
            <div className="col-span-2 mb-8 lg:mb-0">
              <Link href={logo.url} className="flex items-center gap-2 lg:justify-start mb-4 group">
                {/* Logo Image - You can replace this with your actual logo image */}
                {/* Uncomment and update the path when you have a logo image */}
                {/* <Image
                  src="/logo.png"
                  alt="NEXTIN WORKSPACE"
                  width={40}
                  height={40}
                  className="object-contain"
                /> */}
                {/* Text-based logo with brand colors */}
                <div className="flex items-center gap-1">
                  <span 
                    className="text-2xl md:text-3xl font-bold font-heading transition-colors group-hover:opacity-90"
                    style={{ color: COLORS.NEXTIN_ORANGE }}
                  >
                    NEXTIN
                  </span>
                  <span 
                    className="text-2xl md:text-3xl font-bold font-heading transition-colors group-hover:opacity-90"
                    style={{ color: COLORS.WORKSPACE_BLUE }}
                  >
                    WORKSPACE
                  </span>
                </div>
              </Link>
              <p className="mt-4 text-neutral-200 max-w-xs leading-relaxed tracking-wide font-light text-base md:text-lg">{tagline}</p>

              <div className="mt-6 flex flex-col gap-2 text-slate-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm md:text-base tracking-wide font-normal">support@nextin.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">[Phone Number]</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">[Company Address]</span>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <a href="#" className="text-neutral-400 hover:text-[#F16822] transition-all duration-300 hover:scale-125">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-neutral-400 hover:text-[#F16822] transition-all duration-300 hover:scale-125">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-neutral-400 hover:text-[#F16822] transition-all duration-300 hover:scale-125">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-neutral-400 hover:text-[#F16822] transition-all duration-300 hover:scale-125">
                  <FaYoutube className="w-5 h-5" />
                </a>
              </div>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-6 font-extrabold text-white text-lg md:text-xl tracking-tight">{section.title}</h3>
                <ul className="space-y-3 text-neutral-200">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-semibold hover:text-white transition-all duration-300 hover:translate-x-1 tracking-wide text-sm md:text-base"
                    >
                      <a href={link.url} className="inline-block">{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p className="text-justify text-sm md:text-base tracking-wide font-light leading-relaxed">{copyright}</p>
            <ul className="flex gap-6">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="hover:text-white transition-colors">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;

