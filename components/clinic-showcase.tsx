"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"
import { Autoplay } from "swiper/modules"
import { Pagination, Navigation } from "swiper/modules"

const clinicImages = [
  {
    src: "/placeholder.svg?height=500&width=800",
    alt: "Modern Reception Area",
    title: "Reception Area",
    description: "Our welcoming reception area designed for your comfort",
  },
  {
    src: "/placeholder.svg?height=500&width=800",
    alt: "Advanced Treatment Room",
    title: "Treatment Room",
    description: "State-of-the-art treatment rooms with the latest technology",
  },
  {
    src: "/placeholder.svg?height=500&width=800",
    alt: "Dental Equipment",
    title: "Advanced Equipment",
    description: "Cutting-edge dental equipment for precise diagnostics and treatment",
  },
  {
    src: "/placeholder.svg?height=500&width=800",
    alt: "Comfortable Waiting Area",
    title: "Waiting Area",
    description: "Relax in our comfortable waiting area before your appointment",
  },
  {
    src: "/placeholder.svg?height=500&width=800",
    alt: "Panoramic X-Ray Machine",
    title: "Imaging Technology",
    description: "Advanced imaging technology for accurate diagnostics",
  },
  {
    src: "/placeholder.svg?height=500&width=800",
    alt: "Consultation Room",
    title: "Consultation Room",
    description: "Private consultation rooms for discussing your treatment options",
  },
]

export default function ClinicShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [view, setView] = useState<"carousel" | "grid">("carousel")

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === clinicImages.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? clinicImages.length - 1 : prevIndex - 1))
  }

  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-xl overflow-hidden"
      >
        {clinicImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[600px]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
