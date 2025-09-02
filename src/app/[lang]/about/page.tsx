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
    title: "About Us - Lagrange Engineering | Romanian Technology Company",
    description: "Learn more about Lagrange Engineering, the Romanian technology company offering innovative digital solutions and quality web development.",
    keywords: "about Lagrange Engineering, technology company Romania, development team, company history",
    openGraphTitle: "About Us - Lagrange Engineering | Romanian Technology Company",
    openGraphDescription: "Learn more about Lagrange Engineering, the Romanian technology company offering innovative digital solutions and quality web development.",
  },
  ro: {
    title: "Despre Noi - Lagrange Engineering | Companie Română de Tehnologie",
    description: "Află mai multe despre Lagrange Engineering, compania română de tehnologie care oferă soluții digitale inovatoare și dezvoltare web de calitate.",
    keywords: "despre Lagrange Engineering, companie tehnologie România, echipa dezvoltare, istoric companie",
    openGraphTitle: "Despre Noi - Lagrange Engineering | Companie Română de Tehnologie",
    openGraphDescription: "Află mai multe despre Lagrange Engineering, compania română de tehnologie care oferă soluții digitale inovatoare și dezvoltare web de calitate.",
  },
};

interface AboutPageProps {
  params: { lang: string };
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
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

export default async function AboutPage({ params }: AboutPageProps) {
  const lang = (await params).lang as SupportedLanguage;
  
  if (!supportedLanguages.includes(lang)) {
    notFound();
  }
  
  const content = contentByLang[lang];
  
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-site">
        {/* About page content removed - ready for custom UI library implementation */}
      </div>
    </div>
  );
} 