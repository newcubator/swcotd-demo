import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const font = Jost({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Star Wars Character of the Day",
  description: "A case study for HVV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
