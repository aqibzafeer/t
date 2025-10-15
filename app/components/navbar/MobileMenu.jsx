"use client";
import Link from "next/link";
import { FaHeart, FaSyncAlt } from "react-icons/fa";

export default function MobileMenu({  isOpen,  navLinks,  customerHelpLinks,  onClose,}) {
  return (
    <div
      className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white border-t border-gray-200 ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <nav className="px-4 py-3 space-y-2">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block py-2 px-3 text-gray-800 hover:bg-gray-50 rounded-md transition-colors font-medium"
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}

        <div className="pt-2 border-t border-gray-200">
          <div className="px-3 py-2 text-sm font-semibold text-gray-600">
            Customer Help
          </div>
          {customerHelpLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 px-6 text-gray-600 hover:bg-gray-50 rounded-md transition-colors text-sm"
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="pt-2 border-t border-gray-200 flex flex-col space-y-2">
          <Link
            href="/wishlist"
            className="flex items-center gap-2 py-2 px-3 text-gray-800 hover:bg-gray-50 rounded-md transition-colors text-sm"
            onClick={onClose}
          >
            <FaHeart size={16} /> Wishlist
          </Link>
          <button className="flex items-center gap-2 py-2 px-3 text-gray-800 hover:bg-gray-50 rounded-md transition-colors text-sm text-left">
            <FaSyncAlt size={16} /> Compare
          </button>
        </div>
      </nav>
    </div>
  );
}
