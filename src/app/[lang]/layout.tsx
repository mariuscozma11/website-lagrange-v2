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
          url: "/og-img.webp",
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
      images: ["/og-img.webp"],
      creator: "@lagrangeengineering",
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