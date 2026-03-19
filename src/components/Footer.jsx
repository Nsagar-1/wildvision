import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.icon}>◈</span>
          <strong>Shop<span className={styles.acc}>3D</span></strong>
          <p>Premium 3D assets for every creator.</p>
        </div>
        <div className={styles.cols}>
          <div>
            <h4>Products</h4>
            <a href="#">Free Models</a>
            <a href="#">Premium Models</a>
            <a href="#">Collections</a>
            <a href="#">New Arrivals</a>
          </div>
          <div>
            <h4>Support</h4>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
            <a href="#">Licensing</a>
            <a href="#">File Formats</a>
          </div>
          <div>
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Refund Policy</a>
            <a href="#">About</a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Shop3D · shop3d.shop</span>
        <span>All 3D models are for personal and commercial use.</span>
      </div>
    </footer>
  )
}
