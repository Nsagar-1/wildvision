import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FilterBar from './components/FilterBar'
import ModelGrid from './components/ModelGrid'
import AdSlot from './components/AdSlot'
import Footer from './components/Footer'
import { models } from './data/models'

// ─────────────────────────────────────────────────────────────────
// PASTE YOUR PROPELLERADS / ADSTERRA BANNER ZONE CODES BELOW
// Get zone codes from your PropellerAds dashboard → Sites → Zones
// ─────────────────────────────────────────────────────────────────

const AD_TOP    = ``  // 728×90  leaderboard — top of page
const AD_MID    = ``  // 728×90  leaderboard — between hero and models
const AD_BOTTOM = ``  // 728×90  leaderboard — above footer

export default function App() {
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = models.filter(m => {
    const matchCat = category === 'All' || m.category === category
    const matchSearch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.category.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <>
      <Header />

      {/* Top leaderboard ad */}
      <AdSlot size="leaderboard" code={AD_TOP} />

      <Hero />

      {/* Mid-page ad between hero and model grid */}
      <AdSlot size="leaderboard" code={AD_MID} />

      <FilterBar
        category={category} setCategory={setCategory}
        search={search} setSearch={setSearch}
      />

      {/* Model grid — ads injected every 8 cards automatically */}
      <ModelGrid models={filtered} />

      {/* Bottom ad before footer */}
      <AdSlot size="leaderboard" code={AD_BOTTOM} />

      <Footer />
    </>
  )
}
