"use client";
import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Monitor, Smartphone, Database, Settings } from "lucide-react";

export default function HomeServicesSection() {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    en: {
      title: "Our Services",
      subtitle: "Comprehensive technology solutions designed to accelerate your business growth and digital transformation.",
      services: [
        {
          title: "Websites & Web Platforms",
          description: "Professional websites and scalable web platforms for your digital presence.",
          icon: Monitor,
          features: [
            "Presentation sites & landing pages",
            "Blogs and CMS (WordPress or custom)",
            "Online stores (E-commerce)",
            "Real estate platforms & bookings",
            "Maintenance & hosting solutions"
          ]
        },
        {
          title: "Web & SaaS Applications",
          description: "Custom applications and scalable SaaS platforms for business automation.",
          icon: Database,
          features: [
            "Custom business applications",
            "CRMs, ERPs & internal platforms",
            "Scalable SaaS platforms",
            "Management dashboards",
            "Technical consulting & guidance"
          ]
        },
        {
          title: "Cross-Platform & Mobile Apps",
          description: "Native mobile and desktop applications with seamless backend integration.",
          icon: Smartphone,
          features: [
            "Mobile apps (React Native)",
            "Desktop apps (Electron)",
            "Backend & cloud integration",
            "Maintenance & updates",
            "App Store & Google Play publishing"
          ]
        },
        {
          title: "Digitalization & Automation",
          description: "Process digitalization and automation solutions for modern businesses, including industrial traceability systems.",
          icon: Settings,
          features: [
            "Internal process digitalization",
            "Industrial traceability & quality control",
            "Manufacturing process automation",
            "Reporting & analysis systems",
            "Existing software integration",
            "IT infrastructure implementation",
            "Cloud solutions & hosting"
          ]
        }
      ]
    },
    ro: {
      title: "Serviciile Noastre",
      subtitle: "Soluții tehnologice complete proiectate pentru a accelera creșterea afacerii tale și transformarea digitală.",
      services: [
        {
          title: "Website-uri & Platforme Web",
          description: "Website-uri profesionale și platforme web scalabile pentru prezența ta digitală.",
          icon: Monitor,
          features: [
            "Site-uri de prezentare & landing page-uri",
            "Blog-uri și CMS (WordPress sau custom)",
            "Magazine online (E-commerce)",
            "Platforme de imobiliare & rezervări",
            "Mentenanță & soluții de hosting"
          ]
        },
        {
          title: "Aplicații Web & SaaS",
          description: "Aplicații custom și platforme SaaS scalabile pentru automatizarea afacerii.",
          icon: Database,
          features: [
            "Aplicații custom pentru business",
            "CRM-uri, ERP-uri & platforme interne",
            "Platforme SaaS scalabile",
            "Dashboard-uri de administrare",
            "Consultanță tehnică & îndrumare"
          ]
        },
        {
          title: "Aplicații Cross-Platform & Mobile",
          description: "Aplicații mobile native și desktop cu integrare backend fără probleme.",
          icon: Smartphone,
          features: [
            "Aplicații mobile (React Native)",
            "Aplicații desktop (Electron)",
            "Integrare backend & cloud",
            "Mentenanță & update-uri",
            "Publicare App Store & Google Play"
          ]
        },
        {
          title: "Digitalizare & Automatizare",
          description: "Soluții de digitalizare și automatizare a proceselor pentru afacerile moderne, incluzând sisteme industriale de trasabilitate.",
          icon: Settings,
          features: [
            "Digitalizarea proceselor interne",
            "Trasabilitate industrială & control calitate",
            "Automatizare procese de fabricație",
            "Sisteme de raportare & analiză",
            "Integrare software existent",
            "Implementare infrastructură IT",
            "Soluții cloud & hosting"
          ]
        }
      ]
    }
  };

  const currentContent = content[language as keyof typeof content] || content.ro;

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700 dark:text-slate-300 mb-6">
            {currentContent.title
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              ))}
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
          >
            {currentContent.subtitle}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {currentContent.services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                        <IconComponent className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-slate-700 dark:text-slate-300">
                        {service.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-base text-neutral-600 dark:text-neutral-400">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                          className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                        >
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}