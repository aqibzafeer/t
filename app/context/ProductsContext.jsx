"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { PRODUCTS as BASE_PRODUCTS } from "@/app/constants/constants";

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [customProducts, setCustomProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("ambala_custom_products");
      if (saved) setCustomProducts(JSON.parse(saved));
    } catch (e) {
      console.warn("Failed to parse saved products", e);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("ambala_custom_products", JSON.stringify(customProducts));
    }
  }, [customProducts, isLoading]);

  const products = [...BASE_PRODUCTS, ...customProducts];

  const addProduct = (product) => {
    // create unique id for custom product to avoid collision with base ids
    const id = `c_${Date.now()}`;
    const normalized = { id, ...product };
    setCustomProducts((prev) => [...prev, normalized]);
    return normalized;
  };

  const getProductById = (id) => products.find((p) => p.id === id);

  return (
    <ProductsContext.Provider value={{ products, addProduct, getProductById, customProducts, setCustomProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => {
  const ctx = useContext(ProductsContext);
  if (!ctx) throw new Error("useProducts must be used within ProductsProvider");
  return ctx;
};
