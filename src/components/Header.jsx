import { useState } from 'react'
import styles from './Header.module.css'

export default function Header({ cartCount, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>◈</span>
          <span>Shop<span className={styles.accent}>3D</span></span>
        </div>
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <a href="#">Browse</a>
          <a href="#">Free Models</a>
          <a href="#">Collections</a>
          <a href="#">Blog</a>
        </nav>
        <div className={styles.actions}>
          <button className={styles.cartBtn} onClick={onCartClick}>
            🛒 Cart {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
          </button>
          <button className={styles.signIn}>Sign In</button>
        </div>
        <button className={styles.hamburger} onClick={() => setMenuOpen(o => !o)}>☰</button>
      </div>
    </header>
  )
}
