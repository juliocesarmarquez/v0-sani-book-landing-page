"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { label: "Benefits", href: "#benefits" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#waitlist" },
  ]

  return (
    <header className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "top-4" : "top-0"}`}>
      <div
        className={`mx-auto transition-all duration-300 ${
          isScrolled
            ? "max-w-2xl bg-background/80 backdrop-blur-lg border border-border shadow-lg rounded-full"
            : "container bg-transparent"
        }`}
      >
        <div
          className={`px-4 sm:px-6 lg:px-8 flex items-center transition-all duration-300 leading-[2.1rem] ${
            isScrolled ? "h-12 justify-center" : "h-16 md:h-20 justify-between"
          }`}
        >
          {!isScrolled && (
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0AB6BC] to-[#37AFFF] flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-foreground">SaniBook</span>
            </Link>
          )}

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center ${isScrolled ? "space-x-6" : "space-x-8"}`}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {!isScrolled && (
            <div className="hidden md:block">
              <Button
                className="bg-gradient-to-r from-[#0AB6BC] to-[#37AFFF] text-white hover:shadow-lg hover:shadow-[#0AB6BC]/30 transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#waitlist")?.scrollIntoView({ behavior: "smooth", block: "start" })
                }}
              >
                Join the waitlist
              </Button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                className="bg-gradient-to-r from-[#0AB6BC] to-[#37AFFF] text-white w-full"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#waitlist")?.scrollIntoView({ behavior: "smooth", block: "start" })
                  setIsMobileMenuOpen(false)
                }}
              >
                Join the waitlist
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
