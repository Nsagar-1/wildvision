import { categories } from '../data/models'
import styles from './FilterBar.module.css'

export default function FilterBar({ category, setCategory, priceFilter, setPriceFilter, search, setSearch }) {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <input
          className={styles.search}
          placeholder="🔍  Search models..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className={styles.pills}>
          {['All', 'Free', 'Premium'].map(p => (
            <button
              key={p}
              className={`${styles.pill} ${priceFilter === p ? styles.active : ''}`}
              onClick={() => setPriceFilter(p)}
            >
              {p}
            </button>
          ))}
        </div>
        <select
          className={styles.select}
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
    </div>
  )
}
