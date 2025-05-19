"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const clinicImages = [
	{
		src: "/placeholder.svg?height=500&width=800",
		alt: "Modern Reception Area",
		title: "Reception Area",
		description: "Our welcoming reception area designed for your comfort",
	},
	{
		src: "/placeholder.svg?height=500&width=800",
		alt: "Advanced Treatment Room",
		title: "Treatment Room",
		description: "State-of-the-art treatment rooms with the latest technology",
	},
	{
		src: "/placeholder.svg?height=500&width=800",
		alt: "Dental Equipment",
		title: "Advanced Equipment",
		description: "Cutting-edge dental equipment for precise diagnostics and treatment",
	},
	{
		src: "/placeholder.svg?height=500&width=800",
		alt: "Comfortable Waiting Area",
		title: "Waiting Area",
		description: "Relax in our comfortable waiting area before your appointment",
	},
	{
		src: "/placeholder.svg?height=500&width=800",
		alt: "Panoramic X-Ray Machine",
		title: "Imaging Technology",
		description: "Advanced imaging technology for accurate diagnostics",
	},
	{
		src: "/placeholder.svg?height=500&width=800",
		alt: "Consultation Room",
		title: "Consultation Room",
		description: "Private consultation rooms for discussing your treatment options",
	},
]

export default function ClinicShowcase() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [view, setView] = useState<"carousel" | "grid">("carousel")
	const [isPaused, setIsPaused] = useState(false)

	useEffect(() => {
		if (view === "carousel" && !isPaused) {
			const timer = setInterval(() => {
				setCurrentIndex((prevIndex) =>
					prevIndex === clinicImages.length - 1 ? 0 : prevIndex + 1
				)
			}, 2000) 

			return () => clearInterval(timer)
		}
	}, [view, isPaused])

	
	const handleMouseEnter = () => setIsPaused(true)
	const handleMouseLeave = () => setIsPaused(false)

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === clinicImages.length - 1 ? 0 : prevIndex + 1
		)
	}

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? clinicImages.length - 1 : prevIndex - 1
		)
	}

	return (
		<div className="clinic-showcase">
			<div className="flex justify-end mb-6 space-x-2"></div>

			{view === "carousel" ? (
				<div
					className="relative"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<div className="overflow-hidden rounded-2xl">
						<motion.div
							key={currentIndex}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.5 }}
							className="relative h-[500px] w-full"
						>
							<Image
								src={clinicImages[currentIndex].src || "/placeholder.svg"}
								alt={clinicImages[currentIndex].alt}
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
							<div className="absolute bottom-0 left-0 right-0 p-8 text-white">
								<h3 className="text-2xl font-bold mb-2">
									{clinicImages[currentIndex].title}
								</h3>
								<p className="text-lg">
									{clinicImages[currentIndex].description}
								</p>
							</div>
						</motion.div>
					</div>

					<Button
						variant="outline"
						size="icon"
						className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg z-10 hover:bg-white"
						onClick={prevSlide}
					>
						<ChevronLeft className="h-6 w-6" />
					</Button>

					<Button
						variant="outline"
						size="icon"
						className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg z-10 hover:bg-white"
						onClick={nextSlide}
					>
						<ChevronRight className="h-6 w-6" />
					</Button>

					<div className="flex justify-center mt-4 space-x-2">
						{clinicImages.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentIndex(index)}
								className={`w-3 h-3 rounded-full transition-all ${
									currentIndex === index
										? "bg-purple-800 w-6"
										: "bg-gray-300"
								}`}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
				</div>
			) : (
				<div className="clinic-showcase-grid">
					{clinicImages.map((image, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="clinic-image h-[250px]"
						>
							<Image
								src={image.src || "/placeholder.svg"}
								alt={image.alt}
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
								<div className="text-white">
									<h3 className="font-bold">{image.title}</h3>
									<p className="text-sm">{image.description}</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			)}
		</div>
	)
}
