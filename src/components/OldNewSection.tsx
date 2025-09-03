'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, X, Check } from 'lucide-react'
import { useRef } from 'react'

const oldWayItems = [
  "Guessing instead of asking",
  "Ignoring red flags because you're in love",
  "Surface talk, hidden expectations",
  "Hope as a plan"
]

const newWayItems = [
  "Structured, honest conversations",
  "Red flags revealed early",
  "Shared values made clear",
  "Confidence to say yes or walk away"
]

export function OldNewSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const oldArrowOpacity = useTransform(scrollYProgress, [0.3, 0.6], [1, 0.5])
  const oldArrowX = useTransform(scrollYProgress, [0.3, 0.6], [0, -20])
  
  const newArrowOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0.5, 1])
  const newArrowX = useTransform(scrollYProgress, [0.4, 0.7], [20, 0])

  return (
    <>
      <div className="border-t border-ink-100/30"></div>
      <section ref={sectionRef} className="py-12 bg-surface-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-fluid-3xl text-ink mb-4">
            Stop guessing. Start knowing.
          </h2>
          <p className="text-gray-600 text-fluid-lg max-w-3xl mx-auto">
            Transform how you approach relationship decisions with structured conversations that reveal the truth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Old Way */}
          <motion.div
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="card bg-red-50 border-red-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading font-bold text-2xl text-red-700">
                  OLD WAY
                </h3>
                <motion.div
                  style={{ opacity: oldArrowOpacity, x: oldArrowX }}
                  className="text-red-400"
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </div>
              
              <ul className="space-y-4">
                {oldWayItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-red-100 rounded-lg">
                <p className="text-sm text-red-700 font-medium">
                  Result: Heartbreak, wasted time, or settling for less
                </p>
              </div>
            </div>
          </motion.div>

          {/* New Way */}
          <motion.div
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="card bg-green-50 border-green-100">
              <div className="flex items-center justify-between mb-6">
                <motion.div
                  style={{ opacity: newArrowOpacity, x: newArrowX }}
                  className="text-green-400"
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
                <h3 className="font-heading font-bold text-2xl text-green-700">
                  NEW WAY
                </h3>
              </div>
              
              <ul className="space-y-4">
                {newWayItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: 20 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    className="flex items-start space-x-3"
                  >
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-green-100 rounded-lg">
                <p className="text-sm text-green-700 font-medium">
                  Result: Clarity, confidence, and lasting love
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Central transition element */}
        <div className="relative mt-12">
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="bg-accent-primary text-white px-8 py-4 rounded-full font-semibold shadow-lg">
              Choose your path forward
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  )
}
