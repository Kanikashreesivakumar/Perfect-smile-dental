"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      name: "Sarah Thompson",
      role: "Marketing Executive",
      image: "/images/testimonial-1.jpg",
      quote:
        "I've been terrified of dentists my whole life, but Dr. Johnson and her team made me feel completely at ease. Their gentle approach and clear explanations helped me overcome my dental anxiety. Now I actually look forward to my appointments!",
    },
    {
      name: "Michael Rodriguez",
      role: "Software Engineer",
      image: "/images/testimonial-2.jpg",
      quote:
        "Perfect Smile transformed my smile with their cosmetic dentistry services. The results exceeded my expectations, and the process was much more comfortable than I anticipated. The staff is professional, friendly, and truly cares about patient satisfaction.",
    },
    {
      name: "Emily Chen",
      role: "Teacher",
      image: "/images/testimonial-3.jpg",
      quote:
        "As someone who works with children, I know how important a warm, welcoming environment is. Dr. Rodriguez is amazing with my kids - they actually get excited about going to the dentist! The entire team makes dental care fun and stress-free for the whole family.",
    },
    {
      name: "David Wilson",
      role: "Retired",
      image: "/images/testimonial-4.jpg",
      quote:
        "After years of dental problems, I finally found Perfect Smile. Their comprehensive approach addressed issues other dentists missed. The investment in my dental health was worth every penny, and their payment plans made it manageable for my budget.",
    },
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      containerRef.current.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${y * -5}deg)`
    }

    const handleMouseLeave = () => {
      if (!containerRef.current) return
      containerRef.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)"
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      container.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        container.removeEventListener("mousemove", handleMouseMove)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div ref={containerRef} className="relative h-[400px] md:h-[300px] transition-transform duration-300 ease-out">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100, rotateY: 10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: -10 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="absolute inset-0"
            >
              <Card className="h-full border-none shadow-xl bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-light"></div>
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/5"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-primary/5"></div>

                <CardContent className="pt-8 h-full flex flex-col justify-between relative z-10">
                  <div className="mb-4 text-primary">
                    <Quote className="h-10 w-10 opacity-80" />
                  </div>
                  <p className="text-gray-600 italic mb-8 text-lg">"{testimonials[current].quote}"</p>
                  <div className="flex items-center">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-primary/20">
                      <Image
                        src={testimonials[current].image || "/placeholder.svg"}
                        alt={testimonials[current].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900">{testimonials[current].name}</h4>
                      <p className="text-sm text-primary">{testimonials[current].role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setAutoplay(false)
              setCurrent(index)
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-primary w-8" : "bg-gray-300 hover:bg-primary/50"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-white rounded-full shadow-lg z-10 hover:bg-primary hover:text-white transition-colors"
        onClick={prev}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-white rounded-full shadow-lg z-10 hover:bg-primary hover:text-white transition-colors"
        onClick={next}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  )
}
