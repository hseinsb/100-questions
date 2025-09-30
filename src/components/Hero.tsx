'use client'

import { motion } from 'framer-motion'
import { Shield, Download, Clock, Heart, Star, CheckCircle, Sparkles } from 'lucide-react'
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
        initial={{ y: 10 }}
        animate={{ y: 0 }}
        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${config.color}`}
      >
        Your snapshot: {config.text}
      </motion.div>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Lightweight Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        {/* Static gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/10 via-transparent to-accent-secondary/10" />
        
        {/* Reduced orbs - no blur for performance */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-accent-primary/20 to-orange-300/20 rounded-full" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-tl from-accent-secondary/20 to-amber-300/20 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {getBandPill()}
            
            {/* Eyebrow with icon */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 border-2 border-accent-primary/30 rounded-full backdrop-blur-sm opacity-0 animate-fade-in">
              <Heart className="w-4 h-4 text-accent-primary fill-current animate-heart-beat" />
              <span className="text-sm font-bold text-ink-900 uppercase tracking-wider">
                Know before you commit
              </span>
              <Sparkles className="w-4 h-4 text-accent-secondary" />
            </div>
            
            {/* H1 with animated underline */}
            <h1 className="font-heading font-extrabold text-hero-h1 text-ink-900 text-balance leading-tight opacity-0 animate-fade-in-delay-1">
              Are you ready for{' '}
              <span className="relative inline-block">
                <span className="relative animated-underline bg-gradient-to-r from-accent-primary via-orange-500 to-accent-secondary bg-clip-text text-transparent drop-shadow-sm">
                  forever?
                </span>
                <span className="absolute -top-2 -right-8 text-2xl">
                  💫
                </span>
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-hero-subhead text-ink-900 text-balance max-w-lg font-medium leading-relaxed opacity-0 animate-fade-in-delay-2">
              Ask the questions that reveal compatibility, protect your heart, and build lasting trust—before you commit.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 opacity-0 animate-fade-in-delay-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border-2 border-accent-primary/20 shadow-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold text-ink-900">Expert-Curated</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border-2 border-accent-secondary/20 shadow-lg">
                <Download className="w-5 h-5 text-accent-primary" />
                <span className="text-sm font-semibold text-ink-900">Instant Access</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border-2 border-accent-primary/20 shadow-lg">
                <Star className="w-5 h-5 text-amber-500 fill-current" />
                <span className="text-sm font-semibold text-ink-900">1000+ Happy Couples</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-in-delay-3">
              <button
                onClick={handlePrimaryClick}
                className="btn-primary text-lg font-bold shadow-2xl md:hover:shadow-accent-primary/40 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Get the Guide
                  <span>→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full md:group-hover:translate-x-full transition-transform duration-1000" />
              </button>
              
              <button
                onClick={handleSecondaryClick}
                className="btn-secondary text-lg font-bold"
              >
                <span className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Try the free assessment
                </span>
              </button>
            </div>
            
            {/* Social proof */}
            <p className="text-sm text-ink-600 flex items-center gap-2 opacity-0 animate-fade-in-delay-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary border-2 border-white shadow-sm" />
                ))}
              </div>
              <span className="font-semibold">Join 1,000+ couples who found clarity</span>
            </p>


          </div>

          {/* Right Column - Book Mockup */}
          <motion.div
            initial={{ scale: 0.98 }}
            animate={{ scale: 1 }}
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
