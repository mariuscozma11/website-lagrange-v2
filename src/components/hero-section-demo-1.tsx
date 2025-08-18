"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function HeroSectionOne() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl min-h-[85vh] flex-col items-center justify-center">
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
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-800 md:text-4xl lg:text-7xl dark:text-slate-200">
          {"Soluții web accesibile, calitate premium și livrare rapidă"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.06,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-2xl py-4 text-center text-lg font-normal text-neutral-700 dark:text-neutral-300"
        >
          Dezvoltare web și aplicații personalizate la preț accesibil, fără compromisuri la calitate. Site-uri optimizate SEO, performanță ridicată și experiență rapidă pe mobil și desktop.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="w-60 transform cursor-pointer rounded-lg bg-emerald-500 px-6 py-2 text-center font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600"
          >
            Cere ofertă
          </Link>
          <Link
            href="/portofoliu"
            className="w-60 cursor-pointer transform rounded-lg border border-gray-300 bg-white px-6 py-2 text-center font-medium text-gray-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900"
          >
            Vezi portofoliu
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
