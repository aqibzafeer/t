"use client";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";

const icons = { FaFacebookF,  FaWhatsapp,  FaInstagram,  FaYoutube,};

export default function SocialLinks({ links }) {
  return (
    <div className="mt-8">
      <p className="text-gray-600 mb-3 text-sm">Follow us on:</p>
      <div className="flex items-center gap-4">
        {links.map(({ name, icon, href }) => {
          const Icon = icons[icon];
          return (
            <a  key={name}  href={href}  target="_blank"  rel="noopener noreferrer"  className="p-3 rounded-full bg-red-100 text-red-900 hover:bg-red-900 hover:text-white transition duration-300" aria-label={name}  title={name}>
              <Icon />
            </a>
          );
        })}
      </div>
    </div>
  );
}