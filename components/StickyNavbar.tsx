"use client"

import React, { useState, useEffect } from 'react'
import { NavigationMenuDemo } from "@/components/navbar"
import { cn } from "@/lib/utils"

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
                "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 py-4",
                scrolled ? "bg-black/50 backdrop-blur-md border-b border-white/10 py-2" : "bg-transparent"
            )}
        >
            <NavigationMenuDemo />
        </div>
    )
}
