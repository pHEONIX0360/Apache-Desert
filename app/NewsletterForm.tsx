"use client";

import styles from "./page.module.css";

export default function NewsletterForm() {
  return (
    <form className={styles.subscribeForm} onSubmit={e => e.preventDefault()}>
      <input type="email" placeholder="Enter your email" className={styles.subscribeInput} required />
      <button type="submit" className={styles.subscribeButton}>Subscribe</button>
    </form>
  );
} 