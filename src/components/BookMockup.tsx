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
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse"
        }}
      >
        {/* Enhanced shadow */}
        <motion.div
          className="absolute inset-0 bg-black/20 blur-2xl rounded-xl transform translate-y-8 scale-95"
          animate={{
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse"
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
