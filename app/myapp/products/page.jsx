"use client";
import Link from "next/link";
import { useProducts } from "@/app/context/ProductsContext";

export default function ProductsPage() {
  const { products } = useProducts();
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-red-800 mb-3">   Our Tea Collection </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">  Discover our handpicked teas made with love and tradition. Each blend offers a unique flavor to refresh your body and mind. </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {products.map((p) => (
          <div key={p.id}  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col" >
            <div className="h-56 w-full overflow-hidden">
              <img src={p.image} alt={p.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
            </div>

            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-red-900 mb-2">{p.name} </h2>
                <p className="text-gray-600 text-sm leading-relaxed"> {p.short}</p>
              </div>

              <div className="mt-6">
                <Link href={`/products/${p.id}`} className="inline-block bg-red-800 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors" >
                  Buy Now 
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
