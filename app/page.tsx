"use client";
import styles from "./page.module.css";
import NewsletterForm from "./NewsletterForm";
import Link from "next/link";
import { useEffect } from "react";

declare global {
  interface Window {
    chatbase?: any;
  }
}

export default function Home() {
  useEffect(() => {
    if (!window.chatbase || window.chatbase("getState") !== "initialized") {
      window.chatbase = (...args: any[]) => {
        if (!window.chatbase.q) window.chatbase.q = [];
        window.chatbase.q.push(args);
      };
      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === "q") return target.q;
          return (...args: any[]) => target(prop, ...args);
        },
      });
    }
    const onLoad = function () {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "4uSxr4EJcORbcX0kyzR_T";
      document.body.appendChild(script);
    };
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  return (
    <>
      {/* Hero Section with Video Background */}
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
          <div className={styles.heroContent}>
            <h1 className={styles.heroHeadline}>Reliable Desiccants for Moisture Protection</h1>
            <p className={styles.heroSubheadline}>
              Shop high-quality moisture absorbers for packaging, electronics, pharmaceuticals, and more.
            </p>
            <div className={styles.heroCtas}>
              <button className={styles.primaryCta}>Shop Now</button>
              <Link href="/products" className={styles.secondaryCta}>
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section (Restored) */}
      <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutCard}>
          <div className={styles.aboutAccentIcon}>★</div>
          <h2 className={styles.aboutHeadline}>About Us</h2>
          <div className={styles.aboutRow}>
            <img
              src="/Images/images (1).png"
              alt="Animated Man 1"
              className={styles.aboutImage}
            />
            <div className={styles.aboutText}>
              <p>
                This company is a proud <b>veteran owned</b>, dedicated to delivering top-quality silica products with excellence, reliability, and service. Our mission is to serve our customers with the integrity and commitment that defines our veteran roots.
              </p>
            </div>
            <img
              src="/Images/images (1).png"
              alt="Animated Man 2"
              className={styles.aboutImage}
            />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className={styles.productsSection}>
        <h2 className={styles.sectionHeadline}>Featured Products</h2>
        <div className={styles.productsGrid}>
          <div className={styles.productCard}>
            <img src="/Images/silica.webp" alt="Silica Gel Packets" />
            <h3>Silica Gel Packets</h3>
            <p>$9.99 / 100pcs</p>
            <button className={styles.productButton}>View Product</button>
          </div>
          <div className={styles.productCard}>
            <img src="/Images/bag.webp" alt="Clay Desiccant Bags" />
            <h3>Clay Desiccant Bags</h3>
            <p>$12.99 / 50pcs</p>
            <button className={styles.productButton}>View Product</button>
          </div>
          <div className={styles.productCard}>
            <img src="/Images/5g-Odor-Moisture-Absorbing-Packets-Activated-Charcoal-Montmorillonite-Clay-Desiccant.avif" alt="Activated Carbon Desiccant" />
            <h3>Activated Carbon Desiccant</h3>
            <p>$14.99 / 50pcs</p>
            <button className={styles.productButton}>View Product</button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorksSection}>
        <h2 className={styles.sectionHeadline}>How It Works</h2>
        <div className={styles.stepsGrid}>
          <div className={styles.stepCard}>
            <span className={styles.stepIcon}>🛒</span>
            <h4>Browse Products</h4>
          </div>
          <div className={styles.stepCard}>
            <span className={styles.stepIcon}>➕</span>
            <h4>Add to Cart</h4>
          </div>
          <div className={styles.stepCard}>
            <span className={styles.stepIcon}>💳</span>
            <h4>Checkout & Pay</h4>
          </div>
          <div className={styles.stepCard}>
            <span className={styles.stepIcon}>🚚</span>
            <h4>Get Fast Delivery</h4>
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className={styles.industriesSection}>
        <h2 className={styles.sectionHeadline}>Industries We Serve</h2>
        <div className={styles.industriesGrid}>
          <div className={styles.industryCard}><span role="img" aria-label="Electronics">💻</span> Electronics</div>
          <div className={styles.industryCard}><span role="img" aria-label="Food">🍫</span> Food & Beverages</div>
          <div className={styles.industryCard}><span role="img" aria-label="Pharmaceuticals">💊</span> Pharmaceuticals</div>
          <div className={styles.industryCard}><span role="img" aria-label="Leather">👞</span> Leather Goods</div>
          <div className={styles.industryCard}><span role="img" aria-label="Shipping">📦</span> Industrial Shipping</div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <h2 className={styles.sectionHeadline}>Customer Testimonials</h2>
        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonialCard}>
            <p>&quot;Excellent quality and quick delivery!&quot;</p>
            <span>– Ravi K.</span>
          </div>
          <div className={styles.testimonialCard}>
            <p>&quot;Best desiccants we&#39;ve used in our packaging line.&quot;</p>
            <span>– PharmaCo Ltd.</span>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#faq">FAQs</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4>Contact</h4>
            <ul>
              <li>Email: <a href="mailto:info@desertsolutions.com">info@desertsolutions.com</a></li>
              <li>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></li>
              <li>Location: USA</li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4>Resources</h4>
            <ul>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#support">Support</a></li>
              <li><a href="#newsletter">Newsletter</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4>Subscribe</h4>
            <NewsletterForm />
            <div className={styles.socialIcons}>
              <a href="#" aria-label="Facebook" title="Facebook">
                <img src="./Images/download.png" alt="Facebook" />
              </a>
              <a href="#" aria-label="LinkedIn" title="LinkedIn">
                <img src="./Images/hd-vector-flat-linkedin-in-round-icon-png-701751695046390m4phkuuiqm.png" alt="LinkedIn" />
              </a>
              <a href="#" aria-label="YouTube" title="YouTube">
                <img src="./Images/images.png" alt="YouTube" />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} Desert Solutions. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
