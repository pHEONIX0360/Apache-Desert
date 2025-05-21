import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.landingContainer}>
        <video
          className={styles.backgroundVideo}
          src="/video/WhatsApp Video 2025-05-19 at 10.49.19_7458dc24.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className={styles.overlay}>
          <h1 className={styles.headline}>Your Silica Solutions Partner</h1>
          <p className={styles.subheadline}>Sourcing from China, delivering quality to the USA</p>
        </div>
      </div>
      {/* About Us Section */}
      <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutCard}>
          <div className={styles.aboutAccentIcon}>★</div>
          <h2 className={styles.aboutHeadline}>About Us</h2>
          <div className={styles.aboutRow}>
            <img
              src="https://cdn.pixabay.com/animation/2022/10/18/14/13/14-13-36-963_512.gif"
              alt="Animated Man 1"
              className={styles.aboutImage}
            />
            <div className={styles.aboutText}>
              <p>
                This company is a proud <b>veteran initiative</b>, dedicated to bridging the gap between top-quality silica manufacturers in China and customers in the USA. Our mission is to deliver excellence, reliability, and service with the integrity and commitment that defines our veteran roots.
              </p>
            </div>
            <img
              src="https://cdn.pixabay.com/animation/2022/10/18/14/13/14-13-36-963_512.gif"
              alt="Animated Man 2"
              className={styles.aboutImage}
            />
          </div>
        </div>
      </section>
    </>
  );
}
