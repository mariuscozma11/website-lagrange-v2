import HeroStaticContent from "./HeroStaticContent";
import { SupportedLanguage } from "@/lib/language";

interface HeroSectionOptimizedProps {
  language: SupportedLanguage;
}

export default function HeroSectionOptimized({ language }: HeroSectionOptimizedProps) {
  // Server-side rendered static content for SEO
  return <HeroStaticContent language={language} />;
}