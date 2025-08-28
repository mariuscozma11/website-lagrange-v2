"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ro", name: "Română", flag: "🇷🇴" },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLanguage?.flag}</span>
          <span className="hidden md:inline">{currentLanguage?.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => {
              console.log('Current pathname:', pathname);
              console.log('Current language:', language);
              console.log('New language:', lang.code);
              
              setLanguage(lang.code as "en" | "ro");
              // Navigate to the same page in the new language
              const newPath = pathname.replace(`/${language}`, `/${lang.code}`);
              console.log('New path:', newPath);
              router.push(newPath);
            }}
            className={`flex items-center gap-2 ${
              language === lang.code ? "bg-primary/10 text-primary" : ""
            }`}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 