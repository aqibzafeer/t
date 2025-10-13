"use client";
import NavLink from "@/app/components/navbar/NavLink";
import Button from "@/app/components/navbar/Button";
import { FiShoppingCart } from "react-icons/fi";
import { NAV, SHOP } from "@/app/constants/constants";

export default function Menu({ isMobile = false, onLinkClick }) {
  const menuClass = isMobile
    ? "flex flex-col space-y-2 pt-2"
    : "hidden md:flex items-center space-x-4";

  return (
    <div className={menuClass}>
      {NAV.map((link) => (
        <NavLink key={link.href} href={link.href} onClick={onLinkClick}>
          {link.label}
        </NavLink>
      ))}
      <Button
        href={SHOP.href}
        className={isMobile ? "w-full py-3 mt-2" : ""}
        onClick={onLinkClick}
      >
        {SHOP.label}
      </Button>

  {/* <Button aria-label="Open cart" className={isMobile ? "w-12 py-2 mt-2" : "p-2"}>
    <FiShoppingCart />
  </Button> */}
    </div>
  );
}
