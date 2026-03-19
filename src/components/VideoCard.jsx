import { useState } from 'react'
import styles from './VideoCard.module.css'

export default function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false)
  const thumbnailUrl = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`

  return (
    <div className={styles.card}>
      <div className={styles.videoWrapper}>
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className={styles.thumbnail} onClick={() => setPlaying(true)}>
            <img src={thumbnailUrl} alt={video.title} loading="lazy" />
            <div className={styles.playBtn}>
              <svg viewBox="0 0 24 24" fill="white" width="48" height="48">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className={styles.duration}>{video.duration}</span>
          </div>
        )}
      </div>
      <div className={styles.info}>
        <span className={styles.category}>{video.category}</span>
        <h3 className={styles.title}>{video.title}</h3>
        <div className={styles.meta}>
          <span>{video.channel}</span>
          <span>·</span>
          <span>{video.views} views</span>
        </div>
      </div>
    </div>
  )
}
