"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

interface DetailedServiceProps {
  title: string
  description: string
  image: string
  benefits: string[]
  procedure: string
  recovery: string
  price: string
}

export default function DetailedService({
  title,
  description,
  image,
  benefits,
  procedure,
  recovery,
  price,
}: DetailedServiceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h1>
          <div className="bg-primary text-white px-4 py-1 rounded-full inline-block text-sm font-medium">{price}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Overview</h2>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Procedure</h2>
            <p className="text-gray-600 dark:text-gray-300">{procedure}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Recovery</h2>
            <p className="text-gray-600 dark:text-gray-300">{recovery}</p>
          </div>
        </div>

        <div>
          <Card className="border-none shadow-lg">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Benefits</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button asChild className="w-full premium-button rounded-full">
                  <Link href="/appointment">Book This Service</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  )
}
