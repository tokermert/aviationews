import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Plane } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aviation Pulse | Weekly Industry Newsletter",
  description: "Aviation and airport industry weekly newsletter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 text-black z-50 flex items-center px-4 md:px-6 justify-between shadow-sm">
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="bg-aviation-navy p-1.5 md:p-2 rounded-lg group-hover:bg-aviation-navy/90 transition-colors">
              <Plane className="w-5 h-5 md:w-6 md:h-6 text-aviation-accent" />
            </div>
            <span className="text-base md:text-lg font-bold tracking-tight text-black">AVIATION <span className="text-aviation-navy">PULSE</span></span>
          </Link>
          <nav className="flex items-center gap-4 md:gap-8">
            <Link href="/" className="text-[10px] md:text-xs font-bold text-black hover:text-aviation-navy transition-colors tracking-wide uppercase">Bültenler</Link>
            <Link href="/sources" className="text-[10px] md:text-xs font-bold text-black hover:text-aviation-navy transition-colors tracking-wide uppercase">Kaynaklar</Link>
          </nav>
        </header>
        <main className="flex-1 mt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
