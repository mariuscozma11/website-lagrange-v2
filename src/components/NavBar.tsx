"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

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
        } lg:flex`}
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
      <div className="relative lg:hidden">
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
            <span className="font-medium text-gray-900 dark:text-white flex-shrink-0">Lagrange Engineering</span>
          </Link>
          
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            {/* Animated Hamburger Button */}
            <button
              className="relative w-8 h-8 flex flex-col justify-center items-center focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span 
                className={`w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span 
                className={`w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ease-in-out mt-1.5 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span 
                className={`w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ease-in-out mt-1.5 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`absolute inset-x-0 top-full mx-auto max-w-7xl rounded-b-2xl shadow-2xl transition-all duration-500 ease-in-out ${
              scrolled 
                ? 'w-[85%] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-gray-200/50 dark:border-slate-700/50' 
                : 'w-[90%] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-gray-200/50 dark:border-slate-700/50'
            }`}
          >
            <div className="p-8 space-y-6">
              {/* Navigation Links */}
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg font-medium text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 hover:translate-x-2 py-2 border-b border-gray-200/50 dark:border-slate-700/30 last:border-b-0"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              {/* Divider */}
              <div className="border-t border-gray-200/50 dark:border-slate-700/50 pt-4">
                <Link
                  href={`/${language}/contact`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-4 text-center font-bold text-white hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap"
                >
                  {t('common.cta')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 