"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight } from "lucide-react"

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [timelineRef, timelineInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Lead Dentist & Founder",
      image: "/images/dentist-1.jpg",
      bio: "Dr. Johnson has over 15 years of experience in cosmetic and restorative dentistry. She graduated from Harvard Dental School and is committed to providing the highest quality care.",
      credentials: ["DDS, Harvard University", "American Dental Association", "Academy of Cosmetic Dentistry"],
    },
    {
      name: "Dr. Michael Chen",
      role: "Orthodontist",
      image: "/images/dentist-2.jpg",
      bio: "Dr. Chen specializes in orthodontics and is an expert in modern braces and clear aligner treatments. He is dedicated to creating beautiful, straight smiles for patients of all ages.",
      credentials: [
        "DMD, University of Pennsylvania",
        "American Association of Orthodontists",
        "Board Certified Orthodontist",
      ],
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Pediatric Dentist",
      image: "/images/dentist-3.jpg",
      bio: "Dr. Rodriguez loves working with children and making dental visits fun and stress-free. She has a special way with young patients that puts them at ease.",
      credentials: ["DDS, UCLA", "American Academy of Pediatric Dentistry", "Board Certified Pediatric Dentist"],
    },
    {
      name: "Dr. James Wilson",
      role: "Periodontist",
      image: "/images/dentist-4.jpg",
      bio: "Dr. Wilson is our gum health specialist with expertise in treating periodontal disease and performing gum surgeries with minimal discomfort.",
      credentials: [
        "DMD, Boston University",
        "American Academy of Periodontology",
        "Diplomate, American Board of Periodontology",
      ],
    },
  ]

  const timelineEvents = [
    {
      year: "2005",
      title: "Perfect Smile Founded",
      description:
        "Dr. Sarah Johnson established Perfect Smile with a vision to provide exceptional dental care in a comfortable environment.",
    },
    {
      year: "2010",
      title: "Expansion of Services",
      description: "Added specialized orthodontic and pediatric dental services to meet growing community needs.",
    },
    {
      year: "2015",
      title: "Technology Upgrade",
      description: "Invested in state-of-the-art digital imaging and CAD/CAM technology for same-day restorations.",
    },
    {
      year: "2018",
      title: "New Facility",
      description: "Moved to our current spacious location with modern amenities and expanded treatment rooms.",
    },
    {
      year: "2020",
      title: "Advanced 3D Imaging",
      description: "Introduced cone beam CT scanning for precise implant planning and complex treatments.",
    },
    {
      year: "2023",
      title: "Community Recognition",
      description: "Voted 'Best Dental Practice' in the city for the third consecutive year.",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      
      <section
        ref={heroRef}
        className="relative py-20 bg-gradient-to-r from-primary to-primary-light dark:from-primary-dark dark:to-primary"
      >
        <div className="absolute inset-0 bg-[url('/images/about/pattern-bg.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About our perfect smile</h1>
              <p className="text-lg mb-6">
                Your Smile, Perfected with Care.
              </p>
              <p className="text-lg mb-8">
              From routine checkups to complete smile makeovers — we make dental visits feel less like appointments and more like self-care. At Perfect Smile, you're not just a patient — you're family.
              </p>
              <div className="flex flex-row items-center space-x-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/80 hover:text-primary/80 transition-colors duration-200 shadow-md whitespace-nowrap"
                >
                  <Link 
                   href="/appointment" 
                   className="text-black hover:text-primary font-semibold transition-colors"
                  >
                  Ready to smile?
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  className="bg-white text-primary hover:bg-primary hover:text-purple-500 transition-colors duration-200 border-2 border-primary shadow-md whitespace-nowrap"
                >
                  <Link 
                    href="/about/ex" 
                    className="flex items-center w-full h-full px-6 py-3 "
                  >
                    More than just Dentist<ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/service.jpg"
                  alt="Perfect Smile Dental Clinic"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
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

     
      <section ref={teamRef} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">OUR DENTAL FAMILY</h2>
            <p className="text-lg text-gray-600 font-semibold dark:text-gray-300 max-w-2xl mx-auto">
              Where every smile is treated like family </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="bio">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="bio">DR</TabsTrigger>
                        <TabsTrigger value="credentials">Trusted Care</TabsTrigger>
                      </TabsList>
                      <TabsContent value="bio" className="mt-4">
                        <p className="text-sm text-gray-600 dark:text-gray-300">{member.bio}</p>
                      </TabsContent>
                      <TabsContent value="credentials" className="mt-4">
                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                          {member.credentials.map((credential, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{credential}</span>
                            </li>
                          ))}
                        </ul>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={timelineRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Milestones in Care</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Each milestone marked not by years, but by the smiles we’ve earned
            </p>
          </div>

          <div className="relative">
            
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30 dark:bg-primary-dark/30"></div>

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className="flex-1"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary dark:bg-primary-dark flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-white"></div>
                  </div>
                  <div className="flex-1">
                    <Card className={`border-none shadow-lg ${index % 2 === 0 ? "ml-8" : "mr-8"}`}>
                      <CardHeader className="bg-primary/10 dark:bg-primary-dark/10">
                        <CardTitle className="flex items-center">
                          <span className="text-primary dark:text-primary-dark font-bold mr-2">{event.year}</span>
                          <span className="text-lg">{event.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

   
    </div>
  )
}
