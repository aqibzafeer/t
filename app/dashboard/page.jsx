"use client";

import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
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

export default function DashboardLayout({ children }) {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  if (!user) {
    router.push("/login");
    return null;
  }

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-green-700 text-white p-4 flex flex-col transition-all duration-300 ease-in-out z-50
          ${collapsed ? "w-20" : "w-64"}`}
      >
        {/* Header */}
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

        {/* Navigation Menu */}
        <nav className="flex flex-col space-y-3 flex-1">
          <SidebarLink
            href="/dashboard"
            icon={<FaHome />}
            label="Main Dashboard"
            collapsed={collapsed}
          />
          <SidebarLink
            href="/dashboard/products"
            icon={<FaBoxOpen />}
            label="Product List"
            collapsed={collapsed}
          />
          <SidebarLink
            href="/dashboard/add-product"
            icon={<FaPlusCircle />}
            label="Add Product"
            collapsed={collapsed}
          />
          <SidebarLink
            href="/dashboard/settings"
            icon={<FaCog />}
            label="Settings"
            collapsed={collapsed}
          />
          <SidebarLink
            href="/dashboard/profile"
            icon={<FaUser />}
            label="Profile"
            collapsed={collapsed}
          />
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

      {/* Main content */}
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
      className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-green-800 transition"
    >
      <span className="text-lg">{icon}</span>
      {!collapsed && <span className="text-sm font-medium">{label}</span>}
    </Link>
  );
}
