"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <div className="relative w-14 h-14 mr-3" style={{ background: 'transparent' }}>
              <Image 
                src="/images/tooth-logo.png" 
                alt="Perfect Smile Logo" 
                fill 
                className="object-contain"
                style={{ backgroundColor: 'transparent' }}
              />
            </div>
            <div className="relative h-12 w-64" style={{ background: 'transparent' }}>
              <Image
                src="/images/perfect-smile-text.png"
                alt="Perfect Smile"
                fill
                className="object-contain object-left"
                style={{ backgroundColor: 'transparent' }}
              />
            </div>
          </Link>

    
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-purple-100 text-purple-800"
                    : isScrolled || pathname !== "/"
                      ? "text-black hover:bg-gray-100" 
                      : "text-black hover:bg-white/10" 
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

         
          <div className="flex items-center space-x-2">
            <Button asChild size="sm" className="hidden sm:flex premium-button text-black rounded-full">
              <Link href="/appointment">Book Appointment</Link>
            </Button>

            <Button asChild size="icon" variant="outline" className="hidden sm:flex">
              <Link href="tel:+12125551234">
                <Phone className="h-4 w-4" />
              </Link>
            </Button>

            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu
                    className={cn(
                      "h-6 w-6 transition-colors",
                      isScrolled || pathname !== "/" ? "text-gray-900" : "text-white",
                    )}
                  />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="p-0">
                <div className="flex flex-col h-full">
                  <div className="p-4 border-b">
                    <div className="flex items-center justify-between">
                      <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                        <div className="relative w-8 h-8 mr-2">
                          <Image
                            src="/images/tooth-logo.png"
                            alt="Perfect Smile Logo"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="relative h-6 w-32">
                          <Image
                            src="/images/perfect-smile-text.png"
                            alt="Perfect Smile"
                            fill
                            className="object-contain object-left"
                          />
                        </div>
                      </Link>
                      <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </div>
                  </div>

                  <nav className="flex-1 overflow-auto py-4">
                    <ul className="space-y-2 px-2">
                      {navLinks.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className={cn(
                              "flex items-center py-3 px-4 rounded-md text-base font-medium transition-colors",
                              pathname === link.href
                                ? "bg-purple-100 text-purple-800"
                                : "text-gray-700 hover:bg-gray-100",
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  <div className="p-4 border-t">
                    <Button asChild className="w-full mb-2 premium-button rounded-full">
                      <Link href="/appointment" onClick={() => setIsOpen(false)}>
                        Book Appointment
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="tel:+12125551234" onClick={() => setIsOpen(false)}>
                        <Phone className="h-4 w-4 mr-2" />
                        (212) 555-1234
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
