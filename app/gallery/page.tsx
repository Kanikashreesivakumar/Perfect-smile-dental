"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Calendar, ArrowRight } from "lucide-react"
import BeforeAfterSlider from "@/components/before-after-slider"

export default function GalleryPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [galleryRef, galleryInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const dentalImplantCases = [
    {
      id: 1,
      beforeImage: "/placeholder.svg?height=400&width=600",
      afterImage: "/placeholder.svg?height=400&width=600",
      title: "Single Tooth Replacement",
      description: " results.",
      duration: "3 months",
      procedure: "Single Dental Implant",
    },
    {
      id: 2,
      beforeImage: "/placeholder.svg?height=400&width=600",
      afterImage: "/placeholder.svg?height=400&width=600",
      title: "Multiple Tooth Restoration",
      description: "Full s for a confident new look.",
      duration: "6 months",
      procedure: "Multiple Dental Implants",
    },
    {
      id: 3,
      beforeImage: "/placeholder.svg?height=400&width=600",
      afterImage: "/placeholder.svg?height=400&width=600",
      title: "Full Arch Replacement",
      description: "Complete upper arch restoration with implant-supported dentures.",
      duration: "8 months",
      procedure: "All-on-4 Implants",
    },
  ]

  const orthodonticsCases = [
    {
      id: 1,
      beforeImage: "/placeholder.svg?height=400&width=600",
      afterImage: "/placeholder.svg?height=400&width=600",
      title: "Crowded Teeth Correction",
      description: "Straightened severely crowded teeth using clear aligners.",
      duration: "18 months",
      procedure: "Invisalign Treatment",
    },
    {
      id: 2,
      beforeImage: "/placeholder.svg?height=400&width=600",
      afterImage: "/placeholder.svg?height=400&width=600",
      title: "Overbite Correction",
      description: "Corrected significant overbite for improved function and aesthetics.",
      duration: "24 months",
      procedure: "Traditional Braces",
    },
    {
      id: 3,
      beforeImage: "/placeholder.svg?height=400&width=600",
      afterImage: "/placeholder.svg?height=400&width=600",
      title: "Gap Closure",
      description: "Closed large gaps between teeth for a more uniform smile.",
      duration: "12 months",
      procedure: "Clear Aligners",
    },
  ]

  const whiteningCases = [
    {
      id: 1,
      beforeImage: "/placeholder.svg?height=400&width=600",
      afterImage: "/placeholder.svg?height=400&width=600",
      title: "Coffee Stain Removal",
      description: "Dramatic whitening results removing years of coffee staining.",
      duration: "1 session",
      procedure: "Professional Whitening",
    },
    {
      id: 2,
      beforeImage: "/placeholder.svg?height=400&width=600",
      afterImage: "/placeholder.svg?height=400&width=600",
      title: "Tobacco Stain Treatment",
      description: "Complete removal of tobacco stains with our advanced whitening system.",
      duration: "2 sessions",
      procedure: "Deep Whitening Treatment",
    },
    {
      id: 3,
      beforeImage: "/placeholder.svg?height=400&width=600",
      afterImage: "/placeholder.svg?height=400&width=600",
      title: "Age-Related Discoloration",
      description: "Restored youthful brightness to naturally yellowed teeth.",
      duration: "1 session",
      procedure: "LED Whitening",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
    
      <section ref={heroRef} className="relative py-20 bg-gradient-to-r from-purple-800 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Before & After Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl mb-8"
            >
              Witness the transformative power of our dental treatments. See real results from our patients who have
              achieved their perfect smiles.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>500+ Successful Cases</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 flex items-center">
                <Calendar className="h-5 w-5 text-purple-300 mr-2" />
                <span>15+ Years Experience</span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-12 md:h-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </section>

     
      <section ref={galleryRef} className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Real Patient Transformations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our collection of before and after photos showcasing the life-changing results we achieve for our
              patients.
            </p>
          </motion.div>

          <Tabs defaultValue="dental-implants" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-gray-100 p-1 rounded-xl">
              <TabsTrigger
                value="dental-implants"
                className="rounded-lg data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                Dental Implants
              </TabsTrigger>
              <TabsTrigger
                value="orthodontics"
                className="rounded-lg data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                Orthodontics
              </TabsTrigger>
              <TabsTrigger
                value="teeth-whitening"
                className="rounded-lg data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                Teeth Whitening
              </TabsTrigger>
            </TabsList>

           
            <TabsContent value="dental-implants" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 text-purple-800">Dental Implant Transformations</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  See how our precision dental implants restore both function and aesthetics, giving patients their
                  confidence back.
                </p>
                <Button asChild className="mt-4 premium-button rounded-full">
                  <Link href="/services/dental-implants">
                    Learn About Dental Implants <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {dentalImplantCases.map((case_, index) => (
                  <motion.div
                    key={case_.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={galleryInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                      <div className="relative">
                        <BeforeAfterSlider
                          beforeImage={case_.beforeImage}
                          afterImage={case_.afterImage}
                          beforeLabel="Before"
                          afterLabel="After"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg font-bold text-purple-800">{case_.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{case_.description}</p>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>
                            <strong>Procedure:</strong> {case_.procedure}
                          </span>
                          <span>
                            <strong>Duration:</strong> {case_.duration}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

         
            <TabsContent value="orthodontics" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 text-purple-800">Orthodontic Transformations</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Discover how our modern orthodontic treatments create perfectly aligned smiles using the latest
                  technology.
                </p>
                <Button asChild className="mt-4 premium-button rounded-full">
                  <Link href="/services/orthodontics">
                    Learn About Orthodontics <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {orthodonticsCases.map((case_, index) => (
                  <motion.div
                    key={case_.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={galleryInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                      <div className="relative">
                        <BeforeAfterSlider
                          beforeImage={case_.beforeImage}
                          afterImage={case_.afterImage}
                          beforeLabel="Before"
                          afterLabel="After"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg font-bold text-purple-800">{case_.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{case_.description}</p>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>
                            <strong>Procedure:</strong> {case_.procedure}
                          </span>
                          <span>
                            <strong>Duration:</strong> {case_.duration}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

        
            <TabsContent value="teeth-whitening" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 text-purple-800">Teeth Whitening Results</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  See the dramatic results of our advanced teeth whitening treatments that restore natural brightness
                  and confidence.
                </p>
                <Button asChild className="mt-4 premium-button rounded-full">
                  <Link href="/services/teeth-whitening">
                    Learn About Teeth Whitening <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {whiteningCases.map((case_, index) => (
                  <motion.div
                    key={case_.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={galleryInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                      <div className="relative">
                        <BeforeAfterSlider
                          beforeImage={case_.beforeImage}
                          afterImage={case_.afterImage}
                          beforeLabel="Before"
                          afterLabel="After"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg font-bold text-purple-800">{case_.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{case_.description}</p>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>
                            <strong>Procedure:</strong> {case_.procedure}
                          </span>
                          <span>
                            <strong>Duration:</strong> {case_.duration}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

   
      <section ref={ctaRef} className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Ready for Your Transformation?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied patients who have achieved their perfect smile with Perfect Smile Dental.
              Schedule your consultation today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="premium-button rounded-full">
                <Link href="/appointment">
                  Book Your Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
