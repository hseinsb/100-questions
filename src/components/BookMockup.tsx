'use client'

import { motion } from 'framer-motion'

export function BookMockup() {

  return (
    <div className="relative perspective-1000">
      <motion.div
        className="relative"
        animate={{
          y: [0, -6, 6, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.25, 0.75, 1]
        }}
      >
        {/* Enhanced shadow */}
        <motion.div
          className="absolute inset-0 bg-black/20 blur-2xl rounded-xl transform translate-y-8 scale-95"
          animate={{
            opacity: [0.2, 0.15, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.25, 0.75, 1]
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
