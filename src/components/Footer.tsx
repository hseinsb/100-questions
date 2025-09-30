import { Heart, Instagram } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 border-t-4 border-accent-primary/30 relative overflow-hidden">
      {/* Lightweight Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-t from-accent-primary/15 to-orange-200/15 rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white fill-current" />
              </div>
              <span className="font-heading font-bold text-2xl gradient-text">
                100 Questions
              </span>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              Ask what matters before you commit. Build lasting trust through structured, honest conversations.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg text-ink-900">Legal</h3>
            <div className="space-y-3">
              <Link 
                href="/privacy" 
                className="block text-gray-700 hover:text-accent-primary transition-colors font-medium"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="block text-gray-700 hover:text-accent-primary transition-colors font-medium"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg text-ink-900">Connect</h3>
            <div>
              <a 
                href="https://www.instagram.com/huss.sbeiti/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-xl text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Follow on Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-accent-primary/10 mt-10 pt-8 text-center">
          <p className="text-gray-600 font-medium">
            © {new Date().getFullYear()} Hussein Sbeiti. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
