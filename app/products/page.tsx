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
    fillType: "Loose Filled",
    quality: "Pharma Grade",
    loadPricing: {
      case: 10,
      pallet: 20,
      truck: 30
    }
  },
  {
    name: "Silica gel desiccant pouch 0.5g (Tyvek)",
    type: "Silica Gel",
    weight: "0.5g",
    packing: "Tyvek",
    size: "2*3.2",
    price: 2.99,
    fillType: "Loose Filled",
    quality: "Food Grade",
    loadPricing: {
      case: 10,
      pallet: 20,
      truck: 30
    }
  },
  {
    name: "Silica gel desiccant pouch 1g (Aiwa paper)",
    type: "Silica Gel",
    weight: "1g",
    packing: "Aiwa paper",
    size: "2.5*3.8",
    price: 3.49,
    fillType: "Loose Filled",
    quality: "Pharma Grade",
    loadPricing: {
      case: 10,
      pallet: 20,
      truck: 30
    }
  },
  {
    name: "Silica gel desiccant pouch 1g (Tyvek)",
    type: "Silica Gel",
    weight: "1g",
    packing: "Tyvek",
    size: "2.5*3.8",
    price: 3.49,
    fillType: "Loose Filled",
    quality: "Food Grade",
    loadPricing: {
      case: 10,
      pallet: 20,
      truck: 30
    }
  },
  {
    name: "Silica gel desiccant pouch 2g (Aiwa paper)",
    type: "Silica Gel",
    weight: "2g",
    packing: "Aiwa paper",
    size: "2.5*4.6",
    price: 4.29,
    fillType: "Loose Filled",
    quality: "Pharma Grade",
    loadPricing: {
      case: 10,
      pallet: 20,
      truck: 30
    }
  },
  {
    name: "Silica gel desiccant pouch 2g (Tyvek)",
    type: "Silica Gel",
    weight: "2g",
    packing: "Tyvek",
    size: "2.5*4.6",
    price: 4.29,
    fillType: "Loose Filled",
    quality: "Food Grade",
    loadPricing: {
      case: 10,
      pallet: 20,
      truck: 30
    }
  },
  {
    name: "Silica gel desiccant pouch 3g (Aiwa paper)",
    type: "Silica Gel",
    weight: "3g",
    packing: "Aiwa paper",
    size: "3.0*5.4",
    price: 5.19,
    fillType: "Loose Filled",
    quality: "Pharma Grade",
    loadPricing: {
      case: 10,
      pallet: 20,
      truck: 30
    }
  },
  {
    name: "Silica gel desiccant pouch 3g (Tyvek)",
    type: "Silica Gel",
    weight: "3g",
    packing: "Tyvek",
    size: "3.0*5.4",
    price: 5.19,
    fillType: "Loose Filled",
    quality: "Food Grade",
    loadPricing: {
      case: 10,
      pallet: 20,
      truck: 30
    }
  },
  {
    name: "Silica gel desiccant pouch 5g (Aiwa paper)",
    type: "Silica Gel",
    weight: "5g",
    packing: "Aiwa paper",
    size: "3.0*6.0",
    price: 6.99,
    fillType: "Loose Filled",
    quality: "Pharma Grade",
    loadPricing: {
      case: 10,
      pallet: 20,
      truck: 30
    }
  },
  {
    name: "Silica gel desiccant pouch 5g (Tyvek)",
    type: "Silica Gel",
    weight: "5g",
    packing: "Tyvek",
    size: "3.0*6.0",
    price: 6.99,
    fillType: "Loose Filled",
    quality: "Food Grade",
    loadPricing: {
      case: 10,
      pallet: 20,
      truck: 30
    }
  },
  {
    name: "Canister Desiccant 1g",
    type: "Canister",
    weight: "1g",
    packing: "Plastic bottle",
    size: "Diameter * Height 13*18 mm",
    price: 7.99,
    fillType: "Loose Filled",
    quality: "Pharma Grade",
    loadPricing: {
      case: 10,
      pallet: 20,
      truck: 30
    }
  },
  {
    name: "Canister Desiccant 3g",
    type: "Canister",
    weight: "3g",
    packing: "Plastic bottle",
    size: "Diameter * Height 19*25 mm",
    price: 9.99,
    fillType: "Loose Filled",
    quality: "Pharma Grade",
    loadPricing: {
      case: 10,
      pallet: 20,
      truck: 30
    }
  },
];

