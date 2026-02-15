"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function NavigationMenu() {
  const scrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex items-center gap-4 md:gap-8">
      <Link 
        href="/" 
        className="text-sm md:text-base font-bold text-white/80 hover:text-white transition-all duration-300 relative group tracking-wide uppercase letter-spacing-wider"
      >
        Home
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F16822] group-hover:w-full transition-all duration-300"></span>
      </Link>
      <Link 
        href="/about" 
        className="text-sm md:text-base font-bold text-white/80 hover:text-white transition-all duration-300 relative group tracking-wide uppercase letter-spacing-wider"
      >
        About
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F16822] group-hover:w-full transition-all duration-300"></span>
      </Link>
      <Link 
        href="/contact" 
        className="text-sm md:text-base font-bold text-white/80 hover:text-white transition-all duration-300 relative group tracking-wide uppercase letter-spacing-wider"
      >
        Contact Us
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F16822] group-hover:w-full transition-all duration-300"></span>
      </Link>
      <Link 
        href="/#pricing" 
        onClick={scrollToPricing} 
        className="text-sm md:text-base font-bold text-white/80 hover:text-white transition-all duration-300 relative group tracking-wide uppercase letter-spacing-wider"
      >
        Pricing
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F16822] group-hover:w-full transition-all duration-300"></span>
      </Link>
    </nav>
  )
}

