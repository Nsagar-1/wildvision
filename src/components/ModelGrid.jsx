import ModelCard from './ModelCard'
import AdSlot from './AdSlot'
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

  // Inject a leaderboard ad every 8 cards
  const rows = []
  let chunk = []
  models.forEach((m, i) => {
    chunk.push(<ModelCard key={m.id} model={m} />)
    if ((i + 1) % 8 === 0 && i !== models.length - 1) {
      rows.push(
        <div key={`grid-${i}`} className={styles.grid}>{chunk}</div>,
        <AdSlot key={`ad-${i}`} size="leaderboard" />
      )
      chunk = []
    }
  })
  if (chunk.length) rows.push(<div key="grid-last" className={styles.grid}>{chunk}</div>)

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.count}>{models.length} model{models.length !== 1 ? 's' : ''}</span>
        <span className={styles.license}>✦ All CC0 — Free for personal & commercial use</span>
      </div>
      {rows}
    </div>
  )
}