const grades = ["Pharma", "Food", "Non-Food"];
const types = ["Packet", "Canister"];
const caseTypes = ["Loose Fill", "Roll"];
const sizes = ["0.5g", "1g", "2g", "3g", "5g", "10g"];
const materials = ["Aiwa", "Tyvek"];
const coreSizes = ["30mm", "76mm", "3\""];

export default function ProductsPage() {
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedCaseType, setSelectedCaseType] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedCoreSize, setSelectedCoreSize] = useState("");
  
  // State for quantity and load selection for each product
  const [productQuantities, setProductQuantities] = useState<{[key: number]: number}>({});
  const [selectedLoads, setSelectedLoads] = useState<{[key: number]: 'case' | 'pallet' | 'truck'}>({});

  // Initialize quantities and loads
  React.useEffect(() => {
    const initialQuantities: {[key: number]: number} = {};
    const initialLoads: {[key: number]: 'case' | 'pallet' | 'truck'} = {};
    products.forEach((_, index) => {
      initialQuantities[index] = 1;
      initialLoads[index] = 'case';
    });
    setProductQuantities(initialQuantities);
    setSelectedLoads(initialLoads);
  }, []);

  const updateQuantity = (productIndex: number, change: number) => {
    setProductQuantities(prev => ({
      ...prev,
      [productIndex]: Math.max(1, (prev[productIndex] || 1) + change)
    }));
  };

  const updateLoad = (productIndex: number, load: 'case' | 'pallet' | 'truck') => {
    setSelectedLoads(prev => ({
      ...prev,
      [productIndex]: load
    }));
  };

  // Filtering logic (update as needed for your data structure)
  let filtered = products;
  if (selectedGrade) filtered = filtered.filter(p => p.quality && p.quality.toLowerCase().includes(selectedGrade.toLowerCase()));
  if (selectedType) filtered = filtered.filter(p => p.type === selectedType);
  if (selectedCaseType) filtered = filtered.filter(p => p.fillType && p.fillType.toLowerCase().includes(selectedCaseType.toLowerCase()));
  if (selectedSize) filtered = filtered.filter(p => p.weight === selectedSize);
  if (selectedMaterial) filtered = filtered.filter(p => p.packing && p.packing.toLowerCase().includes(selectedMaterial.toLowerCase()));

  return (
    <div className={styles.productsPage}>
      <h1 className={styles.heading}>Pharmaceutical Desiccant Products</h1>
      <div className={styles.productsLayout}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.filterSection}>
            <h3>Grade</h3>
            {grades.map(grade => (
              <button
                key={grade}
                className={selectedGrade === grade ? styles.selectedFilter : styles.filterBtn}
                onClick={() => {
                  setSelectedGrade(selectedGrade === grade ? "" : grade);
                  setSelectedType("");
                  setSelectedCaseType("");
                  setSelectedSize("");
                  setSelectedMaterial("");
                  setSelectedCoreSize("");
                }}
              >
                {grade}
              </button>
            ))}
          </div>
          <div className={styles.filterSection}>
            <h3>Type</h3>
            {types.map(type => (
              <button
                key={type}
                className={selectedType === type ? styles.selectedFilter : styles.filterBtn}
                onClick={() => {
                  setSelectedType(selectedType === type ? "" : type);
                  setSelectedCaseType("");
                  setSelectedSize("");
                  setSelectedMaterial("");
                  setSelectedCoreSize("");
                }}
              >
                {type}
              </button>
            ))}
          </div>
          <div className={styles.filterSection}>
            <h3>Case Type</h3>
            {caseTypes.map(caseType => (
              <button
                key={caseType}
                className={selectedCaseType === caseType ? styles.selectedFilter : styles.filterBtn}
                onClick={() => {
                  setSelectedCaseType(selectedCaseType === caseType ? "" : caseType);
                  setSelectedSize("");
                  setSelectedMaterial("");
                  setSelectedCoreSize("");
                }}
              >
                {caseType}
              </button>
            ))}
          </div>
          <div className={styles.filterSection}>
            <h3>Size</h3>
            {sizes.map(size => (
              <button
                key={size}
                className={selectedSize === size ? styles.selectedFilter : styles.filterBtn}
                onClick={() => {
                  setSelectedSize(selectedSize === size ? "" : size);
                  setSelectedMaterial("");
                  setSelectedCoreSize("");
                }}
              >
                {size}
              </button>
            ))}
          </div>
          <div className={styles.filterSection}>
            <h3>Material</h3>
            {materials.map(material => (
              <button
                key={material}
                className={selectedMaterial === material ? styles.selectedFilter : styles.filterBtn}
                onClick={() => {
                  setSelectedMaterial(selectedMaterial === material ? "" : material);
                  setSelectedCoreSize("");
                }}
              >
                {material}
              </button>
            ))}
          </div>
          <div className={styles.filterSection}>
            <h3>Core Size</h3>
            {coreSizes.map(coreSize => (
              <button
                key={coreSize}
                className={selectedCoreSize === coreSize ? styles.selectedFilter : styles.filterBtn}
                onClick={() => setSelectedCoreSize(selectedCoreSize === coreSize ? "" : coreSize)}
              >
                {coreSize}
              </button>
            ))}
          </div>
        </aside>
        {/* Product Grid */}
        <div className={styles.grid}>
          {filtered.length === 0 ? (
            <div className={styles.noResults}>No products found.</div>
          ) : (
            filtered.map((product, idx) => {
              const productIndex = products.indexOf(product);
              const quantity = productQuantities[productIndex] || 1;
              const selectedLoad = selectedLoads[productIndex] || 'case';
              const loadPrice = product.loadPricing[selectedLoad];
              const totalPrice = (product.price + loadPrice) * quantity;
              
              return (
                <div className={styles.card} key={idx}>
                  <img src="/Images/Desiccant-Silica-Gel.jpg" alt={product.name} className={styles.productImg} />
                  <div className={styles.productInfo}>
                    <h2 className={styles.productName}>{product.name}</h2>
                    <div className={styles.qualityBadge}>
                      {product.quality}
                    </div>
                    <div className={styles.productDetails}>
                      <span>Weight: {product.weight}</span>
                      <span>Packing: {product.packing}</span>
                      <span>Size: {product.size}</span>
                    </div>
                    
                    {/* Load Pricing Display */}
                    <div className={styles.loadPricing}>
                      <h4>Load Pricing:</h4>
                      <div className={styles.pricingOptions}>
                        <span className={selectedLoad === 'case' ? styles.selectedPricing : ''}>
                          Case: ${product.loadPricing.case}
                        </span>
                        <span className={selectedLoad === 'pallet' ? styles.selectedPricing : ''}>
                          Pallet: ${product.loadPricing.pallet}
                        </span>
                        <span className={selectedLoad === 'truck' ? styles.selectedPricing : ''}>
                          Truck: ${product.loadPricing.truck}
                        </span>
                      </div>
                    </div>
                    
                    {/* Quantity Controls */}
                    <div className={styles.quantitySection}>
                      <h4>Quantity:</h4>
                      <div className={styles.quantityControls}>
                        <button 
                          className={styles.quantityBtn}
                          onClick={() => updateQuantity(productIndex, -1)}
                        >
                          -
                        </button>
                        <span className={styles.quantityDisplay}>{quantity}</span>
                        <button 
                          className={styles.quantityBtn}
                          onClick={() => updateQuantity(productIndex, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    {/* Load Selection */}
                    <div className={styles.loadSelection}>
                      <h4>Load Type:</h4>
                      <div className={styles.loadButtons}>
                        <button 
                          className={`${styles.loadBtn} ${selectedLoad === 'case' ? styles.selectedLoad : ''}`}
                          onClick={() => updateLoad(productIndex, 'case')}
                        >
                          Case
                        </button>
                        <button 
                          className={`${styles.loadBtn} ${selectedLoad === 'pallet' ? styles.selectedLoad : ''}`}
                          onClick={() => updateLoad(productIndex, 'pallet')}
                        >
                          Pallet
                        </button>
                        <button 
                          className={`${styles.loadBtn} ${selectedLoad === 'truck' ? styles.selectedLoad : ''}`}
                          onClick={() => updateLoad(productIndex, 'truck')}
                        >
                          Truck
                        </button>
                      </div>
                    </div>
                    
                    <div className={styles.priceRow}>
                      <div className={styles.priceInfo}>
                        <span className={styles.unitPrice}>${product.price.toFixed(2)} + ${loadPrice}</span>
                        <span className={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</span>
                      </div>
                      <button className={styles.addBtn}>ADD TO CART</button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
} 