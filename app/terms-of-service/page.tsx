export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Terms of Service</h1>
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-4">
            By accessing and using Perfect Smile Dental Clinic's services, you accept and agree to be bound by the terms
            and conditions of this agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Description of Services</h2>
          <p className="text-gray-600 mb-4">
            Perfect Smile Dental Clinic provides dental care services including but not limited to preventive care,
            cosmetic dentistry, and orthodontic treatments.
          </p>
        </section>

        {/* Add more sections as needed */}
      </div>
    </div>
  )
}