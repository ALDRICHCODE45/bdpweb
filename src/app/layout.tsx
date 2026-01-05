import type { Metadata } from "next";
import { Baskervville } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

const baskervville = Baskervville({
  subsets: ["latin"],
  variable: "--font-baskervville",
  display: "auto",
});

export const metadata: Metadata = {
  title: "GlobalServ Jurídico",
  description: "Despacho jurídico especializado en asesoría legal integral para empresas nacionales e internacionales. Áreas de práctica: Corporativo, Litigio, Fiscal, Bienes Raíces, Laboral, Propiedad Intelectual, Comercio Exterior y Energía.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${baskervville.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
