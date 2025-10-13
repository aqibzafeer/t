import "./globals.css";
import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";


export const metadata = {
  title: "Ambala",
  description: "Ambala Tea storefront built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
