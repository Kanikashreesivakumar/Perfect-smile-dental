"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Smile, Sparkles, SmileIcon as Tooth, Activity, Heart, Shield, Baby, Droplets, Crown } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  price?: string
  detailed?: boolean
}

export default function ServiceCard({ title, description, icon, price, detailed = false }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "tooth-brush":
        return <Sparkles className="h-12 w-12 text-primary" />
      case "tooth-implant":
        return <Tooth className="h-12 w-12 text-primary" />
      case "braces":
        return <Activity className="h-12 w-12 text-primary" />
      case "root-canal":
        return <Droplets className="h-12 w-12 text-primary" />
      case "cosmetic":
        return <Smile className="h-12 w-12 text-primary" />
      case "prevention":
        return <Shield className="h-12 w-12 text-primary" />
      case "pediatric":
        return <Baby className="h-12 w-12 text-primary" />
      case "periodontal":
        return <Heart className="h-12 w-12 text-primary" />
      case "crown":
        return <Crown className="h-12 w-12 text-primary" />
      default:
        return <Tooth className="h-12 w-12 text-primary" />
    }
  }

  const getServiceImage = () => {
    switch (icon) {
      case "tooth-brush":
        return "/images/services/teeth-whitening.png"
      case "tooth-implant":
        return "/images/services/dental-implant.png"
      case "braces":
        return "/images/services/orthodontics.png"
      case "root-canal":
        return "/images/services/root-canal.png"
      case "cosmetic":
        return "/images/services/cosmetic-dentistry.png"
      case "prevention":
        return "/images/services/preventive-care.png"
      case "pediatric":
        return "/images/services/pediatric-dentistry.png"
      case "periodontal":
        return "/images/services/periodontal.png"
      case "crown":
        return "/images/services/crown-bridge.png"
      default:
        return "/images/services/general-dentistry.png"
    }
  }

  return (
    <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-all overflow-hidden bg-white group">
      {detailed && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={getServiceImage() || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          {price && (
            <div className="absolute bottom-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
              {price}
            </div>
          )}
        </div>
      )}
      <CardHeader className="pb-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
          <div className="mb-4 relative">
            {getIcon()}
            <motion.div
              className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-500"
              animate={{
                boxShadow: [
                  "0 0 0px rgba(0, 174, 239, 0)",
                  "0 0 20px rgba(0, 174, 239, 0.5)",
                  "0 0 0px rgba(0, 174, 239, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
          <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary group-hover:from-primary group-hover:to-primary-light transition-all duration-300">
            {title}
          </CardTitle>
          {price && !detailed && <CardDescription className="text-primary font-medium">{price}</CardDescription>}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      {detailed && (
        <CardFooter>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="w-full rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300"
          >
            <Link href="/appointment">Book Service</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
