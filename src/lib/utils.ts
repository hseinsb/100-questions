import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCheckoutUrl(utmParams?: Record<string, string>, band?: string) {
  const baseUrl = "https://paypal.me/hussein_sbeiti/9" // Replace with your actual PayPal checkout URL
  const params = new URLSearchParams()
  
  if (utmParams) {
    Object.entries(utmParams).forEach(([key, value]) => {
      if (value) params.set(key, value)
    })
  }
  
  if (band) {
    params.set('band', band)
  }
  
  return params.toString() ? `${baseUrl}?${params.toString()}` : baseUrl
}

export function getUtmParams(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  
  const urlParams = new URLSearchParams(window.location.search)
  const utmParams: Record<string, string> = {}
  
  for (const [key, value] of urlParams.entries()) {
    if (key.startsWith('utm_') || key === 'band') {
      utmParams[key] = value
    }
  }
  
  return utmParams
}

export function trackEvent(eventName: string, properties?: Record<string, any>) {
  // GA4 tracking
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, properties)
  }
  
  // Meta Pixel tracking
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, properties)
  }
}
