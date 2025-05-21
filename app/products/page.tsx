"use client";
import React, { useState } from "react";
import styles from "./products.module.css";

const products = [
  {
    name: "Silica gel desiccant pouch 0.5g (Aiwa paper)",
    weight: "0.5g",
    packing: "Aiwa paper",
    size: "2*3.2",
    price: 2.99,
  },
  {
    name: "Silica gel desiccant pouch 0.5g (Tyvek)",
    weight: "0.5g",
    packing: "Tyvek",
    size: "2*3.2",
    price: 2.99,
  },
  {
    name: "Silica gel desiccant pouch 1g (Aiwa paper)",
    weight: "1g",
    packing: "Aiwa paper",
    size: "2.5*3.8",
    price: 3.49,
  },
  {
    name: "Silica gel desiccant pouch 1g (Tyvek)",
    weight: "1g",
    packing: "Tyvek",
    size: "2.5*3.8",
    price: 3.49,
  },
  {
    name: "Silica gel desiccant pouch 2g (Aiwa paper)",
    weight: "2g",
    packing: "Aiwa paper",
    size: "2.5*4.6",
    price: 4.29,
  },
  {
    name: "Silica gel desiccant pouch 2g (Tyvek)",
    weight: "2g",
    packing: "Tyvek",
    size: "2.5*4.6",
    price: 4.29,
  },
  {
    name: "Silica gel desiccant pouch 3g (Aiwa paper)",
    weight: "3g",
    packing: "Aiwa paper",
    size: "3.0*5.4",
    price: 5.19,
  },
  {
    name: "Silica gel desiccant pouch 3g (Tyvek)",
    weight: "3g",
    packing: "Tyvek",
    size: "3.0*5.4",
    price: 5.19,
  },
  {
    name: "Silica gel desiccant pouch 5g (Aiwa paper)",
    weight: "5g",
    packing: "Aiwa paper",
    size: "3.0*6.0",
    price: 6.99,
  },
  {
    name: "Silica gel desiccant pouch 5g (Tyvek)",
    weight: "5g",
    packing: "Tyvek",
    size: "3.0*6.0",
    price: 6.99,
  },
  {
    name: "Canister Desiccant 1g",
    weight: "1g",
    packing: "Plastic bottle",
    size: "Diameter * Height 13*18 mm",
    price: 7.99,
  },
  {
    name: "Canister Desiccant 3g",
    weight: "3g",
    packing: "Plastic bottle",
    size: "Diameter * Height 19*25 mm",
    price: 9.99,
  },
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.packing.toLowerCase().includes(search.toLowerCase()) ||
    product.size.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.productsPage}>
      <h1 className={styles.heading}>Pharmaceutical Desiccant Products</h1>
      <div className={styles.searchBarRow}>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className={styles.grid}>
        {filteredProducts.length === 0 ? (
          <div className={styles.noResults}>No products found.</div>
        ) : (
          filteredProducts.map((product, idx) => (
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
  );
} 