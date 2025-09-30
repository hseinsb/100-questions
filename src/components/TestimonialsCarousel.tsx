'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Fatima A.",
    status: "Considering marriage",
    content: "I always thought love was enough. After going through these questions, I realized how much values and faith matter. It made me slow down and choose wisely.",
    rating: 5
  },
  {
    id: 2,
    name: "Omar H.",
    status: "Engaged",
    content: "We were avoiding the hard talks, money, roles, future. This guide forced us to face them. It wasn't easy, but now I feel peace instead of fear.",
    rating: 5
  },
  {
    id: 3,
    name: "Layla S.",
    status: "Newly married",
    content: "Some questions were uncomfortable. But those talks saved us from future fights. I'm grateful I did this before nikah, not after.",
    rating: 5
  },
  {
    id: 4,
    name: "Ahmad K.",
    status: "Single",
    content: "I found Hussein on Instagram and this guide gave me the courage to walk away from someone who wasn't aligned. Painful at first, but it saved me from a broken marriage later.",
    rating: 5
  },
  {
    id: 5,
    name: "Jennifer & David",
    status: "Engaged",
    content: "The expert interpretations helped us understand what our answers really meant. We're so much more confident about our future now.",
    rating: 5
  },
  {
    id: 6,
    name: "Priya S.",
    status: "Newlywed",
    content: "We used this before our engagement and it was the best decision we made. These conversations set the foundation for our marriage.",
    rating: 5
  },
  {
    id: 7,
    name: "Alex R.",
    status: "Dating with purpose",
    content: "Saved me from a relationship that would have ended badly. The red flags became clear after just a few questions.",
    rating: 5
  },
  {
    id: 8,
    name: "Sarah M.",
    status: "Engaged",
    content: "These questions revealed things we never would have talked about otherwise. We discovered our different views on finances early and worked through them before marriage.",
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
    <>
      <div className="border-t-4 border-accent-primary/30"></div>
      <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
        {/* Lightweight Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-accent-primary/20 to-orange-300/20 rounded-full" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tl from-amber-400/20 to-accent-secondary/20 rounded-full" />
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 opacity-0 animate-fade-in">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 flex items-center justify-center gap-3 flex-wrap">
            <Sparkles className="w-8 h-8 text-accent-primary" />
            <span className="gradient-text">Real couples.</span>{' '}
            <span className="text-ink-900">Real clarity.</span>
            <Sparkles className="w-8 h-8 text-accent-secondary" />
          </h2>
          <p className="text-ink-600 text-body-lg max-w-2xl mx-auto">
            See how these questions transformed relationships
          </p>
        </div>

        <div 
          className="relative max-w-4xl mx-auto touch-pan-y"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          onTouchStart={(e) => {
            const touch = e.touches[0]
            const startX = touch.clientX
            const handleTouchEnd = (endEvent: TouchEvent) => {
              const endTouch = endEvent.changedTouches[0]
              const diffX = startX - endTouch.clientX
              if (Math.abs(diffX) > 50) {
                diffX > 0 ? goToNext() : goToPrev()
              }
              document.removeEventListener('touchend', handleTouchEnd)
            }
            document.addEventListener('touchend', handleTouchEnd)
          }}
        >
          {/* Main carousel */}
          <div className="relative rounded-xl">
            <div
              key={currentIndex}
              className="transition-opacity duration-500 ease-in-out"
            >
              <div className="card text-center py-12 px-8 bg-gradient-to-br from-white to-accent-primary-weak/20 border-2 border-accent-primary/10 shadow-2xl">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-full flex items-center justify-center shadow-lg">
                      <Heart className="w-8 h-8 text-white fill-current" />
                    </div>
                  </div>

                <blockquote className="text-ink-900 text-lg md:text-xl mb-6 leading-relaxed font-medium">
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
              </div>
            </div>
          </div>

          {/* Navigation arrows - hidden on mobile, shown on desktop */}
          <button
            onClick={goToPrev}
            className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-accent-primary/30"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-accent-primary/30"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 h-3 bg-gradient-to-r from-accent-primary to-accent-secondary shadow-lg' 
                    : 'w-3 h-3 bg-gray-300 hover:bg-accent-secondary/50 hover:scale-110'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
