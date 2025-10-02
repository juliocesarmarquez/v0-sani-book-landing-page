"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "What exactly is stored on-chain?",
      answer:
        "Only cryptographic commitments (hashes) and access attestations—never your PDFs or personal identifiers.",
    },
    {
      question: "Where are my PDFs stored?",
      answer:
        "Encrypted PDFs are stored off-chain (e.g., IPFS or similar). Decryption keys are shared only with your approved recipients.",
    },
    {
      question: "Do I need a crypto wallet?",
      answer:
        "Yes, you'll connect a compatible wallet to control access, sign shares, and create attestations. We guide you step-by-step.",
    },
    {
      question: "What are zero-knowledge proofs in plain English?",
      answer:
        'They let you prove something is true (like "result is within a safe range") without revealing the underlying document or numbers.',
    },
    {
      question: "Is this available in production today?",
      answer:
        "We're launching in phases. The MVP runs on a Polkadot test environment while we iterate with early users and partners.",
    },
    {
      question: "Can I revoke access after sharing?",
      answer:
        "Yes. You can revoke a link/QR at any time. Recipients will immediately lose the ability to view or verify.",
    },
    {
      question: "How much will it cost?",
      answer: "During the waitlist phase, early access is free. Pricing will be announced with the public release.",
    },
  ]

  return (
    <section id="faq" className="relative py-20 md:py-32 bg-muted/30 overflow-hidden">
      {/* Background Spotlight */}
      <div className="absolute top-0 right-1/4 w-96 h-96 spotlight-teal opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Everything you need to know about SaniBook</p>
        </div>

        <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
