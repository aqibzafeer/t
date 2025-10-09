"use client";
import Link from "next/link";

export default function NavLink({ href, children, onClick, className = "" }) {
  return (
    <Link href={href} onClick={onClick} className={`relative px-4 py-2 text-sm font-medium text-white hover:text-gray-300 transition-colors duration-200 group ${className}`}>
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}
