"use client"

export function ProblemSolutionSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Spotlight */}
      <div className="absolute top-0 left-1/4 w-96 h-96 spotlight-blue opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto">
          {/* The Problem */}
          <div className="animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-semibold mb-4">
              The Problem
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Scattered, risky, and overexposed
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Health documents are scattered across clinics, emails, and portals. Sharing them is slow, risky, and often
              reveals more than necessary (full reports, personal details, and identifiers).
            </p>
          </div>

          {/* Our Solution */}
          <div className="animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#0AB6BC] to-[#37AFFF] text-white text-sm font-semibold mb-4">
              Our Solution
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Encrypted, verifiable, and under your control
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SaniBook keeps your medical PDFs encrypted, verifiable, and under your control. Share a link or QR to a
              specific doctor or school—and optionally prove facts (e.g., "LDL ≤ 130") with ZK proofs without revealing
              the entire report.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
