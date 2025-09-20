"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Monitor, 
  Smartphone, 
  Database, 
  Settings, 
  Lightbulb
} from "lucide-react";

// Service illustrations component
const ServiceIllustration = ({ service, isEven }: { service: any; isEven: boolean }) => {
  const IconComponent = service.icon;
  
  return (
    <div className="flex items-center justify-center h-96 lg:h-[500px]">
      {service.illustration ? (
        // Use custom SVG illustration if provided
        <img 
          src={service.illustration} 
          alt={service.title}
          className="w-full h-full object-contain max-w-none"
        />
      ) : (
        // Use icon component as fallback
        <IconComponent className="w-32 h-32 text-emerald-600 dark:text-emerald-400" />
      )}
    </div>
  );
};

export default function ServicesContent() {
  const { language } = useLanguage();
  const currentLang = language as keyof typeof servicesContent;

  // Bilingual services content
  const servicesContent = {
    en: {
      title: "Our Services",
      subtitle: "Comprehensive technology solutions designed to accelerate your business growth and digital transformation.",
      services: [
        {
          title: "Websites & Web Platforms",
          description: "Professional websites and scalable web platforms for your digital presence. From simple landing pages to complex e-commerce solutions, we create digital experiences that drive results.",
          icon: Monitor,
          illustration: "/web-service.svg",
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
          description: "Custom applications and scalable SaaS platforms for business automation. Build powerful tools that streamline your operations and scale with your growth.",
          icon: Database,
          illustration: "/web-saas.svg",
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
          description: "Native mobile and desktop applications with seamless backend integration. Reach your users wherever they are with apps that perform flawlessly across all devices.",
          icon: Smartphone,
          illustration: "/cross-app.svg",
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
          description: "Process digitalization and automation solutions for modern businesses. Transform your workflows with intelligent systems that reduce manual work and increase efficiency, including industrial traceability and quality control systems.",
          icon: Settings,
          illustration: "/digitalization.svg",
          features: [
            "Internal process digitalization",
            "Industrial traceability & quality control",
            "Manufacturing process automation",
            "Reporting & analysis systems",
            "Existing software integration",
            "IT infrastructure implementation",
            "Cloud solutions & hosting"
          ]
        },
        {
          title: "Technical Consulting",
          description: "Expert guidance and strategic technology consulting to help you make informed decisions about your digital infrastructure and development roadmap.",
          icon: Lightbulb,
          illustration: "/consulting.svg",
          features: [
            "Technology strategy & planning",
            "Architecture design & review",
            "Code quality & security audits",
            "Performance optimization",
            "Team training & mentoring"
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
          description: "Website-uri profesionale și platforme web scalabile pentru prezența ta digitală. De la pagini simple de prezentare la soluții complexe de e-commerce, creăm experiențe digitale care aduc rezultate.",
          icon: Monitor,
          illustration: "/web-service.svg",
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
          description: "Aplicații custom și platforme SaaS scalabile pentru automatizarea afacerii. Construim instrumente puternice care îți optimizează operațiunile și cresc odată cu afacerea ta.",
          icon: Database,
          illustration: "/web-saas.svg",
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
          description: "Aplicații mobile native și desktop cu integrare backend fără probleme. Ajungi la utilizatorii tăi oriunde se află cu aplicații care funcționează perfect pe toate dispozitivele.",
          icon: Smartphone,
          illustration: "/cross-app.svg",
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
          description: "Soluții de digitalizare și automatizare a proceselor pentru afacerile moderne. Transformă-ți fluxurile de lucru cu sisteme inteligente care reduc munca manuală și cresc eficiența, incluzând sisteme industriale de trasabilitate și control calitate.",
          icon: Settings,
          illustration: "/digitalization.svg",
          features: [
            "Digitalizarea proceselor interne",
            "Trasabilitate industrială & control calitate",
            "Automatizare procese de fabricație",
            "Sisteme de raportare & analiză",
            "Integrare software existent",
            "Implementare infrastructură IT",
            "Soluții cloud & hosting"
          ]
        },
        {
          title: "Consultanță Tehnică",
          description: "Îndrumare expertă și consultanță strategică în tehnologie pentru a te ajuta să iei decizii informate despre infrastructura ta digitală și planul de dezvoltare.",
          icon: Lightbulb,
          illustration: "/consulting.svg",
          features: [
            "Strategie & planificare tehnologică",
            "Design & review arhitectură",
            "Audit calitate cod & securitate",
            "Optimizare performanță",
            "Instruire & mentoring echipă"
          ]
        }
      ]
    }
  };

  const currentContent = servicesContent[currentLang] || servicesContent.ro;
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-site">
      

        {/* Services with alternating layout */}
        <div className="space-y-24">
          {currentContent.services.map((service, index) => {
            const isEven = index % 2 === 0;
            const IconComponent = service.icon;
            
              return (
                <motion.div
                  key={index}
                  initial={{ 
                    opacity: 0, 
                    x: isEven ? -50 : 50
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                          <IconComponent className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                        </div>
                      </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <Card className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <CardHeader>
                      <CardTitle className="text-lg text-slate-700 dark:text-slate-300">
                        {currentLang === 'en' ? 'What we offer:' : 'Ce oferim:'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                            className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400"
                          >
                            <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Illustration */}
                <div className="flex-1">
                  <ServiceIllustration service={service} isEven={isEven} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <Card className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white border-0">
            <CardContent className="py-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {currentLang === 'en' ? 'Ready to transform your business?' : 'Gata să-ți transformi afacerea?'}
              </h3>
              <p className="text-lg mb-6 opacity-90">
                {currentLang === 'en' 
                  ? 'Let\'s discuss how our services can help you achieve your goals.'
                  : 'Să discutăm cum te pot ajuta serviciile noastre să-ți atingi obiectivele.'
                }
              </p>
              <Link href={`/${currentLang}/contact`}>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white cursor-pointer text-emerald-600 hover:bg-emerald-50"
                >
                  {currentLang === 'en' ? 'Get Started Today' : 'Începe Astăzi'}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}