"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

const images = [
  "./Images/Dessicant.jpg",
  "/Images/Dessicant Packets.jpg",
  "/Images/Desiccant-Silica-Gel.jpg"
];

export default function DessicantCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`Dessicant ${i + 1}`}
          className={
            i === index
              ? `${styles.carouselImage} ${styles.carouselImageActive}`
              : styles.carouselImage
          }
          style={{ display: i === index ? "block" : "none" }}
        />
      ))}
    </div>
  );
} 