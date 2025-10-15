"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaHeart, FaSyncAlt, FaShoppingBag, FaSearch } from "react-icons/fa";
import TopBar from "@/app/components/navbar/TopBar";
import Logo from "@/app/components/navbar/Logo";
import SearchBar from "@/app/components/navbar/SearchBar";
import NavLinks from "@/app/components/navbar/NavLink";
import MobileMenu from "@/app/components/navbar/MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact us" },
  ];

  const customerHelpLinks = [
    { href: "/faq", label: "FAQ" },
    { href: "/support", label: "Support" },
  ];

  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <TopBar />

  
      <div className="bg-red-800 flex items-center justify-between px-4 sm:px-6 py-3 lg:py-4">
        <div className="flex items-center gap-4">
          <button  onClick={() => setIsMenuOpen(!isMenuOpen)}   className="lg:hidden text-white p-2 hover:bg-red-700 rounded-md transition-colors" aria-label="Toggle menu" > {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}  </button>
          <Logo />
        </div>


        <div className="hidden md:flex flex-1 max-w-2xl mx-8"><SearchBar /></div>

        <div className="flex items-center gap-3 sm:gap-4">
          <button className="md:hidden text-white p-2 hover:bg-red-700 rounded-md transition-colors"><FaSearch size={20} /> </button>
          <Link  href="/cart"  className="text-white p-2 hover:text-red-300 rounded-md transition-colors relative" >
          <FaShoppingBag size={20} /> <span className="absolute -top-1 -right-1 bg-white text-red-800 rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold"> 0 </span> </Link>
          <Link href="/wishlist" className="text-white p-2 hover:text-red-300 rounded-md transition-colors hidden sm:block"> <FaHeart size={20} /> </Link>
          <button className="text-white p-2 hover:text-red-300 rounded-md transition-colors hidden sm:block"> <FaSyncAlt size={20} /></button>
        </div>
      </div>


      <div className="md:hidden bg-white border-b border-gray-200 px-4 py-3"> <SearchBar /> </div>
      <NavLinks navLinks={navLinks} customerHelpLinks={customerHelpLinks} />
      <MobileMenu isOpen={isMenuOpen} navLinks={navLinks} customerHelpLinks={customerHelpLinks}  onClose={() => setIsMenuOpen(false)}/>
    </header>
  );
}