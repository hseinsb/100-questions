'use client'

import { motion } from 'framer-motion'
import { Shield, Download, FileText, CreditCard, Smartphone } from 'lucide-react'
import { getCheckoutUrl, getUtmParams, trackEvent } from '@/lib/utils'

export function GuaranteeBlock() {
  const handleCtaClick = () => {
    const utmParams = getUtmParams()
    trackEvent('begin_checkout', { source: 'guarantee_block', ...utmParams })
    window.open(getCheckoutUrl(utmParams), '_self')
  }

  return (
    <section className="py-20 bg-gradient-to-b from-cloud to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main guarantee card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-12"
        >
          <div className="bg-gradient-to-r from-trust to-heart p-8 text-white text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
              className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Shield className="w-8 h-8" />
            </motion.div>
            <h2 className="font-heading font-bold text-2xl mb-2">
              30-Day Money-Back Guarantee
            </h2>
            <p className="text-white/90 text-lg">
              No questions asked refund if this guide doesn't help you have better conversations
            </p>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left side - Product details */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading font-bold text-xl text-ink mb-4">
                    What you get instantly:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-trust" />
                      <span className="text-gray-700">PDF Guide, 115 pages</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Download className="w-5 h-5 text-trust" />
                      <span className="text-gray-700">Instant download after purchase</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-trust" />
                      <span className="text-gray-700">Backup copy emailed to you</span>
                    </li>
                  </ul>
                </div>

                {/* Payment methods */}
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Secure payment:</h4>
                  <div className="flex items-center space-x-4 opacity-60">
                    <CreditCard className="w-8 h-8 text-gray-500" />
                    <Smartphone className="w-8 h-8 text-gray-500" />
                    <div className="text-sm text-gray-500">
                      <div>PayPal • Apple Pay</div>
                      <div>Google Pay • Cards</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Pricing and CTA */}
              <div className="text-center">
                <div className="bg-gray-50 rounded-xl p-8 mb-6">
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-ink">$9</span>
                    <span className="text-gray-500 ml-2">USD</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6">
                    Less than the cost of one dinner out—for conversations that could change your life
                  </p>
                  
                  <motion.button
                    onClick={handleCtaClick}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full text-lg py-4"
                  >
                    Get the Guide — $9
                  </motion.button>
                </div>

                <p className="text-xs text-gray-500">
                  Secure checkout • No subscription • One-time payment
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="card">
            <div className="w-12 h-12 bg-trust/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Download className="w-6 h-6 text-trust" />
            </div>
            <h3 className="font-semibold text-ink mb-2">Instant Access</h3>
            <p className="text-gray-600 text-sm">
              Download immediately after purchase. No waiting, no shipping delays.
            </p>
          </div>

          <div className="card">
            <div className="w-12 h-12 bg-heart/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-heart" />
            </div>
            <h3 className="font-semibold text-ink mb-2">Risk-Free</h3>
            <p className="text-gray-600 text-sm">
              30-day money-back guarantee. Your investment is completely protected.
            </p>
          </div>

          <div className="card">
            <div className="w-12 h-12 bg-trust/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FileText className="w-6 h-6 text-trust" />
            </div>
            <h3 className="font-semibold text-ink mb-2">Complete Guide</h3>
            <p className="text-gray-600 text-sm">
              115 pages of questions, interpretations, and relationship insights.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
