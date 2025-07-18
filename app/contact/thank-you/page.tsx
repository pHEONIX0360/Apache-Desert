"use client";
import styles from "../../page.module.css";
import Link from "next/link";

export default function ThankYou() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactCard}>
        <div className={styles.contactIcon}>✅</div>
        <h1 className={styles.contactHeadline}>Thank You!</h1>
        <p className={styles.contactText}>
          Your message has been sent successfully. We&apos;ll get back to you soon!
        </p>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link href="/" className={styles.submitButton} style={{ display: 'inline-block', textDecoration: 'none' }}>
            Return to Home
          </Link>
        </div>
      </div>
    </section>
  );
} 