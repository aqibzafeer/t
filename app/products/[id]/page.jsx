"use client";

import { useState } from "react";
import { PRODUCTS } from "@/app/lib/products";

export default function ProductPage({ params }) {
  const { id } = params;
  const product = Products.find((p) => p.id === id);

  const [quantity, setQuantity] = useState(1);

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

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Right: Details */}
        <div>
          <h1 className="text-4xl font-bold text-emerald-900 mb-4">
            {product.name}
          </h1>

          <div className="mb-6">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">
              Short Description
            </p>
            <p className="text-lg text-gray-700">{product.short}</p>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">
              Full Description
            </p>
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Quantity Selector */}
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

          {/* Add to Cart */}
          <button className="mt-2 bg-red-800 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors">
            Add {quantity} to Cart
          </button>
        </div>
      </div>

      {/* Extra Info */}
      <div>
        <h2 className="text-2xl font-semibold text-red-900 mt-12 mb-4">
          Ingredients
        </h2>
        <p className="text-gray-700">{product.ingredients || "N/A"}</p>

        <h2 className="text-2xl font-semibold text-red-900 mt-12 mb-4">
          Specifications
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          {product.specifications && product.specifications.length > 0 ? (
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
