"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { addToWaitlist } from "@/lib/actions/waitlist"

export function CTASection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const result = await addToWaitlist(email)

    if (result.success) {
      setIsSubmitted(true)
      setEmail("")
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    } else {
      setError(result.error || "Failed to join waitlist")
    }

    setIsLoading(false)
  }

  return (
    <section id="waitlist" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Spotlight */}
      <div className="absolute inset-0 spotlight-teal-angled opacity-40 py-[59px]" />
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
              disabled={isLoading}
              className="flex-1 h-12 px-6 text-base"
            />
            <Button
              type="submit"
              size="lg"
              disabled={isLoading}
              className="bg-gradient-to-r from-[#0AB6BC] to-[#37AFFF] text-white hover:shadow-lg hover:shadow-[#0AB6BC]/30 transition-all duration-300 h-12 px-8 group"
            >
              {isLoading ? (
                "Joining..."
              ) : isSubmitted ? (
                "Submitted!"
              ) : (
                <>
                  Join the waitlist
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>

          {error && <p className="mt-4 text-sm text-red-500 font-medium animate-in fade-in duration-300">{error}</p>}

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
