import Link from "next/link";

export default function Button({ 
  href, 
  children, 
  variant = "primary", 
  className = "" 
}) {
  const baseClasses = "inline-block font-semibold px-6 py-3 rounded-full transition-colors duration-300";
  const variantClasses = {
    primary: "bg-red-800 text-white hover:bg-red-700",
    secondary: "bg-white text-red-900 hover:bg-red-100"
  };

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </Link>
  );
}