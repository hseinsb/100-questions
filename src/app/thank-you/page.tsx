'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Mail } from 'lucide-react'
import Link from 'next/link'

export default function ThankYouPage() {
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    // Check if this is a successful purchase
    const urlParams = new URLSearchParams(window.location.search)
    const success = urlParams.get('success')
    
    if (success === 'true') {
      setShowSuccess(true)
      // Track purchase event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'purchase', {
          currency: 'USD',
          value: 9,
          items: [{
            item_id: 'relationship_guide',
            item_name: '100 Questions for Relationship Compatibility',
            category: 'Digital Guide',
            quantity: 1,
            price: 9
          }]
        })
      }
    }
  }, [])

  const handleDownload = () => {
    const downloadUrl = "https://drive.google.com/file/d/1PMJc9JcS4Zsj7uftOBHtzuyLvtyLQjBh/view?usp=sharing"
    window.open(downloadUrl, '_blank')
    
    // Track download event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'download', {
        file_name: '100_questions_relationship_compatibility.pdf'
      })
    }
  }

  if (!showSuccess) {
    return (
      <div className="min-h-screen bg-cloud flex items-center justify-center px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="card">
            <h1 className="font-heading font-bold text-2xl text-ink mb-4">
              Order Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              We couldn't find your order. This could happen if:
            </p>
            <ul className="text-left text-gray-600 text-sm space-y-2 mb-6">
              <li>• The payment is still processing</li>
              <li>• You accessed this page directly</li>
              <li>• There was an issue with your purchase</li>
            </ul>
            <div className="space-y-3">
              <Link href="/" className="btn-primary w-full block text-center">
                Return to Home
              </Link>
              <a 
                href="mailto:hussein.sbeiti.wb@gmail.com" 
                className="btn-secondary w-full block text-center"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-surface-base">
      <div className="max-w-2xl mx-auto px-4 py-16">
        
        {/* Header with Creator */}
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-heading font-bold text-2xl text-ink mb-2">
            Hussein Sbeiti
          </h2>
          <p className="text-gray-600 text-lg">Creator</p>
        </motion.div>

        {/* Main Success Message */}
        <motion.div
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
            className="mb-6"
          >
            <span className="text-6xl">🎉</span>
          </motion.div>
          
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-ink mb-6">
            You're in! Download your guide below.
          </h1>
          
          <div className="max-w-xl mx-auto space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              Thank you for your purchase. Your transaction was successful and your guide is ready to download. 
              If you have any questions, please feel free to reach out at any time.
            </p>
            <p>
              Click the button below to receive instant access to your digital guide. 
              We truly appreciate your trust and support.
            </p>
          </div>
        </motion.div>

        {/* Download Section */}
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-12"
        >
          <button
            onClick={handleDownload}
            className="btn-primary text-lg px-8 py-4 mb-6"
          >
            Download Your Guide Now
          </button>
          
          <div className="flex items-center justify-center space-x-2 text-gray-500">
            <Mail className="w-4 h-4" />
            <span>A backup download link has been sent to your email</span>
          </div>
        </motion.div>

        {/* Support Section */}
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gray-50 rounded-xl p-8 mb-8"
        >
          <h3 className="font-heading font-semibold text-xl text-ink mb-4">
            Contact Support For Any Issues You're Facing
          </h3>
          <a
            href="mailto:hussein.sbeiti.wb@gmail.com"
            className="inline-block text-accent-primary font-semibold hover:text-accent-primary-hover transition-colors text-lg"
          >
            Hussein.sbeiti.wb@gmail.com
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center text-gray-500 text-sm"
        >
          <p>
            © 2023–2025<br />
            All Rights Reserved @Hussein Sbeiti
          </p>
        </motion.div>

      </div>
    </div>
  )
}
