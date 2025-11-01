"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useProducts } from "@/app/context/ProductsContext";

export default function EditProductPage({ params }) {
  const { id } = params;
  const router = useRouter();
  const { getProductById, updateProduct } = useProducts();
  const [form, setForm] = useState(null);

  useEffect(() => {
    const prod = getProductById(id);
    if (!prod) {
      // not found or base product
      setForm(null);
      return;
    }
    setForm({ name: prod.name || "", price: prod.price || "", short: prod.short || "", description: prod.description || "", image: prod.image || "", ingredients: prod.ingredients || "" });
  }, [id, getProductById]);

  if (!form) {
    return (
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold text-red-900 mb-4">Cannot edit this product</h1>
        <p className="text-gray-600">Either the product doesn't exist or it's a base product (base products cannot be edited). You can add a new custom product instead.</p>
      </section>
    );
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const ok = updateProduct(id, { ...form, price: Number(form.price) || 0 });
    if (!ok) {
      alert("Only custom products can be updated.");
      return;
    }
    router.push("/dashboard/products");
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-red-900 mb-6">Edit Product</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input name="name" value={form.name} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded p-2" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input name="price" value={form.price} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded p-2" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Short description</label>
          <input name="short" value={form.short} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded p-2" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Full description</label>
          <textarea name="description" value={form.description} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded p-2" rows={4} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input name="image" value={form.image} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded p-2" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Ingredients</label>
          <input name="ingredients" value={form.ingredients} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded p-2" />
        </div>

        <div className="flex items-center gap-3">
          <button type="submit" className="bg-amber-500 text-white px-4 py-2 rounded-full">Save Changes</button>
          <button type="button" onClick={() => router.push("/dashboard/products")} className="px-4 py-2 rounded-full border">Cancel</button>
        </div>
      </form>
    </section>
  );
}
