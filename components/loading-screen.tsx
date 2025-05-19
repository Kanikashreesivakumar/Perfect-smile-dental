"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { Loader2 } from "lucide-react"

// Custom 3D tooth model using basic Three.js shapes
function ToothModel() {
  return (
    <group position={[0, 0, 0]}>
      {/* Tooth crown */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[2, 1, 2]} />
        <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Tooth root 1 */}
      <mesh position={[-0.5, -0.5, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.2, 2, 16]} />
        <meshStandardMaterial color="#f8f8f8" roughness={0.4} metalness={0.1} />
      </mesh>

      {/* Tooth root 2 */}
      <mesh position={[0.5, -0.5, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.2, 2, 16]} />
        <meshStandardMaterial color="#f8f8f8" roughness={0.4} metalness={0.1} />
      </mesh>

      {/* Tooth surface details */}
      <mesh position={[0, 0.5, 0.1]} castShadow>
        <torusGeometry args={[0.8, 0.2, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#f0f0f0" roughness={0.5} metalness={0.1} />
      </mesh>
    </group>
  )
}

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [renderError, setRenderError] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  const handleCanvasError = () => {
    console.error("Error rendering 3D tooth model")
    setRenderError(true)
  }

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-radial from-white via-[#f8f9ff] to-white"
        >
          <div className="relative w-40 h-40 mb-8">
            {!renderError ? (
              <Canvas ref={canvasRef} camera={{ position: [0, 0, 5], fov: 45 }} onError={handleCanvasError}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />
                <motion.group
                  animate={{
                    rotateY: [0, Math.PI * 2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <ToothModel />
                </motion.group>
                <Environment preset="studio" />
                <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
              </Canvas>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-12 h-12 text-purple-800"
                  >
                    <path d="M12 22c-4.2 0-7-1.4-7-4V6c0-2.6 2.8-4 7-4s7 1.4 7 4v12c0 2.6-2.8 4-7 4z"></path>
                    <path d="M12 22V18"></path>
                    <path d="M8 18v-7"></path>
                    <path d="M16 18v-7"></path>
                    <path d="M12 6L8 3"></path>
                    <path d="M12 6L16 3"></path>
                  </svg>
                </div>
              </div>
            )}

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
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#5b21b6] to-[#8b5cf6]"
          >
            Preparing your perfect smile...
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
