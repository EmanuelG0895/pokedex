import type { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Pokedex",
  description: "",
  icons: {
    icon: "/images/pokeball.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-primary">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
