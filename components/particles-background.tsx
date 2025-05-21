"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  element: HTMLDivElement
}

export default function ParticlesBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const particles: Particle[] = []
    const particleCount = 30
    const maxSize = 8

  
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * maxSize + 2
      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight
      const speedX = Math.random() * 0.5 - 0.25
      const speedY = Math.random() * 0.5 - 0.25
      const opacity = Math.random() * 0.5 + 0.2

      const element = document.createElement("div")
      element.className = "particle"
      element.style.width = `${size}px`
      element.style.height = `${size}px`
      element.style.left = `${x}px`
      element.style.top = `${y}px`
      element.style.opacity = opacity.toString()
      element.style.background = `rgba(224, 247, 250, ${opacity})`
      element.style.boxShadow = `0 0 ${size * 2}px rgba(0, 174, 239, ${opacity})`
      container.appendChild(element)

      particles.push({
        x,
        y,
        size,
        speedX,
        speedY,
        opacity,
        element,
      })
    }

    particlesRef.current = particles

    const animate = () => {
      particles.forEach((particle) => {
       
        particle.x += particle.speedX
        particle.y += particle.speedY

     
        if (particle.x < 0 || particle.x > window.innerWidth) {
          particle.speedX *= -1
        }
        if (particle.y < 0 || particle.y > window.innerHeight) {
          particle.speedY *= -1
        }

        // Update DOM element
        particle.element.style.left = `${particle.x}px`
        particle.element.style.top = `${particle.y}px`
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      particles.forEach((particle) => {
        if (particle.x > window.innerWidth) {
          particle.x = Math.random() * window.innerWidth
        }
        if (particle.y > window.innerHeight) {
          particle.y = Math.random() * window.innerHeight
        }
      })
    }

    window.addEventListener("resize", handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", handleResize)
      particles.forEach((particle) => {
        if (particle.element.parentNode) {
          particle.element.parentNode.removeChild(particle.element)
        }
      })
    }
  }, [])

  return <div ref={containerRef} className="particles-container fixed inset-0 pointer-events-none z-0"></div>
}
