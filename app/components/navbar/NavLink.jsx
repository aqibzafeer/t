"use client";
import Link from "next/link";

export default function NavLinks({ navLinks, customerHelpLinks }) {
  return (
    <nav className="hidden lg:flex justify-center gap-8 text-sm font-medium text-gray-800 py-3 border-t border-gray-100">
      {navLinks.map((link) => ( <Link  key={link.href}   href={link.href}      className="hover:text-red-600 transition-colors" >
          {link.label}
        </Link>
      ))}

      <div className="relative group">
        <button className="hover:text-red-600 transition-colors flex items-center gap-1">
          Customer Help <span className="text-xs">▾</span>
        </button>
        <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 min-w-[160px] border border-gray-200 z-10">
          {customerHelpLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="block px-4 py-2 hover:bg-gray-50 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
