"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import {
  Mail,
  Phone
} from "lucide-react";

export default function ContactContent() {
  const { language } = useLanguage();
  const currentLang = language as keyof typeof contactContent;

  // Epic contact content with everything!
  const contactContent = {
    en: {
      // Quick Contact Section
      quickContact: {
        title: "Quick contact",
        subtitle: "Choose your preferred way to reach us",
        methods: [
          {
            title: "Email Us",
            description: "Send us a message anytime",
            value: "office@lagrangeengineering.ro",
            icon: Mail,
            href: "mailto:office@lagrangeengineering.ro",
            color: "emerald"
          },
          {
            title: "Call Us",
            description: "Speak with us directly",
            value: "+40 756 109 881",
            icon: Phone,
            href: "tel:+40756109881",
            color: "blue"
          },
        ]
      },

    },
    ro: {
      // Quick Contact Section
      quickContact: {
        title: "Contact rapid",
        subtitle: "Alege modalitatea preferată de a ne contacta",
        methods: [
          {
            title: "Trimite Email",
            description: "Scrie-ne oricând",
            value: "office@lagrangeengineering.ro",
            icon: Mail,
            href: "mailto:office@lagrangeengineering.ro",
            color: "emerald"
          },
          {
            title: "Sună-ne",
            description: "Vorbește direct cu noi",
            value: "+40 756 109 881",
            icon: Phone,
            href: "tel:+40756109881",
            color: "blue"
          },
        ]
      },

    }
  };

  const currentContent = contactContent[currentLang] || contactContent.ro;

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Quick Contact Methods */}
      <section className="pt-16 pb-24 px-6 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-700 dark:text-slate-300 mb-4">
              {currentContent.quickContact.title}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              {currentContent.quickContact.subtitle}
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {currentContent.quickContact.methods.map((method, index) => {
              const IconComponent = method.icon;
              const colorClasses = {
                emerald: "from-emerald-100 to-emerald-200 dark:from-emerald-900/30 dark:to-emerald-800/20 text-emerald-600 dark:text-emerald-400 hover:shadow-emerald-200 dark:hover:shadow-emerald-900/20",
                blue: "from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/20 text-blue-600 dark:text-blue-400 hover:shadow-blue-200 dark:hover:shadow-blue-900/20",
                purple: "from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/20 text-purple-600 dark:text-purple-400 hover:shadow-purple-200 dark:hover:shadow-purple-900/20"
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Link href={method.href}>
                    <Card className={`h-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-xl transition-all duration-300 cursor-pointer group ${colorClasses[method.color as keyof typeof colorClasses].includes('hover:shadow') ? 'hover:shadow-xl' : ''}`}>
                      <CardContent className="p-8 text-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses[method.color as keyof typeof colorClasses].split(' ').slice(0, 4).join(' ')} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                          <IconComponent className={`w-8 h-8 ${colorClasses[method.color as keyof typeof colorClasses].split(' ').slice(4, 6).join(' ')}`} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">
                          {method.title}
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                          {method.description}
                        </p>
                        <p className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                          {method.value}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section - Homepage Style */}
      <ContactForm />

    </div>
  );
}