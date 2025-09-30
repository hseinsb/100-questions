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
    <>
      <div className="border-t-4 border-accent-primary/30"></div>
      <section className="py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 relative overflow-hidden">
        {/* Vibrant Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-accent-primary/20 to-orange-300/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-gradient-to-br from-amber-300/30 to-accent-secondary/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-32 left-32 w-32 h-32 border-4 border-orange-300/30 rounded-full animate-bounce-subtle" />
          <div className="absolute top-1/3 left-20 w-24 h-24 bg-gradient-to-br from-yellow-300/20 to-amber-300/20 rounded-2xl rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main guarantee card */}
                 <motion.div
           initial={{ y: 30, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white to-accent-primary-weak/20 rounded-3xl shadow-2xl border-2 border-accent-primary/20 overflow-hidden mb-12 hover:shadow-3xl transition-shadow duration-500"
        >
          <div className="bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary p-10 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgMjAgMTAgTSAxMCAwIEwgMTAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl relative z-10"
            >
              <FileText className="w-10 h-10 text-accent-primary" />
            </motion.div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3 relative z-10">
              Get Your Complete Guide Today
            </h2>
            <p className="text-white/95 text-xl relative z-10">
              Expert-curated questions and interpretations for relationship clarity
            </p>
          </div>

          <div className="p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left side - Product details */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading font-bold text-xl text-ink mb-4">
                    What you get instantly:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-accent-secondary" />
                      <span className="text-gray-700">PDF Guide</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Download className="w-5 h-5 text-accent-secondary" />
                      <span className="text-gray-700">Instant download after purchase</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-accent-secondary" />
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
                <div className="bg-gradient-to-br from-accent-primary-weak to-accent-secondary-weak/30 rounded-2xl p-10 mb-6 border-2 border-accent-primary/20 shadow-inner">
                  <div className="mb-6">
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", duration: 0.6 }}
                      className="text-6xl font-extrabold gradient-text"
                    >
                      $9
                    </motion.span>
                    <span className="text-gray-600 ml-2 text-lg">USD</span>
                  </div>
                  <p className="text-gray-700 text-base mb-8 font-medium">
                    Less than the cost of one dinner out—for conversations that could change your life
                  </p>
                  
                  <motion.button
                    onClick={handleCtaClick}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full text-xl py-5 shadow-2xl"
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
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-white to-accent-secondary-weak/10 border-2 border-accent-primary/10 hover:border-accent-primary/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-accent-secondary to-accent-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Download className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-ink mb-2 text-lg">Instant Access</h3>
            <p className="text-gray-600 text-sm">
              Download immediately after purchase. No waiting, no shipping delays.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-white to-accent-primary-weak/10 border-2 border-accent-primary/10 hover:border-accent-primary/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-ink mb-2 text-lg">Secure Purchase</h3>
            <p className="text-gray-600 text-sm">
              Safe and secure checkout with instant access to your digital guide.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-white to-accent-secondary-weak/10 border-2 border-accent-primary/10 hover:border-accent-primary/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-accent-secondary to-accent-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-ink mb-2 text-lg">Complete Guide</h3>
            <p className="text-gray-600 text-sm">
              Complete guide with questions, interpretations, and relationship insights.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
    </>
  )
}
