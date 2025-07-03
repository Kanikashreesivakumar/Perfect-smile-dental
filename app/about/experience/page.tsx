"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"

export default function ExperiencePage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "State-of-the-Art Facility",
      description:
        "Our modern clinic is equipped with the latest dental technology, including digital X-rays, 3D imaging, CAD/CAM same-day restorations, and laser dentistry equipment. Every aspect of our facility is designed with your comfort and care in mind.",
      image: "/images/about/advanced-equipment.png",
    },
    {
      title: "Personalized Patient Care",
      description:
        "We believe in treating the person, not just their teeth. Our team takes the time to understand your concerns, preferences, and goals to create truly personalized treatment plans. We pride ourselves on building lasting relationships with our patients.",
      image: "/images/about/patient-care.png",
    },
    {
      title: "Comprehensive Services",
      description:
        "From routine check-ups to complex restorative procedures, we offer a full range of dental services under one roof. Our team of specialists means you won't need to be referred elsewhere, ensuring continuity of care throughout your treatment journey.",
      image: "/images/about/team-photo.png",
    },
    {
      title: "Comfort-Focused Environment",
      description:
        "We've designed our clinic to feel more like a spa than a dental office. Enjoy amenities like noise-cancelling headphones, warm blankets, aromatherapy, and entertainment options during your treatment. For anxious patients, we offer various sedation options to ensure a stress-free experience.",
      image: "/images/about/clinic-exterior.png",
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4 mx-auto">
        <div className="mb-8">
          <Button asChild variant="ghost" size="sm" className="mb-4">
            <Link href="/about">
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to About Us
            </Link>
          </Button>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">The Perfect Smile Experience</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-3xl">
            At Perfect Smile, we've reimagined what a dental visit can be. Our approach combines clinical excellence
            with exceptional patient experience to make every visit comfortable, efficient, and effective.
          </p>
        </div>

        <div ref={ref} className="space-y-16 mt-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="md:w-1/2">
                <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={experience.image || "/placeholder.svg"}
                    alt={experience.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <Card className="border-none shadow-lg">
                  <CardHeader className="bg-primary/10 dark:bg-primary-dark/10">
                    <CardTitle>{experience.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-gray-600 dark:text-gray-300">{experience.description}</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Ready </h2>
          <Button asChild size="lg" className="premium-button rounded-full">
            <Link href="/appointment">Schedule Your Visit</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
