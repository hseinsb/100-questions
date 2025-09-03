'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Heart } from 'lucide-react'
import { getCheckoutUrl, getUtmParams, trackEvent } from '@/lib/utils'

const questions = [
  {
    id: 1,
    question: "When making important decisions, I prefer to:",
    options: [
      { value: "discuss", label: "Discuss extensively with my partner first", weight: 3 },
      { value: "think", label: "Think it through alone, then share", weight: 2 },
      { value: "decide", label: "Decide quickly and inform my partner", weight: 1 }
    ]
  },
  {
    id: 2,
    question: "When we disagree about something important:",
    options: [
      { value: "immediate", label: "I want to resolve it immediately", weight: 1 },
      { value: "space", label: "I need some space before discussing", weight: 2 },
      { value: "avoid", label: "I tend to avoid the conversation", weight: 1 }
    ]
  },
  {
    id: 3,
    question: "My ideal weekend with my partner includes:",
    options: [
      { value: "plans", label: "Following plans we made together", weight: 3 },
      { value: "spontaneous", label: "Being spontaneous and flexible", weight: 2 },
      { value: "separate", label: "Having some separate activities", weight: 1 }
    ]
  }
]

type AnswerState = { [key: number]: string }

export function AssessmentTeaser() {
  const [answers, setAnswers] = useState<AnswerState>({})
  const [showResult, setShowResult] = useState(false)
  const [currentBand, setCurrentBand] = useState<'red' | 'yellow' | 'green' | null>(null)

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
  }

  const calculateResult = () => {
    const totalQuestions = questions.length
    const answeredCount = Object.keys(answers).length

    if (answeredCount < totalQuestions) return

    // Calculate score based on weights
    let totalScore = 0
    questions.forEach(question => {
      const selectedValue = answers[question.id]
      const selectedOption = question.options.find(opt => opt.value === selectedValue)
      if (selectedOption) {
        totalScore += selectedOption.weight
      }
    })

    const maxScore = questions.length * 3
    const percentage = (totalScore / maxScore) * 100

    let band: 'red' | 'yellow' | 'green'
    if (percentage >= 80) band = 'green'
    else if (percentage >= 60) band = 'yellow'
    else band = 'red'

    setCurrentBand(band)
    setShowResult(true)

    // Track assessment completion
    trackEvent('assessment_complete', { 
      score: totalScore, 
      percentage: Math.round(percentage), 
      band,
      ...getUtmParams()
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    trackEvent('assessment_start', getUtmParams())
    calculateResult()
  }

  const handleCtaClick = () => {
    const utmParams = getUtmParams()
    trackEvent('begin_checkout', { 
      source: 'assessment_teaser', 
      band: currentBand,
      ...utmParams 
    })
    window.open(getCheckoutUrl(utmParams, currentBand || undefined), '_self')
  }

  const getResultConfig = () => {
    switch (currentBand) {
      case 'green':
        return {
          color: 'bg-accent-primary-weak text-accent-primary border-accent-primary/20',
          title: 'Strong core',
          message: 'You show great compatibility awareness! The full guide will help you build on this strong foundation.',
          icon: '✅'
        }
      case 'yellow':
        return {
          color: 'bg-accent-secondary-weak text-accent-secondary border-accent-secondary/20',
          title: 'Promising',
          message: 'You have good instincts but could benefit from deeper conversations. The guide will show you exactly what to explore.',
          icon: '⚠️'
        }
      case 'red':
        return {
          color: 'bg-red-100 text-red-700 border-red-200',
          title: 'High risk',
          message: 'Important compatibility gaps may exist. The guide provides essential questions to explore before committing further.',
          icon: '🚨'
        }
      default:
        return null
    }
  }

  return (
    <>
      <div className="border-t border-ink-100/30"></div>
      <section id="assessment" className="py-12 bg-surface-base">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-fluid-3xl text-ink mb-4">
            Not ready to buy? Try this 2-minute snapshot.
          </h2>
          <p className="text-gray-600 text-fluid-lg">
            Get a quick glimpse of your compatibility awareness
          </p>
        </motion.div>

        <div className="card max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {questions.map((question, index) => (
                  <motion.div
                    key={question.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="space-y-4"
                  >
                    <h3 className="font-semibold text-gray-800 text-lg">
                      {index + 1}. {question.question}
                    </h3>
                    
                    <div className="space-y-3">
                      {question.options.map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-accent-secondary/50 hover:bg-accent-secondary/5 transition-all duration-200 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={`question-${question.id}`}
                            value={option.value}
                            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                            className="w-4 h-4 text-accent-secondary focus:ring-accent-secondary"
                          />
                          <span className="text-gray-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center pt-6"
                >
                  <button
                    type="submit"
                    disabled={Object.keys(answers).length < questions.length}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Get My Snapshot
                  </button>
                </motion.div>
              </motion.form>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center space-y-6"
              >
                {(() => {
                  const config = getResultConfig()
                  if (!config) return null

                  return (
                    <>
                      <div className={`inline-flex items-center px-6 py-3 rounded-full border ${config.color} font-semibold`}>
                        <span className="mr-2 text-lg">{config.icon}</span>
                        Your snapshot: {config.title}
                      </div>

                      <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto">
                        {config.message}
                      </p>

                      <div className="space-y-4">
                        <button
                          onClick={handleCtaClick}
                          className="btn-primary"
                        >
                          Get the Complete Guide
                        </button>
                        
                        <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                          <Heart className="w-4 h-4 text-accent-primary" />
                          <span>Complete guide • Instant download • Digital format</span>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setShowResult(false)
                          setAnswers({})
                          setCurrentBand(null)
                        }}
                        className="text-accent-secondary hover:text-accent-secondary/80 text-sm font-medium"
                      >
                        Take assessment again
                      </button>
                    </>
                  )
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
    </>
  )
}
