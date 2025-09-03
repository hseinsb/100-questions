'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    status: "Engaged",
    content: "These questions revealed things we never would have talked about otherwise. We discovered our different views on finances early and worked through them before marriage.",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus T.",
    status: "Considering marriage",
    content: "I thought I knew everything about my partner after 3 years together. These questions showed me I was wrong—in the best way possible.",
    rating: 5
  },
  {
    id: 3,
    name: "Jennifer & David",
    status: "Engaged",
    content: "The expert interpretations helped us understand what our answers really meant. We're so much more confident about our future now.",
    rating: 5
  },
  {
    id: 4,
    name: "Alex R.",
    status: "Dating with purpose",
    content: "Saved me from a relationship that would have ended badly. The red flags became clear after just a few questions.",
    rating: 5
  },
  {
    id: 5,
    name: "Priya S.",
    status: "Newlywed",
    content: "We used this before our engagement and it was the best decision we made. These conversations set the foundation for our marriage.",
    rating: 5
  },
  {
    id: 6,
    name: "Michael L.",
    status: "Dating seriously",
    content: "The questions are deep but not overwhelming. Each one builds on the last to create real understanding.",
    rating: 5
  },
  {
    id: 7,
    name: "Rachel K.",
    status: "Engaged",
    content: "My fiancé and I learned so much about each other's families and backgrounds. It brought us closer together.",
    rating: 5
  },
  {
    id: 8,
    name: "James W.",
    status: "Considering marriage",
    content: "The guidance on how to interpret answers was incredibly helpful. I feel prepared for serious conversations now.",
    rating: 5
  }
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-16 bg-surface-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl text-ink-900 mb-4">
            Real couples. Real clarity.
          </h2>
          <p className="text-ink-600 text-body-lg">
            See how these questions transformed relationships
          </p>
        </motion.div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Main carousel */}
          <div className="relative overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="card text-center py-12 px-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="flex justify-center mb-6"
                >
                  <Heart className="w-8 h-8 text-accent-primary animate-heart-beat" />
                </motion.div>

                <blockquote className="text-ink-900 text-body-lg mb-6 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="flex justify-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Heart 
                        key={i} 
                        className="w-4 h-4 text-accent-primary fill-current" 
                      />
                    ))}
                  </div>
                </div>

                <cite className="not-italic">
                  <div className="font-semibold text-ink-900">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-ink-600">
                    {testimonials[currentIndex].status}
                  </div>
                </cite>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-heart scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
