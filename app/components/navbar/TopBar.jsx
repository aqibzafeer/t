"use client";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-gray-900 text-white text-sm py-2 px-4 sm:px-6 flex justify-end">
      <Link 
        href="/login" 
        className="flex items-center gap-2 hover:underline transition-colors"
      >
        <FaUser size={14} /> 
        <span className="hidden xs:inline">Login / Register</span>
        <span className="xs:hidden">Account</span>
      </Link>
    </div>
  );
}
