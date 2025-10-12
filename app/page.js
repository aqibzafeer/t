"use client";
import Button from "@/components/navbar/Button";
import Link from "next/link";

// ✅ Importing icons from React Icons
import { FaLeaf, FaSpa, FaHeart, FaMugHot } from "react-icons/fa";
import { GiHerbsBundle, GiTeapot } from "react-icons/gi";
import { MdLocalDrink } from "react-icons/md";
import { TbPlant } from "react-icons/tb";

export default function Home() {
  return (
    <>
      {/* 🏡 Hero Section */}
      <div
        className="relative w-full h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-section-bg.jpg')" }}
      >
        <div className="relative z-10 max-w-2xl text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Healthy Beverage
          </h1>
          <p className="text-lg md:text-xl text-gray-200 my-5 drop-shadow-md">
            Our wellness journeys begin as small steps which become straightforward over time.
            Regular consumption of two cups of Ambala Tea every day assists in supporting your health foundation.
          </p>
          <Button href="/">About Us</Button>
        </div>
      </div>

      {/* 🌿 About Us Section */}
      <section className="w-full bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src="/about.webp"
              alt="Our Products"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4 flex items-center gap-2">
              <FaLeaf className="text-red-700" /> About Us
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Ambala Tea, we believe wellness starts with a single sip. Our teas are crafted
              with nature’s finest herbs, providing the nourishment your body needs to thrive
              every day. Regular consumption of two cups of Ambala Tea every day assists in
              supporting your health foundation.
            </p>
          </div>
        </div>
      </section>

      {/* 📖 Our Story */}
      <section className="w-full bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4 flex items-center gap-2">
              <GiTeapot className="text-red-700" /> Our Story
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our journey began with a passion for wellness and the art of brewing tea.
              Each cup of Ambala Tea carries the warmth of tradition and the purity of
              natural ingredients — perfect for energizing your mornings and calming your evenings.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/about.webp"
              alt="Our Products"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ❤️ Mission & Values */}
      <div className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-4 flex justify-center items-center gap-2">
            <FaHeart className="text-red-700" /> Our Mission & Values
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We believe that good health and great taste can go hand in hand. Our mission is to
            create natural blends that nurture your body, calm your mind, and refresh your spirit.
          </p>
        </div>

        {/* 3 Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Purity",
              desc: "We use only natural ingredients, free from additives or artificial flavors.",
              icon: <GiHerbsBundle className="text-red-700 text-5xl mx-auto" />,
            },
            {
              title: "Tradition",
              desc: "We honor the timeless art of tea making passed down through generations.",
              icon: <GiTeapot className="text-red-700 text-5xl mx-auto" />,
            },
            {
              title: "Wellness",
              desc: "Each blend is crafted to boost health, energy, and inner balance.",
              icon: <FaSpa className="text-red-700 text-5xl mx-auto" />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-red-50 hover:bg-red-100 transition-colors duration-300 p-8 rounded-2xl shadow-md text-center"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-red-900 mt-4 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🍵 Products Section */}
      <section className="w-full py-16 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4 flex justify-center items-center gap-2">
            <MdLocalDrink className="text-red-700" /> Our Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our range of premium teas and wellness products designed to rejuvenate your body and calm your mind.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Green Tea", icon: <FaLeaf className="text-red-700 text-5xl" /> },
            { name: "Black Tea", icon: <FaMugHot className="text-red-700 text-5xl" /> },
            { name: "Herbal Tea", icon: <TbPlant className="text-red-700 text-5xl" /> },
            { name: "Special Blend", icon: <GiTeapot className="text-red-700 text-5xl" /> },
          ].map((product, i) => (
            <div
              key={i}
              className="bg-gray-50 hover:bg-red-50 transition-colors duration-300 rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col items-center text-center"
            >
              {product.icon}
              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm">
                Experience the authentic taste and aroma of {product.name}.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 🌸 CTA Section */}
      <div className="relative bg-red-900 py-16 px-6 md:px-12 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 flex justify-center items-center gap-2">
          <FaHeart /> Join Our Tea Journey
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-200">
          Experience the purity of nature in every sip. Explore our blends and discover your new favorite tea today.
        </p>

        <Link
          href="/products"
          className="inline-block bg-white text-red-900 font-semibold px-6 py-3 rounded-full shadow hover:bg-red-100 transition duration-300"
        >
          Explore Our Products
        </Link>
      </div>
    </>
  );
}
