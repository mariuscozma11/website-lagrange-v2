import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ServicesContent from "./services-content";

// Define supported languages
const supportedLanguages = ["en", "ro"] as const;
type SupportedLanguage = typeof supportedLanguages[number];

// Content for metadata

interface ServicesPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: ServicesPageProps): Promise<Metadata> {
  const lang = (await params).lang as SupportedLanguage;
  
  if (!supportedLanguages.includes(lang)) {
    notFound();
  }
  
  const title = lang === 'en' ? 'Services - Lagrange Engineering | Technology Solutions' : 'Servicii - Lagrange Engineering | Soluții Tehnologice';
  const description = lang === 'en' ? 'Explore our comprehensive technology services including web development, custom applications, and digital solutions.' : 'Explorează serviciile noastre complete de tehnologie incluzând dezvoltare web, aplicații personalizate și soluții digitale.';
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const lang = (await params).lang as SupportedLanguage;
  
  if (!supportedLanguages.includes(lang)) {
    notFound();
  }
  
  return (
    <div className="min-h-screen">
      <PageHeader
        title={{
          en: "Our services",
          ro: "Serviciile noastre"
        }}
        subtitle={{
          en: "Comprehensive technology solutions designed to accelerate your business growth and digital transformation.",
          ro: "Soluții tehnologice complete proiectate pentru a accelera creșterea afacerii tale și transformarea digitală."
        }}
        height="full"
        showBorders={true}
      />
      
      <ServicesContent />
    </div>
  );
}