'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Shield, Heart } from 'lucide-react'

const pillars = [
  {
    icon: MessageCircle,
    title: "Deep conversations",
    description: "Uncover the truths no one talks about—values, fears, insecurities, expectations.",
    color: "text-accent-secondary",
    bgColor: "bg-accent-secondary-weak",
    hoverColor: "hover:bg-accent-secondary/20"
  },
  {
    icon: Shield,
    title: "Avoid heartbreak",
    description: "Spot differences that end relationships—before they end yours.",
    color: "text-accent-primary",
    bgColor: "bg-accent-primary-weak",
    hoverColor: "hover:bg-accent-primary/20"
  },
  {
    icon: Heart,
    title: "Build lasting trust",
    description: "Create a foundation that survives love's highs and lows.",
    color: "text-accent-secondary",
    bgColor: "bg-accent-secondary-weak",
    hoverColor: "hover:bg-accent-secondary/20"
  }
]

export function ValuePillars() {
  return (
    <>
      <div className="border-t border-ink-100/30"></div>
      <section className="py-12 bg-surface-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl text-ink-900 mb-4">
            What makes this different
          </h2>
          <p className="text-ink-600 text-body-lg max-w-3xl mx-auto">
            Not just questions—a complete system for building relationship clarity and confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.02 }}
                className={`card ${pillar.hoverColor} transition-all duration-300 text-center group cursor-pointer`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.1 }}
                  className={`w-16 h-16 ${pillar.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300`}
                >
                  <Icon className={`w-8 h-8 ${pillar.color}`} />
                </motion.div>

                <h3 className="font-heading font-bold text-xl text-ink-900 mb-4">
                  {pillar.title}
                </h3>

                <p className="text-ink-600 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Decorative element that appears on hover */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  className={`h-0.5 ${pillar.color === 'text-accent-secondary' ? 'bg-accent-secondary' : 'bg-accent-primary'} mx-auto mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-ink-600 mb-6">
            Ready to experience the difference structured conversations can make?
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              document.getElementById('product-preview')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center text-accent-secondary font-semibold hover:text-accent-secondary-hover transition-colors"
          >
            See what's inside the guide
            <motion.svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
    </>
  )
}
