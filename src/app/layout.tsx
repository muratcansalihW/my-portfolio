import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";
// font vs importların varsa yine bırak

export const metadata: Metadata = {
  title: "Muratcan Portfolio",
  description: "Frontend Developer Portfolio",
  icons: {
    icon: "/favicon.png", // daha önce eklediğimiz favicon varsa
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <LoadingScreen />
        <Navbar />
        <main className="bg-gray-100">{children}</main>
      </body>
    </html>
  );
}
