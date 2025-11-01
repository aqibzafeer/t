"use client";
import { useProducts } from "@/app/context/ProductsContext";
import { HERO, ABOUT, VALUES, CATEGORIES, JOIN } from "@/app/constants/constants";
import HeroSection from "@/app/components/sections/HeroSection";
import AboutSection from "@/app/components/sections/AboutSection";
import ValuesSection from "@/app/components/sections/ValuesSection";
import CategoriesSection from "@/app/components/sections/CategoriesSection";
import ProductsSection from "@/app/components/sections/ProductsSection";
import JoinSection from "@/app/components/sections/JoinSection";


export default function Home() {
  const { products } = useProducts();
  return (
    <main className="w-full">
      <HeroSection data={HERO} />
      <AboutSection data={ABOUT} />
      <ValuesSection data={VALUES} />
      <CategoriesSection data={CATEGORIES} />
      <JoinSection data={JOIN} />
      <ProductsSection products={products} />
    </main>
  );
}