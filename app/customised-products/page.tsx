"use client";
import styles from "../page.module.css";
import { useState } from "react";

export default function CustomisedProducts() {
  const [logo, setLogo] = useState<File | null>(null);
  const [images, setImages] = useState<FileList | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  }

  return (
    <section className={styles.customFormSection}>
      {/* Floating particles */}
      <div className={styles.floatingParticle}></div>
      <div className={styles.floatingParticle}></div>
      <div className={styles.floatingParticle}></div>
      <div className={styles.floatingParticle}></div>
      <div className={styles.floatingParticle}></div>

      {/* Moisture drops */}
      <div className={styles.moistureDrop}></div>
      <div className={styles.moistureDrop}></div>
      <div className={styles.moistureDrop}></div>

      <div className={styles.customFormCard}>
        <div className={styles.customFormHeroIcon}>📦✨</div>
        <h1 className={styles.customFormHeadline}>Request Customised Desiccant Products</h1>
        <p className={styles.customFormSubheadline}>
          Get the perfect desiccant solution tailored for your brand and needs. Upload your logo, choose your style, and let us do the rest!
        </p>
        {submitted ? (
          <div className={styles.customFormSuccess}>
            <span role="img" aria-label="Success" style={{fontSize: '2.5rem'}}>🎉</span>
            <h2>Request Submitted!</h2>
            <p>Thank you for your interest. Our team will contact you soon.</p>
          </div>
        ) : (
        <form className={styles.customForm} onSubmit={handleSubmit}>
          <label className={styles.customLabel}>
            Company Name
            <input type="text" className={styles.customInput} required />
          </label>
          <label className={styles.customLabel}>
            Packet Size
            <input type="text" className={styles.customInput} placeholder="e.g. 1g, 5g, 10g" required />
          </label>
          <label className={styles.customLabel}>
            Packet Color
            <input type="text" className={styles.customInput} placeholder="e.g. White, Blue" />
          </label>
          <label className={styles.customLabel}>
            Packet Shape
            <input type="text" className={styles.customInput} placeholder="e.g. Rectangle, Square" />
          </label>
          <label className={styles.customLabel}>
            Loose or Packets
            <select className={styles.customInput} required>
              <option value="">Select</option>
              <option value="Loose">Loose</option>
              <option value="Packets">Packets</option>
            </select>
          </label>
          <label className={styles.customLabel}>
            With or Without Packing
            <select className={styles.customInput} required>
              <option value="">Select</option>
              <option value="With Packing">With Packing</option>
              <option value="Without Packing">Without Packing</option>
            </select>
          </label>
          <label className={styles.customLabel}>
            Logo (Upload)
            <input type="file" accept="image/*" className={styles.customInput} onChange={e => setLogo(e.target.files?.[0] || null)} />
          </label>
          <label className={styles.customLabel}>
            Reference Images (Upload)
            <input type="file" accept="image/*" multiple className={styles.customInput} onChange={e => setImages(e.target.files)} />
          </label>
          <fieldset className={styles.customFieldset}>
            <legend>Product Use</legend>
            <label><input type="checkbox" name="use" value="Pharmaceutical" /> Pharmaceutical</label>
            <label><input type="checkbox" name="use" value="Beverage" /> Beverage</label>
            <label><input type="checkbox" name="use" value="Foods" /> Foods</label>
            <label><input type="checkbox" name="use" value="Non-foods" /> Non-foods</label>
          </fieldset>
          <label className={styles.customLabel}>
            Additional Notes
            <textarea className={styles.customInput} rows={3} placeholder="Any other requirements or details..." />
          </label>
          <button type="submit" className={styles.customSubmitBtn}>Submit Request</button>
        </form>
        )}
      </div>
    </section>
  );
} 