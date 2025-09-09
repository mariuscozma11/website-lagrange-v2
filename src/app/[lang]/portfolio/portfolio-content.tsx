"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Monitor, 
  Smartphone, 
  Settings,
  BarChart3
} from "lucide-react";

export default function PortfolioContent() {
  const { language } = useLanguage();
  const currentLang = language as keyof typeof portfolioContent;

  // Realistic portfolio content - small but growing
  const portfolioContent = {
    en: {
      // Main sections
      intro: {
        title: "Our work",
        subtitle: "A selection of projects we've completed and are currently developing. Quality over quantity."
      },

      // Current Projects
      projects: [
        {
          id: 1,
          title: "Web Development Project #1",
          category: "web",
          description: "Complete web platform with modern architecture and user-focused design.",
          technologies: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
          status: "Completed",
          type: "Web Platform"
        },
        {
          id: 2,
          title: "Web Development Project #2", 
          category: "web",
          description: "Custom web application built for specific business requirements.",
          technologies: ["React", "Node.js", "MongoDB", "Express"],
          status: "Completed", 
          type: "Web Application"
        },
        {
          id: 3,
          title: "Mobile App Project #1",
          category: "mobile",
          description: "Cross-platform mobile application with native performance.",
          technologies: ["React Native", "Firebase", "TypeScript"],
          status: "In Development",
          type: "Mobile App"
        },
        {
          id: 4,
          title: "Mobile App Project #2",
          category: "mobile", 
          description: "Native mobile solution with cloud integration.",
          technologies: ["React Native", "AWS", "GraphQL"],
          status: "In Development",
          type: "Mobile App"
        },
        {
          id: 5,
          title: "Industrial Traceability System",
          category: "industrial",
          description: "Industrial application for product traceability and quality control.",
          technologies: ["Python", "PostgreSQL", "Docker", "IoT"],
          status: "In Development",
          type: "Industrial Solution"
        }
      ],

      // Coming Soon Section
      growth: {
        title: "Growing portfolio",
        description: "We're constantly working on new projects and expanding our portfolio. Check back soon for more completed work and case studies."
      },

      // CTA Section
      cta: {
        title: "Let's build something together",
        description: "Ready to start your project? We'd love to discuss your ideas and how we can help bring them to life.",
        buttonText: "Start a conversation"
      }
    },
    ro: {
      // Main sections
      intro: {
        title: "Lucrările noastre",
        subtitle: "O selecție de proiecte pe care le-am finalizat și pe care le dezvoltăm în prezent. Calitate în loc de cantitate."
      },

      // Current Projects
      projects: [
        {
          id: 1,
          title: "Proiect Web Development #1",
          category: "web",
          description: "Platformă web completă cu arhitectură modernă și design orientat spre utilizator.",
          technologies: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
          status: "Finalizat",
          type: "Platformă Web"
        },
        {
          id: 2,
          title: "Proiect Web Development #2", 
          category: "web",
          description: "Aplicație web personalizată construită pentru cerințe specifice de business.",
          technologies: ["React", "Node.js", "MongoDB", "Express"],
          status: "Finalizat", 
          type: "Aplicație Web"
        },
        {
          id: 3,
          title: "Proiect Aplicație Mobile #1",
          category: "mobile",
          description: "Aplicație mobilă cross-platform cu performanțe native.",
          technologies: ["React Native", "Firebase", "TypeScript"],
          status: "În dezvoltare",
          type: "Aplicație Mobile"
        },
        {
          id: 4,
          title: "Proiect Aplicație Mobile #2",
          category: "mobile", 
          description: "Soluție mobilă nativă cu integrare cloud.",
          technologies: ["React Native", "AWS", "GraphQL"],
          status: "În dezvoltare",
          type: "Aplicație Mobile"
        },
        {
          id: 5,
          title: "Sistem Industrial de Trasabilitate",
          category: "industrial",
          description: "Aplicație industrială pentru trasabilitatea produselor și controlul calității.",
          technologies: ["Python", "PostgreSQL", "Docker", "IoT"],
          status: "În dezvoltare",
          type: "Soluție Industrială"
        }
      ],

      // Coming Soon Section
      growth: {
        title: "Portofoliu în creștere",
        description: "Lucrăm constant la proiecte noi și extindem portofoliul nostru. Revino în curând pentru mai multe lucrări finalizate și studii de caz."
      },

      // CTA Section
      cta: {
        title: "Să construim ceva împreună",
        description: "Gata să începi proiectul? Ne-ar plăcea să discutăm ideile tale și cum te putem ajuta să le aduci la viață.",
        buttonText: "Începe o conversație"
      }
    }
  };

  const currentContent = portfolioContent[currentLang] || portfolioContent.ro;

  // Get icon for project type
  const getProjectIcon = (category: string) => {
    switch(category) {
      case 'web': return Monitor;
      case 'mobile': return Smartphone;
      case 'industrial': return Settings;
      default: return Monitor;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Main Projects Section */}
      <section className="pt-16 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-700 dark:text-slate-300 mb-4">
              {currentContent.intro.title}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              {currentContent.intro.subtitle}
            </p>
          </motion.div>

          {/* Projects Grid - Simple and Clean */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentContent.projects.map((project, index) => {
              const IconComponent = getProjectIcon(project.category);
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-lg transition-all duration-300">
                    {/* Project Type Icon */}
                    <div className="h-40 bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/30 dark:to-emerald-800/20 flex flex-col items-center justify-center relative">
                      <IconComponent className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mb-2" />
                      <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                        {project.type}
                      </span>
                      <div className="absolute top-3 right-3">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          project.status === 'Completed' || project.status === 'Finalizat'
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-slate-700 dark:text-slate-300">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Growing Portfolio Section */}
      <section className="py-16 px-6 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <CardContent className="p-8">
                <BarChart3 className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-4">
                  {currentContent.growth.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {currentContent.growth.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-700 dark:text-slate-300 mb-4">
              {currentContent.cta.title}
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
              {currentContent.cta.description}
            </p>
            <Link href={`/${currentLang}/contact`}>
              <Button 
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
              >
                {currentContent.cta.buttonText}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}