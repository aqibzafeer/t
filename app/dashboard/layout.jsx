// app/dashboard/layout.js
"use client";

import Link from "next/link";
import { useState } from "react";
import {  FaHome,  FaBoxOpen,  FaPlusCircle,  FaBars,  FaTimes,} from "react-icons/fa";

const menuItems = [
  { href: "/dashboard", icon: <FaHome />, label: "Main Dashboard" },
  { href: "/dashboard/products", icon: <FaBoxOpen />, label: "Product List" },
  { href: "/dashboard/add-product", icon: <FaPlusCircle />, label: "Add Product" },
];

export default function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside
        className={`fixed top-0 left-0 h-full bg-red-900 text-white p-4 flex flex-col transition-all duration-300 ease-in-out z-50
          ${collapsed ? "w-20" : "w-64"}`}
      >
        <div className="flex items-center justify-between mb-8">
          {!collapsed && (<h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>)}
          <button onClick={() => setCollapsed(!collapsed)}          className="mt-auto flex items-center space-x-2 px-3 py-2 rounded-lg bg-red-500 hover:bg-red-300 transition">
            {collapsed ? <FaBars /> : <FaTimes />}
          </button>
        </div>

        <nav className="flex flex-col space-y-3 flex-1">
          {menuItems.map((item) => ( <SidebarLink   key={item.href} href={item.href} icon={item.icon} label={item.label} collapsed={collapsed}/> ))}
        </nav>
      </aside>

      {/* Main */}
      <main
        className={`flex-1 p-8 transition-all duration-300 ${
          collapsed ? "ml-20" : "ml-64"
        }`}
      >
        {children}
      </main>
    </div>
  );
}

function SidebarLink({ href, icon, label, collapsed }) {
  return (
    <Link
      href={href}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-green-800 transition"
    >
      <span className="text-lg">{icon}</span>
      {!collapsed && <span className="text-sm font-medium">{label}</span>}
    </Link>
  );
}
