import HeroSectionOne from "@/components/hero-section-demo-1";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Define supported languages
const supportedLanguages = ["en", "ro"] as const;
type SupportedLanguage = typeof supportedLanguages[number];

// Minimal content for metadata only
const contentByLang: Record<SupportedLanguage, {
  title: string;
  description: string;
  keywords: string;
  openGraphTitle: string;
  openGraphDescription: string;
}> = {
  en: {
    title: "Lagrange Engineering - Technology Solutions and Web Development in Romania",
    description: "Lagrange Engineering is a Romanian technology company providing web development, custom applications, and high-quality digital solutions for your business.",
    keywords: "web development Romania, custom applications, digital solutions, technology, Lagrange Engineering",
    openGraphTitle: "Lagrange Engineering - Technology Solutions and Web Development in Romania",
    openGraphDescription: "Lagrange Engineering is a Romanian technology company providing web development, custom applications, and high-quality digital solutions for your business.",
  },
  ro: {
    title: "Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web în România",
    description: "Lagrange Engineering este o companie română de tehnologie care oferă dezvoltare web, aplicații personalizate și soluții digitale de înaltă calitate pentru afacerea ta.",
    keywords: "dezvoltare web România, aplicații personalizate, soluții digitale, tehnologie, Lagrange Engineering",
    openGraphTitle: "Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web în România",
    openGraphDescription: "Lagrange Engineering este o companie română de tehnologie care oferă dezvoltare web, aplicații personalizate și soluții digitale de înaltă calitate pentru afacerea ta.",
  },
};

interface HomePageProps {
  params: { lang: string };
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const lang = (await params).lang as SupportedLanguage;
  
  if (!supportedLanguages.includes(lang)) {
    notFound();
  }
  
  const content = contentByLang[lang];
  
  return {
    title: content.title,
    description: content.description,
    keywords: content.keywords,
    openGraph: {
      title: content.openGraphTitle,
      description: content.openGraphDescription,
    },
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const lang = (await params).lang as SupportedLanguage;
  
  if (!supportedLanguages.includes(lang)) {
    notFound();
  }
  
  const content = contentByLang[lang];
  
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-site">
        {/* Home page content removed - ready for custom UI library implementation */}
        <HeroSectionOne />
      </div>
    </div>
  );
} 