"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function ServicesPage() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      title: "Advanced Teeth Whitening",
      description:
        "Our professional whitening treatments use the latest LED-activated technology to remove deep stains and discoloration. The procedure is gentle on enamel while delivering dramatic results that last. We customize each treatment to your specific needs, ensuring optimal brightness without sensitivity.",
      icon: "tooth-brush",
      price: "From $299",
      image: "/images/services/teeth-whitening.png",
    },
    {
      title: "Precision Dental Implants",
      description:
        "Our dental implants provide a permanent solution for missing teeth with a success rate of over 98%. Using 3D imaging and computer-guided placement, we ensure perfect positioning and integration with your natural bone. The result is a restoration that looks, feels, and functions exactly like your natural teeth.",
      icon: "tooth-implant",
      price: "From $1,800",
      image: "/images/services/dental-implants.jpg",
    },
    {
      title: "Modern Orthodontics",
      description:
        "Transform your smile with our invisible aligners and aesthetic braces. Our AI-powered treatment planning creates a digital model of your perfect smile before treatment begins. We offer clear aligners, ceramic braces, and traditional options, all with accelerated treatment times thanks to our proprietary technology.",
      icon: "braces",
      price: "From $3,500",
      image: "/images/services/orthodontics.png",
    },
    {
      title: "Painless Root Canal",
      description:
        "Our advanced root canal therapy uses rotary endodontics and 3D imaging for precision treatment. Combined with our specialized anesthesia protocol, the procedure is completely comfortable with minimal recovery time. We preserve your natural tooth while eliminating infection and pain.",
      icon: "root-canal",
      price: "From $800",
      image: "/images/services/root-canal.png",
    },
    {
      title: "Premium Cosmetic Dentistry",
      description:
        "Our cosmetic procedures include porcelain veneers, bonding, and complete smile makeovers. Our dentists are trained in aesthetic principles to create natural, harmonious results. We use digital smile design to preview your results and high-quality porcelain materials that resist staining and look indistinguishable from natural teeth.",
      icon: "cosmetic",
      price: "From $500",
      image: "/images/services/cosmetic-dentistry.png",
    },
    {
      title: "Preventive Excellence",
      description:
        "Our preventive care program includes comprehensive exams with oral cancer screening, advanced digital x-rays with minimal radiation, professional cleanings, and personalized home care plans. We use AI-assisted cavity detection to identify problems at their earliest stages.",
      icon: "prevention",
      price: "From $150",
      image: "/images/services/preventive-care.png",
    },
    {
      title: "Pediatric Dentistry",
      description:
        "Our child-friendly environment makes dental visits fun and educational. We use gentle techniques specifically designed for children's comfort. Our preventive approach includes sealants, fluoride treatments, and education to establish healthy habits early. We create positive associations with dental care that last a lifetime.",
      icon: "pediatric",
      price: "From $120",
      image: "/images/services/pediatric-dentistry.png",
    },
    {
      title: "Periodontal Treatment",
      description:
        "Our comprehensive gum disease treatments range from deep cleaning to advanced laser therapy for severe cases. We use antimicrobial treatments and host modulation to control infection and promote healing. Our maintenance program prevents recurrence and protects your overall health.",
      icon: "periodontal",
      price: "From $300",
      image: "/images/services/periodontal.png",
    },
    {
      title: "Dental Crowns & Bridges",
      description:
        "Our same-day crown technology creates perfectly fitted restorations in a single visit. We use high-strength ceramics that blend seamlessly with your natural teeth. Our digital impression system eliminates uncomfortable traditional molds while providing superior accuracy for a perfect fit.",
      icon: "crown",
      price: "From $950",
      image: "/images/services/crowns-bridges.jpg",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
     
      <section
        ref={heroRef}
        className="relative py-32 overflow-hidden"
        style={{
          backgroundImage: "url('/images/service.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary-light/30"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1
              initial={{ opacity: 10, y: -20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-black mb-6"
            >
              Our Premium Dental Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-black"
            >
              Experience exceptional care with our comprehensive range of advanced dental treatments
            </motion.p>
          </div>
        </div>
      </section>

      
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-10 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                        {service.price}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold mb-4 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  <Button asChild className="premium-button rounded-full">
                    <Link href="/appointment">
                      Book This Service <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  )
}
