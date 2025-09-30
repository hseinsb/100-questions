'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Shield, Heart, Sparkles } from 'lucide-react'

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
      <div className="border-t-4 border-accent-primary/30"></div>
      <section className="py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden">
        {/* Vibrant Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-[450px] h-[450px] bg-gradient-to-br from-accent-primary/30 to-amber-300/30 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-20 right-10 w-[450px] h-[450px] bg-gradient-to-tl from-orange-300/30 to-accent-secondary/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/3 right-1/4 w-24 h-24 border-4 border-amber-300/30 rounded-full animate-bounce-subtle" />
          <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-yellow-300/20 to-orange-300/20 rounded-2xl rotate-45 animate-spin" style={{ animationDuration: '25s' }} />
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 flex items-center justify-center gap-3 flex-wrap">
            <Sparkles className="w-8 h-8 text-accent-primary" />
            <span className="text-ink-900">What makes this</span>{' '}
            <span className="gradient-text">different</span>
            <Sparkles className="w-8 h-8 text-accent-secondary" />
          </h2>
          <p className="text-ink-600 text-lg md:text-xl max-w-3xl mx-auto">
            Not just questions—a complete system for building relationship clarity and confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            
            return (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`bg-gradient-to-br from-white to-${pillar.bgColor} border-2 border-accent-primary/10 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-accent-primary/30 transition-all duration-300 text-center group cursor-pointer`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300"
                >
                  <Icon className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="font-heading font-bold text-2xl text-ink-900 mb-4">
                  {pillar.title}
                </h3>

                <p className="text-ink-600 leading-relaxed text-lg">
                  {pillar.description}
                </p>

                {/* Decorative element that appears on hover */}
                <div className="h-1 w-0 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mt-6 rounded-full group-hover:w-full transition-all duration-500" />
              </motion.div>
            )
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
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
              animate={{ x: [0, 2, 0] }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                repeatType: "reverse"
              }}
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
