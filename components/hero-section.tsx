"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const handleWaitlistClick = () => {
    document.querySelector("#waitlist")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Spotlight Background */}
      <div className="absolute inset-0 spotlight-teal opacity-60" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 spotlight-blue opacity-40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
            Own your health records.{" "}
            <span className="bg-gradient-to-r from-[#0AB6BC] to-[#37AFFF] bg-clip-text text-transparent">
              Share them safely
            </span>{" "}
            in seconds.
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
            SaniBook is a Web3 health wallet for patients and families to store lab results and medical PDFs, prove
            what's needed with zero-knowledge proofs, and share access securely—without exposing private data.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-[#0AB6BC] to-[#37AFFF] text-white hover:shadow-xl hover:shadow-[#0AB6BC]/30 transition-all duration-300 text-lg px-8 py-6 h-auto group leading-[0rem]"
            onClick={handleWaitlistClick}
          >
            Join the waitlist
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
