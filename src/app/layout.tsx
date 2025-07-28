import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Doctor App",
  description: "Simple doctor listing app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Simple Navigation */}
        <nav style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333', textDecoration: 'none' }}>
              Doctor App
            </Link>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <Link href="/" style={{ color: '#333', textDecoration: 'none' }}>Home</Link>
              <Link href="/doctors" style={{ color: '#333', textDecoration: 'none' }}>Doctors</Link>
              <Link href="/about" style={{ color: '#333', textDecoration: 'none' }}>About</Link>
              <Link href="/contact" style={{ color: '#333', textDecoration: 'none' }}>Contact</Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main style={{ minHeight: '80vh', padding: '2rem' }}>
          {children}
        </main>

        {/* Simple Footer */}
        <footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '1rem' }}>
          <p>&copy; 2024 Doctor App. Simple and Easy.</p>
        </footer>
      </body>
    </html>
  );
}
