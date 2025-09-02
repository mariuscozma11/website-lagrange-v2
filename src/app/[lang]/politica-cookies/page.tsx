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
    title: "Cookie Policy - Lagrange Engineering",
    description: "Cookie policy of Lagrange Engineering SRL",
    keywords: "cookie policy, Lagrange Engineering, cookies, tracking",
  },
  ro: {
    title: "Politica Cookies - Lagrange Engineering",
    description: "Politica cookies a Lagrange Engineering SRL",
    keywords: "politica cookies, Lagrange Engineering, cookies, tracking",
  },
};

interface CookiePolicyPageProps {
  params: { lang: string };
}

export async function generateMetadata({ params }: CookiePolicyPageProps): Promise<Metadata> {
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

export default async function CookiePolicyPage({ params }: CookiePolicyPageProps) {
  const lang = (await params).lang as SupportedLanguage;
  
  if (!supportedLanguages.includes(lang)) {
    notFound();
  }
  
  const content = contentByLang[lang];
  
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-site">
        {/* Cookies policy content removed - ready for custom UI library implementation */}
      </div>
    </div>
  );
} 