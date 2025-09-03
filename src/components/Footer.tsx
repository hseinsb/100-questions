import { Heart, Mail, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-cloud to-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="w-6 h-6 text-heart" />
              <span className="font-heading font-bold text-xl text-ink">
                100 Questions
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              Ask what matters before you commit. Build lasting trust through structured, honest conversations.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-ink">Legal</h3>
            <div className="space-y-2">
              <Link 
                href="/privacy" 
                className="block text-gray-600 hover:text-trust transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="block text-gray-600 hover:text-trust transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-ink">Connect</h3>
            <div className="space-y-3">
              <a 
                href="mailto:hussein.sbeiti.wb@gmail.com"
                className="flex items-center space-x-2 text-gray-600 hover:text-trust transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Support</span>
              </a>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-trust transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-trust transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Hussein Sbeiti. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
