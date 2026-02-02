"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Monitor,
  Smartphone,
  Settings,
  ZoomIn,
  ExternalLink,
} from "lucide-react";
import { projects as allProjects } from "./projects";

// Display Project interface for component usage
interface DisplayProject {
  id: number;
  title: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  status: string;
  type: string;
  featuredImage?: string;
  liveUrl?: string;
  gallery?: string[];
}

export default function PortfolioContent() {
  const { language } = useLanguage();
  const currentLang = language as "en" | "ro";
  const [selectedProject, setSelectedProject] = useState<DisplayProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  // Map projects to display format based on language
  const mapProjectsToDisplay = (lang: "en" | "ro"): DisplayProject[] => {
    return allProjects.map((project) => ({
      id: project.id,
      title: lang === "en" ? project.titleEn : project.titleRo,
      category: project.category,
      shortDescription:
        lang === "en" ? project.shortDescriptionEn : project.shortDescriptionRo,
      longDescription:
        lang === "en" ? project.longDescriptionEn : project.longDescriptionRo,
      technologies: project.technologies,
      status: lang === "en" ? project.statusEn : project.statusRo,
      type: lang === "en" ? project.typeEn : project.typeRo,
      featuredImage: project.featuredImage,
      liveUrl: project.liveUrl,
      gallery: project.gallery,
    }));
  };

  // Enhanced portfolio content with detailed descriptions and images
  const portfolioContent = {
    en: {
      // Main sections
      intro: {
        title: "Our work",
        subtitle:
          "A selection of projects we've completed and are currently developing. Quality over quantity.",
      },

      // Current Projects
      projects: mapProjectsToDisplay("en"),

      // CTA Section
      cta: {
        title: "Let's build something together",
        description:
          "Ready to start your project? We'd love to discuss your ideas and how we can help bring them to life.",
        buttonText: "Start a conversation",
      },
    },
    ro: {
      // Main sections
      intro: {
        title: "Lucrările noastre",
        subtitle:
          "O selecție de proiecte pe care le-am finalizat și pe care le dezvoltăm în prezent. Calitate în loc de cantitate.",
      },

      // Current Projects
      projects: mapProjectsToDisplay("ro"),

      // CTA Section
      cta: {
        title: "Să construim ceva împreună",
        description:
          "Gata să începi proiectul? Ne-ar plăcea să discutăm ideile tale și cum te putem ajuta să le aduci la viață.",
        buttonText: "Începe o conversație",
      },
    },
  };

  const currentContent = portfolioContent[currentLang] || portfolioContent.ro;

  // Get icon for project type
  const getProjectIcon = (category: string) => {
    switch (category) {
      case "web":
        return Monitor;
      case "mobile":
        return Smartphone;
      case "industrial":
        return Settings;
      default:
        return Monitor;
    }
  };

  // Handle project click
  const handleProjectClick = (project: DisplayProject) => {
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
                {currentContent.projects.sort((a,b) => a.id - b.id).map((project) => {
                  const IconComponent = getProjectIcon(project.category);
                  return (
                    <CarouselItem
                      key={project.id}
                      className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                    >
                      <div
                        className="cursor-pointer"
                        onClick={() => handleProjectClick(project)}
                      >
                        <Card className="h-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 transition-colors duration-300 group relative">
                          {/* Status Badge - Themed */}
                          <div className="absolute top-2 right-2 z-30">
                            <span
                              className={`px-3 py-1.5 text-xs font-bold rounded-full shadow-lg border ${
                                project.status === "Completed" ||
                                project.status === "Finalizat"
                                  ? "bg-emerald-600 text-white border-emerald-500 dark:bg-emerald-500 dark:border-emerald-400"
                                  : "bg-slate-600 text-white border-slate-500 dark:bg-slate-500 dark:border-slate-400"
                              }`}
                            >
                              {project.status}
                            </span>
                          </div>

                          {/* Project Featured Image or Icon */}
                          <div className="h-48 relative overflow-hidden">
                            {project.featuredImage ? (
                              <Image
                                src={project.featuredImage}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-300"
                                onError={(e) => {
                                  // Fallback to icon background if image fails to load
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = "none";
                                  const parent = target.parentElement;
                                  if (parent) {
                                    parent.className =
                                      "h-48 bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/30 dark:to-emerald-800/20 flex items-center justify-center relative";
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
                                  <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                                    {project.type}
                                  </span>
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
                              {project.technologies
                                .slice(0, 4)
                                .map((tech, techIndex) => (
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
                    className="relative cursor-pointer group h-64 md:h-80 lg:h-96"
                    onClick={handleImageFullscreen}
                  >
                    <Image
                      src={selectedProject.featuredImage}
                      alt={selectedProject.title}
                      fill
                      className="object-contain rounded-lg"
                      onError={(e) => {
                        // Hide the entire image container if image fails to load
                        const target = e.target as HTMLImageElement;
                        const container = target.closest(
                          ".relative"
                        ) as HTMLElement;
                        if (container) {
                          container.style.display = "none";
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
                        {currentLang === "en" ? "Description" : "Descriere"}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-base md:text-lg">
                        {selectedProject.longDescription}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-4">
                        {currentLang === "en" ? "Technologies" : "Tehnologii"}
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.technologies.map(
                          (tech: string, index: number) => (
                            <span
                              key={index}
                              className="px-4 py-2 text-sm md:text-base bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Sidebar - Takes 1/3 on desktop */}
                  <div className="lg:col-span-1">
                    <div className="sticky top-6">
                      <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-lg p-6 lg:p-8 space-y-8">
                        <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300">
                          {currentLang === "en"
                            ? "Project Info"
                            : "Informații Proiect"}
                        </h3>
                        <div className="space-y-4">
                          <div className="flex flex-col space-y-1">
                            <span className="text-sm text-neutral-600 dark:text-neutral-400">
                              {currentLang === "en" ? "Type" : "Tip"}
                            </span>
                            <span className="text-slate-700 dark:text-slate-300 font-medium">
                              {selectedProject.type}
                            </span>
                          </div>
                          <div className="flex flex-col space-y-1">
                            <span className="text-sm text-neutral-600 dark:text-neutral-400">
                              {currentLang === "en" ? "Status" : "Status"}
                            </span>
                            <span
                              className={`font-medium ${
                                selectedProject.status === "Completed" ||
                                selectedProject.status === "Finalizat"
                                  ? "text-green-600 dark:text-green-400"
                                  : "text-blue-600 dark:text-blue-400"
                              }`}
                            >
                              {selectedProject.status}
                            </span>
                          </div>
                          {selectedProject.liveUrl && (
                            <div className="flex flex-col space-y-2">
                              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                                {currentLang === "en"
                                  ? "Live URL"
                                  : "Link Live"}
                              </span>
                              <a
                                href={selectedProject.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors"
                              >
                                <ExternalLink className="w-4 h-4" />
                                {currentLang === "en"
                                  ? "Visit Project"
                                  : "Vizitează Proiectul"}
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
            <Image
              src={selectedProject.featuredImage}
              alt={selectedProject.title}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={handleImageFullscreen}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
