'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { getCheckoutUrl, getUtmParams, trackEvent } from '@/lib/utils'

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [utmParams, setUtmParams] = useState<Record<string, string>>({})

  useEffect(() => {
    setUtmParams(getUtmParams())
    
    const handleScroll = () => {
      // Show after scrolling past hero (roughly 50vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.5)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handlePrimaryClick = () => {
    trackEvent('begin_checkout', { source: 'sticky_mobile_cta', ...utmParams })
    window.open(getCheckoutUrl(utmParams), '_self')
  }

  const handleSecondaryClick = () => {
    trackEvent('view_assessment', { source: 'sticky_mobile_cta', ...utmParams })
    document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-surface-card border-t border-ink-100 shadow-lg"
        >
          <div className="px-4 py-3 flex gap-3">
            <button
              onClick={handleSecondaryClick}
              className="flex-1 border-2 border-accent-secondary text-accent-secondary text-button py-3 px-4 rounded-lg transition-all duration-200 hover:bg-accent-secondary hover:text-white active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-accent-secondary/50 text-center"
            >
              Try Free
            </button>
            <button
              onClick={handlePrimaryClick}
              className="flex-[1.5] bg-accent-primary text-white text-button py-3 px-4 rounded-lg transition-all duration-200 hover:bg-accent-primary-hover active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-accent-primary/50 text-center"
            >
              Get the Guide
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
