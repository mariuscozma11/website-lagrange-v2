import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import StructuredData, { organizationData, websiteData } from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lagrangeengineering.ro'),
  title: {
    default: "Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web",
    template: "%s | Lagrange Engineering"
  },
  description: "Lagrange Engineering este o companie română de tehnologie care oferă dezvoltare web, aplicații personalizate și soluții digitale de înaltă calitate.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    images: ['/og-img.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-img.png'],
  },
};

// Route segment options for SSG (applies to all child routes)
export const dynamic = "force-static";
export const revalidate = 86400; // revalidate every 24 hours

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <head>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <StructuredData type="Organization" data={organizationData} />
            <StructuredData type="WebSite" data={websiteData} />
            <NavBar />
            <main className="min-h-screen max-w-site mx-auto">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
