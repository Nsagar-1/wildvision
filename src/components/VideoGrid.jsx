import VideoCard from './VideoCard'
import AdBanner from './AdBanner'
import styles from './VideoGrid.module.css'

export default function VideoGrid({ videos }) {
  if (videos.length === 0) {
    return (
      <div className={styles.empty}>
        <span>🦒</span>
        <p>No videos found in this category.</p>
      </div>
    )
  }

  // Inject an ad banner every 4 video cards
  const items = []
  videos.forEach((video, index) => {
    items.push(<VideoCard key={video.id} video={video} />)
    if ((index + 1) % 4 === 0 && index !== videos.length - 1) {
      items.push(<div key={`ad-${index}`} className={styles.adBreak}>
        <AdBanner size="wide" label="Sponsored" />
      </div>)
    }
  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>{items}</div>
    </div>
  )
}
