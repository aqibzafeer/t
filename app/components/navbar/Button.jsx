"use client";
import Link from "next/link";

export default function Button({ href = "#", children, className = "", onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`bg-white    text-red-800 px-6 py-2 rounded-full text-sm font-medium   hover:from-green-700 hover:to-emerald-600  transition-all duration-200 shadow-lg hover:shadow-xl  transform hover:-translate-y-0.5 ${className}`}>
      {children}
    </Link>
  );
}
