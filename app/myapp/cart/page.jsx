"use client";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

export default function CartPage() {
  const { cart, removeItem, updateQuantity, getCartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="bg-white rounded-2xl shadow-lg p-12">
          <h1 className="text-3xl font-bold text-red-900 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven't added any tea to your cart yet.</p>
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
      <h1 className="text-4xl font-bold text-red-900 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row gap-6 items-start"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-red-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.short}</p>
                <p className="text-lg font-semibold text-red-800">
                  Rs.{item.price}
                </p>
              </div>

              <div className="flex flex-col items-end gap-4">
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 hover:text-red-800 transition-colors"
                  aria-label="Remove item"
                >
                  <FaTrash size={18} />
                </button>

                <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <FaMinus size={12} />
                  </button>
                  <span className="px-4 py-2 font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <FaPlus size={12} />
                  </button>
                </div>

                <p className="text-sm text-gray-600">
                  Subtotal: <span className="font-semibold">Rs.{(item.price * item.quantity).toFixed(0)}</span>
                </p>
              </div>
            </div>
          ))}

          <button
            onClick={clearCart}
            className="text-red-600 hover:text-red-800 font-medium transition-colors"
          >
            Clear Cart
          </button>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
            <h2 className="text-2xl font-bold text-red-900 mb-6">Order Summary</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal:</span>
                <span>Rs.{getCartTotal().toFixed(0)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Shipping:</span>
                <span>Rs.150</span>
              </div>
              <div className="border-t pt-3 flex justify-between text-xl font-bold text-red-900">
                <span>Total:</span>
                <span>Rs.{(getCartTotal() + 150).toFixed(0)}</span>
              </div>
            </div>

            <Link
              href="/myapp/checkout"
              className="block w-full bg-red-800 text-white text-center px-6 py-3 rounded-full font-medium hover:bg-red-700 transition-colors mb-3"
            >
              Proceed to Checkout
            </Link>

            <Link
              href="/myapp/products"
              className="block w-full text-center text-red-800 hover:text-red-600 font-medium transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}