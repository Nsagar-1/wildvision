import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FilterBar from './components/FilterBar'
import ModelGrid from './components/ModelGrid'
import Footer from './components/Footer'
import { models } from './data/models'

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
      <Hero />
      <FilterBar
        category={category} setCategory={setCategory}
        search={search} setSearch={setSearch}
      />
      <ModelGrid models={filtered} />
      <Footer />
    </>
  )
}
