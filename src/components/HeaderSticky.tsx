'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { getCheckoutUrl, getUtmParams, trackEvent } from '@/lib/utils'

export function HeaderSticky() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      // Hide header on thank you page
      if (pathname === '/thank-you') {
        setIsVisible(false)
        return
      }
      setIsVisible(window.scrollY > 120)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const handleCtaClick = () => {
    const utmParams = getUtmParams()
    trackEvent('begin_checkout', { source: 'sticky_header', ...utmParams })
    window.open(getCheckoutUrl(utmParams), '_self')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -12, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed top-0 left-0 right-0 z-50 bg-surface-card/95 backdrop-blur-sm border-b border-ink-100 shadow-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-4">
                <span className="text-ink-900 font-medium">Ready for clarity?</span>
              </div>
              
              <button
                onClick={handleCtaClick}
                className="bg-accent-primary text-white text-sm font-semibold py-2 px-6 rounded-lg transition-all duration-200 hover:bg-accent-primary-hover hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:ring-offset-1"
              >
                Get the Guide →
              </button>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  )
}
