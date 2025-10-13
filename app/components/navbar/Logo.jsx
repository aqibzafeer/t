"use client";
import Image from "next/image";
import Link from "next/link";

export default function Logo({
  title = "Ambala Tea",
  href = "/",
  imageSrc = "/logo.png",
}) {
  return (
    <Link href={href} className="flex items-center space-x-3 group">
      {/* Decorative image since text title is visible */}
      <div className="w-14 h-14 flex items-center justify-center overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt="" // ✅ Empty alt hides from screen readers (prevents duplicate reading)
          role="presentation" // ✅ Marks as decorative
          width={56}
          height={56}
          className="object-contain"
          priority
        />
      </div>

      {/* Visible logo title */}
      <span className="font-bold text-2xl text-white group-hover:text-gray-300 transition-colors duration-300">
        {title}
      </span>
    </Link>
  );
}
