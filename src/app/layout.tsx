import type { Metadata } from "next";
import { Livvic } from "next/font/google";
import "./globals.css";

const livvic = Livvic({
  variable: "--font-livvic",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Teacher Esther",
  description: "Aulas de inglês com a Teacher Esther",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${livvic.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}