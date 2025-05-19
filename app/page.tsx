"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import ServiceCard from "@/components/service-card"
import TestimonialCarousel from "@/components/testimonial-carousel"
import FloatingElements from "@/components/floating-elements"
import ClinicShowcase from "@/components/clinic-showcase"

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const showcaseRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const [heroInView] = useState(true)
  const isServicesInView = useInView(servicesRef, { once: false, amount: 0.3 })
  const isFeaturesInView = useInView(featuresRef, { once: false, amount: 0.3 })
  const isTestimonialsInView = useInView(testimonialsRef, { once: false, amount: 0.3 })
  const isShowcaseInView = useInView(showcaseRef, { once: false, amount: 0.3 })
  const isCtaInView = useInView(ctaRef, { once: false, amount: 0.3 })

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7
    }
  }, [])

  const services = [
    {
      title: "Advanced Teeth Whitening",
      description: "Professional whitening with our proprietary technology for a brighter, more confident smile.",
      icon: "tooth-brush",
      image: "/images/services/teeth-whitening-small.jpg",
    },
    {
      title: "Precision Dental Implants",
      description: "State-of-the-art implants with 3D-guided placement for perfect fit and natural appearance.",
      icon: "tooth-implant",
      image: "/images/services/dental-implants-small.jpg",
    },
    {
      title: "Modern Orthodontics",
      description: "Invisible aligners and aesthetic braces using AI-powered treatment planning.",
      icon: "braces",
      image: "/images/services/orthodontics-small.jpg",
    },
    {
      title: "Painless Root Canal",
      description: "Advanced technology and techniques for completely comfortable root canal therapy.",
      icon: "root-canal",
      image: "/images/services/root-canal-small.jpg",
    },
    {
      title: "Premium Cosmetic Dentistry",
      description: "Transform your smile with our artistic approach to veneers, bonding, and smile design.",
      icon: "cosmetic",
      image: "/images/services/cosmetic-dentistry-small.jpg",
    },
    {
      title: "Preventive Excellence",
      description: "Comprehensive care with advanced diagnostics to maintain optimal oral health.",
      icon: "prevention",
      image: "/images/services/preventive-care-small.jpg",
    },
  ]

  const features = [
    {
      title: "State-of-the-Art Technology",
      description: "Our clinic is equipped with the latest dental technology for precise diagnostics and treatment.",
      image: "/images/home/feature-technology.jpg",
    },
    {
      title: "Comfortable Environment",
      description: "Experience dental care in a relaxing, spa-like atmosphere designed for your comfort.",
      image: "/images/home/feature-comfort.jpg",
    },
    {
      title: "Expert Team",
      description: "Our specialists have advanced training in their fields to provide exceptional care.",
      image: "/images/home/feature-team.jpg",
    },
  ]

  return (
    <div className="overflow-x-hidden">
      <section ref={heroRef} className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        <video ref={videoRef} autoPlay muted loop playsInline className="video-background">
          <source src="/videos/dental-video-hd.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>

        <FloatingElements />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container relative z-10 px-4 mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-center mx-auto text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
              <TypeAnimation
                sequence={[
                  "Transforming Smiles, Changing Lives",
                  1000,
                  "Advanced Dental Technology",
                  1000,
                  "Your Perfect Smile Awaits",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-100"
              />
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/90 drop-shadow-md">
              Experience exceptional dental care with our team of experts using cutting-edge technology for your comfort
              and satisfaction.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="glow-effect">
              <Button
                asChild
                size="lg"
                className="premium-button bg-white text-purple-800 hover:bg-white/90 text-lg px-8 py-6 rounded-full"
              >
                <Link href="/appointment">
                  Book Your Appointment <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 bg-white rounded-full"
              animate={{ opacity: [0.5, 1, 0.5], height: [2, 6, 2] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>
      </section>

      <section ref={featuresRef} className="py-24 bg-white page-section depth-section">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 depth-layer depth-layer-1"
            data-speed="0.1"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">The Perfect Smile Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've reimagined what a dental visit can be, combining clinical excellence with exceptional comfort.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-3d depth-layer depth-layer-2"
                data-speed={`0.${index + 1}`}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-xl h-full">
                  <div className="relative h-[200px]">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-purple-800">{feature.title}</h3>
                    <p className="text-lg text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section ref={showcaseRef} className="py-24 bg-white page-section">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isShowcaseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 depth-layer"
            data-speed="0.05"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our State-of-the-Art Clinic</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a virtual tour of our modern facilities designed for your comfort and care.
            </p>
          </motion.div>

          <ClinicShowcase />
        </div>
      </section>

      <section ref={testimonialsRef} className="py-24 bg-gray-50 page-section">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 depth-layer"
            data-speed="0.05"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">What Our Patients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Read honest reviews from our satisfied patients.</p>
          </motion.div>

          <TestimonialCarousel />
        </div>
      </section>

  
      
    </div>
  )
}
