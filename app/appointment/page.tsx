"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { CalendarIcon, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AppointmentPage() {
  const [date, setDate] = useState<Date>()
  const [formSubmitted, setFormSubmitted] = useState(false)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
  ]

  const services = [
    "General Check-up",
    "Teeth Cleaning",
    "Teeth Whitening",
    "Dental Implants",
    "Root Canal",
    "Orthodontics",
    "Cosmetic Dentistry",
    "Pediatric Dentistry",
    "Emergency Dental Care",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  
    setFormSubmitted(true)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen pt-20">
      {formSubmitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="container px-4 mx-auto py-20 flex flex-col items-center justify-center"
        >
          <div className="text-center max-w-md">
            <div className="mb-6 flex justify-center">
              <CheckCircle2 className="h-24 w-24 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Appointment Request Received!</h1>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
              Thank you for scheduling your appointment with Perfect Smile. We'll confirm your appointment shortly via
              email or phone.
            </p>
            <Button onClick={() => setFormSubmitted(false)}>Schedule Another Appointment</Button>
          </div>
        </motion.div>
      ) : (
        <>
      
          <section className="relative py-20 bg-gradient-to-r from-primary to-primary-light dark:from-primary-dark dark:to-primary">
            <div className="container px-4 mx-auto">
              <div className="max-w-3xl mx-auto text-center text-white">
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-6"
                >
                  Book Your Appointment
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg md:text-xl mb-8"
                >
                  Schedule your visit with our dental professionals and take the first step towards your perfect smile.
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

          <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
            <div className="container px-4 mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto"
              >
                <Card className="border-none shadow-xl">
                  <CardHeader className="bg-primary/10 dark:bg-primary-dark/10">
                    <CardTitle>Schedule Your Visit</CardTitle>
                    <CardDescription>
                      Fill out the form below to request an appointment. Our team will contact you to confirm.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="text-sm font-medium">
                            First Name
                          </label>
                          <Input id="firstName" placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="lastName" className="text-sm font-medium">
                            Last Name
                          </label>
                          <Input id="lastName" placeholder="Doe" required />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input id="email" type="email" placeholder="john@example.com" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Phone Number
                          </label>
                          <Input id="phone" type="tel" placeholder="(123) 456-7890" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium">
                          Service
                        </label>
                        <Select>
                          <SelectTrigger id="service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service, index) => (
                              <SelectItem key={index} value={service.toLowerCase().replace(/\s+/g, "-")}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Preferred Date</label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !date && "text-muted-foreground",
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : "Select a date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                                disabled={(date) => {
                                  const day = date.getDay()
                                  // Disable weekends (0 is Sunday, 6 is Saturday)
                                  return day === 0 || day === 6
                                }}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="time" className="text-sm font-medium">
                            Preferred Time
                          </label>
                          <Select>
                            <SelectTrigger id="time">
                              <SelectValue placeholder="Select a time" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((time, index) => (
                                <SelectItem key={index} value={time.toLowerCase().replace(/\s+/g, "-")}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="notes" className="text-sm font-medium">
                          Additional Notes
                        </label>
                        <Textarea
                          id="notes"
                          placeholder="Please share any specific concerns or questions you have."
                          rows={4}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Are you a new patient?</label>
                        <div className="flex space-x-4">
                          <label className="flex items-center space-x-2">
                            <input type="radio" name="newPatient" value="yes" className="h-4 w-4 text-primary" />
                            <span>Yes</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input type="radio" name="newPatient" value="no" className="h-4 w-4 text-primary" />
                            <span>No</span>
                          </label>
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button type="submit" className="w-full">
                          Request Appointment
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="bg-gray-50 dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-300">
                    <p>
                      By submitting this form, you agree to our privacy policy and consent to be contacted regarding
                      your appointment request.
                    </p>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </section>

         
          <section className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container px-4 mx-auto">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Insurance & Payment Options</h2>
                <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
                  We accept most major insurance plans and offer flexible payment options to make dental care accessible
                  for everyone.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                    <p className="font-medium">Delta Dental</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                    <p className="font-medium">Cigna</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                    <p className="font-medium">Aetna</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                    <p className="font-medium">MetLife</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                    <p className="font-medium">Guardian</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                    <p className="font-medium">United Healthcare</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                    <p className="font-medium">Humana</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                    <p className="font-medium">BlueCross</p>
                  </div>
                </div>
                <p className="mt-8 text-gray-600 dark:text-gray-300">
                  Don't see your insurance listed? Contact us to verify your coverage.
                </p>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
