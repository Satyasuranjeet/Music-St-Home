"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ZoomIn, Download } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ArchitectureDiagram() {
  const [isZoomed, setIsZoomed] = useState(false)

  return (
    <section id="architecture" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold"
          >
            System <span className="text-purple-500">Architecture</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
          >
            A comprehensive view of JStream microservices and how they interact
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-xl overflow-hidden border border-gray-800 shadow-2xl shadow-purple-900/20"
        >
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full">
            <Image
              src="https://i.ibb.co/G4gzXGrH/diagram-export-5-18-2025-5-25-10-PM.png"
              alt="JStream System Architecture Diagram"
              fill
              className="object-contain"
              quality={100}
            />
          </div>

          <div className="absolute bottom-4 right-4 flex space-x-2">
            <Button
              size="sm"
              variant="secondary"
              className="bg-black/70 hover:bg-black/90 backdrop-blur-sm text-amber-50"
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <ZoomIn className="h-4 w-4 mr-1" />
              {isZoomed ? "Exit Fullscreen" : "View Fullscreen"}
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="bg-black/70 hover:bg-black/90 backdrop-blur-sm text-amber-50"
              onClick={() =>
                window.open(
                  "https://i.ibb.co/G4gzXGrH/diagram-export-5-18-2025-5-25-10-PM.png",
                  "_blank",
                )
              }
            >
              <Download className="h-4 w-4 mr-1" />
              Download
            </Button>
          </div>
        </motion.div>

        {isZoomed && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setIsZoomed(false)}
          >
            <div className="relative w-full max-w-7xl h-full max-h-[80vh]">
              <Image
                src="https://i.ibb.co/G4gzXGrH/diagram-export-5-18-2025-5-25-10-PM.png"
                alt="JStream System Architecture Diagram"
                fill
                className="object-contain"
                quality={100}
              />
              <Button
                className="absolute top-2 right-2 bg-black/70 hover:bg-black/90"
                onClick={() => setIsZoomed(false)}
              >
                Close
              </Button>
            </div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-gray-800/30 backdrop-blur-sm p-5 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-medium mb-2 text-purple-400">User Authentication</h3>
            <p className="text-gray-400 text-sm">
              Secure JWT + OTP authentication system with MongoDB user data storage for reliable access control.
            </p>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm p-5 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-medium mb-2 text-purple-400">Mood Detection</h3>
            <p className="text-gray-400 text-sm">
              AI-powered emotion recognition using CNN and OpenCV to analyze facial expressions and recommend music.
            </p>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm p-5 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-medium mb-2 text-purple-400">Real-time Sync</h3>
            <p className="text-gray-400 text-sm">
              WebSocket connections enable synchronized music playback in shared rooms for collaborative listening.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
