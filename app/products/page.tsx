"use client";
import React, { useState } from "react";
import styles from "./products.module.css";

const products = [
  {
    name: "Silica gel desiccant pouch 0.5g (Aiwa paper)",
    type: "Silica Gel",
    weight: "0.5g",
    packing: "Aiwa paper",
    size: "2*3.2",
    price: 2.99,
  },
  {
    name: "Silica gel desiccant pouch 0.5g (Tyvek)",
    type: "Silica Gel",
    weight: "0.5g",
    packing: "Tyvek",
    size: "2*3.2",
    price: 2.99,
  },
  {
    name: "Silica gel desiccant pouch 1g (Aiwa paper)",
    type: "Silica Gel",
    weight: "1g",
    packing: "Aiwa paper",
    size: "2.5*3.8",
    price: 3.49,
  },
  {
    name: "Silica gel desiccant pouch 1g (Tyvek)",
    type: "Silica Gel",
    weight: "1g",
    packing: "Tyvek",
    size: "2.5*3.8",
    price: 3.49,
  },
  {
    name: "Silica gel desiccant pouch 2g (Aiwa paper)",
    type: "Silica Gel",
    weight: "2g",
    packing: "Aiwa paper",
    size: "2.5*4.6",
    price: 4.29,
  },
  {
    name: "Silica gel desiccant pouch 2g (Tyvek)",
    type: "Silica Gel",
    weight: "2g",
    packing: "Tyvek",
    size: "2.5*4.6",
    price: 4.29,
  },
  {
    name: "Silica gel desiccant pouch 3g (Aiwa paper)",
    type: "Silica Gel",
    weight: "3g",
    packing: "Aiwa paper",
    size: "3.0*5.4",
    price: 5.19,
  },
  {
    name: "Silica gel desiccant pouch 3g (Tyvek)",
    type: "Silica Gel",
    weight: "3g",
    packing: "Tyvek",
    size: "3.0*5.4",
    price: 5.19,
  },
  {
    name: "Silica gel desiccant pouch 5g (Aiwa paper)",
    type: "Silica Gel",
    weight: "5g",
    packing: "Aiwa paper",
    size: "3.0*6.0",
    price: 6.99,
  },
  {
    name: "Silica gel desiccant pouch 5g (Tyvek)",
    type: "Silica Gel",
    weight: "5g",
    packing: "Tyvek",
    size: "3.0*6.0",
    price: 6.99,
  },
  {
    name: "Canister Desiccant 1g",
    type: "Canister",
    weight: "1g",
    packing: "Plastic bottle",
    size: "Diameter * Height 13*18 mm",
    price: 7.99,
  },
  {
    name: "Canister Desiccant 3g",
    type: "Canister",
    weight: "3g",
    packing: "Plastic bottle",
    size: "Diameter * Height 19*25 mm",
    price: 9.99,
  },
];

const types = ["Silica Gel", "Canister"];
const weights = ["0.5g", "1g", "2g", "3g", "5g"];
const packings = ["Aiwa paper", "Tyvek", "Plastic bottle"];

export default function ProductsPage() {
  const [selectedType, setSelectedType] = useState("");
  const [selectedWeight, setSelectedWeight] = useState("");
  const [selectedPacking, setSelectedPacking] = useState("");

  // Sequential filtering
  let filtered = products;
  if (selectedType) filtered = filtered.filter(p => p.type === selectedType);
  if (selectedWeight) filtered = filtered.filter(p => p.weight === selectedWeight);
  if (selectedPacking) filtered = filtered.filter(p => p.packing === selectedPacking);

  return (
    <div className={styles.productsPage}>
      <h1 className={styles.heading}>Pharmaceutical Desiccant Products</h1>
      <div className={styles.productsLayout}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.filterSection}>
            <h3>Type</h3>
            {types.map(type => (
              <button
                key={type}
                className={selectedType === type ? styles.selectedFilter : styles.filterBtn}
                onClick={() => {
                  setSelectedType(type);
                  setSelectedWeight("");
                  setSelectedPacking("");
                }}
              >
                {type}
              </button>
            ))}
          </div>
          {selectedType && (
            <div className={styles.filterSection}>
              <h3>Weight</h3>
              {weights
                .filter(w => products.some(p => p.type === selectedType && p.weight === w))
                .map(weight => (
                  <button
                    key={weight}
                    className={selectedWeight === weight ? styles.selectedFilter : styles.filterBtn}
                    onClick={() => {
                      setSelectedWeight(weight);
                      setSelectedPacking("");
                    }}
                  >
                    {weight}
                  </button>
                ))}
            </div>
          )}
          {selectedType && selectedWeight && (
            <div className={styles.filterSection}>
              <h3>Packing</h3>
              {packings
                .filter(pk => products.some(p => p.type === selectedType && p.weight === selectedWeight && p.packing === pk))
                .map(packing => (
                  <button
                    key={packing}
                    className={selectedPacking === packing ? styles.selectedFilter : styles.filterBtn}
                    onClick={() => setSelectedPacking(packing)}
                  >
                    {packing}
                  </button>
                ))}
            </div>
          )}
        </aside>
        {/* Product Grid */}
        <div className={styles.grid}>
          {filtered.length === 0 ? (
            <div className={styles.noResults}>No products found.</div>
          ) : (
            filtered.map((product, idx) => (
              <div className={styles.card} key={idx}>
                <img src="/Images/Logo 7.png" alt={product.name} className={styles.productImg} />
                <div className={styles.productInfo}>
                  <h2 className={styles.productName}>{product.name}</h2>
                  <div className={styles.productDetails}>
                    <span>Weight: {product.weight}</span>
                    <span>Packing: {product.packing}</span>
                    <span>Size: {product.size}</span>
                  </div>
                  <div className={styles.priceRow}>
                    <span className={styles.price}>${product.price.toFixed(2)}</span>
                    <button className={styles.addBtn}>ADD</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
} 