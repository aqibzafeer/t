import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { CartProvider } from "@/app/context/CartContext";
import { ProductsProvider } from "@/app/context/ProductsContext";

export const metadata = {
  title: "Ambala Tea - Premium Organic Tea Collection",
  description:
    "Discover Ambala Tea's premium organic tea collection. Handpicked leaves, traditional methods, and natural wellness in every cup.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProductsProvider>
          <CartProvider>
            <Analytics />
            <main className="min-h-screen">{children}</main>
          </CartProvider>
        </ProductsProvider>
      </body>
    </html>
  );
}
