'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Info, ChevronDown, Sparkles } from 'lucide-react'
import { getCheckoutUrl, getUtmParams, trackEvent } from '@/lib/utils'

const categories = [
  {
    title: "Family Boundaries",
    questions: [
      "What do you do when someone disrespects your family or friends?"
    ],
    interpretation: "• Defends calmly and protects loved ones = strong relational values\n• Explodes in anger = emotional loyalty but unstable control\n• Avoids conflict to stay neutral = may lack protective instincts",
    icon: "👨‍👩‍👧‍👦"
  },
  {
    title: "Money Mindset",
    questions: [
      "How do you decide what's worth spending on and what's not?"
    ],
    interpretation: "• Mentions values, priorities, or needs = intentional spender\n• Acts on impulse or emotion = may lack financial structure\n• Relies solely on others' opinions = influenced by insecurity",
    icon: "💰"
  },
  {
    title: "Conflict Repair",
    questions: [
      "When someone wrongs you deeply, what usually helps you move on?"
    ],
    interpretation: "• Forgiveness = values peace, emotional resilience\n• Revenge or avoidance = may hold resentment or struggle with closure\n• Rationalization = may suppress emotion rather than process it",
    icon: "🔧"
  }
]

export function ProductPreview() {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null)

  const handleCtaClick = () => {
    const utmParams = getUtmParams()
    trackEvent('begin_checkout', { source: 'product_preview', ...utmParams })
    window.open(getCheckoutUrl(utmParams), '_self')
  }

  return (
    <>
      <div className="border-t-4 border-accent-primary/30"></div>
      <section id="product-preview" className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
        {/* Lightweight Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-accent-primary/20 to-orange-300/20 rounded-full" />
          <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-amber-300/20 to-accent-secondary/20 rounded-full" />
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
            <Sparkles className="w-8 h-8 text-accent-primary animate-pulse" />
            <span className="gradient-text">What's inside</span>{' '}
            <span className="text-ink-900">the guide</span>
            <Sparkles className="w-8 h-8 text-accent-secondary animate-pulse" style={{ animationDelay: '0.5s' }} />
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Not just 100 questions—each includes 3 expert interpretations so you understand what the answers really mean.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={false}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-gradient-to-br from-white to-accent-primary-weak/10 border-2 border-accent-primary/10 md:hover:border-accent-primary/30 rounded-2xl p-8 shadow-xl md:hover:shadow-2xl md:hover:scale-105 md:hover:-translate-y-2 transition-all duration-300 opacity-0 animate-[simpleFadeIn_0.4s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 filter drop-shadow-lg">
                  {category.icon}
                </div>
                <h3 className="font-heading font-bold text-2xl text-ink-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
                  Sample Question:
                </h4>
                {category.questions.map((question, qIndex) => (
                  <div key={qIndex} className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700 italic">
                      "{question}"
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-accent-primary-weak to-accent-secondary-weak/30 border-l-4 border-accent-primary p-5 rounded-r-xl shadow-inner">
                <h4 className="font-semibold text-accent-secondary text-sm uppercase tracking-wide mb-3 flex items-center">
                  <div className="w-6 h-6 bg-accent-primary rounded-full flex items-center justify-center mr-2">
                    <Info className="w-4 h-4 text-white" />
                  </div>
                  Interpretation Guide:
                </h4>
                <div className="text-sm text-gray-700 leading-relaxed space-y-1">
                  {category.interpretation.split('\n').map((line, lineIndex) => (
                    <div key={lineIndex} className="flex items-start">
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature highlights */}
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white to-accent-primary-weak/20 rounded-2xl p-10 shadow-xl border-2 border-accent-primary/20 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="text-5xl font-extrabold gradient-text mb-3">100</div>
              <div className="text-gray-700 font-medium text-lg">Carefully crafted questions</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="text-5xl font-extrabold gradient-text mb-3">300+</div>
              <div className="text-gray-700 font-medium text-lg">Expert interpretations</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="text-5xl font-extrabold gradient-text mb-3">10</div>
              <div className="text-gray-700 font-medium text-lg">Core relationship areas</div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button
            onClick={handleCtaClick}
            className="btn-primary text-lg mb-4"
          >
            See all 100 inside the guide →
          </button>
          <p className="text-sm text-gray-500">
            Instant download • Secure checkout
          </p>
        </motion.div>
      </div>
    </section>
    </>
  )
}
