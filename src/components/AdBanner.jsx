import { useEffect, useRef } from 'react'
import styles from './AdBanner.module.css'

/**
 * AdBanner Component
 *
 * Pass your PropellerAds / Adsterra banner script as the `code` prop:
 *
 *   <AdBanner size="leaderboard" code={`<script src="..."></script>`} />
 *
 * If no code is passed, the slot is hidden (no placeholder shown).
 *
 * Sizes:
 *   "leaderboard"  → 728x90
 *   "rectangle"    → 300x250
 *   "wide"         → 970x90
 */
export default function AdBanner({ size = 'leaderboard', label = 'Advertisement', code = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!code || !ref.current) return
    // Inject raw ad HTML/script into the slot
    ref.current.innerHTML = code
    // Re-execute any <script> tags inside
    ref.current.querySelectorAll('script').forEach((oldScript) => {
      const newScript = document.createElement('script')
      ;[...oldScript.attributes].forEach((attr) => newScript.setAttribute(attr.name, attr.value))
      newScript.textContent = oldScript.textContent
      oldScript.replaceWith(newScript)
    })
  }, [code])

  // Hide slot completely if no ad code provided
  if (!code) return null

  return (
    <div className={`${styles.adWrapper} ${styles[size]}`}>
      <span className={styles.label}>{label}</span>
      <div className={styles.adSlot} ref={ref} />
    </div>
  )
}
