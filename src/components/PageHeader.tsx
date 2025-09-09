"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";

interface PageHeaderProps {
  title: string | { en: string; ro: string };
  subtitle: string | { en: string; ro: string };
  className?: string;
  height?: "full" | "half" | "auto";
  showBorders?: boolean;
}

export default function PageHeader({ 
  title, 
  subtitle, 
  className = "",
  height = "full",
  showBorders = true 
}: PageHeaderProps) {
  const { language } = useLanguage();

  // Handle dual language content
  const getContent = (content: string | { en: string; ro: string }) => {
    if (typeof content === "string") {
      return content;
    }
    return content[language as keyof typeof content] || content.ro;
  };

  const currentTitle = getContent(title);
  const currentSubtitle = getContent(subtitle);

  // Height classes
  const heightClasses = {
    full: "h-screen",
    half: "h-[50vh]",
    auto: "min-h-[60vh]"
  };

  return (
    <div className={`relative mx-auto flex max-w-7xl flex-col items-center justify-center ${heightClasses[height]} ${className}`}>
      {/* Decorative border lines */}
      {showBorders && (
        <>
          <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
            <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-emerald-500 to-transparent" />
          </div>
          <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
            <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-emerald-500 to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
            <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
          </div>
        </>
      )}

      <div className="px-4 py-10 md:py-20">
        {/* Animated Title */}
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-3xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {currentTitle
            .split(" ")
            .map((word, index) => (
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

        {/* Animated Subtitle */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-xl font-normal text-neutral-600 dark:text-neutral-400"
        >
          {currentSubtitle}
        </motion.p>
      </div>
    </div>
  );
} 