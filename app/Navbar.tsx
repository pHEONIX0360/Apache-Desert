"use client";
import React, { useEffect, useState } from "react";

const GREEN = "#27ae60";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10,
        background: scrolled ? "transparent" : "#e0e0e0",
        backdropFilter: scrolled ? "blur(6px)" : undefined,
        WebkitBackdropFilter: scrolled ? "blur(6px)" : undefined,
        transition: "background 0.3s, backdrop-filter 0.3s",
        padding: "13px 38px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontWeight: 700,
        fontSize: "1.2rem",
        color: scrolled ? GREEN : "#111",
        letterSpacing: "1px",
        boxShadow: "0 2px 16px #27ae6044",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <img src="/Images/Logo 7.png" alt="Company Logo" style={{ height: 50, width: "auto", display: "block" }} />
      </div>
      <div style={{ display: "flex", gap: "2rem" }}>
        {[
          { href: "/", label: "Home" },
          { href: "#about", label: "About" },
          { href: "/products", label: "Products" },
          { href: "#contact", label: "Contact" },
          { href: "#shop", label: "Shop" },
          { href: "#login", label: "Login" },
        ].map(link => (
          <a
            key={link.href}
            href={link.href}
            style={{
              color: scrolled ? GREEN : "#111",
              textShadow: scrolled ? undefined : "0 0 8px #fff",
              transition: "color 0.2s, text-shadow 0.2s",
            }}
            onMouseOver={e => (e.currentTarget.style.color = GREEN)}
            onMouseOut={e => (e.currentTarget.style.color = scrolled ? GREEN : "#111")}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
} 