import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface FooterProps {
  logo?: {
    url: string;
    src?: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

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
        { text: "Documentation", url: "#" },
        { text: "User Guide", url: "#" },
        { text: "API Documentation", url: "#" },
        { text: "Blog", url: "#" },
        { text: "Support Center", url: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About Us", url: "#" },
        { text: "Careers", url: "#" },
        { text: "Contact", url: "#" },
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
    <section className="py-16 w-full border-t border-white/10 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6 mb-12">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <a href={logo.url} className="text-2xl font-bold text-white font-heading">
                  {logo.title}
                </a>
              </div>
              <p className="mt-4 text-slate-400 max-w-xs">{tagline}</p>

              <div className="mt-6 flex flex-col gap-2 text-slate-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">support@nextin.com</span>
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
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <FaYoutube className="w-5 h-5" />
                </a>
              </div>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-white">{section.title}</h3>
                <ul className="space-y-3 text-slate-400">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-white transition-colors"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>{copyright}</p>
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
