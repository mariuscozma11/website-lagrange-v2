import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import PortfolioContent from "./portfolio-content";

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
    title: "Portfolio - Lagrange Engineering | Projects and work completed",
    description: "Explore our portfolio of web projects and custom applications. Lagrange Engineering has created digital solutions for various companies in Romania.",
    keywords: "portfolio web projects, applications completed, Lagrange Engineering work, technology projects Romania",
    openGraphTitle: "Portfolio - Lagrange Engineering | Projects and work completed",
    openGraphDescription: "Explore our portfolio of web projects and custom applications. Lagrange Engineering has created digital solutions for various companies in Romania.",
  },
  ro: {
    title: "Portofoliu - Lagrange Engineering | Proiecte și lucrări realizate",
    description: "Explorează portofoliul nostru de proiecte web și aplicații personalizate. Lagrange Engineering a realizat soluții digitale pentru diverse companii din România.",
    keywords: "portofoliu proiecte web, aplicații realizate, lucrări Lagrange Engineering, proiecte tehnologie România",
    openGraphTitle: "Portofoliu - Lagrange Engineering | Proiecte și lucrări realizate",
    openGraphDescription: "Explorează portofoliul nostru de proiecte web și aplicații personalizate. Lagrange Engineering a realizat soluții digitale pentru diverse companii din România.",
  },
};

interface PortfolioPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PortfolioPageProps): Promise<Metadata> {
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

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const lang = (await params).lang as SupportedLanguage;
  
  if (!supportedLanguages.includes(lang)) {
    notFound();
  }
  
  return (
    <div className="min-h-screen">
      <PageHeader
        title={{
          en: "Our portfolio",
          ro: "Portofoliul nostru"
        }}
        subtitle={{
          en: "Explore our completed projects and discover how we've helped businesses achieve their digital goals.",
          ro: "Explorează proiectele noastre realizate și descoperă cum am ajutat afacerile să își atingă obiectivele digitale."
        }}
        height="full"
        showBorders={true}
      />
      <PortfolioContent />
    </div>
  );
} 