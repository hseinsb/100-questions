'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Info, ChevronDown } from 'lucide-react'
import { getCheckoutUrl, getUtmParams, trackEvent } from '@/lib/utils'

const categories = [
  {
    title: "Family Boundaries",
    questions: [
      "How involved should our families be in major life decisions?",
      "What holidays and traditions are non-negotiable for you?"
    ],
    interpretation: "These questions reveal deep-seated family loyalties and expectations that often remain hidden until conflicts arise. Understanding these early prevents major relationship stress.",
    icon: "👨‍👩‍👧‍👦"
  },
  {
    title: "Money Mindset",
    questions: [
      "What does financial security mean to you specifically?",
      "How do you handle money when you're stressed or emotional?"
    ],
    interpretation: "Money conflicts end more relationships than infidelity. These questions uncover financial values, spending patterns, and money-related stress responses that predict long-term compatibility.",
    icon: "💰"
  },
  {
    title: "Conflict Repair",
    questions: [
      "How do you prefer to resolve disagreements?",
      "What's the longest you need before you can discuss a conflict calmly?"
    ],
    interpretation: "Every couple fights. These questions reveal communication styles, emotional processing speeds, and repair strategies that determine whether conflicts strengthen or weaken your bond.",
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
    <section id="product-preview" className="py-20 bg-gradient-to-b from-cloud to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
                  Sample Questions:
                </h4>
                {category.questions.map((question, qIndex) => (
                  <div key={qIndex} className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700 italic">
                      "{question}..."
                    </p>
                  </div>
                ))}
              </div>

              <div className="relative">
                <button
                  onMouseEnter={() => setActiveTooltip(index)}
                  onMouseLeave={() => setActiveTooltip(null)}
                  onClick={() => setActiveTooltip(activeTooltip === index ? null : index)}
                  className="flex items-center space-x-2 text-trust font-medium text-sm hover:text-trust/80 transition-colors w-full justify-center"
                >
                  <Info className="w-4 h-4" />
                  <span>Why this matters</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeTooltip === index ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeTooltip === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 right-0 mt-2 p-4 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
                    >
                      <p className="text-sm text-gray-600 leading-relaxed">
                        <strong className="text-trust">Expert interpretation:</strong>{' '}
                        {category.interpretation}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.3 }}
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
            Instant download • 30-day guarantee • Secure checkout
          </p>
        </motion.div>
      </div>
    </section>
  )
}
