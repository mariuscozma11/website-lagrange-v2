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
    title: "Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web",
    description: "Lagrange Engineering este o companie română de tehnologie care oferă dezvoltare web, aplicații personalizate și soluții digitale de înaltă calitate.",
    url: "https://lagrangeengineering.ro",
    siteName: "Lagrange Engineering",
    images: ['/og-img.png'],
    locale: 'ro_RO',
    type: 'website',
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
        {/* Open Graph meta tags */}
        <meta property="og:image" content="https://lagrangeengineering.ro/og-img.png" />
        <meta property="og:site_name" content="Lagrange Engineering" />
        <meta property="og:url" content="https://lagrangeengineering.ro" />
        <meta property="og:title" content="Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web" />
        <meta property="og:description" content="Lagrange Engineering este o companie română de tehnologie care oferă dezvoltare web, aplicații personalizate și soluții digitale de înaltă calitate." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ro_RO" />
        
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://lagrangeengineering.ro/og-img.png" />
        <meta name="twitter:title" content="Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web" />
        <meta name="twitter:description" content="Lagrange Engineering este o companie română de tehnologie care oferă dezvoltare web, aplicații personalizate și soluții digitale de înaltă calitate." />
        <meta name="twitter:site" content="@lagrangeengineering" />
        <meta name="twitter:creator" content="@lagrangeengineering" />
        
        {/* Additional meta tags for better social media support */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web" />
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
