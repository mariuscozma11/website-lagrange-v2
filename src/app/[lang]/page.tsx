import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, Code, Globe, Smartphone, Zap } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

// Define supported languages
const supportedLanguages = ["en", "ro"] as const;
type SupportedLanguage = typeof supportedLanguages[number];

// Language-specific content
const contentByLang: Record<SupportedLanguage, {
  title: string;
  description: string;
  keywords: string;
  openGraphTitle: string;
  openGraphDescription: string;
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    values: Array<{ title: string; description: string }>;
    cta: string;
  };
  services: {
    title: string;
    subtitle: string;
    description: string;
    cards: Array<{ title: string; description: string; icon: React.ComponentType<{ className?: string }> }>;
    cta: string;
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
}> = {
  en: {
    title: "Lagrange Engineering - Technology Solutions and Web Development in Romania",
    description: "Lagrange Engineering is a Romanian technology company providing web development, custom applications, and high-quality digital solutions for your business.",
    keywords: "web development Romania, custom applications, digital solutions, technology, Lagrange Engineering",
    openGraphTitle: "Lagrange Engineering - Technology Solutions and Web Development in Romania",
    openGraphDescription: "Lagrange Engineering is a Romanian technology company providing web development, custom applications, and high-quality digital solutions for your business.",
    hero: {
      title: "Technology Solutions That Scale",
      subtitle: "Accessible • Quality • Fast",
      description: "We accelerate technological development by supporting small and medium-sized companies to digitize and automate their processes. Through accessible and scalable solutions, offered with transparency and authenticity.",
      cta: "Start Your Project"
    },
    about: {
      title: "About Lagrange Engineering",
      subtitle: "Building Trust Through Technology",
      description: "We are a Romanian technology company focused on delivering quality solutions that help businesses grow. Our approach combines technical expertise with genuine partnership.",
      values: [
        {
          title: "Authenticity & Transparency",
          description: "We build relationships based on trust, transparency and fairness, aiming to create win-win collaborations."
        },
        {
          title: "Adaptability & Learning",
          description: "We take on new challenges and invest time to find the best solutions, regardless of complexity."
        },
        {
          title: "Long-term Partnership",
          description: "Each project is treated as a joint investment, created to bring real and scalable value to both parties."
        }
      ],
      cta: "Learn More About Us"
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive Digital Solutions",
      description: "From websites to complex applications, we provide end-to-end solutions that help your business thrive in the digital age.",
      cards: [
        {
          title: "Web Development",
          description: "Custom websites, e-commerce platforms, and content management systems built for performance and growth.",
          icon: Globe
        },
        {
          title: "Custom Applications",
          description: "Tailored software solutions including CRMs, ERPs, and internal platforms designed for your specific needs.",
          icon: Code
        },
        {
          title: "Mobile & Desktop Apps",
          description: "Cross-platform applications using React Native and Electron, with seamless backend integration.",
          icon: Smartphone
        }
      ],
      cta: "View All Services"
    },
    contact: {
      title: "Ready to Get Started?",
      subtitle: "Let's Build Something Amazing Together",
      description: "Whether you have a project in mind or just want to explore possibilities, we're here to help you navigate the digital landscape.",
      cta: "Contact Us Today"
    }
  },
  ro: {
    title: "Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web în România",
    description: "Lagrange Engineering este o companie română de tehnologie care oferă dezvoltare web, aplicații personalizate și soluții digitale de înaltă calitate pentru afacerea ta.",
    keywords: "dezvoltare web România, aplicații personalizate, soluții digitale, tehnologie, Lagrange Engineering",
    openGraphTitle: "Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web în România",
    openGraphDescription: "Lagrange Engineering este o companie română de tehnologie care oferă dezvoltare web, aplicații personalizate și soluții digitale de înaltă calitate pentru afacerea ta.",
    hero: {
      title: "Soluții Tehnologice Care Cresc",
      subtitle: "Accesibile • Calitate • Rapide",
      description: "Accelerăm dezvoltarea tehnologică sprijinind companiile mici și medii să își digitalizeze și automatizeze procesele. Prin soluții accesibile și scalabile, oferite cu transparență și autenticitate.",
      cta: "Începe Proiectul Tău"
    },
    about: {
      title: "Despre Lagrange Engineering",
      subtitle: "Construim Încrederea Prin Tehnologie",
      description: "Suntem o companie română de tehnologie concentrată pe livrarea de soluții de calitate care ajută afacerile să crească. Abordarea noastră combină expertiza tehnică cu parteneriatul autentic.",
      values: [
        {
          title: "Autenticitate și Transparență",
          description: "Construim relații bazate pe încredere, transparență și corectitudine, cu scopul de a crea colaborări win-win."
        },
        {
          title: "Adaptabilitate și Învățare",
          description: "Ne asumăm provocări noi și investim timp pentru a găsi cele mai bune soluții, indiferent de complexitate."
        },
        {
          title: "Parteneriat pe Termen Lung",
          description: "Fiecare proiect este tratat ca o investiție comună, creat pentru a aduce valoare reală și scalabilă ambelor părți."
        }
      ],
      cta: "Află Mai Multe Despre Noi"
    },
    services: {
      title: "Serviciile Noastre",
      subtitle: "Soluții Digitale Complete",
      description: "De la website-uri la aplicații complexe, oferim soluții end-to-end care ajută afacerea ta să prospere în era digitală.",
      cards: [
        {
          title: "Dezvoltare Web",
          description: "Website-uri personalizate, platforme e-commerce și sisteme de gestionare a conținutului construite pentru performanță și creștere.",
          icon: Globe
        },
        {
          title: "Aplicații Personalizate",
          description: "Soluții software adaptate inclusiv CRM-uri, ERP-uri și platforme interne proiectate pentru nevoile tale specifice.",
          icon: Code
        },
        {
          title: "Aplicații Mobile și Desktop",
          description: "Aplicații cross-platform folosind React Native și Electron, cu integrare backend fără probleme.",
          icon: Smartphone
        }
      ],
      cta: "Vezi Toate Serviciile"
    },
    contact: {
      title: "Gata Să Începi?",
      subtitle: "Să Construim Ceva Uimitor Împreună",
      description: "Fie că ai un proiect în minte sau vrei doar să explorezi posibilitățile, suntem aici să te ajutăm să navighezi peisajul digital.",
      cta: "Contactează-ne Astăzi"
    }
  },
};

