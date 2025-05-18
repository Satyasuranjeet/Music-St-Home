"use client"

import { useState } from "react"
import { Menu, X, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const handleGetStartedClick = () => {
    window.location.href = "https://music-app-2-0-1167.vercel.app/"
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Music className="h-8 w-8 text-purple-500" />
              <span className="ml-2 text-xl font-bold">JStream</span>
            </Link>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#repositories" className="text-gray-300 hover:text-white transition-colors">
                  Repositories
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-gray-300 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
            </ul>
          </nav>

          <Button 
            variant="default" 
            className="hidden md:block bg-purple-600 hover:bg-purple-700"
            onClick={handleGetStartedClick}
          >
            Get Started
          </Button>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-400 hover:text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#"
              className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#features"
              className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#repositories"
              className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Repositories
            </Link>
            <Link
              href="#team"
              className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <div className="pt-2">
              <Button 
                className="w-full bg-purple-600 hover:bg-purple-700"
                onClick={handleGetStartedClick}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}