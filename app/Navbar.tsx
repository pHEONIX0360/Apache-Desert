"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [location, setLocation] = useState("Select Location");
  const pathname = usePathname();
  const [productsDropdown, setProductsDropdown] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();
          if (data && data.address) {
            setLocation(
              data.address.city ||
              data.address.town ||
              data.address.village ||
              data.address.state ||
              data.display_name
            );
          }
        } catch {
          setLocation("Location Unavailable");
        }
      }, () => setLocation("Location Unavailable"));
    }
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <Link href="/">
          <Image src="/Images/Logo 1.png" alt="Logo" width={48} height={48} className={styles.logo} />
        </Link>
      </div>
      <div className={styles.navCenter}>
        <Link href="/" className={`${styles.navLink} ${pathname === "/" ? styles.activeNavLink : ""}`}>Home</Link>
        <div
          className={styles.navDropdown}
          onMouseEnter={() => setProductsDropdown(true)}
          onMouseLeave={() => setProductsDropdown(false)}
        >
          <span className={styles.navLink} tabIndex={0} onClick={() => setProductsDropdown(v => !v)}>
            Products ▾
          </span>
          {productsDropdown && (
            <div className={styles.dropdownMenu}>
              <Link href="/products" className={styles.dropdownItem}>Products</Link>
              <Link href="/customised-products" className={styles.dropdownItem}>Customised Products</Link>
            </div>
          )}
        </div>
        <Link href="/about" className={styles.navLink}>About</Link>
        <Link href="/contact" className={styles.navLink}>Contact</Link>
        <Link href="/shop" className={styles.navLink}>Shop</Link>
      </div>
      <div className={styles.navRight}>
        <button className={styles.locationBtn}>
          <span className={styles.locationIcon}>📍</span>
          <span className={styles.locationText}>{location}</span>
        </button>
        <button className={styles.cartBtn} aria-label="Cart">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          <span className={styles.cartBadge}>0</span>
        </button>
        
      </div>
    </nav>
  );
} 