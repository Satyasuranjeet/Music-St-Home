"use client"

import { motion } from "framer-motion"
import { Music, Lock, Users, Globe, Brain, Bot } from "lucide-react"

const features = [
  {
    icon: <Music className="h-8 w-8" />,
    title: "Music Search & Playback",
    description: "Instantly search and stream songs with a smooth, responsive player that offers high-quality audio.",
  },
  {
    icon: <Lock className="h-8 w-8" />,
    title: "OTP-Based Authentication",
    description: "Secure login using email-based OTP and JWT tokens to protect your account and privacy.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Live Music Rooms",
    description:
      "Create or join rooms to listen to music in sync. Only the room creator controls playback for a shared experience.",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Community Feature",
    description: "Listen to music globally and publicly with fellow music enthusiasts from around the world.",
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Mood Detection",
    description: "Advanced facial emotion recognition to recommend music that perfectly matches your current mood.",
  },
  {
    icon: <Bot className="h-8 w-8" />,
    title: "Intelligent Chatbot",
    description: "AI-powered chatbot that helps you discover new music and enhances your overall experience.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Amazing <span className="text-purple-500">Features</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
          >
            Discover the powerful capabilities that make JStream the ultimate music experience
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-colors"
            >
              <div className="h-12 w-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-500 mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
