"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const elements = containerRef.current.querySelectorAll(".parallax-element")
      const x = e.clientX
      const y = e.clientY

      elements.forEach((element) => {
        const speed = Number.parseFloat((element as HTMLElement).dataset.speed || "0.05")
        const offsetX = (x - window.innerWidth / 2) * speed
        const offsetY = (y - window.innerHeight / 2) * speed
        ;(element as HTMLElement).style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
      {/* Tooth */}
      <motion.div
        className="absolute top-[20%] left-[10%] w-16 h-16 md:w-24 md:h-24 parallax-element"
        data-speed="0.05"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/hos.svg"
          alt="Floating tooth"
          width={100}
          height={100}
          className="w-full h-full opacity-70"
        />
      </motion.div>

      {/* Toothbrush */}
      <motion.div
        className="absolute bottom-[20%] right-[10%] w-16 h-16 md:w-24 md:h-24 parallax-element"
        data-speed="0.08"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Image
          src="/images/chair.svg"
          alt="Floating brush"
          width={100}
          height={100}
          className="w-full h-full opacity-70"
        />
      </motion.div>

    
      <motion.div
        className="absolute top-[15%] right-[15%] w-12 h-12 md:w-16 md:h-16 parallax-element"
        data-speed="0.1"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full bg-purple-200 opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-purple-300 opacity-40"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-purple-400 opacity-60"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-purple-400 opacity-60"></div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-2 h-2 rounded-full bg-purple-400 opacity-60"></div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-2 h-2 rounded-full bg-purple-400 opacity-60"></div>
        </div>
      </motion.div>

      
      <motion.div
        className="absolute bottom-[30%] left-[10%] w-10 h-10 md:w-14 md:h-14 parallax-element"
        data-speed="0.07"
        animate={{
          y: [0, 15, 0],
          x: [0, -10, 0],
          rotate: [0, -360, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <div className="relative w-full h-full rounded-full bg-purple-100 flex items-center justify-center">
          <Image
            src="/images/dental-tool.svg"
            alt="Molar tooth"
            width={32}
            height={32}
            className="text-purple-500 opacity-70"
          />
        </div>
      </motion.div>


      <motion.div
        className="absolute top-[40%] right-[15%] w-10 h-10 md:w-14 md:h-14 parallax-element"
        data-speed="0.09"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="relative w-full h-full rounded-full bg-purple-100 flex items-center justify-center">
          <Image
            src="/images/molar.svg"
            alt="Molar tooth"
            width={32}
            height={32}
            className="text-purple-500 opacity-70"
          />
        </div>
      </motion.div>

      
      <div className="absolute top-[30%] left-[30%] w-40 h-40 rounded-full bg-purple-400/20 blur-3xl"></div>

   
      <div className="absolute bottom-[20%] right-[30%] w-60 h-60 rounded-full bg-purple-300/20 blur-3xl"></div>
    </div>
  )
}
