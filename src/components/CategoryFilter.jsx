import { categories } from '../data/videos'
import styles from './CategoryFilter.module.css'

export default function CategoryFilter({ selected, onSelect }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.scroll}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.btn} ${selected === cat ? styles.active : ''}`}
            onClick={() => onSelect(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  )
}
