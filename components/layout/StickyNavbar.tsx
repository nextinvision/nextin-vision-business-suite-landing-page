"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NavigationMenu } from "@/components/layout/Navbar"
import { cn } from "@/lib/utils"
import { COLORS } from "@/lib/constants"

export default function StickyNavbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
                scrolled ? "bg-black/50 backdrop-blur-md border-b border-white/10 py-2" : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between max-w-7xl">
                {/* Logo on the left */}
                <Link href="/" className="flex items-center gap-2 group">
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
                            className="text-xl md:text-2xl lg:text-3xl font-extrabold font-heading transition-colors group-hover:opacity-90 tracking-tight leading-none"
                            style={{ color: COLORS.NEXTIN_ORANGE }}
                        >
                            NEXTIN
                        </span>
                        <span 
                            className="text-xl md:text-2xl lg:text-3xl font-extrabold font-heading transition-colors group-hover:opacity-90 tracking-tight leading-none"
                            style={{ color: COLORS.WORKSPACE_BLUE }}
                        >
                            WORKSPACE
                        </span>
                    </div>
                </Link>

                {/* Navigation Menu on the right */}
                <NavigationMenu />
            </div>
        </div>
    )
}

