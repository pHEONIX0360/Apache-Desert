"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "./context/AuthContext";
import { useCart } from "./context/CartContext";

export default function Navbar() {
  const [location, setLocation] = useState("Select Location");
  const [productsDropdown, setProductsDropdown] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const { cart, removeFromCart, clearCart } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

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
        <button className={styles.cartBtn} aria-label="Cart" onClick={() => setCartOpen(true)}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          <span className={styles.cartBadge}>{cart.length}</span>
        </button>
        {cartOpen && (
          <div className={styles.cartModalOverlay} onClick={() => setCartOpen(false)}>
            <div className={styles.cartModal} onClick={e => e.stopPropagation()}>
              <h3>Your Cart</h3>
              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <ul className={styles.cartList}>
                  {cart.map((item, idx) => (
                    <li key={idx} className={styles.cartItem}>
                      <span>{(item.product as { name: string }).name} ({item.loadType})</span>
                      <span>Qty: {item.quantity}</span>
                      <button onClick={() => removeFromCart(idx)} className={styles.removeBtn}>Remove</button>
                    </li>
                  ))}
                </ul>
              )}
              <button onClick={() => setCartOpen(false)} className={styles.closeCartBtn}>Close</button>
              {cart.length > 0 && <button onClick={clearCart} className={styles.clearCartBtn}>Clear Cart</button>}
            </div>
          </div>
        )}
        {isAuthenticated ? (
          <div className={styles.userMenu}>
            <span className={styles.userName}>Welcome, {user?.name}!</span>
            <Link href="/dashboard" className={styles.profileBtn}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <circle cx="12" cy="7" r="4"/>
                <path d="M5.5 21a8.38 8.38 0 0 1 13 0"/>
              </svg>
              <span>Profile</span>
            </Link>
            <button onClick={logout} className={styles.logoutBtn}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                <polyline points="16,17 21,12 16,7"/>
                <line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
              <span>Logout</span>
            </button>
          </div>
        ) : (
          <Link href="/auth/signin" className={styles.loginBtn}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
              <polyline points="10,17 15,12 10,7"/>
              <line x1="15" y1="12" x2="3" y2="12"/>
            </svg>
            <span>Login</span>
          </Link>
        )}
      </div>
    </nav>
  );
} 