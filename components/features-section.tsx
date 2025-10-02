"use client"

import { Lock, Fingerprint, QrCode, Database, Wallet } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Lock,
      title: "Encrypted Document Vault",
      description:
        "Upload lab results and medical certificates as PDFs. Files are encrypted end-to-end so only you and your approved recipients can open them.",
      benefit: "Peace of mind and full control over who sees your records.",
    },
    {
      icon: Fingerprint,
      title: "Zero-Knowledge Proofs (ZK)",
      description:
        "Prove specific health statements (ranges, thresholds, vaccination status) without showing the full report.",
      benefit: "Share what's necessary—nothing more.",
    },
    {
      icon: QrCode,
      title: "Smart Sharing (Link & QR)",
      description: "Create a time-limited link or QR to share with a clinician, school, or employer. Revoke anytime.",
      benefit: "Frictionless handoff with built-in privacy and control.",
    },
    {
      icon: Database,
      title: "On-Chain Audit Trail (Polkadot)",
      description:
        "Store document commitments and access attestations on a Polkadot test network for transparent, tamper-evident logs.",
      benefit: "Verifiable integrity—recipients can trust what they receive.",
    },
    {
      icon: Wallet,
      title: "Wallet-First Access",
      description: "Connect once, manage everything from your wallet. No passwords to forget.",
      benefit: "Simple, secure sign-in that's portable across devices.",
    },
  ]

  return (
    null
  )
}
