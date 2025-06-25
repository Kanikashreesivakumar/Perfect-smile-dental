"use client"

import DetailedService from "@/components/detailed-service"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, Eye } from "lucide-react"

export default function TeethWhiteningPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4 mx-auto">
        <div className="mb-8">
          <Button asChild variant="ghost" size="sm" className="mb-4">
            <Link href="/services">
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to Services
            </Link>
          </Button>
        </div>

        <DetailedService
          title="Advanced Teeth Whitening"
          description="Our professional teeth whitening treatments are designed to effectively remove stains and discoloration, giving you a brighter, more confident smile. Using the latest whitening technology and premium-grade whitening agents, we can achieve results that are significantly more dramatic than over-the-counter products."
          image="/images/services/teeth-whitening-detail.png"
          benefits={[
            "Dramatically whiter teeth in just one visit",
            "Long-lasting results with proper maintenance",
            "Safe procedure with minimal sensitivity",
            "Customized treatment based on your needs",
            "Boost in confidence with a brighter smile",
          ]}
          procedure="The procedure begins with a thorough cleaning to remove any surface stains and debris. We then apply a protective barrier to your gums before applying our professional-grade whitening gel to your teeth. The gel is activated using a special light that accelerates the whitening process. The entire procedure takes approximately 60-90 minutes, and you'll see results immediately."
          recovery="After your whitening treatment, you may experience some sensitivity, but this typically subsides within 24-48 hours. We recommend avoiding dark-colored foods and beverages (coffee, red wine, etc.) for at least 48 hours after treatment. To maintain your results, good oral hygiene practices and occasional touch-up treatments are recommended."
          price="From $299"
        />

        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link href="/gallery">
              <Eye className="h-5 w-5 mr-2" />
              View Before & After Gallery
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
