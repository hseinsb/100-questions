'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, BookOpen, MessageCircle, Heart, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const bookmarkQuestions = [
  {
    question: "What does financial security mean to you specifically?",
    script: "Start with: 'I've been thinking about our future together, and I'd love to understand what financial security looks like in your mind. Can you paint me a picture?'"
  },
  {
    question: "How do you handle conflict when you're really upset?",
    script: "Try: 'I want us to be great at working through disagreements. When you're really upset about something, what do you need from me to help us resolve it?'"
  },
  {
    question: "What role should our families play in our major decisions?",
    script: "Begin with: 'I love that we both have close families. I'm curious about how you see their involvement in big decisions we'll make together.'"
  }
]

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
    // Replace with your actual Google Drive download link
    const downloadUrl = "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"
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
    <div className="min-h-screen bg-gradient-to-b from-cloud to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <span className="text-4xl">🎉</span>
          </motion.div>
          
          <h1 className="font-heading font-bold text-fluid-4xl text-ink mb-4">
            Thank you for trusting your future!
          </h1>
          
          <p className="text-gray-600 text-fluid-lg max-w-2xl mx-auto">
            Your investment in your relationship is the best decision you could make. 
            Now let's get you started with your guide.
          </p>
        </motion.div>

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card text-center mb-8"
        >
          <div className="mb-6">
            <Download className="w-16 h-16 text-trust mx-auto mb-4" />
            <h2 className="font-heading font-bold text-2xl text-ink mb-2">
              Download Your Guide
            </h2>
            <p className="text-gray-600">
              Click below to download your PDF guide immediately
            </p>
          </div>
          
          <button
            onClick={handleDownload}
            className="btn-primary text-lg mb-4"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Now (PDF, 115 pages)
          </button>
          
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <Mail className="w-4 h-4" />
            <span>We also emailed you a backup link with your receipt. Check spam if needed.</span>
          </div>
        </motion.div>

        {/* Bookmark Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="card mb-8"
        >
          <div className="text-center mb-8">
            <BookOpen className="w-12 h-12 text-heart mx-auto mb-4" />
            <h2 className="font-heading font-bold text-2xl text-ink mb-2">
              Bookmark: 3 Questions to Ask This Week
            </h2>
            <p className="text-gray-600">
              Start with these carefully selected conversations
            </p>
          </div>

          <div className="space-y-6">
            {bookmarkQuestions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-trust text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-ink mb-2">
                      {item.question}
                    </h3>
                    <div className="bg-white rounded-md p-3 border-l-4 border-trust">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium text-trust">How to bring it up:</span> {item.script}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          <div className="card text-center">
            <MessageCircle className="w-12 h-12 text-trust mx-auto mb-4" />
            <h3 className="font-heading font-semibold text-xl text-ink mb-2">
              Start Conversations
            </h3>
            <p className="text-gray-600 text-sm">
              Use the guide to have deeper, more meaningful conversations with your partner
            </p>
          </div>

          <div className="card text-center">
            <Heart className="w-12 h-12 text-heart mx-auto mb-4" />
            <h3 className="font-heading font-semibold text-xl text-ink mb-2">
              Build Understanding
            </h3>
            <p className="text-gray-600 text-sm">
              Use the expert interpretations to decode answers and spot compatibility patterns
            </p>
          </div>
        </motion.div>

        {/* Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center bg-cloud rounded-xl p-8"
        >
          <h3 className="font-heading font-semibold text-xl text-ink mb-2">
            Questions? We're here to help.
          </h3>
          <p className="text-gray-600 mb-4">
            If you have any issues with your download or questions about using the guide, 
            don't hesitate to reach out.
          </p>
          <a
            href="mailto:hussein.sbeiti.wb@gmail.com"
            className="inline-flex items-center text-trust font-semibold hover:text-trust/80 transition-colors"
          >
            Email: hussein.sbeiti.wb@gmail.com
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </motion.div>
      </div>
    </div>
  )
}
