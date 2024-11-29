import type { Metadata } from "next";

import "./globals.css";
import { poppins } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Jhonatan | Shop",
  description: "Tienda virual de productos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
