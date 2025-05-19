import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"
import ParticlesBackground from "@/components/particles-background"
import { ScrollProvider } from "@/components/scroll-provider"
import SectionObserver from '../components/section-observer';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Perfect Smile | Multi Speciality Dental Care",
  description: "Experience the future of dental care with our state-of-the-art technology and premium services.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans`}>
        <LoadingScreen />
        <Navbar />
        <ScrollProvider>
          <main className="page-transition-container">
            {children}
            <SectionObserver />
          </main>
        </ScrollProvider>
        <Footer />
        <ParticlesBackground />
      </body>
    </html>
  )
}
