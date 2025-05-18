"use client"

import { motion } from "framer-motion"
import { Github, Star, GitFork, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface RepoProps {
  repo: {
    name: string
    description: string
    url: string
    stars: number
    forks: number
    language: string
  }
}

const languageColors: Record<string, string> = {
  JavaScript: "bg-yellow-300",
  TypeScript: "bg-blue-400",
  Python: "bg-green-400",
  React: "bg-cyan-400",
  "Node.js": "bg-green-500",
}

export function RepoCard({ repo }: RepoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <Github className="h-5 w-5 text-purple-500 mr-2" />
          <h3 className="text-lg font-semibold truncate">{repo.name}</h3>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center text-gray-400 text-sm">
            <Star className="h-4 w-4 mr-1 text-yellow-400" />
            <span>{repo.stars}</span>
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <GitFork className="h-4 w-4 mr-1" />
            <span>{repo.forks}</span>
          </div>
        </div>
      </div>

      <p className="text-gray-400 text-sm mb-4 line-clamp-2 h-10">{repo.description}</p>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <span className={`h-3 w-3 rounded-full ${languageColors[repo.language] || "bg-gray-400"} mr-2`}></span>
          <span className="text-sm text-gray-400">{repo.language}</span>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
          onClick={() => window.open(repo.url, "_blank")}
        >
          View Repo <ExternalLink className="ml-1 h-3 w-3" />
        </Button>
      </div>
    </motion.div>
  )
}
