"use client";
import Image from "next/image";
import Link from "next/link";

export default function Logo({  title = "LOGO",  href = "/",  imageSrc = "/logo.png",  imageAlt = "Logo",}) {
  return (
    <Link href={href} className="flex items-center space-x-3 group">
      <div className="w-14 h-14 flex items-center justify-center overflow-hidden rounded-lg">
        <Image src={imageSrc} alt={imageAlt} width={56} height={56} className="object-contain" priority />
      </div>
      <span className="font-bold text-2xl text-white group-hover:text-gray-300 transition-colors duration-300"> {title} </span>
    </Link>
  );
}
