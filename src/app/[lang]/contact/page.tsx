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
    title: "Contact - Lagrange Engineering | Contact Us for Technology Solutions",
    description: "Contact Lagrange Engineering for personalized technology solutions. We are here to help you with your web development and application projects.",
    keywords: "contact Lagrange Engineering, technology solutions, web development Romania, IT consulting",
    openGraphTitle: "Contact - Lagrange Engineering | Contact Us for Technology Solutions",
    openGraphDescription: "Contact Lagrange Engineering for personalized technology solutions. We are here to help you with your web development and application projects.",
  },
  ro: {
    title: "Contact - Lagrange Engineering | Contactează-ne Pentru Soluții Tehnologice",
    description: "Contactează Lagrange Engineering pentru soluții tehnologice personalizate. Suntem aici să te ajutăm cu proiectele tale de dezvoltare web și aplicații.",
    keywords: "contact Lagrange Engineering, soluții tehnologice, dezvoltare web România, consultanță IT",
    openGraphTitle: "Contact - Lagrange Engineering | Contactează-ne Pentru Soluții Tehnologice",
    openGraphDescription: "Contactează Lagrange Engineering pentru soluții tehnologice personalizate. Suntem aici să te ajutăm cu proiectele tale de dezvoltare web și aplicații.",
  },
};

interface ContactPageProps {
  params: { lang: string };
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
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

export default async function ContactPage({ params }: ContactPageProps) {
  const lang = (await params).lang as SupportedLanguage;
  
  if (!supportedLanguages.includes(lang)) {
    notFound();
  }
  
  const content = contentByLang[lang];
  
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-site">
        {/* Contact page content removed - ready for custom UI library implementation */}
      </div>
    </div>
  );
} 