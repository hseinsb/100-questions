'use client'

import { useEffect } from 'react'

export function ScrollAnimations() {
  useEffect(() => {
    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add is-visible class to trigger animation
            entry.target.classList.add('is-visible')
            // Stop observing this element
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px',
      }
    )

    // Find all elements to animate
    const animateElements = document.querySelectorAll(
      '.animate-fade-in, .animate-fade-in-delay-1, .animate-fade-in-delay-2, .animate-fade-in-delay-3, .animate-fade-in-delay-4, .animate-fade-in-delay-5'
    )

    console.log('🎬 Scroll animations initialized:', animateElements.length, 'elements found')

    animateElements.forEach((el) => {
      const rect = el.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // If element is already visible in viewport, show it immediately
      if (rect.top < windowHeight && rect.bottom > 0) {
        el.classList.add('is-visible')
      } else {
        // Otherwise, observe it for when it comes into view
        observer.observe(el)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return null
}
