import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>◈</span>
          <span>Shop<span className={styles.accent}>3D</span></span>
        </div>
        <nav className={styles.nav}>
          <a href="#">Browse</a>
          <a href="#">Free Models</a>
          <a href="#">Collections</a>
          <a href="#">Blog</a>
        </nav>
        <div className={styles.actions}>
          <span className={styles.cc0}>All models CC0 licensed</span>
          <button className={styles.signIn}>Sign In</button>
        </div>
      </div>
    </header>
  )
}
