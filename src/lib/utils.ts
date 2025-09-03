import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCheckoutUrl(utmParams?: Record<string, string>, band?: string) {
  const baseUrl = "https://www.paypal.com/ncp/payment/LEB9UR2F3BGTN"
  
  // For this specific PayPal checkout link, we'll return it directly
  // UTM params and band can be tracked separately if needed
  return baseUrl
}

export function getUtmParams(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  
  const urlParams = new URLSearchParams(window.location.search)
  const utmParams: Record<string, string> = {}
  
  // More compatible iteration method
  urlParams.forEach((value, key) => {
    if (key.startsWith('utm_') || key === 'band') {
      utmParams[key] = value
    }
  })
  
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
