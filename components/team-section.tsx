"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"

// Team array with team member information
const team = [
  {
    name: "Satya Suranjeet Jena",
    role: "Full-Stack Developer",
    id: "2141010033",
    bio: "Passionate developer with experience in React, Tailwind CSS, Spring, and AI/ML solutions.",
    imageUrl: "https://i.ibb.co/DHztB2jh/IMG-20241223-143810259-HDR-1-2.jpg",
    social: {
      github: "https://github.com/Satyasuranjeet",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Kanha Jena",
    role: "Repo Manager",
    id: "2141010034",
    bio: "Experienced in managing large codebases and ensuring smooth collaboration on GitHub.",
    imageUrl: "https://i.ibb.co/4gnwhhgR/20240831-205332-903.jpg",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Prashant Kumar Sah",
    role: "Database Expert",
    id: "2141019505",
    bio: "Specializes in Frontend design, optimization, and management for scalable applications.",
    imageUrl: "https://i.ibb.co/HtJKxnT/IMG-6598.png",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Aditya Thakur",
    role: "Backend Developer",
    id: "2141020016",
    bio: "Backend developer with expertise in Spring Boot, building efficient and robust APIs.",
    imageUrl: "https://i.ibb.co/ZKd8YxW/1000041075.jpg",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
]

// Enhanced TeamSection component with animations
export function TeamSection() {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Meet Our <span className="text-purple-500">Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
          >
            The talented developers behind JStream innovative features
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden group shadow-lg shadow-purple-900/10 border border-gray-700/50"
            >
              <div className="aspect-square relative overflow-hidden">
                <motion.div
                  initial={{ scale: 1.2, rotate: -5 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.15 + 0.3 }}
                  className="w-full h-full"
                >
                  <Image
                    src={member.imageUrl || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end justify-center p-4"
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex space-x-4"
                  >
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-400 transition-colors duration-300"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Github className="h-5 w-5" />
                      </motion.div>
                    </a>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-400 transition-colors duration-300"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Linkedin className="h-5 w-5" />
                      </motion.div>
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-400 transition-colors duration-300"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Twitter className="h-5 w-5" />
                      </motion.div>
                    </a>
                  </motion.div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                className="p-5"
              >
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-purple-400 text-sm">{member.role}</p>
                <p className="text-gray-500 text-xs mt-1">ID: {member.id}</p>
                <p className="text-gray-400 text-sm mt-3 line-clamp-3">{member.bio}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}