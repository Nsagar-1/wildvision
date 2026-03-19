import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>Explore the <span className={styles.accent}>Animal Kingdom</span></h1>
        <p className={styles.subtitle}>
          Breathtaking wildlife videos from the world's most remote corners —
          brought to you in stunning detail.
        </p>
        <div className={styles.stats}>
          <div className={styles.stat}><strong>500+</strong> Videos</div>
          <div className={styles.statDivider} />
          <div className={styles.stat}><strong>50+</strong> Species</div>
          <div className={styles.statDivider} />
          <div className={styles.stat}><strong>Daily</strong> Updates</div>
        </div>
      </div>
    </section>
  )
}
