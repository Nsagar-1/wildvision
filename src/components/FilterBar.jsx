import { categories } from '../data/models'
import styles from './FilterBar.module.css'

export default function FilterBar({ category, setCategory, search, setSearch }) {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <input
          className={styles.search}
          placeholder="🔍  Search 3D models..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className={styles.pills}>
          {categories.map(c => (
            <button
              key={c}
              className={`${styles.pill} ${category === c ? styles.active : ''}`}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
