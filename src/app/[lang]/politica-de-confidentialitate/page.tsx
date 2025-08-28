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
  pageTitle: string;
  content: string;
}> = {
  en: {
    title: "Privacy Policy - Lagrange Engineering",
    description: "Privacy policy of Lagrange Engineering SRL",
    keywords: "privacy policy, Lagrange Engineering, data protection",
    pageTitle: "Privacy Policy",
    content: "Content will be added here.",
  },
  ro: {
    title: "Politica de Confidențialitate - Lagrange Engineering",
    description: "Politica de confidențialitate a Lagrange Engineering SRL",
    keywords: "politica confidențialitate, Lagrange Engineering, protecția datelor",
    pageTitle: "Politica de Confidențialitate",
    content: "Conținutul va fi adăugat aici.",
  },
};

interface PrivacyPolicyPageProps {
  params: { lang: string };
}

export async function generateMetadata({ params }: PrivacyPolicyPageProps): Promise<Metadata> {
  const lang = (await params).lang as SupportedLanguage;
  
  if (!supportedLanguages.includes(lang)) {
    notFound();
  }
  
  const content = contentByLang[lang];
  
  return {
    title: content.title,
    description: content.description,
    keywords: content.keywords,
  };
}

export default async function PrivacyPolicyPage({ params }: PrivacyPolicyPageProps) {
  const lang = (await params).lang as SupportedLanguage;
  
  if (!supportedLanguages.includes(lang)) {
    notFound();
  }
  
  const content = contentByLang[lang];
  
  return (
    <div className="container mx-auto px-8 max-w-site">
      <h1 className="text-3xl font-bold mb-6">{content.pageTitle}</h1>
      <div className="prose max-w-none">
        <p>{content.content}</p>
      </div>
    </div>
  );
} 