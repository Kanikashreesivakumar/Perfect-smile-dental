"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Loader2 } from "lucide-react"

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-radial from-white via-[#f8f9ff] to-white"
        >
          <div className="relative mb-8">
            <motion.div
              className="relative w-40 h-40 flex items-center justify-center"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/tooth-logo.png"
                alt="Perfect Smile Logo"
                width={160}
                height={160}
                className="object-contain z-10"
              />

              {/* Animated rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-purple-300 opacity-70"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 0, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute inset-0 rounded-full border-2 border-purple-400 opacity-70"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.7, 0, 0.7],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              />

              <motion.div
                className="absolute inset-0 rounded-full border-2 border-purple-500 opacity-70"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.7, 0, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
              />
            </motion.div>

            {/* Glowing effect */}
            <motion.div
              className="absolute -inset-4 rounded-full opacity-70"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(91, 33, 182, 0.3)",
                  "0 0 40px rgba(91, 33, 182, 0.5)",
                  "0 0 20px rgba(91, 33, 182, 0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* Floating particles */}
            <motion.div
              className="absolute top-0 left-1/4 w-3 h-3 rounded-full bg-purple-300"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute bottom-0 right-1/4 w-2 h-2 rounded-full bg-purple-400"
              animate={{
                y: [0, -15, 0],
                x: [0, -8, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />

            <motion.div
              className="absolute top-1/3 right-0 w-4 h-4 rounded-full bg-purple-200"
              animate={{
                y: [0, -25, 0],
                x: [0, -15, 0],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>

          <div className="relative h-10 w-64 mb-4">
            <Image src="/images/perfect-smile-text.png" alt="Perfect Smile" fill className="object-contain" />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg font-medium mb-4 text-gray-600"
          >
            multi speciality dental care
          </motion.h2>

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Loader2 className="h-8 w-8 animate-spin text-[#5b21b6]" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
