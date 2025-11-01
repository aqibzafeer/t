"use client";
import React, { useState } from "react";
import { useProducts } from "@/app/context/ProductsContext";
import { useCart } from "@/app/context/CartContext";

export default function ProductPage({ params }) {
  const resolvedParams = React.use(params);
  const { id } = resolvedParams;
  const { products, getProductById } = useProducts();
  const product = getProductById(id) || products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const [mainImage, setMainImage] = useState(product?.image);
  const increaseQty = () => setQuantity((x) => x + 1);
  const decreaseQty = () => setQuantity((x) => (x > 1 ? x - 1 : 1));

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold text-red-800 mb-4">
          Product Not Found
        </h1>
        <p className="text-gray-700">No product with ID: {id}</p>
      </div>
    );
  }

  const images = [
    product.image,
    "/about-1.webp",
    "/about-2.webp",
    "/about-3.webp",
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <img            src={mainImage}            alt={product.name}            className="w-full rounded-xl shadow-lg object-cover mb-4"          />

          <div className="flex gap-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setMainImage(img)}
                className={`border rounded overflow-hidden ${
                  mainImage === img ? "border-red-800" : "border-gray-300"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx}`}
                  className="w-20 h-20 object-cover hover:scale-105 transition-transform duration-200"
                />
              </button>
            ))}
          </div>
        </div>

          <div>
            <h1 className="text-4xl font-bold text-red-900 mb-4">{product.name}</h1>

            <div className="mb-6">
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">
                Short Description
              </p>
              <p className="text-lg text-gray-700">{product.short}</p>
            </div>

            <div className="mb-6">
              <p className="text-2xl font-semibold text-red-800 mb-4">
                Rs.{product.price}
              </p>
            </div>

            <div className="mb-6">
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">
                Full Description
              </p>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-gray-600">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                <button
            onClick={decreaseQty}
            className="px-3 py-1 text-lg bg-gray-100 hover:bg-gray-200"
                >
            −
                </button>
                <span className="px-4 py-1 text-md font-medium">{quantity}</span>
                <button
            onClick={increaseQty}
            className="px-3 py-1 text-lg bg-gray-100 hover:bg-gray-200"
                >
            +
                </button>
              </div>
            </div>

            <button
              onClick={() => addItem({ ...product, price: Number(product.price) || 0 }, quantity)}
              className="mt-2 bg-red-800 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-red-700 transition-colors"
            >
              Add {quantity} to Cart
            </button>
          </div>
              </div>

              {/* Ingredients */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-red-900 mb-4">Ingredients</h2>
        <p className="text-gray-700">{product.ingredients || "N/A"}</p>
      </div>

      {/* Specifications */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-red-900 mb-4">Specifications</h2>
        <ul className="list-disc list-inside text-gray-700">
          {product.specifications?.length > 0 ? (
            product.specifications.map((spec, index) => (
              <li key={index}>
                <strong>{spec.key}:</strong> {spec.value}
              </li>
            ))
          ) : (
            <li>No specifications listed.</li>
          )}
        </ul>
      </div>
    </section>
  );
}
