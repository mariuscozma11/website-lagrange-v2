import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Mail, Phone, MapPin, Building } from "lucide-react";
import { SupportedLanguage } from "@/lib/language";

interface ContactInfoStaticProps {
  language: SupportedLanguage;
}

export default function ContactInfoStatic({ language }: ContactInfoStaticProps) {
  // Bilingual content - server-side safe
  const content = {
    en: {
      title: "Get In Touch",
      subtitle: "Ready to start your project? Let's discuss how we can help bring your vision to life.",
      contact: {
        title: "Contact Information",
        address: "Str. Ioan Alexandru, No. 20, POD Floor, Ap. POD 2",
        city: "Timișoara, Timiș County",
        email: "office@lagrangeengineering.ro",
        phone: "+40 756 109 881",
        company: "Lagrange Engineering SRL",
        cui: "CUI 51196824",
        j: "J2025005646004"
      }
    },
    ro: {
      title: "Contactează-ne",
      subtitle: "Gata să începi proiectul tău? Să discutăm cum te putem ajuta să îți realizezi viziunea.",
      contact: {
        title: "Informații de Contact",
        address: "Str. Ioan Alexandru, Nr. 20, Etaj POD, Ap. POD 2",
        city: "Timișoara, Județul Timiș",
        email: "office@lagrangeengineering.ro",
        phone: "+40 756 109 881",
        company: "Lagrange Engineering SRL",
        cui: "CUI 51196824",
        j: "J2025005646004"
      }
    }
  };

  const currentContent = content[language] || content.ro;

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700 dark:text-slate-300 mb-6">
          {currentContent.title.split(" ").map((word, index) => (
            <span key={index} className="mr-2 inline-block">
              {word}
            </span>
          ))}
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          {currentContent.subtitle}
        </p>
      </div>

      {/* Contact Information Card */}
      <div className="max-w-2xl mx-auto">
        <Card className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-700 dark:text-slate-300">
              {currentContent.contact.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                  <Building className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="font-semibold text-slate-700 dark:text-slate-300">
                    {currentContent.contact.company}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {currentContent.contact.cui}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {currentContent.contact.j}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                  <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="font-semibold text-slate-700 dark:text-slate-300">
                    Address
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {currentContent.contact.address}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {currentContent.contact.city}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                  <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="font-semibold text-slate-700 dark:text-slate-300">
                    Email
                  </p>
                  <a 
                    href={`mailto:${currentContent.contact.email}`}
                    className="text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                  >
                    {currentContent.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                  <Phone className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="font-semibold text-slate-700 dark:text-slate-300">
                    Phone
                  </p>
                  <a 
                    href={`tel:${currentContent.contact.phone}`}
                    className="text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                  >
                    {currentContent.contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}