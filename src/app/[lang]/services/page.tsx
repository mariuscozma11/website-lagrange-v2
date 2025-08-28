import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Define supported languages
const supportedLanguages = ["en", "ro"] as const;
type SupportedLanguage = typeof supportedLanguages[number];

// Language-specific content
const contentByLang: Record<SupportedLanguage, {
  title: string;
  description: string;
  keywords: string;
  openGraphTitle: string;
  openGraphDescription: string;
  pageTitle: string;
  content: string;
}> = {
  en: {
    title: "Services - Lagrange Engineering | Web Development and Custom Applications",
    description: "Discover our web development services, custom applications, and digital solutions. Lagrange Engineering offers complete technological solutions for your business.",
    keywords: "web development services, custom applications, digital solutions, technology, Romania",
    openGraphTitle: "Services - Lagrange Engineering | Web Development and Custom Applications",
    openGraphDescription: "Discover our web development services, custom applications, and digital solutions. Lagrange Engineering offers complete technological solutions for your business.",
    pageTitle: "Our Services",
    content: "Content will be added here.",
  },
  ro: {
    title: "Servicii - Lagrange Engineering | Dezvoltare Web și Aplicații Personalizate",
    description: "Descoperă serviciile noastre de dezvoltare web, aplicații personalizate și soluții digitale. Lagrange Engineering oferă soluții tehnologice complete pentru afacerea ta.",
    keywords: "servicii dezvoltare web, aplicații personalizate, soluții digitale, tehnologie, România",
    openGraphTitle: "Servicii - Lagrange Engineering | Dezvoltare Web și Aplicații Personalizate",
    openGraphDescription: "Descoperă serviciile noastre de dezvoltare web, aplicații personalizate și soluții digitale. Lagrange Engineering oferă soluții tehnologice complete pentru afacerea ta.",
    pageTitle: "Serviciile Noastre",
    content: "Conținutul va fi adăugat aici.",
  },
};

interface ServicesPageProps {
  params: { lang: string };
}

export async function generateMetadata({ params }: ServicesPageProps): Promise<Metadata> {
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

export default async function ServicesPage({ params }: ServicesPageProps) {
  const lang = (await params).lang as SupportedLanguage;
  
  if (!supportedLanguages.includes(lang)) {
    notFound();
  }
  
  const content = contentByLang[lang];
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-site">
      <h1 className="text-3xl font-bold mb-6">{content.pageTitle}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        {content.content}
      </p>
    </div>
  );
} 