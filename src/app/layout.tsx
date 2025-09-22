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
  keywords: "dezvoltare web, aplicații personalizate, soluții digitale, tehnologie, România, Lagrange Engineering, web development Romania, custom applications, digital solutions",
  authors: [{ name: "Lagrange Engineering", url: "https://lagrangeengineering.ro" }],
  creator: "Lagrange Engineering",
  publisher: "Lagrange Engineering",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web",
    description: "Lagrange Engineering este o companie română de tehnologie care oferă dezvoltare web, aplicații personalizate și soluții digitale de înaltă calitate.",
    type: "website",
    locale: "ro_RO",
    siteName: "Lagrange Engineering",
    url: "https://lagrangeengineering.ro",
      images: [
        {
          url: "/og-img.webp",
          width: 1920,
          height: 888,
          alt: "Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web",
          type: "image/webp",
        },
      ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web",
    description: "Lagrange Engineering este o companie română de tehnologie care oferă dezvoltare web, aplicații personalizate și soluții digitale de înaltă calitate.",
    images: ["/og-img.webp"],
    creator: "@lagrangeengineering",
  },
  alternates: {
    canonical: "https://lagrangeengineering.ro",
    languages: {
      'ro': 'https://lagrangeengineering.ro/ro',
      'en': 'https://lagrangeengineering.ro/en',
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  category: 'technology',
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
