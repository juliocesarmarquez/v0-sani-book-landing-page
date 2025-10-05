"use client"

import { Shield, Link2, Eye, Archive } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Privacy by design",
      description: "Nothing personally identifiable is stored on-chain—only cryptographic commitments.",
    },
    {
      icon: Link2,
      title: "Granular sharing",
      description: "Give time-limited, revocable access via link or QR.",
    },
    {
      icon: Eye,
      title: "Proof without exposure",
      description: "Share only the facts required, not the full document.",
    },
    {
      icon: Archive,
      title: "Portable & future-proof",
      description: "Backed by decentralized storage and on-chain audit trails.",
    },
  ]

  return (
    <section id="benefits" className="relative py-20 overflow-hidden my-[-36px] md:py-[70px]">
      {/* Background Spotlight */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 spotlight-teal opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Key Benefits</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with privacy, control, and portability at the core
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl glass-effect hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0AB6BC] to-[#37AFFF] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
