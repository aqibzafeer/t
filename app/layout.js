// app/layout.js

import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { AuthProvider } from "@/app/context/AuthContext";

export const metadata = {
  title: "Ambala",
  description: "Ambala Tea storefront built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Analytics />
          <main className="min-h-screen">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}



// import "./globals.css";

// export const metadata = {
//   title: "Creative Solution",
//   description: "Next.js App with public and protected routes",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-white text-gray-900">
//         {children}
//       </body>
//     </html>
//   );
// }
