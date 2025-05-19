"use client"

import DetailedService from "@/components/detailed-service"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function DentalImplantsPage() {
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
          title="Precision Dental Implants"
          description="Dental implants are the gold standard for replacing missing teeth. These titanium posts are surgically placed in the jawbone and serve as artificial tooth roots, providing a strong foundation for fixed or removable replacement teeth. Our precision implant technology ensures optimal placement and integration for long-lasting results."
          image="/images/services/dental-implant-detail.png"
          benefits={[
            "Look and function like natural teeth",
            "Prevent bone loss and maintain facial structure",
            "Improve speech and comfort compared to dentures",
            "No need to alter adjacent teeth (unlike bridges)",
            "Long-lasting solution with proper care (can last a lifetime)",
            "High success rate (over 95%)",
          ]}
          procedure="The implant process typically requires several visits over a few months. First, we conduct a comprehensive examination with 3D imaging to plan precise implant placement. During the surgical phase, the implant is placed in the jawbone under local anesthesia. After a healing period of 3-6 months (osseointegration), we attach an abutment to the implant, followed by the placement of a custom-made crown that matches your natural teeth."
          recovery="After implant surgery, some swelling and discomfort are normal for a few days. We provide detailed aftercare instructions and pain management options. During the osseointegration period, a temporary prosthetic may be worn. Once fully healed, your implant will function just like a natural tooth and require the same care: regular brushing, flossing, and dental check-ups."
          price="From $1,500 per implant"
        />
      </div>
    </div>
  )
}
