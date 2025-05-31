"use client"

import { motion } from "framer-motion"

export default function TermsOfService() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mb-16 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-semibold mb-16 text-gray-900">Terms of Service</h1>
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using Perfect Smile Dental Clinic's services, you agree to be bound by these Terms of Service.
                Please read these terms carefully before accessing or using our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Description of Services</h2>
              <p className="text-gray-600 mb-4">
                Perfect Smile Dental Clinic provides dental care services including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Preventive dental care</li>
                <li>Restorative treatments</li>
                <li>Cosmetic dentistry</li>
                <li>Emergency dental services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Appointment Policy</h2>
              <p className="text-gray-600 mb-4">
                We require 24 hours notice for cancellation of appointments. Late cancellations or missed appointments
                may incur a fee as specified in our cancellation policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
              <p className="text-gray-600 mb-4">
                Payment is required at the time of service unless prior arrangements have been made. We accept various
                payment methods including cash, credit cards, and approved insurance plans.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Privacy Policy</h2>
              <p className="text-gray-600 mb-4">
                Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy
                to understand how we collect, use, and protect your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Modifications to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these terms at any time. Continued use of our services after any
                modifications indicates your acceptance of the updated terms.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}