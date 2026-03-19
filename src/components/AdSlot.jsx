import { useEffect, useRef } from 'react'
import styles from './AdSlot.module.css'

/**
 * AdSlot — PropellerAds / Adsterra banner placement
 *
 * To activate a slot, paste your PropellerAds banner zone script
 * as the `code` prop from App.jsx. Example:
 *
 *   <AdSlot size="leaderboard" code={`<script>...your zone code...</script>`} />
 *
 * Sizes:
 *   "leaderboard"  728×90   (top / bottom of page)
 *   "banner"       468×60   (mid-page)
 *   "rectangle"    300×250  (sidebar / inline)
 */
export default function AdSlot({ size = 'leaderboard', code = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!code || !ref.current) return
    ref.current.innerHTML = code
    ref.current.querySelectorAll('script').forEach(old => {
      const s = document.createElement('script')
      ;[...old.attributes].forEach(a => s.setAttribute(a.name, a.value))
      s.textContent = old.textContent
      old.replaceWith(s)
    })
  }, [code])

  return (
    <div className={`${styles.wrap} ${styles[size]}`}>
      <span className={styles.label}>Advertisement</span>
      <div className={styles.slot} ref={ref}>
        {/* PropellerAds / Adsterra script renders here */}
      </div>
    </div>
  )
}
