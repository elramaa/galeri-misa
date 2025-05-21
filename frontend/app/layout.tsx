import type { Metadata } from "next";
import { Montserrat, Italiana } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-italiana",
});

export const metadata: Metadata = {
  title: "Galeri MISA",
  description: "A place to express your true feelings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${italiana.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
