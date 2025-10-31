"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaHeart, FaSyncAlt, FaShoppingBag, FaSearch } from "react-icons/fa";
import { useCart } from "@/app/context/CartContext";
import TopBar from "@/app/components/navbar/TopBar";
import Logo from "@/app/components/navbar/Logo";
import SearchBar from "@/app/components/navbar/SearchBar";
import NavLinks from "@/app/components/navbar/NavLink";
import MobileMenu from "@/app/components/navbar/MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCart();

  const navLinks = [
    { href: "/myapp", label: "Home" },
    { href: "/myapp/about", label: "About" },
    { href: "/myapp/products", label: "Products" },
    { href: "/myapp/contact", label: "Contact us" },
    { href: "/myapp/faq", label: "FAQ" },
    { href: "/myapp/support", label: "Support" },
  ];

  const customerHelpLinks = [
    { href: "/myapp/faq", label: "FAQ" },
    { href: "/myapp/support", label: "Support" },
  ];

  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <TopBar />

      <div className="bg-red-800 flex items-center justify-between px-4 sm:px-6 py-3 lg:py-4">
        {/* Logo + Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-red-700 rounded-md transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
          <Logo />
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-8">
          <SearchBar />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Mobile Search */}
          <button
            className="md:hidden text-white p-2 hover:bg-red-700 rounded-md transition-colors"
            aria-label="Open search"
          >
            <FaSearch size={20} />
          </button>

          {/* Cart */}
          <Link
            href="/myapp/cart"
            className="text-white p-2 hover:text-red-300 rounded-md transition-colors relative"
            aria-label="View cart"
          >
            <FaShoppingBag size={20} />
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-red-800 rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
                {getCartCount()}
              </span>
            )}
          </Link>

          {/* Wishlist */}
          <Link
            href="/myapp/wishlist"
            className="text-white p-2 hover:text-red-300 rounded-md transition-colors hidden sm:block"
            aria-label="View wishlist"
          >
            <FaHeart size={20} />
          </Link>

          {/* Refresh / Sync */}
          <button
            className="text-white p-2 hover:text-red-300 rounded-md transition-colors hidden sm:block"
            aria-label="Refresh page"
          >
            <FaSyncAlt size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden bg-white border-b border-gray-200 px-4 py-3">
        <SearchBar />
      </div>

      {/* Navigation Links */}
      <NavLinks navLinks={navLinks} customerHelpLinks={customerHelpLinks} />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        navLinks={navLinks}
        customerHelpLinks={customerHelpLinks}
        onClose={() => setIsMenuOpen(false)}
      />
    </header>
  );
}