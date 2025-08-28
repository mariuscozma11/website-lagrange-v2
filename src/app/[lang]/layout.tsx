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
    keywords: "web development, custom applications, digital solutions, technology, Romania, Lagrange Engineering",
    authors: [{ name: "Lagrange Engineering" }],
    creator: "Lagrange Engineering",
    publisher: "Lagrange Engineering",
    robots: "index, follow",
    openGraph: {
      title: "Lagrange Engineering - Technology Solutions and Web Development",
      description: "Lagrange Engineering is a Romanian technology company providing web development, custom applications, and high-quality digital solutions.",
      type: "website",
      locale: "en_US",
      siteName: "Lagrange Engineering",
    },
    twitter: {
      card: "summary_large_image",
      title: "Lagrange Engineering - Technology Solutions and Web Development",
      description: "Lagrange Engineering is a Romanian technology company providing web development, custom applications, and high-quality digital solutions.",
    },
    alternates: {
      canonical: "https://lagrangeengineering.ro/en",
    },
  },
  ro: {
    title: "Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web",
    description: "Lagrange Engineering este o companie română de tehnologie care oferă dezvoltare web, aplicații personalizate și soluții digitale de înaltă calitate.",
    keywords: "dezvoltare web, aplicații personalizate, soluții digitale, tehnologie, România, Lagrange Engineering",
    authors: [{ name: "Lagrange Engineering" }],
    creator: "Lagrange Engineering",
    publisher: "Lagrange Engineering",
    robots: "index, follow",
    openGraph: {
      title: "Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web",
      description: "Lagrange Engineering este o companie română de tehnologie care oferă dezvoltare web, aplicații personalizate și soluții digitale de înaltă calitate.",
      type: "website",
      locale: "ro_RO",
      siteName: "Lagrange Engineering",
    },
    twitter: {
      card: "summary_large_image",
      title: "Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web",
      description: "Lagrange Engineering este o companie română de tehnologie care oferă dezvoltare web, aplicații personalizate și soluții digitale de înaltă calitate.",
    },
    alternates: {
      canonical: "https://lagrangeengineering.ro/ro",
    },
  },
};

interface LangLayoutProps {
  children: React.ReactNode;
  params: { lang: string };
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