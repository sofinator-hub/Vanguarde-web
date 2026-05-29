import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tu Nombre",
  description: "Portafolio creativo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}