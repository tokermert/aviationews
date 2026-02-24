import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Plane } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aviation Pulse | Daily Industry Newsletter",
  description: "Modern aviation and airport operations insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <header className="fixed top-0 left-0 right-0 h-16 bg-aviation-navy text-white z-50 flex items-center px-6 justify-between shadow-lg">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-aviation-accent/20 p-2 rounded-lg group-hover:bg-aviation-accent/30 transition-colors">
              <Plane className="w-6 h-6 text-aviation-accent" />
            </div>
            <span className="text-xl font-bold tracking-tight">AVIATION <span className="text-aviation-accent">PULSE</span></span>
          </Link>
          <nav className="flex items-center gap-8">
            <Link href="/" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors tracking-wide">Bültenler</Link>
            <Link href="/sources" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors tracking-wide">Kaynaklar</Link>
          </nav>
        </header>
        <main className="flex-1 mt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
