"use client";

import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {
  const { user, logout } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push("/login");
    return null;
  }

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-green-700 text-white p-6 flex flex-col space-y-4">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

        <nav className="flex flex-col space-y-3">
          <Link
            href="/dashboard"
            className="hover:bg-green-800 rounded-lg px-3 py-2 transition"
          >
            Home
          </Link>
          <Link
            href="/dashboard/profile"
            className="hover:bg-green-800 rounded-lg px-3 py-2 transition"
          >
            Profile
          </Link>
          <Link
            href="/dashboard/settings"
            className="hover:bg-green-800 rounded-lg px-3 py-2 transition"
          >
            Settings
          </Link>
        </nav>

        <div className="mt-auto">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white rounded-lg py-2 font-semibold transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
