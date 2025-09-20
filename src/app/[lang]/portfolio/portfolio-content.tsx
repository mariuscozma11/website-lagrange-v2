"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Link from "next/link";
import { useState } from "react";
import { 
  Monitor, 
  Smartphone, 
  Settings,
  BarChart3,
  ZoomIn,
  ExternalLink
} from "lucide-react";

export default function PortfolioContent() {
  const { language } = useLanguage();
  const currentLang = language as keyof typeof portfolioContent;
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  // Enhanced portfolio content with detailed descriptions and images
  const portfolioContent = {
    en: {
      // Main sections
      intro: {
        title: "Our work",
        subtitle: "A selection of projects we've completed and are currently developing. Quality over quantity."
      },

      // Current Projects
      projects: [
        // Completed Projects
        {
          id: 1,
          title: "Corox Engineering Website",
          category: "web",
          shortDescription: "Professional website for industrial automation and Machine Safety company in Timișoara.",
          longDescription: "Complete corporate website for Corox Engineering, a company specializing in industrial automation, Machine Safety, risk assessments, and integrated technical systems. Built with Next.js and modern web technologies, featuring responsive design, contact forms, service showcase, and professional branding. The website serves clients across Romania with European-quality professional services.",
          technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "SEO"],
          status: "Completed",
          type: "Corporate Website",
          featuredImage: "/portfolio/corox-1.webp",
          liveUrl: "https://coroxengineering.ro"
        },
        {
          id: 2,
          title: "Mechafusion UPT Website", 
          category: "web",
          shortDescription: "Official website for the robotics club of Universitatea Politehnica Timișoara.",
          longDescription: "Modern and engaging website for Mechafusion, the official robotics club of Universitatea Politehnica Timișoara. Features include project showcases, member profiles, event announcements, competition results, and recruitment information. Built with a focus on showcasing innovative robotics projects and fostering community engagement among engineering students.",
          technologies: ["HTML", "JavaScript", "TailwindCSS", "AWS S3", "Cloudflare"],
          status: "Completed", 
          type: "Organization Website",
          featuredImage: "/portfolio/mechafusion-featured.webp"
        },
        {
          id: 3,
          title: "SAGA-ANAF Comparison Tool",
          category: "web",
          shortDescription: "Web application for comparing SAGA export data with ANAF official CSV invoices.",
          longDescription: "Specialized web application developed for accounting professionals to efficiently compare Excel data exported from SAGA accounting software with official CSV invoice tables from ANAF (Romanian tax authority). Features include automated data parsing, intelligent matching algorithms, discrepancy detection, detailed reporting, and export capabilities. Streamlines the reconciliation process and ensures accuracy in tax reporting.",
          technologies: ["Next.js", "Excel.js", "CSV Parser"],
          status: "Completed",
          type: "Business Tool",
          featuredImage: "/portfolio/saga-anaf-featured.webp"
        },
        
        // Ongoing Projects
        {
          id: 4,
          title: "Lanesta - Anglers Social App",
          category: "mobile",
          shortDescription: "Social guide mobile app for Romanian anglers with fishing sessions and tournament features.",
          longDescription: "Comprehensive mobile application designed for Romanian fishing enthusiasts. Features include detailed fishing guides with information on lures and fish species for different waters, active fishing session tracking with catch logging (length, weight, species), social features for sharing sessions publicly, location-based fishing spot discovery, and tournament/event management system. The app aims to build a community of anglers while providing valuable fishing insights and data.",
          technologies: ["React Native", "Supabase", "Google Maps API", "Social Network"],
          status: "In Development",
          type: "Social Mobile App",
          featuredImage: "/portfolio/lanesta-featured.webp"
        },
        {
          id: 5,
          title: "Medical Conference Platform",
          category: "web",
          shortDescription: "Complete conference web app and website for medical students with ticketing and workshop management.",
          longDescription: "Comprehensive conference management platform designed for medical student events. Features include advanced ticket sales system with multiple ticket types, workshop enrollment management with priority registration logic, QR code scanning system for volunteer check-ins, responsive conference landing page, workshop capacity management, attendee communication system, and detailed analytics dashboard. Built to handle large-scale medical conferences with complex scheduling requirements.",
          technologies: ["Next.js", "TypeScript", "Supabase", "Stripe", "QR Code API", "Email API"],
          status: "In Development",
          type: "Conference Platform",
          featuredImage: "/portfolio/medical-conference-featured.webp",
        },
        {
          id: 6,
          title: "Handlyze - Handball Analytics",
          category: "mobile",
          shortDescription: "Cross-platform handball statistics app for Romanian clubs with detailed player analytics.",
          longDescription: "Advanced handball statistics and analytics platform designed for Romanian handball clubs. Provides comprehensive player performance tracking, match statistics, team analytics, performance trends, comparative analysis, and detailed reporting. Features include real-time match scoring, player development tracking, injury monitoring, training load management, and strategic analysis tools. Helps coaches make data-driven decisions and improve team performance.",
          technologies: ["React Native", "Supabase", "Video Analytics", "Charts.js"],
          status: "In Development",
          type: "Sports Analytics App",
          featuredImage: "/portfolio/handlyze-featured.webp",
        },
        {
          id: 7,
          title: "3D Printing Shop Platform",
          category: "web",
          shortDescription: "E-commerce website with instant STEP file analysis and automated pricing for 3D printing services.",
          longDescription: "Innovative e-commerce platform for 3D printing services featuring automated quote generation using STEP file analysis API. Customers can upload 3D models and receive instant pricing based on volume, material, and complexity calculations. Includes full e-commerce functionality with shopping cart, payment processing, order tracking, material selection, print quality options, and comprehensive admin dashboard for order management and inventory control.",
          technologies: ["Next.js", "TypeScript", "STEP Reader API", "Stripe", "Admin Dashboard", "File Upload"],
          status: "In Development",
          type: "E-commerce Platform",
          featuredImage: "/portfolio/3dprinting-featured.webp",
        },
        {
          id: 8,
          title: "Industrial Sensors Traceability System",
          category: "industrial",
          shortDescription: "Industrial traceability system for sensors manufacturing company with automated quality control tracking.",
          longDescription: "Comprehensive industrial traceability system designed for a sensors manufacturing company. Built on Microsoft SQL Server with automated backup systems, the platform tracks and traces both 'OK' and 'NOK' (Not OK) parts throughout the manufacturing process. Features include real-time quality control monitoring, automated part classification, production line integration, defect tracking and analysis, compliance reporting, and comprehensive audit trails. The system ensures full manufacturing transparency and helps maintain quality standards while providing valuable insights for process optimization.",
          technologies: ["Microsoft SQL Server", "IPC", "Industrial IoT", "Automated Backup"],
          status: "In Development",
          type: "Industrial System",
          featuredImage: "/portfolio/industrial-traceability-featured.webp",
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
        // Proiecte Finalizate
        {
          id: 1,
          title: "Website Corox Engineering",
          category: "web",
          shortDescription: "Website profesional pentru companie de automatizări industriale și Machine Safety din Timișoara.",
          longDescription: "Website corporativ complet pentru Corox Engineering, o companie specializată în automatizări industriale, Machine Safety, evaluări de risc și sisteme tehnice integrate. Construit cu Next.js și tehnologii web moderne, cu design responsive, formulare de contact, prezentare servicii și branding profesional. Website-ul servește clienți din toată România cu servicii profesionale de calitate europeană.",
          technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "SEO"],
          status: "Finalizat",
          type: "Website Corporativ",
          featuredImage: "/portfolio/corox-1.webp",
          liveUrl: "https://coroxengineering.ro"
        },
        {
          id: 2,
          title: "Website Mechafusion UPT", 
          category: "web",
          shortDescription: "Website oficial pentru clubul de robotică al Universității Politehnica Timișoara.",
          longDescription: "Website modern și captivant pentru Mechafusion, clubul oficial de robotică al Universității Politehnica Timișoara. Include prezentarea proiectelor, profiluri membri, anunțuri evenimente, rezultate competiții și informații recrutare. Construit cu focus pe prezentarea proiectelor inovatoare de robotică și promovarea implicării în comunitatea studenților ingineri.",
          technologies: ["HTML", "JavaScript", "TailwindCSS", "AWS S3", "Cloudflare"],
          status: "Finalizat", 
          type: "Website Organizație",
          featuredImage: "/portfolio/mechafusion-featured.webp",
          gallery: [
            "/portfolio/mechafusion-1.jpg",
            "/portfolio/mechafusion-2.jpg",
            "/portfolio/mechafusion-3.jpg",
            "/portfolio/mechafusion-4.jpg"
          ]
        },
        {
          id: 3,
          title: "Aplicație Comparare SAGA-ANAF",
          category: "web",
          shortDescription: "Aplicație web pentru compararea datelor export SAGA cu facturile CSV oficiale ANAF.",
          longDescription: "Aplicație web specializată dezvoltată pentru profesioniștii contabili pentru compararea eficientă a datelor Excel exportate din software-ul de contabilitate SAGA cu tabelele oficiale CSV de facturi de la ANAF. Include parsare automată de date, algoritmi inteligenți de potrivire, detectare discrepanțe, raportare detaliată și capabilități export. Eficientizează procesul de reconciliere și asigură acuratețea în raportarea fiscală.",
          technologies: ["Next.js", "Excel.js", "CSV Parser"],
          status: "Finalizat",
          type: "Instrument Business",
          featuredImage: "/portfolio/saga-anaf-featured.webp",
          gallery: [
            "/portfolio/saga-anaf-1.jpg",
            "/portfolio/saga-anaf-2.jpg",
            "/portfolio/saga-anaf-3.jpg"
          ]
        },
        
        // Proiecte În Dezvoltare
        {
          id: 4,
          title: "Lanesta - Aplicație Pescari",
          category: "mobile",
          shortDescription: "Aplicație mobilă socială de ghidaj pentru pescarii români cu sesiuni de pescuit și turnee.",
          longDescription: "Aplicație mobilă comprehensivă destinată pasionaților de pescuit din România. Include ghiduri detaliate de pescuit cu informații despre momeli și specii de pești pentru diferite ape, urmărire sesiuni active de pescuit cu înregistrare capturi (lungime, greutate, specie), funcții sociale pentru partajare publică sesiuni, descoperire locații pescuit bazată pe locație și sistem management turnee/evenimente. Aplicația își propune să construiască o comunitate de pescari oferind în același timp informații valoroase despre pescuit.",
          technologies: ["React Native", "Supabase", "Google Maps API", "Social Network"],
          status: "În dezvoltare",
          type: "Aplicație Mobilă Socială",
          featuredImage: "/portfolio/lanesta-featured.webp",
          gallery: [
            "/portfolio/lanesta-1.jpg",
            "/portfolio/lanesta-2.jpg",
            "/portfolio/lanesta-3.jpg"
          ]
        },
        {
          id: 5,
          title: "Platformă Conferințe Medicale",
          category: "web",
          shortDescription: "Aplicație web completă și website pentru studenții la medicină cu ticketing și management workshop-uri.",
          longDescription: "Platformă comprehensivă de management conferințe destinată evenimentelor pentru studenții la medicină. Include sistem avansat de vânzare bilete cu multiple tipuri de bilete, management înscrieri workshop-uri cu logică prioritate înregistrare, sistem scanare coduri QR pentru check-in voluntari, pagină aterizare responsivă conferință, management capacitate workshop-uri, sistem comunicare participanți și dashboard analitică detaliată. Construită pentru a gestiona conferințe medicale la scară largă cu cerințe complexe de programare.",
          technologies: ["Next.js", "TypeScript", "Supabase", "Stripe", "QR Code API", "Email API"],
          status: "În dezvoltare",
          type: "Platformă Conferințe",
          featuredImage: "/portfolio/medical-conference-featured.webp",
        },
        {
          id: 6,
          title: "Handlyze - Analiză Handbal",
          category: "mobile",
          shortDescription: "Aplicație cross-platform statistici handbal pentru cluburile românești cu analiză detaliată jucători.",
          longDescription: "Platformă avansată de statistici și analiză handbal destinată cluburilor românești de handbal. Oferă urmărire comprehensivă performanță jucători, statistici meciuri, analiză echipă, tendințe performanță, analiză comparativă și raportare detaliată. Include scoring meciuri în timp real, urmărire dezvoltare jucători, monitorizare accidentări, management încărcare antrenament și instrumente analiză strategică. Ajută antrenorii să ia decizii bazate pe date și să îmbunătățească performanța echipei.",
          technologies: ["React Native", "Supabase", "Video Analytics", "Charts.js"],
          status: "În dezvoltare",
          type: "Aplicație Analiză Sport",
          featuredImage: "/portfolio/handlyze-featured.webp",
        },
        {
          id: 7,
          title: "Platformă Shop Printare 3D",
          category: "web",
          shortDescription: "Website e-commerce cu analiză instantanee fișiere STEP și stabilire preț automată pentru servicii printare 3D.",
          longDescription: "Platformă e-commerce inovatoare pentru servicii de printare 3D cu generare automată cotații folosind API analiză fișiere STEP. Clienții pot încărca modele 3D și primi stabilire preț instantanee bazată pe calcule volum, material și complexitate. Include funcționalitate e-commerce completă cu coș cumpărături, procesare plăți, urmărire comenzi, selecție materiale, opțiuni calitate printare și dashboard administrativ comprehensiv pentru management comenzi și control inventar.",
          technologies: ["Next.js", "TypeScript", "STEP Reader API", "Stripe", "Admin Dashboard", "File Upload"],
          status: "În dezvoltare",
          type: "Platformă E-commerce",
          featuredImage: "/portfolio/3dprinting-featured.webp",
        },
        {
          id: 8,
          title: "Sistem Trasabilitate Senzori Industriali",
          category: "industrial",
          shortDescription: "Sistem industrial de trasabilitate pentru companie producătoare de senzori cu urmărire automată control calitate.",
          longDescription: "Sistem comprehensiv de trasabilitate industrială destinat unei companii producătoare de senzori. Construit pe Microsoft SQL Server cu sisteme automate de backup, platforma urmărește și trasează atât piesele 'OK' cât și 'NOK' (Not OK) pe întregul proces de fabricație. Funcționalitățile includ monitorizare control calitate în timp real, clasificare automată piese, integrare linie producție, urmărire și analiză defecte, raportare conformitate și piste audit comprehensive. Sistemul asigură transparență completă în fabricație și ajută la menținerea standardelor de calitate oferind în același timp informații valoroase pentru optimizarea proceselor.",
          technologies: ["Microsoft SQL Server", "IPC", "Industrial IoT", "Backup Automat"],
          status: "În dezvoltare",
          type: "Sistem Industrial",
          featuredImage: "/portfolio/industrial-traceability-featured.webp",
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

  // Handle project click
  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setIsImageFullscreen(false);
  };

  // Handle image fullscreen
  const handleImageFullscreen = () => {
    setIsImageFullscreen(!isImageFullscreen);
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

          {/* Projects Carousel */}
          <motion.div 
            className="px-4 sm:px-8 md:px-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <Carousel className="w-full relative">
            <CarouselContent className="-ml-2 md:-ml-4">
              {currentContent.projects.map((project, index) => {
                const IconComponent = getProjectIcon(project.category);
                return (
                  <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                   <div
                     className="cursor-pointer"
                     onClick={() => handleProjectClick(project)}
                   >
                     <Card className="h-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 transition-colors duration-300 group relative">
                        {/* Status Badge - Themed */}
                        <div className="absolute top-2 right-2 z-30">
                          <span className={`px-3 py-1.5 text-xs font-bold rounded-full shadow-lg border ${
                            project.status === 'Completed' || project.status === 'Finalizat'
                              ? 'bg-emerald-600 text-white border-emerald-500 dark:bg-emerald-500 dark:border-emerald-400'
                              : 'bg-slate-600 text-white border-slate-500 dark:bg-slate-500 dark:border-slate-400'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        
                        {/* Project Featured Image or Icon */}
                        <div className="h-48 relative overflow-hidden">
                          {project.featuredImage ? (
                            <img 
                              src={project.featuredImage} 
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-300"
                              onError={(e) => {
                                // Fallback to icon background if image fails to load
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.className = "h-48 bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/30 dark:to-emerald-800/20 flex items-center justify-center relative";
                                  parent.innerHTML = `
                                    <div class="flex flex-col items-center justify-center">
                                      <svg class="w-12 h-12 text-emerald-600 dark:text-emerald-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                      </svg>
                                      <span class="text-sm font-medium text-emerald-700 dark:text-emerald-400">${project.type}</span>
                                    </div>
                                  `;
                                }
                              }}
                            />
                          ) : (
                            // Show icon placeholder when no featured image
                            <div className="h-48 bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/30 dark:to-emerald-800/20 flex items-center justify-center">
                              <div className="flex flex-col items-center justify-center">
                                <IconComponent className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mb-2" />
                                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">{project.type}</span>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <CardHeader>
                          <CardTitle className="text-lg font-bold text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                            {project.title}
                          </CardTitle>
                        </CardHeader>
                        
                        <CardContent className="space-y-4">
                          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                            {project.shortDescription}
                          </p>
                          
                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 4).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 4 && (
                              <span className="px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded">
                                +{project.technologies.length - 4}
                              </span>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
              <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 sm:-left-12 md:-left-16" />
              <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 sm:-right-12 md:-right-16" />
            </Carousel>
          </motion.div>
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

      {/* Project Detail Modal */}
      <Dialog open={isModalOpen} onOpenChange={handleModalClose}>
        <DialogContent className="max-w-[90vw] lg:max-w-6xl xl:max-w-7xl max-h-[95vh] overflow-y-auto p-0">
          <div className="p-6 md:p-8 lg:p-12">
            <DialogHeader className="mb-8">
              <DialogTitle className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300">
                {selectedProject?.title}
              </DialogTitle>
            </DialogHeader>
            
            {selectedProject && (
              <div className="space-y-12">
                {/* Featured Image with Fullscreen Zoom - Only if image exists */}
                {selectedProject.featuredImage && (
                  <div 
                    className="relative cursor-pointer group"
                    onClick={handleImageFullscreen}
                  >
                    <img 
                      src={selectedProject.featuredImage} 
                      alt={selectedProject.title}
                      className="w-full h-64 md:h-80 lg:h-96 object-contain rounded-lg"
                      onError={(e) => {
                        // Hide the entire image container if image fails to load
                        const target = e.target as HTMLImageElement;
                        const container = target.closest('.relative') as HTMLElement;
                        if (container) {
                          container.style.display = 'none';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-lg flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 md:w-10 md:h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                )}

                {/* Project Details - Desktop Optimized Layout */}
                <div className="grid gap-8 lg:gap-12 xl:gap-16 lg:grid-cols-3">
                  {/* Main Content - Takes 2/3 on desktop */}
                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-4">
                        {currentLang === 'en' ? 'Description' : 'Descriere'}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-base md:text-lg">
                        {selectedProject.longDescription}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-4">
                        {currentLang === 'en' ? 'Technologies' : 'Tehnologii'}
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.technologies.map((tech: string, index: number) => (
                          <span
                            key={index}
                            className="px-4 py-2 text-sm md:text-base bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sidebar - Takes 1/3 on desktop */}
                  <div className="lg:col-span-1">
                    <div className="sticky top-6">
                      <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-lg p-6 lg:p-8 space-y-8">
                        <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300">
                          {currentLang === 'en' ? 'Project Info' : 'Informații Proiect'}
                        </h3>
                        <div className="space-y-4">
                          <div className="flex flex-col space-y-1">
                            <span className="text-sm text-neutral-600 dark:text-neutral-400">
                              {currentLang === 'en' ? 'Type' : 'Tip'}
                            </span>
                            <span className="text-slate-700 dark:text-slate-300 font-medium">
                              {selectedProject.type}
                            </span>
                          </div>
                          <div className="flex flex-col space-y-1">
                            <span className="text-sm text-neutral-600 dark:text-neutral-400">
                              {currentLang === 'en' ? 'Status' : 'Status'}
                            </span>
                            <span className={`font-medium ${
                              selectedProject.status === 'Completed' || selectedProject.status === 'Finalizat'
                                ? 'text-green-600 dark:text-green-400'
                                : 'text-blue-600 dark:text-blue-400'
                            }`}>
                              {selectedProject.status}
                            </span>
                          </div>
                          {selectedProject.liveUrl && (
                            <div className="flex flex-col space-y-2">
                              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                                {currentLang === 'en' ? 'Live URL' : 'Link Live'}
                              </span>
                              <a 
                                href={selectedProject.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors"
                              >
                                <ExternalLink className="w-4 h-4" />
                                {currentLang === 'en' ? 'Visit Project' : 'Vizitează Proiectul'}
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Fullscreen Image Modal */}
      {isImageFullscreen && selectedProject?.featuredImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          onClick={handleImageFullscreen}
        >
          <div className="relative max-w-full max-h-full">
            <img 
              src={selectedProject.featuredImage}
              alt={selectedProject.title}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              onClick={handleImageFullscreen}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}