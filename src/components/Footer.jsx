import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span>🦁</span>
          <strong>WildVision</strong>
        </div>
        <div className={styles.links}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Contact</a>
          <a href="#">About</a>
        </div>
        <p className={styles.copy}>
          © {new Date().getFullYear()} WildVision. All video content belongs to respective owners.
        </p>
      </div>
    </footer>
  )
}
