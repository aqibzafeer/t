"use client";
import NavLink from "@/components/navbar/NavLink";
import Button from "@/components/navbar/Button";
import { FiShoppingCart } from "react-icons/fi";
import { NAV_LINKS, SHOP_LINK } from "@/app/constants/constants";

export default function Menu({ isMobile = false, onLinkClick }) {
  const menuClass = isMobile
    ? "flex flex-col space-y-2 pt-2"
    : "hidden md:flex items-center space-x-4";

  return (
    <div className={menuClass}>
      {NAV_LINKS.map((link) => (
        <NavLink key={link.href} href={link.href} onClick={onLinkClick}>
          {link.label}
        </NavLink>
      ))}
      {/* <Button
        href={SHOP_LINK.href}
        className={isMobile ? "w-full py-3 mt-2" : ""}
        onClick={onLinkClick}
      >
        {SHOP_LINK.label}
      </Button> */}

  <Button aria-label="Open cart" className={isMobile ? "w-12 py-2 mt-2" : "p-2"}>
    <FiShoppingCart />
  </Button>
    </div>
  );
}
