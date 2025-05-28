import styles from "./page.module.css";

export default function Contact() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactCard}>
        <div className={styles.contactIcon}>✉️</div>
        <h1 className={styles.contactHeadline}>Contact Us</h1>
        <p className={styles.contactText}>
          For any questions, business inquiries, or support, please email us at:
        </p>
        <a href="mailto:sales@apachedesert.com" className={styles.contactEmail}>
          sales@apachedesert.com
        </a>
        <p className={styles.contactNote}>
          We typically respond within 24 hours. Thank you for reaching out!
        </p>
      </div>
    </section>
  );
} 