"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
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

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const heroSpringY = useSpring(heroY, { stiffness: 100, damping: 30 })
  const heroSpringScale = useSpring(heroScale, { stiffness: 100, damping: 30 })
  const heroSpringOpacity = useSpring(heroOpacity, { stiffness: 100, damping: 30 })

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
      image: "/images/den.jpg",
    },
    {
      title: "Painless Root Canal",
      description: "Advanced technology and techniques for completely comfortable root canal therapy.",
      icon: "root-canal",
      image: "/images/den.jpg",
    },
    {
      title: "Premium Cosmetic Dentistry",
      description: "Transform your smile with our artistic approach to veneers, bonding, and smile design.",
      icon: "cosmetic",
      image: "/images/den.jpg",
    },
    {
      title: "Preventive Excellence",
      description: "Comprehensive care with advanced diagnostics to maintain optimal oral health.",
      icon: "prevention",
      image: "/images/den.jpg",
    },
  ]

  const features = [
    {
      title: "State-of-the-Art Technology",
      description: "Our clinic is equipped with the latest dental technology for precise diagnostics and treatment.",
      image: "/images/mou.jpg",
    },
    {
      title: "Comfortable Environment",
      description: "Experience dental care in a relaxing, spa-like atmosphere designed for your comfort.",
      image: "/images/mou.jpg",
    },
    {
      title: "Expert Team",
      description: "Our specialists have advanced training in their fields to provide exceptional care.",
      image: "/images/mou.jpg",
    },
  ]

  return (
    <div className="overflow-x-hidden">
     
      <section ref={heroRef} className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        <video ref={videoRef} autoPlay muted loop playsInline className="video-background">
          <source src="/videos/dental.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>

        <FloatingElements />

        <motion.div
          style={{
            y: heroSpringY,
            scale: heroSpringScale,
            opacity: heroSpringOpacity,
          }}
          className="container relative z-10 px-4 mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-center mx-auto text-white"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-12 drop-shadow-lg text-black">
           Crafting Confident Smiles, One Visit at a Time
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-black font-semibold drop-shadow-md">
             Discover dental care that’s built around you — blending expert hands, genuine compassion, and modern technology to make every visit feel reassuring and rewarding.

            </p>
            
              <Button
                asChild
                className="premium-button bg-white text-black hover:bg-white/90 text-lg px-8 py-6 rounded-full mt-16">
                <Link href="/appointment">
                  Book Your Appointment <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
           
          </motion.div>
        </motion.div>
        </section>

      <section ref={featuresRef} className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-bold mb-5 gradient-text">
  Where Confidence Begins with a Smile
</h2>
<p className="text-xl text-black max-w-3xl mx-auto">
  At Perfect Smile, we don’t just treat teeth — we care for people. From the moment you walk in, our focus is on comfort, compassion, and creating smiles that truly reflect you.
</p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-xl h-full"
              >
                <div className="relative h-[200px]">
                  <Image
                    src={feature.image || "/mou2.jpg"}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-black">{feature.title}</h3>
                  <p className="text-lg text-black">{feature.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text"> Step Inside Comfort-Centered Dentistry</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Explore a space where innovation meets relaxation — thoughtfully designed to make every visit feel calm, modern, and truly patient-first.
            </p>
          </motion.div>

          <ClinicShowcase/>
        </div>
      </section>

    </div>
  )
}
