"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "ro";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data - we'll expand this later
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",
    "nav.blog": "Blog",
    
    // Common
    "common.cta": "Book a Call",
    "common.contact": "Contact",
    "common.learnMore": "Learn More",
    "common.readMore": "Read More",
    
    // Footer
    "footer.legal": "Legal",
    "footer.terms": "Terms & Conditions",
    "footer.privacy": "Privacy Policy",
    "footer.copyright": "© 2025 Lagrange Engineering. All rights reserved.",
  },
  ro: {
    // Navigation
    "nav.home": "Acasă",
    "nav.about": "Despre",
    "nav.services": "Servicii",
    "nav.portfolio": "Portofoliu",
    "nav.contact": "Contact",
    "nav.blog": "Blog",
    
    // Common
    "common.cta": "Contactează-ne",
    "common.contact": "Contact",
    "common.learnMore": "Află Mai Multe",
    "common.readMore": "Citește Mai Mult",
    
    // Footer
    "footer.legal": "Legal",
    "footer.terms": "Termeni și Condiții",
    "footer.privacy": "Politica de Confidențialitate",
    "footer.copyright": "© 2025 Lagrange Engineering. Toate drepturile rezervate.",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language | null>(null); // Start with null to prevent flash

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ro")) {
      setLanguageState(savedLanguage);
    } else {
      // Default to Romanian if no preference is saved
      setLanguageState("ro");
    }
  }, []);

  // Save language preference to localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  // Translation function
  const t = (key: string): string => {
    if (!language) return key; // Return key if language not loaded yet
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  // Don't render children until language is loaded to prevent flash
  if (!language) {
    return null;
  }

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
} 