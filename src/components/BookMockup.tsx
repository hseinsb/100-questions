'use client'

import { motion } from 'framer-motion'

export function BookMockup() {

  return (
    <motion.div
      animate={{
        y: [0, -8, 8, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <img
        src="/cover-image.png"
        alt="100 Questions for Relationship Compatibility Book Cover"
        className="w-72 h-96 object-cover"
      />
    </motion.div>
  )
}
