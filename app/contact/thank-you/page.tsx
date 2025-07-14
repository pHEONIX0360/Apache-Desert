import styles from "../../page.module.css";
import Link from "next/link";

export default function ThankYou() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactCard}>
        <div className={styles.contactIcon}>✅</div>
        <h1 className={styles.contactHeadline}>Thank You!</h1>
        <p className={styles.successMessage}>
          Thank you for contacting us. We have received your message and will check back with you soon.<br />
          <span>We appreciate your interest!</span>
        </p>
        <Link href="/" className={styles.submitButton} style={{ display: 'inline-block', marginTop: 24 }}>
          Go to Home Page
        </Link>
      </div>
    </section>
  );
} 