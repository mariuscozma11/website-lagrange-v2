import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Define supported languages
const supportedLanguages = ["en", "ro"] as const;
type SupportedLanguage = typeof supportedLanguages[number];

// Minimal content for metadata only

interface CookiePolicyPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: CookiePolicyPageProps): Promise<Metadata> {
  const lang = (await params).lang as SupportedLanguage;
  
  if (!supportedLanguages.includes(lang)) {
    notFound();
  }
  
  return {
    title: lang === 'en' ? 'Cookie Policy - Lagrange Engineering' : 'Politica de Cookie-uri - Lagrange Engineering',
    description: lang === 'en' ? 'Cookie policy for Lagrange Engineering website' : 'Politica de cookie-uri pentru site-ul Lagrange Engineering',
  };
}

export default async function CookiePolicyPage({ params }: CookiePolicyPageProps) {
  const lang = (await params).lang as SupportedLanguage;
  
  if (!supportedLanguages.includes(lang)) {
    notFound();
  }
  
  
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-site">
        {/* Cookies policy content removed - ready for custom UI library implementation */}
      </div>
    </div>
  );
} 