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
    openGraph: {
      title: "Lagrange Engineering - Technology Solutions and Web Development",
      description: "Lagrange Engineering is a Romanian technology company providing web development, custom applications, and high-quality digital solutions.",
      url: "https://lagrangeengineering.ro/en",
      siteName: "Lagrange Engineering",
      images: ['/og-img.png'],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Lagrange Engineering - Technology Solutions and Web Development",
      description: "Lagrange Engineering is a Romanian technology company providing web development, custom applications, and high-quality digital solutions.",
      images: ['/og-img.png'],
    },
  },
  ro: {
    title: "Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web",
    description: "Lagrange Engineering este o companie română de tehnologie care oferă dezvoltare web, aplicații personalizate și soluții digitale de înaltă calitate.",
    openGraph: {
      title: "Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web",
      description: "Lagrange Engineering este o companie română de tehnologie care oferă dezvoltare web, aplicații personalizate și soluții digitale de înaltă calitate.",
      url: "https://lagrangeengineering.ro/ro",
      siteName: "Lagrange Engineering",
      images: ['/og-img.png'],
      locale: 'ro_RO',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web",
      description: "Lagrange Engineering este o companie română de tehnologie care oferă dezvoltare web, aplicații personalizate și soluții digitale de înaltă calitate.",
      images: ['/og-img.png'],
    },
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const langTyped = lang as SupportedLanguage;

  if (!supportedLanguages.includes(langTyped)) {
    notFound();
  }

  return metadataByLang[langTyped];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const langTyped = lang as SupportedLanguage;

  if (!supportedLanguages.includes(langTyped)) {
    notFound();
  }

  return <>{children}</>;
}