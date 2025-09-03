'use client'

import { motion } from 'framer-motion'
import { Shield, Download, Clock } from 'lucide-react'
import { BookMockup } from './BookMockup'
import { getCheckoutUrl, getUtmParams, trackEvent } from '@/lib/utils'
import { useEffect, useState } from 'react'

export function Hero() {
  const [utmParams, setUtmParams] = useState<Record<string, string>>({})

  useEffect(() => {
    setUtmParams(getUtmParams())
  }, [])

  const handlePrimaryClick = () => {
    trackEvent('begin_checkout', { source: 'hero_primary', ...utmParams })
    window.open(getCheckoutUrl(utmParams), '_self')
  }

  const handleSecondaryClick = () => {
    trackEvent('view_assessment', { source: 'hero_secondary', ...utmParams })
    document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Show assessment band if available
  const getBandPill = () => {
    const band = utmParams.band
    if (!band) return null

    const bandConfig = {
      red: { text: 'High risk', color: 'bg-state-error/10 text-state-error border-state-error/20' },
      yellow: { text: 'Promising', color: 'bg-accent-secondary-weak text-accent-secondary border-accent-secondary/20' },
      green: { text: 'Strong core', color: 'bg-accent-primary-weak text-accent-primary border-accent-primary/20' }
    }

    const config = bandConfig[band as keyof typeof bandConfig]
    if (!config) return null

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${config.color}`}
      >
        Your snapshot: {config.text}
      </motion.div>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center bg-surface-base noise-texture overflow-hidden">
      {/* Background vignette */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-gradient-radial from-white/40 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {getBandPill()}
            
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.0 }}
              className="text-eyebrow text-ink-600 uppercase tracking-wider"
            >
              Know before you commit
            </motion.p>
            
            {/* H1 with animated underline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-bold text-hero-h1 text-ink-900 text-balance"
            >
              Are you ready for{' '}
              <span className="relative animated-underline">
                forever?
              </span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-hero-subhead text-ink-900 text-balance max-w-lg"
            >
              Ask the questions that reveal compatibility, protect your heart, and build lasting trust—before you commit.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4, type: 'spring', stiffness: 150 }}
                onClick={handlePrimaryClick}
                className="btn-primary"
              >
                Get the Guide
              </motion.button>
              
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5, type: 'spring', stiffness: 150 }}
                onClick={handleSecondaryClick}
                className="btn-secondary"
              >
                Try the free assessment
              </motion.button>
            </motion.div>


          </div>

          {/* Right Column - Book Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <BookMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
