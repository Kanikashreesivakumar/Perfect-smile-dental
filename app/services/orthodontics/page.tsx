"use client"

import DetailedService from "@/components/detailed-service"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, Eye } from "lucide-react"

export default function OrthodonticsPage() {
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
          title="Modern Orthodontics"
          description="Our modern orthodontic treatments help straighten misaligned teeth and correct bite issues using the latest technologies and techniques. We offer various options including traditional braces, ceramic braces, and clear aligners like Invisalign. Our AI-powered treatment planning ensures optimal results with maximum comfort and efficiency."
          image="/images/services/orthodontics-detail.png"
          benefits={[
            "Improved smile aesthetics and confidence",
            "Better oral health and easier cleaning",
            "Correction of bite problems that can cause jaw pain",
            "Prevention of uneven wear on teeth",
            "Multiple treatment options to suit your lifestyle",
            "Digital planning for predictable results",
          ]}
          procedure="Treatment begins with a comprehensive examination including digital scans and X-rays to create a 3D model of your teeth. Our orthodontist will develop a personalized treatment plan based on your specific needs. For traditional or ceramic braces, brackets are bonded to your teeth and connected with wires that are periodically adjusted. For clear aligners, you'll receive a series of custom-made trays that gradually move your teeth. Regular check-ups every 4-8 weeks monitor your progress."
          recovery="Orthodontic treatment is a gradual process, typically lasting 12-24 months depending on complexity. Some discomfort may occur after adjustments or when switching to new aligners, but this usually subsides within a few days. After treatment, retainers are essential to maintain your new smile. We provide detailed care instructions for your specific orthodontic appliance to ensure optimal results."
          price="From $3,500"
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
