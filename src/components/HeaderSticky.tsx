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
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white/95 to-accent-primary-weak/30 backdrop-blur-md border-b-2 border-accent-primary/20 shadow-xl"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-4">
                <span className="text-ink-900 font-bold text-lg">Ready for clarity?</span>
              </div>
              
              <motion.button
                onClick={handleCtaClick}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-accent-primary to-accent-secondary text-white text-sm font-bold py-3 px-7 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-accent-primary/30 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:ring-offset-1"
              >
                Get the Guide →
              </motion.button>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  )
}
