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
      {
        url: "/og-img.webp",
        width: 1200,
        height: 630,
        alt: "Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web",
        type: "image/webp",
      },
      {
        url: "/og-img.webp",
        width: 800,
        height: 600,
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
    site: "@lagrangeengineering",
  },
  other: {
    // LinkedIn specific
    "linkedin:owner": "lagrangeengineering",
    "linkedin:site": "lagrangeengineering",
    
    // WhatsApp specific
    "whatsapp:title": "Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web",
    "whatsapp:description": "Lagrange Engineering este o companie română de tehnologie care oferă dezvoltare web, aplicații personalizate și soluții digitale de înaltă calitate.",
    "whatsapp:image": "/og-img.webp",
    
    // Telegram specific
    "telegram:title": "Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web",
    "telegram:description": "Lagrange Engineering este o companie română de tehnologie care oferă dezvoltare web, aplicații personalizate și soluții digitale de înaltă calitate.",
    "telegram:image": "/og-img.webp",
    
    // Discord specific
    "discord:title": "Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web",
    "discord:description": "Lagrange Engineering este o companie română de tehnologie care oferă dezvoltare web, aplicații personalizate și soluții digitale de înaltă calitate.",
    "discord:image": "/og-img.webp",
    
    // Additional Open Graph properties
    "og:image:width": "1920",
    "og:image:height": "888",
    "og:image:type": "image/webp",
    "og:image:secure_url": "https://lagrangeengineering.ro/og-img.webp",
    
      // Article specific (for blog posts if any)
      "article:author": "Lagrange Engineering",
      "article:publisher": "https://lagrangeengineering.ro",
      "article:section": "Technology",
      "article:tag": ["web development", "custom applications", "digital solutions"],
    
    // Business specific
    "business:contact_data:street_address": "Romania",
    "business:contact_data:locality": "Romania",
    "business:contact_data:country_name": "Romania",
    
    // Mobile app specific
    "al:web:url": "https://lagrangeengineering.ro",
    "al:web:should_fallback": "true",
    
    // Additional meta tags for better SEO
    "theme-color": "#000000",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
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
      <head>
        {/* Additional meta tags for comprehensive platform support */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Lagrange Engineering" />
        <meta name="application-name" content="Lagrange Engineering" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#000000" />
        
        {/* Additional Open Graph tags */}
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="888" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:secure_url" content="https://lagrangeengineering.ro/og-img.webp" />
        
        {/* Platform-specific meta tags */}
        <meta name="linkedin:owner" content="lagrangeengineering" />
        <meta name="linkedin:site" content="lagrangeengineering" />
        
        {/* WhatsApp specific */}
        <meta property="whatsapp:title" content="Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web" />
        <meta property="whatsapp:description" content="Lagrange Engineering este o companie română de tehnologie care oferă dezvoltare web, aplicații personalizate și soluții digitale de înaltă calitate." />
        <meta property="whatsapp:image" content="/og-img.webp" />
        
        {/* Telegram specific */}
        <meta property="telegram:title" content="Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web" />
        <meta property="telegram:description" content="Lagrange Engineering este o companie română de tehnologie care oferă dezvoltare web, aplicații personalizate și soluții digitale de înaltă calitate." />
        <meta property="telegram:image" content="/og-img.webp" />
        
        {/* Discord specific */}
        <meta property="discord:title" content="Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web" />
        <meta property="discord:description" content="Lagrange Engineering este o companie română de tehnologie care oferă dezvoltare web, aplicații personalizate și soluții digitale de înaltă calitate." />
        <meta property="discord:image" content="/og-img.webp" />
        
        {/* Additional SEO meta tags */}
        <meta name="geo.region" content="RO" />
        <meta name="geo.country" content="Romania" />
        <meta name="geo.placename" content="Romania" />
        <meta name="ICBM" content="45.9432, 24.9668" />
        <meta name="DC.title" content="Lagrange Engineering" />
        <meta name="DC.creator" content="Lagrange Engineering" />
        <meta name="DC.subject" content="Technology, Web Development, Digital Solutions" />
        <meta name="DC.description" content="Lagrange Engineering este o companie română de tehnologie care oferă dezvoltare web, aplicații personalizate și soluții digitale de înaltă calitate." />
        <meta name="DC.publisher" content="Lagrange Engineering" />
        <meta name="DC.contributor" content="Lagrange Engineering" />
        <meta name="DC.date" content="2024" />
        <meta name="DC.type" content="Text" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://lagrangeengineering.ro" />
        <meta name="DC.language" content="ro" />
        <meta name="DC.rights" content="© 2024 Lagrange Engineering" />
        <meta name="DC.coverage" content="Romania" />
        <meta name="DC.relation" content="https://lagrangeengineering.ro" />
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
