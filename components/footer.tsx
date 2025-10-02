"use client"

import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="relative py-12 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">© {currentYear} SaniBook, Inc. All rights reserved.</p>

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Responsible Disclosure
                </Link>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">Built with ❤️ by SaniBook</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
