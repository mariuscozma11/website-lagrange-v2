"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  User
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

      // Team Section
      team: {
        title: "Meet the team",
        subtitle: "The people behind Lagrange Engineering",
        members: [
          {
            name: "Marius",
            role: "Administrator & Technical Director",
            description: "Full-stack software architect and business strategist with expertise in scalable system design, cloud infrastructure, and sustainable technology solutions. Leads technical innovation while driving strategic business development.",
            email: "marius.cozma@lagrangeengineering.ro",
            skills: ["System Architecture", "Cloud Infrastructure", "Database Design", "API Development", "Business Strategy", "Project Management"]
          },
          {
            name: "Andrei",
            role: "Co-Founder & Financial Operations",
            description: "Financial operations manager and future real estate investment strategist, ensuring company's financial stability and growth.",
            email: "andrei.barbu@lagrangeengineering.ro", 
            skills: ["Financial Management", "Accounting Operations", "Investment Planning", "Real Estate Strategy"]
          }
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

      // Team Section
      team: {
        title: "Echipa noastră",
        subtitle: "Oamenii din spatele Lagrange Engineering",
        members: [
          {
            name: "Marius",
            role: "Administrator & Director Tehnic",
            description: "Arhitect software full-stack și strateg în afaceri cu expertiză în designul de sisteme scalabile, infrastructură cloud și soluții tehnologice sustenabile. Conduce inovația tehnică în timp ce dirijează dezvoltarea strategică a afacerii.",
            email: "marius.cozma@lagrangeengineering.ro",
            skills: ["Arhitectură Sisteme", "Infrastructură Cloud", "Design Baze de Date", "Dezvoltare API", "Strategie Afaceri", "Management Proiecte"]
          },
          {
            name: "Andrei",
            role: "Co-Fondator & Operațiuni Financiare",
            description: "Manager operațiuni financiare și viitor strateg în investiții imobiliare, asigurând stabilitatea financiară și creșterea companiei.",
            email: "andrei.barbu@lagrangeengineering.ro",
            skills: ["Management Financiar", "Operațiuni Contabile", "Planificare Investiții", "Strategie Imobiliară"]
          }
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

      {/* Team Section */}
      <section className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-700 dark:text-slate-300 mb-4">
              {currentContent.team.title}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              {currentContent.team.subtitle}
            </p>
          </motion.div>

          {/* Team Cards */}
          <div className="grid gap-8 lg:grid-cols-2">
            {currentContent.team.members.map((member, index) => {
              // Marius gets green, Andrei gets blue
              const isAndrei = member.name === "Andrei";
              const avatarColorClasses = isAndrei 
                ? "from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/20"
                : "from-emerald-100 to-emerald-200 dark:from-emerald-900/30 dark:to-emerald-800/20";
              const iconColorClasses = isAndrei
                ? "text-blue-600 dark:text-blue-400"
                : "text-emerald-600 dark:text-emerald-400";
              const roleColorClasses = isAndrei
                ? "text-blue-600 dark:text-blue-400"
                : "text-emerald-600 dark:text-emerald-400";
              const skillBgClasses = isAndrei
                ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                : "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400";
              const emailHoverClasses = isAndrei
                ? "hover:text-blue-600 dark:hover:text-blue-400"
                : "hover:text-emerald-600 dark:hover:text-emerald-400";

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="h-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                        {/* Avatar Placeholder */}
                        <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${avatarColorClasses} rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0`}>
                          <User className={`w-8 h-8 sm:w-10 sm:h-10 ${iconColorClasses}`} />
                        </div>
                        
                        <div className="flex-1 text-center sm:text-left">
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300 mb-1">
                            {member.name}
                          </h3>
                          <p className={`${roleColorClasses} font-semibold mb-3 text-sm sm:text-base`}>
                            {member.role}
                          </p>
                          <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed text-sm sm:text-base">
                            {member.description}
                          </p>
                          
                          {/* Skills */}
                          <div className="mb-4">
                            <h4 className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                              {currentLang === 'en' ? 'Specialties:' : 'Specializări:'}
                            </h4>
                            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                              {member.skills.map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className={`px-2 py-1 text-xs ${skillBgClasses} rounded-md`}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Contact */}
                          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                            <Link 
                              href={`mailto:${member.email}`}
                              className={`flex items-center gap-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 ${emailHoverClasses} transition-colors`}
                            >
                              <Mail className="w-4 h-4" />
                              <span>{member.email}</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}