interface HomePageProps {
  params: { lang: string };
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const lang = (await params).lang as SupportedLanguage;
  
  if (!supportedLanguages.includes(lang)) {
    notFound();
  }
  
  const content = contentByLang[lang];
  
  return {
    title: content.title,
    description: content.description,
    keywords: content.keywords,
    openGraph: {
      title: content.openGraphTitle,
      description: content.openGraphDescription,
    },
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const lang = (await params).lang as SupportedLanguage;
  
  if (!supportedLanguages.includes(lang)) {
    notFound();
  }
  
  const content = contentByLang[lang];
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 max-w-site text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {content.hero.title}
            </h1>
            <div className="text-xl md:text-2xl font-semibold text-emerald-600 dark:text-emerald-400 mb-8">
              {content.hero.subtitle}
            </div>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              {content.hero.description}
            </p>
            <a
              href={`/${lang}/contact`}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {content.hero.cta}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-site">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {content.about.title}
              </h2>
              <p className="text-xl text-emerald-600 dark:text-emerald-400 mb-4 font-semibold">
                {content.about.subtitle}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {content.about.description}
              </p>
              
              {/* Values */}
              <div className="space-y-4 mb-8">
                {content.about.values.map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <a
                href={`/${lang}/about`}
                className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors duration-300"
              >
                {content.about.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            {/* Right: Visual Element */}
            <div className="relative">
              <Card className="p-12 text-center">
                <CardContent className="pt-6">
                  <Zap className="w-24 h-24 text-emerald-600 dark:text-emerald-400 mx-auto mb-6" />
                  <CardTitle className="text-2xl mb-4">
                    {lang === "en" ? "Technology First" : "Tehnologia În Primul Rând"}
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-300">
                    {lang === "en" 
                      ? "We focus on delivering solutions that work" 
                      : "Ne concentrăm pe livrarea de soluții care funcționează"
                    }
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-site">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Service Cards */}
            <div className="space-y-6">
              {content.services.cards.map((service, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-lg">
                        <service.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">
                          {service.title}
                        </CardTitle>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Right: Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {content.services.title}
              </h2>
              <p className="text-xl text-emerald-600 dark:text-emerald-400 mb-4 font-semibold">
                {content.services.subtitle}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {content.services.description}
              </p>
              <a
                href={`/${lang}/services`}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {content.services.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-site">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {content.contact.title}
            </h2>
            <p className="text-xl text-emerald-600 dark:text-emerald-400 mb-4 font-semibold">
              {content.contact.subtitle}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {content.contact.description}
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
} 