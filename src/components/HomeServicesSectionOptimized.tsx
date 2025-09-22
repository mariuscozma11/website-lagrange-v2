import ServicesStaticContent from "./ServicesStaticContent";
import { SupportedLanguage } from "@/lib/language";

interface HomeServicesSectionOptimizedProps {
  language: SupportedLanguage;
}

export default function HomeServicesSectionOptimized({ language }: HomeServicesSectionOptimizedProps) {
  // Server-side rendered static content for SEO
  return <ServicesStaticContent language={language} />;
}