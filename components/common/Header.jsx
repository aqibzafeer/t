"use client";
import { useState } from "react";
import Logo from "@/components/navbar/Logo";
import MenuButton from "@/components/navbar/MenuButton";
import Menu from "@/components/navbar/Menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-red-800 sticky top-0 z-50 mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <Menu isMobile={false} />
          <MenuButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>

        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? "max-h-64 pb-4" : "max-h-0"}`}>
          <Menu isMobile={true} onLinkClick={() => setIsMenuOpen(false)} />
        </div>
    </header>
  );
}
