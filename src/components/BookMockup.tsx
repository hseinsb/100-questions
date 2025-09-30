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
        className="w-[500px] md:w-[600px] lg:w-[700px] h-auto object-contain drop-shadow-2xl"
      />
    </motion.div>
  )
}
