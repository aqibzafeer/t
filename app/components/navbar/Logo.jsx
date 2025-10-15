"use client";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/"   title = "Ambala Tea" className="flex items-center">
       <Image    src={imageSrc} alt=""   role="presentation"    width={110}  height={40}   className="object-contain" priority        />
    </Link>
  );
}
