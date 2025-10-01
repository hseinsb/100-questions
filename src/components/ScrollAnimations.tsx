'use client'

import { useEffect } from 'react'

export function ScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            // Optional: Unobserve after animating to improve performance
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px', // Trigger 100px before element enters viewport
      }
    )

    // Wait for DOM to be ready, then observe all elements
    const observeElements = () => {
      const elements = document.querySelectorAll('[class*="animate-fade-in"]')
      console.log('Found elements to animate:', elements.length) // Debug log
      elements.forEach((el) => {
        if (!el.classList.contains('is-visible')) {
          observer.observe(el)
        }
      })
    }

    // Initial observation
    observeElements()

    // Also observe after a short delay to catch any late-loading elements
    const timeoutId = setTimeout(observeElements, 100)

    return () => {
      observer.disconnect()
      clearTimeout(timeoutId)
    }
  }, [])

  return null
}
