"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { useInView } from "react-intersection-observer"

export default function ExperiencePage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4 mx-auto">
        <div className="mb-8">
          <Button asChild variant="ghost" size="sm" className="mb-4">
            <Link href="/about">
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to About
            </Link>
          </Button>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">More Than Just Dentists</h1>
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              At Perfect Smile, we believe in delivering more than just dental services. Our approach combines expertise,
              compassion, and cutting-edge technology to provide an exceptional dental care experience.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Our Expertise</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Advanced dental procedures
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Latest technology
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Continuous education
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Patient Care</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Personalized treatment plans
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Comfortable environment
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
                    Transparent communication
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
