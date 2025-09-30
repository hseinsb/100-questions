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
      {/* Vibrant Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/20 via-transparent to-accent-secondary/20 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }} />
        
        {/* Multiple animated orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-accent-primary/30 to-orange-300/30 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-tl from-accent-secondary/40 to-amber-300/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-tr from-yellow-300/30 to-accent-primary/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
        
        {/* Decorative shapes */}
        <div className="absolute top-10 right-1/4 w-32 h-32 border-4 border-accent-primary/20 rounded-full animate-bounce-subtle" />
        <div className="absolute bottom-32 right-10 w-24 h-24 border-4 border-accent-secondary/20 rounded-2xl rotate-12 animate-float" />
        <div className="absolute top-1/3 left-10 w-20 h-20 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-xl rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        
        {/* Sparkle effects */}
        <motion.div
          className="absolute top-1/4 left-1/2 text-accent-primary/40"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Sparkles className="w-12 h-12" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-1/3 text-accent-secondary/40"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          <Sparkles className="w-10 h-10" />
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {getBandPill()}
            
            {/* Eyebrow with icon */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 border-2 border-accent-primary/30 rounded-full backdrop-blur-sm"
            >
              <Heart className="w-4 h-4 text-accent-primary fill-current animate-heart-beat" />
              <span className="text-sm font-bold text-ink-900 uppercase tracking-wider">
                Know before you commit
              </span>
              <Sparkles className="w-4 h-4 text-accent-secondary" />
            </motion.div>
            
            {/* H1 with animated underline */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-extrabold text-hero-h1 text-ink-900 text-balance leading-tight"
            >
              Are you ready for{' '}
              <span className="relative inline-block">
                <span className="relative animated-underline bg-gradient-to-r from-accent-primary via-orange-500 to-accent-secondary bg-clip-text text-transparent drop-shadow-sm">
                  forever?
                </span>
                <motion.span
                  className="absolute -top-2 -right-8 text-2xl"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  💫
                </motion.span>
              </span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-hero-subhead text-ink-900 text-balance max-w-lg font-medium leading-relaxed"
            >
              Ask the questions that reveal compatibility, protect your heart, and build lasting trust—before you commit.
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-3"
            >
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
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4, type: 'spring', stiffness: 150 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrimaryClick}
                className="btn-primary text-lg font-bold shadow-2xl hover:shadow-accent-primary/40 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Get the Guide
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.button>
              
              <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5, type: 'spring', stiffness: 150 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSecondaryClick}
                className="btn-secondary text-lg font-bold"
              >
                <span className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Try the free assessment
                </span>
              </motion.button>
            </motion.div>
            
            {/* Social proof */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sm text-ink-600 flex items-center gap-2"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary border-2 border-white shadow-sm" />
                ))}
              </div>
              <span className="font-semibold">Join 1,000+ couples who found clarity</span>
            </motion.p>


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
