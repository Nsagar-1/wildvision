import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AdBanner from './components/AdBanner'
import CategoryFilter from './components/CategoryFilter'
import VideoGrid from './components/VideoGrid'
import Footer from './components/Footer'
import { videos } from './data/videos'

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filtered = selectedCategory === 'All'
    ? videos
    : videos.filter((v) => v.category === selectedCategory)

  return (
    <>
      <Header />
      <main>
        {/* Top leaderboard ad — highest visibility */}
        <AdBanner size="leaderboard" label="Advertisement" />

        <Hero />

        {/* Mid-page ad after hero */}
        <AdBanner size="leaderboard" label="Sponsored" />

        <CategoryFilter
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {/* Video grid (ads injected every 4 videos inside this component) */}
        <VideoGrid videos={filtered} />

        {/* Bottom ad before footer */}
        <AdBanner size="leaderboard" label="Advertisement" />
      </main>
      <Footer />
    </>
  )
}
