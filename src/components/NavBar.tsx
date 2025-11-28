"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export default function NavBar() {
  const { t, language } = useLanguage();
  
  // Navigation items array with translations - recalculated when language changes
  const navItems = React.useMemo(() => [
    { name: t('nav.home'), link: `/${language}` },
    { name: t('nav.services'), link: `/${language}/services` },
    { name: t('nav.about'), link: `/${language}/about` },
    { name: t('nav.portfolio'), link: `/${language}/portfolio` },
    { name: t('nav.contact'), link: `/${language}/contact` }
  ], [t, language]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky text-sm top-0 z-40 rounded-full transition-all duration-700 ease-in-out ${
        scrolled ? 'top-4' : 'top-1'
      }`}
    >
      {/* Desktop Navigation */}
      <div
        className={`mx-auto hidden max-w-[1440px] items-center justify-between transition-all duration-300 ease-in-out ${
          scrolled
            ? 'w-[90%] max-w-4xl rounded-full backdrop-blur-sm bg-white/80 dark:bg-slate-950/40 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] px-10 py-4'
            : 'w-full px-6 py-4'
        } min-[1150px]:flex`}
      >
        <Link href="/" className="flex items-center space-x-3 pr-6 flex-shrink-0">
        
          <span className="relative flex items-center flex-shrink-0">
            <Image
              src="/lg-black.svg"
              alt="Lagrange Engineering"
              width={48}
              height={48}
              className="block dark:hidden flex-shrink-0"
            />
            <Image
              src="/lg-white.svg"
              alt="Lagrange Engineering"
              width={48}
              height={48}
              className="hidden dark:block flex-shrink-0"
            />
          </span>
          <span className="font-medium text-gray-900 dark:text-white flex-shrink-0">Lagrange Engineering</span>
        </Link>
        
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link 
                href={item.link} 
                className="text-gray-700 dark:text-white transition-colors duration-300 hover:text-emerald-600 dark:hover:text-emerald-500"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="flex items-center gap-6 pl-6">
          <LanguageSwitcher />
          <Link
            href={`/${language}/contact`}
            className="rounded-md bg-emerald-500 hover:bg-emerald-600 transition-colors px-4 py-2 text-white whitespace-nowrap"
          >
            {t('common.cta')}
          </Link>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="relative min-[1150px]:hidden">
        {/* Header */}
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between transition-all px-6 py-4 duration-300 ease-in-out ${
            scrolled 
              ? 'w-[90%] rounded-full backdrop-blur-md bg-white/90 dark:bg-slate-950/80 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]' 
              : 'w-full'
          }`}
        >
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
          <Image
            src="/lg-black.svg"
            alt="Lagrange Engineering"
            width={40}
            height={40}
            className="block dark:hidden flex-shrink-0"
          />
          <Image
            src="/lg-white.svg"
            alt="Lagrange Engineering"
            width={40}
            height={40}
            className="hidden dark:block flex-shrink-0"
          />
            <span className="hidden sm:block font-medium text-gray-900 dark:text-white flex-shrink-0">Lagrange Engineering</span>
          </Link>
          
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            {/* Hamburger Button */}
            <button
              className="relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="w-6 h-0.5 bg-gray-900 dark:bg-white" />
              <span className="w-6 h-0.5 bg-gray-900 dark:bg-white" />
              <span className="w-6 h-0.5 bg-gray-900 dark:bg-white" />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Side Panel */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop with blur */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Side Panel */}
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{
                  duration: 0.4,
                  ease: [0.32, 0.72, 0, 1]
                }}
                className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl z-50 overflow-y-auto"
              >
                <div className="p-8 space-y-8">
                  {/* Close Button */}
                  <div className="flex justify-end">
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-slate-800/50 transition-colors"
                      aria-label="Close menu"
                    >
                      <svg
                        className="w-6 h-6 text-gray-900 dark:text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Navigation Links */}
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          delay: index * 0.1,
                          duration: 0.3,
                          ease: "easeOut"
                        }}
                      >
                        <Link
                          href={item.link}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-lg font-medium text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 hover:translate-x-2 py-3 px-4 rounded-lg hover:bg-gray-100/50 dark:hover:bg-slate-800/50"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200/50 dark:border-slate-700/50 pt-6">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: navItems.length * 0.1,
                        duration: 0.3
                      }}
                    >
                      <Link
                        href={`/${language}/contact`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block w-full rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-4 text-center font-bold text-white hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        {t('common.cta')}
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
} 