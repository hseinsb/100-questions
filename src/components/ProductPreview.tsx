'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Info, ChevronDown } from 'lucide-react'
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
      <div className="border-t border-ink-100/30"></div>
      <section id="product-preview" className="py-12 bg-surface-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-fluid-3xl text-ink mb-4">
            What's inside the guide
          </h2>
          <p className="text-gray-600 text-fluid-lg max-w-3xl mx-auto">
            Not just 100 questions—each includes 3 expert interpretations so you understand what the answers really mean.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-heading font-bold text-xl text-ink">
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

              <div className="bg-accent-primary-weak border-l-4 border-accent-primary p-4 rounded-r-lg">
                <h4 className="font-semibold text-accent-primary text-sm uppercase tracking-wide mb-2 flex items-center">
                  <Info className="w-4 h-4 mr-2" />
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-heart mb-2">100</div>
              <div className="text-gray-600">Carefully crafted questions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-trust mb-2">300+</div>
              <div className="text-gray-600">Expert interpretations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ink mb-2">10</div>
              <div className="text-gray-600">Core relationship areas</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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
