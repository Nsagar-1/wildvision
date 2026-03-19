import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🦁</span>
          <span className={styles.logoText}>Wild<span className={styles.logoAccent}>Vision</span></span>
        </div>
        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#">Animals</a>
          <a href="#">Oceans</a>
          <a href="#">About</a>
        </nav>
      </div>
    </header>
  )
}
