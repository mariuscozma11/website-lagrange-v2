import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ContactContent from "./contact-content";

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
  params: Promise<{ lang: string }>;
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
  
  return (
    <div className="min-h-screen">
      <PageHeader
        title={{
          en: "Get In Touch",
          ro: "Contactează-ne"
        }}
        subtitle={{
          en: "Ready to start your project? Let's discuss how we can help bring your vision to life.",
          ro: "Gata să începi proiectul tău? Să discutăm cum te putem ajuta să îți realizezi viziunea."
        }}
        height="full"
        showBorders={true}
      />
      <ContactContent />
    </div>
  );
} 