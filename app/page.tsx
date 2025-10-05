import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { BenefitsSection } from "@/components/benefits-section"
import { FeaturesSection } from "@/components/features-section"
import { CTASection } from "@/components/cta-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen modern-bg relative">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40" />

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <ProblemSolutionSection />
        <HowItWorksSection />
        <BenefitsSection />
        <FeaturesSection />
        <CTASection />
        <FAQSection />
        <Footer />
      </div>
    </main>
  )
}
