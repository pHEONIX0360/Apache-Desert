"use client";
import styles from "../page.module.css";
import { useState } from "react";

export default function CustomisedProducts() {
  const [logo, setLogo] = useState<File | null>(null);
  const [images, setImages] = useState<FileList | null>(null);

  return (
    <section className={styles.customFormSection}>
      <div className={styles.customFormCard}>
        <h1 className={styles.customFormHeadline}>Request Customised Desiccant Products</h1>
        <form className={styles.customForm}>
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
      </div>
    </section>
  );
} 