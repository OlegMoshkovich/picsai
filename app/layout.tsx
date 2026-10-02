import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://picsai.org"),
  title: "PICSAI Symposium",
  description:
    "Probability, Information, Combinatorics and AI Symposium. Third edition, 25 September to 2 October 2026 in Alanya, Türkiye.",
  openGraph: {
    title: "PICSAI",
    description:
      "A gathering for researchers and practitioners exploring the interplay between the foundational fields of machine intelligence.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
