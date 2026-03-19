import { useState } from 'react'
import Model3D from './Model3D'
import { getThumb, getDownloadUrl } from '../data/models'
import styles from './ModelCard.module.css'

function Stars({ n }) {
  const v = 4.5 + Math.random() * 0.5
  return (
    <span className={styles.stars}>
      {'★★★★★'.slice(0, Math.round(v))}{'☆☆☆☆☆'.slice(0, 5 - Math.round(v))}
      <span className={styles.ratingNum}>{v.toFixed(1)}</span>
    </span>
  )
}

export default function ModelCard({ model }) {
  const [hover3D, setHover3D] = useState(false)
  const [imgErr, setImgErr] = useState(false)
  const [showFormats, setShowFormats] = useState(false)

  const thumb = getThumb(model.slug)

  return (
    <div className={styles.card}>
      {/* Preview */}
      <div
        className={styles.preview}
        onMouseEnter={() => setHover3D(true)}
        onMouseLeave={() => setHover3D(false)}
      >
        {/* Real thumbnail */}
        {!imgErr && !hover3D && (
          <img
            src={thumb}
            alt={model.name}
            className={styles.thumb}
            onError={() => setImgErr(true)}
            loading="lazy"
          />
        )}
        {/* 3D preview on hover */}
        {(hover3D || imgErr) && (
          <div className={styles.canvasWrap}>
            <Model3D shape={model.shape} color={model.color} wire={model.wire} size={210} />
          </div>
        )}
        {/* CC0 badge */}
        <span className={styles.badge}>CC0 FREE</span>
        {/* Hover hint */}
        {!hover3D && !imgErr && (
          <span className={styles.hint}>◈ 3D Preview on Hover</span>
        )}
      </div>

      {/* Info */}
      <div className={styles.info}>
        <div className={styles.top}>
          <span className={styles.category}>{model.category}</span>
          <span className={styles.polys}>⬡ {model.polys}</span>
        </div>

        <h3 className={styles.name}>{model.name}</h3>
        <Stars n={model.id} />

        <div className={styles.meta}>
          <span>⬇ {model.downloads.toLocaleString()} downloads</span>
        </div>

        {/* Format pills */}
        <div className={styles.formats}>
          {model.formats.map(f => (
            <a
              key={f}
              href={getDownloadUrl(model.slug, f)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.fmtBtn}
            >
              ⬇ {f}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
