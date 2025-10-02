"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Email submitted:", email)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail("")
    }, 3000)
  }

  return (
    <section id="waitlist" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Spotlight */}
      <div className="absolute inset-0 spotlight-teal-angled opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] spotlight-blue opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to take control of your health records?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join the waitlist and be among the first to experience secure, private health document management.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 px-6 text-base"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-to-r from-[#0AB6BC] to-[#37AFFF] text-white hover:shadow-lg hover:shadow-[#0AB6BC]/30 transition-all duration-300 h-12 px-8 group"
            >
              {isSubmitted ? (
                "Submitted!"
              ) : (
                <>
                  Join the waitlist
                  
                </>
              )}
            </Button>
          </form>

          {isSubmitted && (
            <p className="mt-4 text-sm text-primary font-medium animate-in fade-in duration-300">
              Thank you! We'll be in touch soon.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
