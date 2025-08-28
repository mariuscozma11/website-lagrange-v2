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
    title: "Cookie Policy - Lagrange Engineering",
    description: "Cookie policy of Lagrange Engineering SRL",
    keywords: "cookie policy, Lagrange Engineering, cookies, tracking",
    pageTitle: "Cookie Policy",
    content: "Content will be added here.",
  },
  ro: {
    title: "Politica Cookies - Lagrange Engineering",
    description: "Politica cookies a Lagrange Engineering SRL",
    keywords: "politica cookies, Lagrange Engineering, cookies, tracking",
    pageTitle: "Politica Cookies",
    content: "Conținutul va fi adăugat aici.",
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
    <div className="container mx-auto px-4 py-8 max-w-site">
      <h1 className="text-3xl font-bold mb-6">{content.pageTitle}</h1>
      <div className="prose max-w-none">
        <p>{content.content}</p>
      </div>
    </div>
  );
} 