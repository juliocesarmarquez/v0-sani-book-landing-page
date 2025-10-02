"use client"

import { Lock, FileCheck, Share2 } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      icon: Lock,
      title: "Lock and store",
      description:
        "You pick a file (like a lab result). The app locks it on your phone/computer with your own key, then saves the locked copy in safe online storage. No one can read it without the key.",
    },
    {
      number: "2",
      icon: FileCheck,
      title: "Get a public receipt",
      description:
        'The app writes a tiny note on a public ledger (blockchain) that says "a file exists" with a time and code. It never puts your file or personal details there—just a receipt.',
    },
    {
      number: "3",
      icon: Share2,
      title: "Share when you want",
      description:
        "You send a link or QR to your doctor. That link has what's needed to open the lock. They download the locked file and open it in their browser.",
    },
  ]

  return (
    <section id="how-it-works" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Spotlight */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 spotlight-teal opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Three simple steps to secure health sharing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              SaniBook makes it easy to encrypt, verify, and share your medical documents without compromising your
              privacy.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className="relative animate-in fade-in slide-in-from-bottom-8 duration-700"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Connector Line (hidden on mobile, shown on desktop between cards) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#0AB6BC]/30 to-transparent -z-10" />
                  )}

                  <div className="relative h-full p-8 rounded-3xl bg-white border border-gray-100 hover:border-[#0AB6BC]/30 transition-all duration-300 hover:shadow-xl group">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#0AB6BC] to-[#37AFFF] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0AB6BC]/10 to-[#37AFFF]/10 flex items-center mb-6 group-hover:scale-110 transition-transform duration-300 justify-center">
                      <Icon className="w-8 h-8 text-[#0AB6BC]" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
