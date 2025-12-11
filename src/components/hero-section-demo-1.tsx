"use client";
import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import Link from "next/link";

export default function HeroSectionOne() {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    en: {
      title: "Technology solutions that scale",
      subtitle:
        "Build your digital presence with professional solutions designed for growth and reliability.",
      primaryButton: "Start Your Project",
      secondaryButton: "Contact Us",
    },
    ro: {
      title: "Soluții tehnologice care cresc",
      subtitle:
        "Construiește-ți prezența digitală cu soluții profesionale proiectate pentru creștere și fiabilitate.",
      primaryButton: "Începe Proiectul",
      secondaryButton: "Contactează-ne",
    },
  };

  const currentContent =
    content[language as keyof typeof content] || content.ro;

  return (
    <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center h-screen">
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-emerald-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-emerald-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-3xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {currentContent.title.split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
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
        </h1>
        <motion.p
          initial={{
            opacity: 0,
            filter: "blur(4px)",
            y: 10,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-xl font-normal text-neutral-600 dark:text-neutral-400"
        >
          {currentContent.subtitle}
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href={`/${language}/contact`}>
            <Button className="w-60 transform rounded-md bg-emerald-600 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700">
              {currentContent.primaryButton}
            </Button>
          </Link>
          <Link href={`/${language}/contact`}>
            <Button className="w-60 transform rounded-md border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
              {currentContent.secondaryButton}
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
