"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactForm() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented later
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Language-specific form labels and content
  const formContent = {
    en: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send Message",
      namePlaceholder: "Enter your name",
      emailPlaceholder: "Enter your email address",
      messagePlaceholder: "Tell us about your project or inquiry...",
    },
    ro: {
      name: "Nume",
      email: "Email",
      message: "Mesaj",
      submit: "Trimite Mesajul",
      namePlaceholder: "Introdu numele tău",
      emailPlaceholder: "Introdu adresa de email",
      messagePlaceholder: "Spune-ne despre proiectul tău sau întrebarea ta...",
    },
  };

  const content = formContent[language as keyof typeof formContent] || formContent.ro;

  return (
    <Card className="w-full">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl mb-2">
          {language === "en" ? "Get In Touch" : "Ia Legătura"}
        </CardTitle>
        <p className="text-gray-600 dark:text-gray-400 text-base">
          {language === "en" 
            ? "Ready to start your project? Let's discuss how we can help." 
            : "Gata să începi proiectul tău? Să discutăm cum te putem ajuta."
          }
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {content.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={content.namePlaceholder}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-transparent dark:text-white transition-colors duration-200"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {content.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={content.emailPlaceholder}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-transparent dark:text-white transition-colors duration-200"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {content.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={content.messagePlaceholder}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-transparent dark:text-white transition-colors duration-200 resize-none"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            {content.submit}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
} 