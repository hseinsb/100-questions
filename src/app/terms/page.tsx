import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | 100 Questions for Relationship Compatibility',
  description: 'Terms of service for 100 Questions for Relationship Compatibility guide'
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cloud py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card">
          <h1 className="font-heading font-bold text-3xl text-ink mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-gray max-w-none space-y-6">
            <p className="text-gray-600">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="font-heading font-semibold text-xl text-ink mb-3">Agreement to Terms</h2>
              <p className="text-gray-600">
                By purchasing and using the "100 Questions for Relationship Compatibility" guide, 
                you agree to be bound by these Terms of Service and our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-ink mb-3">Product Description</h2>
              <p className="text-gray-600">
                The guide is a digital PDF containing 100 relationship compatibility questions 
                with expert interpretations, delivered via instant download upon purchase.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-ink mb-3">Purchase and Payment</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>All purchases are final due to the digital nature of the product</li>
                <li>Payment is processed securely through PayPal or Stripe</li>
                <li>You will receive a download link immediately after successful payment</li>
                <li>A backup link will be sent to your email address</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-ink mb-3">Support</h2>
              <p className="text-gray-600">
                If you have any questions about the guide or experience technical issues with your download, 
                please contact us at hussein.sbeiti.wb@gmail.com for assistance.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-ink mb-3">Intellectual Property</h2>
              <p className="text-gray-600 mb-3">
                The guide content is protected by copyright and is for personal use only. You may not:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Redistribute, resell, or share the guide</li>
                <li>Copy content for commercial purposes</li>
                <li>Modify or create derivative works</li>
                <li>Remove copyright notices</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-ink mb-3">Disclaimer</h2>
              <p className="text-gray-600">
                This guide provides general relationship advice and questions. It is not a substitute 
                for professional counseling, therapy, or medical advice. We are not responsible for 
                decisions made based on the guide's content.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-ink mb-3">Limitation of Liability</h2>
              <p className="text-gray-600">
                Our liability is limited to the amount you paid for the guide. We are not liable for 
                any indirect, incidental, or consequential damages arising from your use of the guide.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-ink mb-3">Technical Support</h2>
              <p className="text-gray-600">
                We provide support for download issues and technical problems. Contact us at 
                hussein.sbeiti.wb@gmail.com for assistance.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-ink mb-3">Governing Law</h2>
              <p className="text-gray-600">
                These terms are governed by the laws of the jurisdiction where the business is registered. 
                Any disputes will be resolved through binding arbitration.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-ink mb-3">Changes to Terms</h2>
              <p className="text-gray-600">
                We may update these terms from time to time. Continued use of our services after 
                changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-ink mb-3">Contact Information</h2>
              <p className="text-gray-600">
                For questions about these terms, please contact us at: 
                <a href="mailto:hussein.sbeiti.wb@gmail.com" className="text-trust hover:underline ml-1">
                  hussein.sbeiti.wb@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
