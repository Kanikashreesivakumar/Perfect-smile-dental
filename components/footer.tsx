"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-purple-100 to-purple-300 border-t border-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
          <div>
            <div className="flex items-center mb-6">
              <div className="relative w-14 h-14 mr-3">
                <Image 
                  src="/images/tooth-logo.png" 
                  alt="Perfect Smile Logo" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
              <div className="relative h-10 w-auto">
                <Image
                  src="/images/perfect-smile-text.png"
                  alt="Perfect Smile Text"
                  height={40}
                  width={180}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <p className="text-black mb-6">
              Providing exceptional dental care with a gentle touch. Your perfect smile is our priority.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-black hover:text-primary transition-colors w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-black hover:text-primary transition-colors w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-black hover:text-primary transition-colors w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-black hover:text-primary transition-colors w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6 text-gray-900">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-black hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-black hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-black hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-black hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="text-black hover:text-primary transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="#" className="text-black hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6 text-gray-900">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <span className="text-black">
                  123 Dental Avenue, Suite 200
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <span className="text-black">+91 </span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <span className="text-black">info@perfectsmile.com</span>
              </li>
              <li className="flex">
                <Clock className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <div className="text-black">
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>

         
          <div>
            <h3 className="font-semibold text-lg mb-6 text-black">Newsletter</h3>
            <p className="text-black mb-6">
              Subscribe to our newsletter for tips on dental health and special offers.
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white border-gray-200 focus:border-primary"
                required
              />
              <Button type="submit" className="w-full premium-button rounded-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Perfect Smile Dental Clinic. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/terms-of-service" className="text-gray-500 hover:text-primary transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="text-gray-500 hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
