import "./globals.css";
import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";
import { Analytics } from "@vercel/analytics/next"
import { AuthProvider } from "@/app/context/AuthContext";


export const metadata = {
  title: "Ambala",
  description: "Ambala Tea storefront built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
         <AuthProvider>  <Analytics/>
          <Header />
            <main className="min-h-screen">{children}</main>
          <Footer />
          </AuthProvider>
      </body>
    </html>
  );
}
