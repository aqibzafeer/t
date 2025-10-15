"use client";
import Image from "next/image";
import Link from "next/link";

export default function Logo({ imageSrc = "/logo.png"}) {
  return (
    <Link   title = "Ambala Tea" href="/" className="flex items-center">
       <Image    src={imageSrc} alt=""   role="presentation"    width={110}  height={40}   className="object-contain" priority        />
    </Link>
  );
}
