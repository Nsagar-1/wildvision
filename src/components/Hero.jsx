import Model3D from './Model3D'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow1} />
      <div className={styles.glow2} />
      <div className={styles.inner}>
        <div className={styles.text}>
          <span className={styles.pill}>✦ 30+ Premium 3D Models</span>
          <h1 className={styles.title}>
            The Ultimate<br />
            <span className={styles.grad}>3D Model</span><br />
            Marketplace
          </h1>
          <p className={styles.sub}>
            Download ready-to-use 3D assets for games, film, AR/VR and design.
            Free and premium models in GLB, FBX, and OBJ formats.
          </p>
          <div className={styles.btns}>
            <button className={styles.btnPrimary}>Browse Free Models</button>
            <button className={styles.btnSec}>View All Assets</button>
          </div>
          <div className={styles.stats}>
            <div><strong>30+</strong><span>Models</span></div>
            <div><strong>10</strong><span>Free</span></div>
            <div><strong>4.8★</strong><span>Avg Rating</span></div>
          </div>
        </div>
        <div className={styles.canvas}>
          <Model3D shape="torusKnot" color="#7c3aed" wire="#22d3ee" size={360} />
          <div className={styles.canvasLabel}>
            <span>◈</span> Live 3D Preview — Warrior Knight
          </div>
        </div>
      </div>
    </section>
  )
}
