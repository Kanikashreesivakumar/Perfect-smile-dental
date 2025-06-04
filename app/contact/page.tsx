"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin, Phone, Mail, MessageSquare } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ContactPage() {
  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [infoRef, infoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
   
    alert("Your message has been sent. We'll get back to you soon!")
  }

  return (
    <div className="min-h-screen pt-20">
     
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary-light dark:from-primary-dark dark:to-primary">
        <div className="absolute inset-0 bg-[url('/images/contact/contact-bg.png')] opacity-20 mix-blend-overlay"></div>
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl mb-8"
            >
              We're here to answer your questions and help you schedule your appointment.
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-12 md:h-16"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-white dark:fill-gray-900"
            ></path>
          </svg>
        </div>
      </section>

  
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           
            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, x: -50 }}
              animate={infoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Get In Touch</h2>

              <div className="space-y-6">
                <Card className="border-none shadow-lg">
                  <CardContent className="flex items-start p-6">
                    <MapPin className="h-6 w-6 mr-4 text-primary dark:text-primary-light" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                   456 , mayura complex, Bhavani
                  <br />
                  Erode, Tamilnadu -638301
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="flex items-start p-6">
                    <Phone className="h-6 w-6 mr-4 text-primary dark:text-primary-light" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                       +91 8056781666
                        <br />
                        Emergency:8056781666
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="flex items-start p-6">
                    <Mail className="h-6 w-6 mr-4 text-primary dark:text-primary-light" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        perfectsmile@gmail.com
                        <br />
                        appointments@perfectsmile.com
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="flex items-start p-6">
                    <Clock className="h-6 w-6 mr-4 text-primary dark:text-primary-light" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Hours</h3>
                      <div className="text-gray-600 dark:text-gray-300 grid grid-cols-2 gap-x-4">
                        <span>Monday - Friday:</span>
                        <span>10:00 AM - 8:00 PM</span>
                        <span>Saturday:</span>
                        <span>10:00 AM - 4:00 PM</span>
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Connect With Us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="bg-primary/10 hover:bg-primary/20 dark:bg-primary-dark/10 dark:hover:bg-primary-dark/20 p-3 rounded-full transition-colors"
                  >
                    <svg
                      className="h-6 w-6 text-primary dark:text-primary-light"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="bg-primary/10 hover:bg-primary/20 dark:bg-primary-dark/10 dark:hover:bg-primary-dark/20 p-3 rounded-full transition-colors"
                  >
                    <svg
                      className="h-6 w-6 text-primary dark:text-primary-light"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="bg-primary/10 hover:bg-primary/20 dark:bg-primary-dark/10 dark:hover:bg-primary-dark/20 p-3 rounded-full transition-colors"
                  >
                    <svg
                      className="h-6 w-6 text-primary dark:text-primary-light"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="bg-primary/10 hover:bg-primary/20 dark:bg-primary-dark/10 dark:hover:bg-primary-dark/20 p-3 rounded-full transition-colors"
                  >
                    <MessageSquare className="h-6 w-6 text-primary dark:text-primary-light" />
                  </Link>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/contact/reception.png"
                    alt="Perfect Smile Reception"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative h-40 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/contact/consultation.png"
                      alt="Consultation Room"
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  
                  <div className="relative h-40 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/contact/treatment-room.png"
                      alt="Treatment Room"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: 50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-none shadow-xl">
                <CardHeader className="bg-primary/10 dark:bg-primary-dark/10">
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </label>
                        <Input id="name" placeholder="your name" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input id="email" type="email" placeholder="yourmail@gmail.com" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input id="phone" type="tel" placeholder="+91 1234567890" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input id="subject" placeholder="Appointment Request" required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Share your queries here..!!" rows={5} required />
                    </div>

                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            href="https://wa.me/8056781666"
            className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
