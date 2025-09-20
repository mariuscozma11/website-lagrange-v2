import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Define supported languages
const supportedLanguages = ["en", "ro"] as const;
type SupportedLanguage = typeof supportedLanguages[number];

// Minimal content for metadata only

interface PrivacyPolicyPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PrivacyPolicyPageProps): Promise<Metadata> {
  const lang = (await params).lang as SupportedLanguage;
  
  if (!supportedLanguages.includes(lang)) {
    notFound();
  }
  
  return {
    title: lang === 'en' ? 'Privacy Policy - Lagrange Engineering' : 'Politica de Confidențialitate - Lagrange Engineering',
    description: lang === 'en' ? 'Privacy policy for Lagrange Engineering website' : 'Politica de confidențialitate pentru site-ul Lagrange Engineering',
  };
}

export default async function PrivacyPolicyPage({ params }: PrivacyPolicyPageProps) {
  const lang = (await params).lang as SupportedLanguage;
  
  if (!supportedLanguages.includes(lang)) {
    notFound();
  }
  
  
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-site">
        {/* Privacy policy content removed - ready for custom UI library implementation */}
      </div>
    </div>
  );
} 