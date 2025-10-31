"use client";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function OrderSuccessPage() {
  const orderNumber = `AMB${Date.now().toString().slice(-6)}`;

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
        <FaCheckCircle className="text-green-600 text-6xl mx-auto mb-6" />
        
        <h1 className="text-4xl font-bold text-red-900 mb-4">
          Order Placed Successfully!
        </h1>
        
        <p className="text-gray-600 mb-6">
          Thank you for your order. We've received your order and will process it shortly.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <p className="text-sm text-gray-600 mb-2">Your Order Number</p>
          <p className="text-2xl font-bold text-red-800">{orderNumber}</p>
        </div>

        <div className="space-y-4 text-left mb-8">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-red-800 font-bold">1</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Order Confirmation</h3>
              <p className="text-sm text-gray-600">
                You'll receive an email confirmation shortly with your order details.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-red-800 font-bold">2</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Order Processing</h3>
              <p className="text-sm text-gray-600">
                We'll carefully prepare your order for shipment within 1-2 business days.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-red-800 font-bold">3</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Delivery</h3>
              <p className="text-sm text-gray-600">
                Your order will be delivered to your doorstep within 3-5 business days.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/myapp/products"
            className="bg-red-800 text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition-colors"
          >
            Continue Shopping
          </Link>
          <Link
            href="/myapp"
            className="border-2 border-red-800 text-red-800 px-8 py-3 rounded-full font-medium hover:bg-red-50 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}