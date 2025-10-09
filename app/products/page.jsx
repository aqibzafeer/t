import Link from "next/link";

const PRODUCTS = [
  { id: "1", name: "Masala Chai" },
  { id: "2", name: "Green Tea" },
];

export default function ProductsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-semibold mb-6">Products</h1>
      <ul className="space-y-3">
        {PRODUCTS.map((p) => (
          <li key={p.id}>
            <Link href={`/products/${p.id}`} className="text-blue-600 hover:underline">
              {p.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
