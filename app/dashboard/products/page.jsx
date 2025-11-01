"use client";

import { useProducts } from "@/app/context/ProductsContext";
import Link from "next/link";

export default function DashboardProductsPage() {
  const { products, deleteProduct } = useProducts();

  const handleDelete = (id) => {
    if (!id) return;
    if (!confirm("Are you sure you want to delete this product? This cannot be undone.")) return;
    const ok = deleteProduct(id);
    if (!ok) alert("Only custom products can be deleted from dashboard.");
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-red-900">Products (Dashboard)</h1>
        <Link href="/dashboard/add-product" className="bg-red-800 text-white px-4 py-2 rounded-full">Add Product</Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => {
          const isCustom = String(p.id).startsWith("c_");
          return (
            <div key={p.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-44 w-full overflow-hidden">
                <img src={p.image || "/about.webp"} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-red-900">{p.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{p.short}</p>
                <p className="text-red-800 font-bold">Rs.{p.price}</p>

                <div className="mt-4 flex gap-2">
                  {isCustom ? (
                    <>
                      <Link href={`/dashboard/products/${p.id}/edit`} className="px-3 py-1 bg-amber-500 text-white rounded">Edit</Link>
                      <button onClick={() => handleDelete(p.id)} className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
                    </>
                  ) : (
                    <div className="text-xs text-gray-500 italic">Base product — cannot edit/delete</div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
