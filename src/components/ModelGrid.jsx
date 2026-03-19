import ModelCard from './ModelCard'
import styles from './ModelGrid.module.css'

export default function ModelGrid({ models }) {
  if (models.length === 0) {
    return (
      <div className={styles.empty}>
        <span>◈</span>
        <p>No models found. Try a different filter.</p>
      </div>
    )
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.count}>{models.length} model{models.length !== 1 ? 's' : ''}</span>
        <span className={styles.license}>✦ All CC0 — Free for personal & commercial use</span>
      </div>
      <div className={styles.grid}>
        {models.map(m => <ModelCard key={m.id} model={m} />)}
      </div>
    </div>
  )
}
