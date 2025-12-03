"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function NavigationMenuDemo() {
  const scrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex items-center gap-4 md:gap-6">
      <Link href="/about" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
        About
      </Link>
      <Link href="/contact" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
        Contact Us
      </Link>
      <Link href="#pricing" onClick={scrollToPricing} className="text-sm font-medium text-white/70 hover:text-white transition-colors">
        Pricing
      </Link>
    </div>
  )
}
