"use client"

import { createContext, useContext, useEffect, useRef, type ReactNode } from "react"

interface ScrollContextType {
  scrollY: number
}

const ScrollContext = createContext<ScrollContextType>({ scrollY: 0 })

export const useScroll = () => useContext(ScrollContext)

export function ScrollProvider({ children }: { children: ReactNode }) {
  const scrollY = useRef(0)
  const sections = useRef<HTMLElement[]>([])
  const layers = useRef<HTMLElement[]>([])

  useEffect(() => {
    // Find all sections and layers
    sections.current = Array.from(document.querySelectorAll(".page-section"))
    layers.current = Array.from(document.querySelectorAll(".depth-layer"))

    const handleScroll = () => {
      scrollY.current = window.scrollY

      // Apply 3D effect to sections
      sections.current.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const centerY = rect.top + rect.height / 2
        const viewportHeight = window.innerHeight
        const distanceFromCenter = centerY - viewportHeight / 2
        const maxDistance = viewportHeight / 2
        const normalizedDistance = Math.max(-1, Math.min(1, distanceFromCenter / maxDistance))

        // Apply rotation based on scroll position
        section.style.transform = `perspective(1000px) rotateX(${normalizedDistance * 5}deg)`
      })

      // Apply parallax effect to layers
      layers.current.forEach((layer) => {
        const speed = Number.parseFloat(layer.getAttribute("data-speed") || "0.1")
        const yPos = -scrollY.current * speed
        layer.style.transform = `translate3d(0, ${yPos}px, 0)`
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return <ScrollContext.Provider value={{ scrollY: scrollY.current }}>{children}</ScrollContext.Provider>
}
