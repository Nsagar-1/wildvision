import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FilterBar from './components/FilterBar'
import ModelGrid from './components/ModelGrid'
import Footer from './components/Footer'
import { models } from './data/models'

export default function App() {
  const [category, setCategory] = useState('All')
  const [priceFilter, setPriceFilter] = useState('All')
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const filtered = models.filter(m => {
    const matchCat = category === 'All' || m.category === category
    const matchPrice =
      priceFilter === 'All' ? true :
      priceFilter === 'Free' ? m.price === 0 :
      m.price > 0
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.category.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchPrice && matchSearch
  })

  const addToCart = (model) => {
    setCart(c => c.find(i => i.id === model.id) ? c : [...c, model])
  }

  const cartTotal = cart.reduce((sum, m) => sum + m.price, 0)

  return (
    <>
      <Header cartCount={cart.length} onCartClick={() => setCartOpen(o => !o)} />

      {cartOpen && cart.length > 0 && (
        <div style={{
          position: 'fixed', top: 64, right: 24, zIndex: 200,
          background: '#14142a', border: '1px solid #1e1e3a',
          borderRadius: 14, padding: 20, width: 300,
          boxShadow: '0 16px 48px rgba(0,0,0,0.5)'
        }}>
          <h3 style={{ marginBottom: 14, fontSize: '0.95rem' }}>🛒 Cart ({cart.length})</h3>
          {cart.map(m => (
            <div key={m.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #1e1e3a', fontSize: '0.85rem' }}>
              <span>{m.name}</span>
              <strong style={{ color: '#f59e0b' }}>${m.price.toFixed(2)}</strong>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 14, fontWeight: 800 }}>
            <span>Total</span>
            <span style={{ color: '#7c3aed' }}>${cartTotal.toFixed(2)}</span>
          </div>
          <button style={{
            width: '100%', marginTop: 14, padding: '10px',
            background: '#7c3aed', color: '#fff', border: 'none',
            borderRadius: 8, fontWeight: 700, cursor: 'pointer'
          }}>Checkout →</button>
        </div>
      )}

      <Hero />

      <FilterBar
        category={category} setCategory={setCategory}
        priceFilter={priceFilter} setPriceFilter={setPriceFilter}
        search={search} setSearch={setSearch}
      />

      <ModelGrid models={filtered} onAddToCart={addToCart} />
      <Footer />
    </>
  )
}
