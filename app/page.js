"use client";
import Link from "next/link";
import Button from "@/app/components/navbar/Button";
import { MdLocalDrink } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { HERO, ABOUT, VALUES, CATEGORIES, JOIN } from "@/app/constants/constants";
import { PRODUCTS } from "@/app/lib/products";


const HeroSection = () => (
  <section
    className="relative w-full h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center"
    style={{ backgroundImage: `url(${HERO.background})` }}
  >
    <div className="relative z-10 max-w-2xl text-white">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
        {HERO.title}
      </h1>
      <p className="text-lg md:text-xl text-gray-200 my-5 drop-shadow-md">
        {HERO.description}
      </p>
      <Button href={HERO.buttonHref}>{HERO.buttonText}</Button>
    </div>
  </section>
);


const AboutSection = () => (
  <>
    {ABOUT.map((section, i) => (
      <section key={i} className="w-full bg-gray-50 py-16 px-6 md:px-16">
        <div
          className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${ section.reverse ? "md:flex-row-reverse" : "" }`}
        >
          {!section.reverse && (
            <div className="flex justify-center">
              <img src={section.image} alt={section.title} className="rounded-2xl shadow-lg w-full object-cover"/>
            </div>
          )}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4 flex items-center gap-2">
              {section.icon} {section.title}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {section.text}
            </p>
          </div>
          {section.reverse && (
            <div className="flex justify-center">
              <img
                src={section.image}
                alt={section.title}
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          )}
        </div>
      </section>
    ))}
  </>
);


const ValuesSection = () => (
  <section className="bg-white py-16 px-6 md:px-12">
    <div className="max-w-6xl mx-auto text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-4 flex justify-center items-center gap-2">
        <FaHeart className="text-red-700" /> Our Mission & Values
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        We believe that good health and great taste can go hand in hand. Our
        mission is to create natural blends that nurture your body, calm your
        mind, and refresh your spirit.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {VALUES.map((item, i) => (
        <div
          key={i}
          className="bg-red-50 hover:bg-red-100 transition-colors duration-300 p-8 rounded-2xl shadow-md text-center"
        >
          {item.icon}
          <h3 className="text-xl font-semibold text-red-900 mt-4 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);


const CategoriesSection = () => (
  <section className="w-full py-16 px-6 md:px-16 bg-white">
    <div className="max-w-6xl mx-auto text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4 flex justify-center items-center gap-2">
        <MdLocalDrink className="text-red-700" /> Categories
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Explore our range of premium teas and wellness products designed to
        rejuvenate your body and calm your mind.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {CATEGORIES.map((item, i) => (
        <div
          key={i}
          className="bg-gray-50 hover:bg-red-50 transition-colors duration-300 rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col items-center text-center"
        >
          {item.icon}
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            {item.name}
          </h3>
          <p className="text-gray-600 text-sm">
            Experience the authentic taste and aroma of {item.name}.
          </p>
        </div>
      ))}
    </div>
  </section>
);

const JoinSection = () => (
  <section className="relative bg-red-900 py-16 px-6 md:px-12 text-center text-white">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 flex justify-center items-center gap-2">
      <FaHeart /> {JOIN.title}
    </h2>
    <p className="max-w-2xl mx-auto mb-8 text-gray-200">{JOIN.description}</p>
    <Link
      href={JOIN.buttonHref}
      className="inline-block bg-white text-red-900 font-semibold px-6 py-3 rounded-full shadow hover:bg-red-100 transition duration-300"
    >
      {JOIN.buttonText}
    </Link>
  </section>
);

// ✅ Products Preview Section
const ProductsPreview = () => (
  <section className="w-full py-16 px-6 md:px-16 bg-white">
    <div className="max-w-6xl mx-auto text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4 flex justify-center items-center gap-2">
        <MdLocalDrink className="text-red-700" /> Our Products
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Explore our handpicked premium teas crafted to rejuvenate your body and
        calm your mind.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {PRODUCTS.slice(0, 3).map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
        >
          <div className="h-44 w-full overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
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

      <div className="flex flex-col justify-center items-center bg-red-50 border border-red-100 rounded-xl shadow-inner p-6 text-center">
        <h3 className="text-xl font-semibold text-red-900 mb-3">
          Want to see more?
        </h3>
        <p className="text-gray-600 text-sm mb-5">
          Discover all our authentic blends and premium teas.
        </p>
        <Link
          href="/products"
          className="bg-red-800 text-white px-5 py-2 rounded-full font-medium hover:bg-red-700 transition-colors"
        >
          Show More
        </Link>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <CategoriesSection />
      <JoinSection />
      <ProductsPreview />
    </>
  );
}
