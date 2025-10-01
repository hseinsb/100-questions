'use client'

import { useEffect } from 'react'

export function ScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            // Unobserve after animating to improve performance
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px', // Trigger 50px before element enters viewport
      }
    )

    // Observe all elements with fade-in animations
    const elements = document.querySelectorAll('[class*="animate-fade-in"]')
    console.log('Found elements to animate:', elements.length)
    
    elements.forEach((el) => {
      // Check if element is already in viewport
      const rect = el.getBoundingClientRect()
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0
      
      if (isInViewport) {
        // Immediately add is-visible to elements already in view
        el.classList.add('is-visible')
      } else {
        // Observe elements below the fold
        observer.observe(el)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return null
}
