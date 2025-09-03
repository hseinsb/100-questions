'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

export function BookMockup() {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-5deg', '5deg'])
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      
      const rect = ref.current.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top
      const xPct = mouseX / width - 0.5
      const yPct = mouseY / height - 0.5
      
      x.set(xPct)
      y.set(yPct)
    }
    
    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
    }
    
    if (ref.current) {
      ref.current.addEventListener('mousemove', handleMouseMove)
      ref.current.addEventListener('mouseleave', handleMouseLeave)
    }
    
    return () => {
      if (ref.current) {
        ref.current.removeEventListener('mousemove', handleMouseMove)
        ref.current.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [x, y])

  return (
    <div ref={ref} className="relative perspective-1000">
      <motion.div
        className="relative"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          y: [-6, 6, -6],
        }}
        transition={{
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        {/* Enhanced shadow */}
        <motion.div
          className="absolute inset-0 bg-black/20 blur-2xl rounded-xl transform translate-y-8 scale-95"
          style={{
            rotateX: useTransform(mouseYSpring, [-0.5, 0.5], ['2deg', '-2deg']),
            rotateY: useTransform(mouseXSpring, [-0.5, 0.5], ['-2deg', '2deg']),
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Book Cover Card */}
        <div className="relative bg-surface-card rounded-xl shadow-2xl p-2 border border-ink-100">
          {/* Custom cover image */}
          <div className="relative w-72 h-96 rounded-lg overflow-hidden transform-gpu">
            <img
              src="/cover-image.jpg"
              alt="100 Questions for Relationship Compatibility Book Cover"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to default design if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) {
                  fallback.style.display = 'flex';
                }
              }}
            />
            
            {/* Fallback design (shown if image fails to load) */}
            <div className="absolute inset-0 bg-ink-900 rounded-lg p-8 flex flex-col justify-between text-white transform-gpu overflow-hidden hidden">
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              </div>
              
              {/* Cover Design */}
              <div className="relative space-y-6">
                <div className="text-center">
                  <h2 className="font-heading font-bold text-2xl mb-3 tracking-tight">100 Questions</h2>
                  <p className="text-white/80 text-sm font-medium">for Relationship</p>
                  <p className="text-white text-xl font-bold mt-1">Compatibility</p>
                </div>
                
                {/* Minimalist icon */}
                <div className="flex justify-center">
                  <div className="w-16 h-16 border border-white/30 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Bottom text */}
              <div className="relative text-center">
                <p className="text-white/70 text-xs mb-3 font-medium tracking-wide">
                  Ask what matters before you commit
                </p>
                <p className="text-white/50 text-xs font-medium">by Hussein Sbeiti</p>
              </div>

              {/* Geometric accent */}
              <div className="absolute top-6 right-6 w-3 h-3 border border-white/20 rotate-45" />
              <div className="absolute bottom-6 left-6 w-2 h-2 bg-white/10 rounded-full" />
            </div>
          </div>

          {/* Spine highlight */}
          <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-ink-100 to-transparent rounded-l-lg" />
        </div>
      </motion.div>
    </div>
  )
}
