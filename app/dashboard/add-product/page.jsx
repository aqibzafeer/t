"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useProducts } from "@/app/context/ProductsContext";

export default function AddProductPage() {
  const router = useRouter();
  const { addProduct } = useProducts();
  const [form, setForm] = useState({ name: "", price: "", short: "", description: "", image: "", ingredients: "" });
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const product = {
        name: form.name,
        price: Number(form.price) || 0,
        short: form.short,
        description: form.description,
        image: form.image || "/about.webp",
        ingredients: form.ingredients || "",
        specifications: [],
      };

      const created = addProduct(product);
      // navigate to dashboard product list or view new product
  router.push("/products");
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-red-900 mb-6">Add Product</h1>

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
          <button type="submit" disabled={saving} className="bg-red-800 text-white px-4 py-2 rounded-full">{saving ? "Saving..." : "Add Product"}</button>
          <button type="button" onClick={() => router.push("/products")} className="px-4 py-2 rounded-full border">Cancel</button>
        </div>
      </form>
    </section>
  );
}
