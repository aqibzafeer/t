"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ placeholder = "Search..." }) {
  const [search, setSearch] = useState("");

  return (
    <div className="flex bg-gray-100 flex-1 max-w-2xl border border-gray-300 rounded-md overflow-hidden">
      <input  type="text" placeholder={placeholder}  value={search}   onChange={(e) => setSearch(e.target.value)}  className="w-full px-3 py-2 outline-none bg-transparent" />
      <button className="bg-red-800 text-white px-4 flex items-center gap-2 hover:bg-red-700 transition-colors"> SEARCH <FaSearch size={14} /> </button>
    </div>
  );
}