import { use } from "react";

export default function ProductPage({ params }) {
  const { id } = params;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-semibold mb-4">Product {id}</h1>
      <p className="text-gray-700">Details for product {id} will appear here.</p>
    </div>
  );
}
