"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaTrash, FaShoppingBag } from "react-icons/fa";
import { useCart } from "@/app/context/CartContext";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState([]);
  const { addItem } = useCart();

  useEffect(() => {
    const saved = localStorage.getItem("ambala_wishlist");
    if (saved) {
      setWishlist(JSON.parse(saved));
    }
  }, []);

  const removeFromWishlist = (productId) => {
    const updated = wishlist.filter((item) => item.id !== productId);
    setWishlist(updated);
    localStorage.setItem("ambala_wishlist", JSON.stringify(updated));
  };

  const moveToCart = (product) => {
    addItem(product, 1);
    removeFromWishlist(product.id);
  };

  if (wishlist.length === 0) {
    return (
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="bg-white rounded-2xl shadow-lg p-12">
          <h1 className="text-3xl font-bold text-red-900 mb-4">Your Wishlist is Empty</h1>
          <p className="text-gray-600 mb-8">
            Save your favorite teas to your wishlist and never lose track of them!
          </p>
          <Link
            href="/myapp/products"
            className="inline-block bg-red-800 text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition-colors"
          >
            Browse Our Tea Collection
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-red-900 mb-8">My Wishlist</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-red-900 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                {product.short}
              </p>
              <p className="text-lg font-semibold text-red-800 mb-4">
                Rs.{product.price}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => moveToCart(product)}
                  className="flex-1 bg-red-800 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                >
                  <FaShoppingBag size={14} /> Add to Cart
                </button>
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="px-4 py-2 border-2 border-gray-300 rounded-full hover:border-red-600 hover:text-red-600 transition-colors"
                  aria-label="Remove from wishlist"
                >
                  <FaTrash size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}