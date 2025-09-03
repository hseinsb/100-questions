import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | 100 Questions for Relationship Compatibility',
  description: 'Privacy policy for 100 Questions for Relationship Compatibility guide'
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cloud py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card">
          <h1 className="font-heading font-bold text-3xl text-ink mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-gray max-w-none space-y-6">
            <p className="text-gray-600">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="font-heading font-semibold text-xl text-ink mb-3">Information We Collect</h2>
              <p className="text-gray-600">
                When you purchase our guide, we collect:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Email address (for receipt and download link)</li>
                <li>Payment information (processed securely by PayPal/Stripe)</li>
                <li>Basic analytics data (via Google Analytics)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-ink mb-3">How We Use Your Information</h2>
              <p className="text-gray-600 mb-3">
                We use your information to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Deliver your purchased guide</li>
                <li>Send purchase receipts and download links</li>
                <li>Provide customer support</li>
                <li>Improve our website and services</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-ink mb-3">Data Sharing</h2>
              <p className="text-gray-600">
                We do not sell, trade, or share your personal information with third parties, except:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Payment processors (PayPal, Stripe) to complete transactions</li>
                <li>When required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-ink mb-3">Cookies and Analytics</h2>
              <p className="text-gray-600">
                We use Google Analytics to understand how visitors use our site. This helps us improve your experience. 
                You can opt out of analytics tracking in your browser settings.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-ink mb-3">Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate security measures to protect your personal information. 
                However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-ink mb-3">Your Rights</h2>
              <p className="text-gray-600 mb-3">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-ink mb-3">Contact Us</h2>
              <p className="text-gray-600">
                If you have questions about this privacy policy or your personal data, 
                please contact us at: <a href="mailto:hussein.sbeiti.wb@gmail.com" className="text-trust hover:underline">hussein.sbeiti.wb@gmail.com</a>
              </p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-xl text-ink mb-3">Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update this privacy policy from time to time. We will notify you of any changes 
                by posting the new policy on this page with an updated effective date.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
