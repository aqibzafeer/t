"use client";

import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  FaHome,
  FaBoxOpen,
  FaPlusCircle,
  FaCog,
  FaUser,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const menuItems = [
  { href: "/dashboard", icon: <FaHome />, label: "Main Dashboard" },
  { href: "/dashboard/products", icon: <FaBoxOpen />, label: "Product List" },
  { href: "/dashboard/add-product", icon: <FaPlusCircle />, label: "Add Product" },
  { href: "/dashboard/settings", icon: <FaCog />, label: "Settings" },
  { href: "/dashboard/profile", icon: <FaUser />, label: "Profile" },
];

export default function DashboardLayout({ children }) {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  // Redirect user if not logged in
  useEffect(() => {
    if (!user) router.push("/login");
  }, [user, router]);

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  if (!user) return null;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-green-700 text-white p-4 flex flex-col transition-all duration-300 ease-in-out z-50
          ${collapsed ? "w-20" : "w-64"}`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between mb-8">
          {!collapsed && (
            <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-white focus:outline-none text-xl"
          >
            {collapsed ? <FaBars /> : <FaTimes />}
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex flex-col space-y-3 flex-1">
          {menuItems.map((item) => (
            <SidebarLink
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
              collapsed={collapsed}
            />
          ))}
        </nav>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-auto flex items-center space-x-2 px-3 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition"
        >
          <FaSignOutAlt />
          {!collapsed && <span>Logout</span>}
        </button>
      </aside>

      {/* Main Content */}
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
      className="flex items-center space-x-1 px-1 py-2 rounded-lg "
    >
      <span className="text-lg hover:bg-red-800 transition">{icon}</span>
      {!collapsed && <span className="text-sm font-medium">{label}</span>}
    </Link>
  );
}
