"use client";

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-50 text-center">
      <h1 className="text-4xl font-extrabold text-green-700 mb-4">
        Welcome to the Dashboard
      </h1>
      <p className="text-gray-600 text-lg max-w-xl">
        Here’s where you can manage your products, settings, and profile information.
      </p>
    </div>
  );
}
