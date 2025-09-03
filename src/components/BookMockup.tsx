'use client'

import { motion } from 'framer-motion'

export function BookMockup() {

  return (
    <div className="relative perspective-1000">
      <motion.div
        className="relative"
        animate={{
          y: [-6, 6, -6],
        }}
        transition={{
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        {/* Enhanced shadow */}
        <motion.div
          className="absolute inset-0 bg-black/20 blur-2xl rounded-xl transform translate-y-8 scale-95"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Just the image - no container */}
        <img
          src="/cover-image.png"
          alt="100 Questions for Relationship Compatibility Book Cover"
          className="w-72 h-96 object-cover"
          style={{ backgroundColor: 'transparent' }}
        />
      </motion.div>
    </div>
  )
}
