// app/login/page.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function LoginPage() {
  const router = useRouter();
  const { user, login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  if (user) router.push("/dashboard");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      router.push("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800"> Login </h1>
        {error && <p className="text-red-500 text-sm mb-3 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1"> Email</label>
            <input type="email" placeholder="Enter your email" className="w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-red-900" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>

          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-1"> Password </label>
            <input type={showPassword ? "text" : "password"} placeholder="Enter your password" className="w-full border border-gray-300 rounded-xl p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-red-900" value={password} onChange={(e) => setPassword(e.target.value)}  required />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-[38px] text-gray-500 hover:text-gray-700" >
              {showPassword ? (<AiOutlineEyeInvisible size={22} />) : ( <AiOutlineEye size={22} /> )}
            </button>
          </div>

          <button type="submit" className="w-full bg-red-900 hover:bg-red-600 text-white font-semibold py-2 rounded-xl transition duration-200" > Login </button>
        </form>
      </div>
    </div>
  );
}
