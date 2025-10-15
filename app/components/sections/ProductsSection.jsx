import Image from "next/image";
import Link from "next/link";
import { MdLocalDrink } from "react-icons/md";
import Button from "../ui/Button";

export default function ProductsSection({ 
  products, 
  title = "Our Products",
  description = "Explore our handpicked premium teas crafted to rejuvenate your body and calm your mind.",
  showViewAll = true,
  limit = 3
}) {
  const displayedProducts = products.slice(0, limit);

  return (
    <section className="w-full py-16 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4 flex items-center justify-center gap-2">
          <MdLocalDrink className="text-red-700" /> {title}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col hover:scale-105"
          >
            <div className="h-44 w-full overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 flex flex-col flex-grow justify-between text-center">
              <h3 className="text-lg font-semibold text-red-900 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{product.short}</p>
              <Link
                href={`/products/${product.id}`}
                className="text-sm font-medium text-red-700 hover:text-red-900 transition"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}

        {showViewAll && (
          <div className="flex flex-col justify-center items-center bg-red-50 border border-red-100 rounded-xl shadow-inner p-6 text-center">
            <h3 className="text-xl font-semibold text-red-900 mb-3">Want to see more?</h3>
            <p className="text-gray-600 text-sm mb-5">Discover all our authentic blends and premium teas.</p>
            <Button href="/products" variant="primary">
              Show More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}