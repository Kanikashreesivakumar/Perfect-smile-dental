"use client"

import { motion } from "framer-motion"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                At Perfect Smile Dental Clinic, we collect various types of information to provide you with the best possible dental care:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Personal identification information (Name, email address, phone number, etc.)</li>
                <li>Medical and dental history</li>
                <li>Insurance and payment information</li>
                <li>Appointment scheduling information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the collected information for:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Providing dental care services</li>
                <li>Communicating about appointments and treatments</li>
                <li>Processing payments and insurance claims</li>
                <li>Improving our services and patient experience</li>
              </ul>
            </section>

            {/* Add more sections as needed */}
          </div>
        </motion.div>
      </div>
    </div>
  )
}