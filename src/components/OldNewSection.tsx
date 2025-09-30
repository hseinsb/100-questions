'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, X, Check, Sparkles } from 'lucide-react'
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
      <div className="border-t-4 border-accent-primary/30"></div>
      <section ref={sectionRef} className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 relative overflow-hidden">
        {/* Lightweight Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-red-200/20 to-orange-200/20 rounded-full" />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-green-200/20 to-emerald-200/20 rounded-full" />
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 flex items-center justify-center gap-3 flex-wrap">
            <Sparkles className="w-8 h-8 text-accent-primary animate-pulse" />
            <span className="text-ink-900">Stop guessing.</span>{' '}
            <span className="gradient-text">Start knowing.</span>
            <Sparkles className="w-8 h-8 text-accent-secondary animate-pulse" style={{ animationDelay: '0.5s' }} />
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Transform how you approach relationship decisions with structured conversations that reveal the truth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Old Way */}
          <div className="relative opacity-0 animate-fade-in-delay-1">
            <div className="bg-gradient-to-br from-red-50 to-red-100/50 border-2 border-red-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                    <X className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-red-700">
                    OLD WAY
                  </h3>
                </div>
                <motion.div
                  style={{ opacity: oldArrowOpacity, x: oldArrowX }}
                  className="text-red-400"
                >
                  <ArrowRight className="w-7 h-7" />
                </motion.div>
              </div>
              
              <ul className="space-y-4">
                  {oldWayItems.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                ))}
              </ul>

              <div className="mt-6 p-5 bg-gradient-to-r from-red-200 to-red-100 rounded-xl border-l-4 border-red-500 shadow-inner">
                <p className="text-sm md:text-base text-red-800 font-semibold">
                  💔 Result: Heartbreak, wasted time, or settling for less
              </p>
            </div>
          </div>
        </div>

        {/* New Way */}
        <div className="relative opacity-0 animate-fade-in-delay-2">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100/50 border-2 border-green-300 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 glow-effect">
              <div className="flex items-center justify-between mb-6">
                <motion.div
                  style={{ opacity: newArrowOpacity, x: newArrowX }}
                  className="text-green-400"
                >
                  <ArrowRight className="w-7 h-7" />
                </motion.div>
                <div className="flex items-center gap-3">
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-green-700">
                    NEW WAY
                  </h3>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Check className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>
              
              <ul className="space-y-4">
                {newWayItems.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-5 bg-gradient-to-r from-green-200 to-emerald-100 rounded-xl border-l-4 border-green-500 shadow-inner">
                <p className="text-sm md:text-base text-green-800 font-semibold">
                  ✨ Result: Clarity, confidence, and lasting love
            </p>
          </div>
        </div>
      </div>
        </div>

      {/* Central transition element */}
      <div className="relative mt-16">
        <div className="flex justify-center opacity-0 animate-fade-in-delay-4">
          <div className="bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl md:hover:shadow-3xl transition-all duration-300 md:hover:scale-105 cursor-pointer glow-effect-strong">
            <span className="flex items-center gap-2">
              ✨ Choose your path forward
            </span>
          </div>
        </div>
        </div>
      </div>
    </section>
    </>
  )
}
