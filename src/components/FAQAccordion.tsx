'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: "How do I receive the guide?",
    answer: "Instant download plus a backup link in your email receipt. The guide is delivered as a PDF file that you can read on any device. If you don't receive it within 5 minutes, check your spam folder or contact support."
  },
  {
    id: 2,
    question: "Is this only for married couples?",
    answer: "No—this guide is ideal for anyone dating with purpose, engaged, newlywed, or even preparing for future relationships. The questions help at any stage where you're considering a serious commitment."
  },
  {
    id: 3,
    question: "Is this religious?",
    answer: "The guide respects faith values and includes questions about spiritual compatibility, but it's practical and useful for people of all backgrounds, beliefs, and relationship styles."
  },
  {
    id: 4,
    question: "Do I need to be in a relationship now?",
    answer: "Not at all. Many people use this guide to prepare for future relationships, reflect on past ones, or understand what compatibility really means before they start dating seriously."
  },

  {
    id: 5,
    question: "How is this different from free relationship advice online?",
    answer: "This isn't general advice—it's a structured system with 100 specific questions and expert interpretations for each answer. You'll know not just what to ask, but how to understand what the responses really mean."
  },
  {
    id: 6,
    question: "What if my partner doesn't want to answer these questions?",
    answer: "That reaction itself is valuable information. The guide includes advice on introducing these conversations naturally and what to do if someone is resistant to deeper discussions."
  }
]

export function FAQAccordion() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <>
      <div className="border-t-4 border-accent-primary/30"></div>
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
        {/* Lightweight Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-gradient-to-br from-accent-primary/20 to-orange-300/20 rounded-full" />
          <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-gradient-to-tl from-amber-300/20 to-accent-secondary/20 rounded-full" />
        </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 flex items-center justify-center gap-3 flex-wrap">
            <Sparkles className="w-8 h-8 text-accent-primary animate-pulse" />
            <span className="gradient-text">Frequently asked</span>{' '}
            <span className="text-ink-900">questions</span>
            <Sparkles className="w-8 h-8 text-accent-secondary animate-pulse" style={{ animationDelay: '0.5s' }} />
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Everything you need to know about the guide
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.01, y: -2 }}
              className="bg-gradient-to-br from-white to-accent-primary-weak/10 border-2 border-accent-primary/10 hover:border-accent-primary/30 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full flex items-center justify-between text-left"
                aria-expanded={openItems.includes(faq.id)}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <h3 className="font-semibold text-lg md:text-xl text-ink-900 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openItems.includes(faq.id) && (
                  <motion.div
                    id={`faq-answer-${faq.id}`}
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t-2 border-accent-primary/10 mt-4">
                      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact support */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 p-10 bg-gradient-to-br from-accent-primary-weak to-accent-secondary-weak/30 rounded-2xl border-2 border-accent-primary/20 shadow-xl"
        >
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-ink-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-700 mb-6 text-lg">
            We're here to help you make the right decision for your relationship.
          </p>
          <motion.a
            href="mailto:hussein.sbeiti.wb@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            Email us: hussein.sbeiti.wb@gmail.com
          </motion.a>
        </motion.div>
      </div>
    </section>
    </>
  )
}
