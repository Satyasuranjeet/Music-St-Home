import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"
import { RepoCard } from "@/components/repo-card"
import { Header } from "@/components/header"
import { ArchitectureDiagram } from "@/components/architecture-diagram"

export default function Home() {
  const repos = [
    {
      name: "EmotionCNN-Satya",
      description: "ML model for emotion detection to recommend music based on mood",
      url: "https://github.com/Satyasuranjeet/EmotionCNN-Satya",
      stars: 24,
      forks: 8,
      language: "Python",
    },
    {
      name: "Music-App-2.0",
      description: "Home page, music player, playlist, search and user authentication",
      url: "https://github.com/Satyasuranjeet/Music-App-2.0",
      stars: 18,
      forks: 5,
      language: "JavaScript",
    },
    {
      name: "Mood-and-music-2.0",
      description: "Mood detection frontend and chat application",
      url: "https://github.com/Satyasuranjeet/Mood-and-music-2.0",
      stars: 15,
      forks: 3,
      language: "React",
    },
    {
      name: "Music-Community",
      description: "Music community sharing platform",
      url: "https://github.com/Satyasuranjeet/Music-Community",
      stars: 12,
      forks: 4,
      language: "TypeScript",
    },
    {
      name: "Broadcast-Music",
      description: "Music broadcasting service",
      url: "https://github.com/Satyasuranjeet/Broadcast-Music",
      stars: 10,
      forks: 2,
      language: "Node.js",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Header />
      <main>
        <HeroSection />

        <section id="repositories" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Our <span className="text-purple-500">Microservices</span>
            </h2>
            <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
              Explore the GitHub repositories powering JStream features and components
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo) => (
                <RepoCard key={repo.name} repo={repo} />
              ))}
            </div>
          </div>
        </section>

        <FeaturesSection />
        <ArchitectureDiagram />
        <TeamSection />
      </main>
      <Footer />
    </div>
  )
}
