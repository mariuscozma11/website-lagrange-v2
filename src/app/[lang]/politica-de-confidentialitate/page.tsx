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
}> = {
  en: {
    title: "Privacy Policy - Lagrange Engineering",
    description: "Privacy policy of Lagrange Engineering SRL",
    keywords: "privacy policy, Lagrange Engineering, data protection",
  },
  ro: {
    title: "Politica de Confidențialitate - Lagrange Engineering",
    description: "Politica de confidențialitate a Lagrange Engineering SRL",
    keywords: "politica confidențialitate, Lagrange Engineering, protecția datelor",
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
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-site">
        {/* Privacy policy content removed - ready for custom UI library implementation */}
      </div>
    </div>
  );
} 