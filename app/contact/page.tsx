"use client";
import styles from "../page.module.css";

export default function Contact() {
  // Show a success message if redirected with ?success in the URL
  let submitted = false;
  if (typeof window !== "undefined" && window.location.search.includes("success")) {
    submitted = true;
  }

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactCard}>
        <div className={styles.contactIcon}>✉️</div>
        <h1 className={styles.contactHeadline}>Contact Us</h1>
        <p className={styles.contactText}>
          Get in touch with us for any questions, business inquiries, or support.
        </p>
        {submitted && (
          <div className={styles.successMessage}>
            Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
          </div>
        )}
        <form
          action="https://formsubmit.co/sales@apachedesert.com"
          method="post"
          className={styles.contactForm}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="http://localhost:3000/contact/thank-you" />

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={styles.formInput}
              placeholder="your.email@example.com"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={styles.formInput}
              placeholder="Your full name"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="company" className={styles.formLabel}>Company</label>
            <input
              type="text"
              id="company"
              name="company"
              className={styles.formInput}
              placeholder="Your company name"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="matter" className={styles.formLabel}>Message *</label>
            <textarea
              id="matter"
              name="matter"
              required
              className={styles.formTextarea}
              placeholder="Please describe your inquiry or matter..."
              rows={5}
            />
          </div>

          <button 
            type="submit"
            className={styles.submitButton}
          >
            Send Message
          </button>
        </form>
        <div className={styles.contactInfo}>
          <p className={styles.contactNote}>
            You can also reach us directly at:{" "}
            <a href="mailto:sales@apachedesert.com" className={styles.contactEmail}>
              sales@apachedesert.com
            </a>
          </p>
          <p className={styles.contactNote}>
            We typically respond within 24 hours. Thank you for reaching out!
          </p>
        </div>
      </div>
    </section>
  );
} 