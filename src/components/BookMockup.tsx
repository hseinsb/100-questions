'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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
      className="w-[500px] md:w-[600px] lg:w-[700px]"
    >
      <Image
        src="/cover-image.png"
        alt="100 Questions for Relationship Compatibility Book Cover"
        width={700}
        height={900}
        priority
        quality={85}
        className="w-full h-auto object-contain"
        style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))' }}
      />
    </motion.div>
  )
}
