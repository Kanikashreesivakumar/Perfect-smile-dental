export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            We collect information that you provide directly to us, including personal information and medical history
            necessary for your dental care.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">
            We use the information we collect to provide you with dental services, communicate with you about
            appointments, and improve our services.
          </p>
        </section>

        {/* Add more sections as needed */}
      </div>
    </div>
  )
}