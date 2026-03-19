import { useState } from 'react'
import Model3D from './Model3D'
import styles from './ModelCard.module.css'

function Stars({ rating }) {
  return (
    <span className={styles.stars}>
      {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
      <span className={styles.ratingNum}>{rating}</span>
    </span>
  )
}

export default function ModelCard({ model, onAddToCart }) {
  const [added, setAdded] = useState(false)
  const isFree = model.price === 0

  const handleAction = () => {
    if (isFree) return
    setAdded(true)
    onAddToCart(model)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div className={styles.card}>
      <div className={styles.preview}>
        <Model3D shape={model.shape} color={model.color} wire={model.wire} size={200} />
        <span className={isFree ? styles.badgeFree : styles.badgePremium}>
          {isFree ? '✦ FREE' : `$${model.price.toFixed(2)}`}
        </span>
      </div>
      <div className={styles.info}>
        <div className={styles.top}>
          <span className={styles.category}>{model.category}</span>
          <span className={styles.format}>{model.format}</span>
        </div>
        <h3 className={styles.name}>{model.name}</h3>
        <Stars rating={model.rating} />
        <div className={styles.meta}>
          <span>⬡ {model.polys} polys</span>
          <span>⬇ {model.downloads.toLocaleString()}</span>
        </div>
        <button
          className={isFree ? styles.btnFree : added ? styles.btnAdded : styles.btnBuy}
          onClick={handleAction}
        >
          {isFree ? '⬇ Download Free' : added ? '✓ Added to Cart' : '🛒 Add to Cart'}
        </button>
      </div>
    </div>
  )
}
