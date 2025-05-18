"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Music2 } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-transparent opacity-60"></div>
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-black to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Experience <span className="text-purple-500">Music</span> Together in Real-Time
            </h1>
            <p className="mt-6 text-xl text-gray-400 max-w-lg">
              JStream is a sleek, real-time music streaming web app that lets users discover, play, and enjoy music
              together with mood detection and community features.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700"
                onClick={() => window.location.href = "https://music-app-2-0-1167.vercel.app/"}
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500/10">
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center animate-pulse">
                  <Music2 className="h-24 w-24 text-white" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 border-2 border-purple-500/30 rounded-full animate-ping-slow"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-96 h-96 border border-purple-500/20 rounded-full animate-ping-slower"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}