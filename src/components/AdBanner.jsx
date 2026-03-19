import styles from './AdBanner.module.css'

/**
 * AdBanner Component
 *
 * Replace the placeholder div inside each slot with your actual ad script.
 *
 * Supported sizes:
 *   - "leaderboard"  → 728x90  (top of page)
 *   - "rectangle"    → 300x250 (between content)
 *   - "wide"         → 970x90  (between video rows)
 */
export default function AdBanner({ size = 'leaderboard', label = 'Advertisement' }) {
  return (
    <div className={`${styles.adWrapper} ${styles[size]}`}>
      <span className={styles.label}>{label}</span>

      {/* ============================================
          PASTE YOUR AD CODE INSIDE THIS DIV
          PropellerAds / Adsterra / Google AdSense
          ============================================ */}
      <div className={styles.adSlot}>
        <span className={styles.placeholder}>
          📢 Ad Slot ({size}) — Paste your ad script here
        </span>

        {/* Example PropellerAds (replace with real script):
        <script async src="//...your propeller ads code..."></script>
        */}

        {/* Example Adsterra (replace with real script):
        <script async data-cfasync="false" src="//...your adsterra code..."></script>
        */}
      </div>
    </div>
  )
}
