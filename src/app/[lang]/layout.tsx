import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Define supported languages
const supportedLanguages = ["en", "ro"] as const;
type SupportedLanguage = typeof supportedLanguages[number];

// Language-specific metadata
const metadataByLang: Record<SupportedLanguage, Metadata> = {
  en: {
    title: "Lagrange Engineering - Technology Solutions and Web Development",
    description: "Lagrange Engineering is a Romanian technology company providing web development, custom applications, and high-quality digital solutions.",
    keywords: "web development Romania, custom applications, digital solutions, technology, Lagrange Engineering, software development, web design",
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
    openGraph: {
      title: "Lagrange Engineering - Technology Solutions and Web Development",
      description: "Lagrange Engineering is a Romanian technology company providing web development, custom applications, and high-quality digital solutions.",
      type: "website",
      locale: "en_US",
      siteName: "Lagrange Engineering",
      url: "https://lagrangeengineering.ro/en",
      images: [
        {
          url: "https://lagrangeengineering.ro/api/og",
          width: 1920,
          height: 888,
          alt: "Lagrange Engineering - Technology Solutions and Web Development",
          type: "image/webp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Lagrange Engineering - Technology Solutions and Web Development",
      description: "Lagrange Engineering is a Romanian technology company providing web development, custom applications, and high-quality digital solutions.",
      images: ["https://lagrangeengineering.ro/og-img.webp"],
      creator: "@lagrangeengineering",
      site: "@lagrangeengineering",
    },
    other: {
      // LinkedIn specific
      "linkedin:owner": "lagrangeengineering",
      "linkedin:site": "lagrangeengineering",
      
      // WhatsApp specific
      "whatsapp:title": "Lagrange Engineering - Technology Solutions and Web Development",
      "whatsapp:description": "Lagrange Engineering is a Romanian technology company providing web development, custom applications, and high-quality digital solutions.",
      "whatsapp:image": "https://lagrangeengineering.ro/og-img.webp",
      
      // Telegram specific
      "telegram:title": "Lagrange Engineering - Technology Solutions and Web Development",
      "telegram:description": "Lagrange Engineering is a Romanian technology company providing web development, custom applications, and high-quality digital solutions.",
      "telegram:image": "https://lagrangeengineering.ro/og-img.webp",
      
      // Discord specific
      "discord:title": "Lagrange Engineering - Technology Solutions and Web Development",
      "discord:description": "Lagrange Engineering is a Romanian technology company providing web development, custom applications, and high-quality digital solutions.",
      "discord:image": "https://lagrangeengineering.ro/og-img.webp",
      
      // Additional Open Graph properties
      "og:image:width": "1920",
      "og:image:height": "888",
      "og:image:type": "image/webp",
      "og:image:secure_url": "https://lagrangeengineering.ro/og-img.webp",
      
      // Article specific
      "article:author": "Lagrange Engineering",
      "article:publisher": "https://lagrangeengineering.ro",
      "article:section": "Technology",
      "article:tag": ["web development", "custom applications", "digital solutions"],
      
      // Business specific
      "business:contact_data:street_address": "Romania",
      "business:contact_data:locality": "Romania",
      "business:contact_data:country_name": "Romania",
      
      // Mobile app specific
      "al:web:url": "https://lagrangeengineering.ro/en",
      "al:web:should_fallback": "true",
      
      // Additional meta tags
      "theme-color": "#000000",
      "msapplication-TileColor": "#000000",
      "msapplication-config": "/browserconfig.xml",
    },
    alternates: {
      canonical: "https://lagrangeengineering.ro/en",
      languages: {
        'en': 'https://lagrangeengineering.ro/en',
        'ro': 'https://lagrangeengineering.ro/ro',
      },
    },
    category: 'technology',
  },
  ro: {
    title: "Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web",
    description: "Lagrange Engineering este o companie română de tehnologie care oferă dezvoltare web, aplicații personalizate și soluții digitale de înaltă calitate.",
    keywords: "dezvoltare web România, aplicații personalizate, soluții digitale, tehnologie, Lagrange Engineering, dezvoltare software, design web",
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
    openGraph: {
      title: "Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web",
      description: "Lagrange Engineering este o companie română de tehnologie care oferă dezvoltare web, aplicații personalizate și soluții digitale de înaltă calitate.",
      type: "website",
      locale: "ro_RO",
      siteName: "Lagrange Engineering",
      url: "https://lagrangeengineering.ro/ro",
      images: [
        {
          url: "https://lagrangeengineering.ro/api/og",
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
      images: ["https://lagrangeengineering.ro/og-img.webp"],
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
      "whatsapp:image": "https://lagrangeengineering.ro/og-img.webp",
      
      // Telegram specific
      "telegram:title": "Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web",
      "telegram:description": "Lagrange Engineering este o companie română de tehnologie care oferă dezvoltare web, aplicații personalizate și soluții digitale de înaltă calitate.",
      "telegram:image": "https://lagrangeengineering.ro/og-img.webp",
      
      // Discord specific
      "discord:title": "Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web",
      "discord:description": "Lagrange Engineering este o companie română de tehnologie care oferă dezvoltare web, aplicații personalizate și soluții digitale de înaltă calitate.",
      "discord:image": "https://lagrangeengineering.ro/og-img.webp",
      
      // Additional Open Graph properties
      "og:image:width": "1920",
      "og:image:height": "888",
      "og:image:type": "image/webp",
      "og:image:secure_url": "https://lagrangeengineering.ro/og-img.webp",
      
      // Article specific
      "article:author": "Lagrange Engineering",
      "article:publisher": "https://lagrangeengineering.ro",
      "article:section": "Technology",
      "article:tag": ["dezvoltare web", "aplicații personalizate", "soluții digitale"],
      
      // Business specific
      "business:contact_data:street_address": "România",
      "business:contact_data:locality": "România",
      "business:contact_data:country_name": "România",
      
      // Mobile app specific
      "al:web:url": "https://lagrangeengineering.ro/ro",
      "al:web:should_fallback": "true",
      
      // Additional meta tags
      "theme-color": "#000000",
      "msapplication-TileColor": "#000000",
      "msapplication-config": "/browserconfig.xml",
    },
    alternates: {
      canonical: "https://lagrangeengineering.ro/ro",
      languages: {
        'ro': 'https://lagrangeengineering.ro/ro',
        'en': 'https://lagrangeengineering.ro/en',
      },
    },
    category: 'technology',
  },
};

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: LangLayoutProps): Promise<Metadata> {
  const lang = (await params).lang as SupportedLanguage;
  
  if (!supportedLanguages.includes(lang)) {
    notFound();
  }
  
  return metadataByLang[lang];
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const lang = (await params).lang as SupportedLanguage;
  
  if (!supportedLanguages.includes(lang)) {
    notFound();
  }
  
  return <>{children}</>;
} 