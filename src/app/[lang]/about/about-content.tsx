"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { 
  Heart, 
  Users, 
  Lightbulb,
  Rocket,
  MessageCircle,
  Mail
} from "lucide-react";

export default function AboutContent() {
  const { language } = useLanguage();
  const currentLang = language as keyof typeof aboutContent;

  // Bilingual about page content
  const aboutContent = {
    en: {
      // Mission Section
      mission: {
        title: "Our mission",
        description: "Lagrange's mission is to accelerate technological development by supporting small and medium-sized companies to digitize and automate their processes. Through accessible and scalable solutions, offered with transparency and authenticity, the company aims to free resources from repetitive tasks and create the premises for addressing truly important challenges.",
        subtitle: "Building a future where technology equitably serves the sustainable development of business and society."
      },
      
      // Values Section
      values: {
        title: "Values & differentiators",
        subtitle: "The principles that guide everything we do",
        items: [
          {
            title: "Authenticity & transparency",
            description: "We build relationships based on trust, transparency and fairness, with the aim of creating win-win collaborations.",
            icon: Heart
          },
          {
            title: "Adaptability & continuous learning",
            description: "We take on new challenges and invest time to find the best solutions, regardless of complexity.",
            icon: Lightbulb
          },
          {
            title: "Long-term partnership",
            description: "Each project is treated as a joint investment, created to bring real and scalable value to both parties.",
            icon: Users
          }
        ]
      },

      // Positioning Section
      positioning: {
        title: "Our approach",
        description: "Lagrange primarily targets small and medium-sized companies looking to develop their digital presence through websites, web applications or customized software solutions. At the same time, the company positions itself as a trusted partner for larger organizations pursuing digitalization processes or developing complex digital products.",
        approach: "In the market, Lagrange assumes a positioning oriented towards affordable, fast and scalable solutions, so that clients can start with a minimal option, but with clear potential for long-term growth. The emphasis is on sincere consulting and balanced collaboration, in which technology directly serves business objectives."
      },

      // Vision Section
      vision: {
        title: "Vision & long-term goals",
        description: "Lagrange aims to become a trusted partner for its clients, building recurring and sustainable relationships. The main objective is to develop a solid portfolio of long-term collaborators, without losing its openness to new clients and new projects.",
        goals: [
          "Tackle both large, long-term projects and short-term initiatives",
          "Bring value through direct expertise and technical consulting",
          "Consolidate a reputation based on reliability and flexibility",
          "Respond in a balanced way to diverse challenges"
        ]
      },

      // CTA Section
      cta: {
        title: "Let's build something great together",
        description: "Ready to transform your business with technology solutions that truly make a difference?",
        primaryButton: "Start a conversation",
        secondaryButton: "View our services",
        contactText: "Or email us directly at",
        email: "office@lagrangeengineering.ro"
      }
    },
    ro: {
      // Mission Section
      mission: {
        title: "Misiunea noastră",
        description: "Misiunea Lagrange este de a accelera dezvoltarea tehnologică sprijinind companiile mici și medii să își digitalizeze și automatizeze procesele. Prin soluții accesibile și scalabile, oferite cu transparență și autenticitate, compania își propune să elibereze resursele de sarcini repetitive și să creeze premisele pentru abordarea unor provocări cu adevărat importante.",
        subtitle: "Construind un viitor în care tehnologia servește echitabil dezvoltarea sustenabilă a afacerilor și a societății."
      },

      // Values Section
      values: {
        title: "Valorile & diferențiatorii",
        subtitle: "Principiile care ghidează tot ceea ce facem",
        items: [
          {
            title: "Autenticitate & transparență",
            description: "Construim relații bazate pe încredere, transparență și corectitudine, cu scopul de a crea colaborări win-win.",
            icon: Heart
          },
          {
            title: "Adaptabilitate & învățare continuă",
            description: "Ne asumăm provocări noi și investim timp pentru a găsi cele mai bune soluții, indiferent de complexitate.",
            icon: Lightbulb
          },
          {
            title: "Parteneriat pe termen lung",
            description: "Fiecare proiect este tratat ca o investiție comună, creat pentru a aduce valoare reală și scalabilă ambelor părți.",
            icon: Users
          }
        ]
      },

      // Positioning Section
      positioning: {
        title: "Abordarea noastră",
        description: "Lagrange se adresează în principal companiilor mici și medii care doresc să își dezvolte prezența digitală prin website-uri, aplicații web sau soluții software personalizate. Totodată, compania se poziționează ca un partener de încredere și pentru organizațiile mai mari care urmăresc procese de digitalizare sau dezvoltarea unor produse digitale complexe.",
        approach: "Pe piață, Lagrange își asumă o poziționare orientată spre soluții accesibile, rapide și scalabile, astfel încât clienții să poată începe cu o variantă minimă, dar cu potențial clar de creștere pe termen lung. Accentul cade pe consultanță sinceră și pe o colaborare echilibrată, în care tehnologia servește direct obiectivele de business."
      },

      // Vision Section
      vision: {
        title: "Viziune & obiective pe termen lung",
        description: "Lagrange își propune să devină un partener de încredere pentru clienții săi, construind relații recurente și durabile. Obiectivul principal este dezvoltarea unui portofoliu solid de colaboratori pe termen lung, fără a pierde însă deschiderea către clienți noi și proiecte noi.",
        goals: [
          "Abordează atât proiecte mari, de lungă durată, cât și inițiative pe termen scurt",
          "Aduce valoare prin expertiză directă și consultanță tehnică",
          "Consolidează o reputație bazată pe fiabilitate și flexibilitate",
          "Răspunde echilibrat la provocări diverse"
        ]
      },

      // CTA Section
      cta: {
        title: "Să construim ceva măreț împreună",
        description: "Ești gata să-ți transformi afacerea cu soluții tehnologice care fac cu adevărat diferența?",
        primaryButton: "Începe o conversație",
        secondaryButton: "Vezi serviciile noastre",
        contactText: "Sau trimite-ne un email direct la",
        email: "office@lagrangeengineering.ro"
      }
    }
  };

  const currentContent = aboutContent[currentLang] || aboutContent.ro;

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Mission Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            {/* Content */}
            <div className="flex-1 space-y-6">
              <div className="space-y-4">
               
                <h2 className="text-3xl md:text-4xl font-bold text-slate-700 dark:text-slate-300">
                  {currentContent.mission.title}
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {currentContent.mission.description}
                </p>
              </div>
              <Card className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <CardContent>
                  <p className="text-lg font-medium text-emerald-700 dark:text-emerald-400 italic">
                    {currentContent.mission.subtitle}
                  </p>
                </CardContent>
              </Card>
            </div>
            {/* Illustration */}
            <div className="flex-1">
              <div className="flex items-center justify-center h-96 lg:h-[400px] relative">
                <Image 
                  src="/misiune.svg" 
                  alt={currentContent.mission.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              {currentContent.values.title}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              {currentContent.values.subtitle}
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {currentContent.values.items.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg w-fit mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-700 dark:text-slate-300">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Positioning Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row-reverse items-center gap-12"
          >
            {/* Content */}
            <div className="flex-1 space-y-6">
              <div className="space-y-4">
                {/* <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg w-fit">
                  <Target className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div> */}
                <h2 className="text-3xl md:text-4xl font-bold text-slate-700 dark:text-slate-300">
                  {currentContent.positioning.title}
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {currentContent.positioning.description}
                </p>
              </div>
              <Card className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <CardContent>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {currentContent.positioning.approach}
                  </p>
                </CardContent>
              </Card>
            </div>
            {/* Illustration */}
            <div className="flex-1">
              <div className="flex items-center justify-center h-96 lg:h-[400px] relative">
                <Image 
                  src="/abordare.svg" 
                  alt={currentContent.positioning.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            {/* Content */}
            <div className="flex-1 space-y-6">
              <div className="space-y-4">
                {/* <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg w-fit">
                  <Shield className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div> */}
                <h2 className="text-3xl md:text-4xl font-bold text-slate-700 dark:text-slate-300">
                  {currentContent.vision.title}
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {currentContent.vision.description}
                </p>
              </div>
              <Card className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-700 dark:text-slate-300">
                    {currentLang === 'en' ? 'Our long-term goals:' : 'Obiectivele noastre pe termen lung:'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {currentContent.vision.goals.map((goal, goalIndex) => (
                      <motion.li
                        key={goalIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: goalIndex * 0.05 }}
                        className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400"
                      >
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{goal}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            {/* Illustration */}
            <div className="flex-1">
              <div className="flex items-center justify-center h-96 lg:h-[400px] relative">
                <Image 
                  src="/obiective.svg" 
                  alt={currentContent.vision.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-700 dark:text-slate-300 mb-6">
                {currentContent.cta.title}
              </h2>
              <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                {currentContent.cta.description}
              </p>
            </div>

            <div className="grid gap-8 md:gap-6 md:grid-cols-2 mb-12">
              {/* Primary CTA Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-white dark:bg-neutral-900 h-full hover:shadow-lg transition-all hover:border-emerald-300 dark:hover:border-emerald-700">
                  <CardContent className="p-8 text-center">
                    <div className="p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-full w-fit mx-auto mb-6">
                      <MessageCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-4">
                      {currentLang === 'en' ? 'Ready to start?' : 'Gata să începi?'}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                      {currentLang === 'en' 
                        ? 'Schedule a consultation to discuss your project and goals.' 
                        : 'Programează o consultație pentru a discuta proiectul și obiectivele tale.'}
                    </p>
                    <Link href={`/${currentLang}/contact`}>
                      <Button 
                        size="lg" 
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                      >
                        {currentContent.cta.primaryButton}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Secondary CTA Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full hover:shadow-lg transition-all">
                  <CardContent className="p-8 text-center">
                    <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full w-fit mx-auto mb-6">
                      <Rocket className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-4">
                      {currentLang === 'en' ? 'Explore our work' : 'Explorează munca noastră'}
                    </h3> 
                    <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                      {currentLang === 'en' 
                        ? 'Discover the full range of services and solutions we offer.' 
                        : 'Descoperă gama completă de servicii și soluții pe care le oferim.'}
                    </p>
                    <Link href={`/${currentLang}/services`}>
                      <Button 
                        size="lg" 
                        variant="outline"
                        className="w-full border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                      >
                        {currentContent.cta.secondaryButton}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Direct Contact */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-2 text-neutral-600 dark:text-neutral-400"
            >
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>{currentContent.cta.contactText}</span>
              </div>
              <Link 
                href="mailto:office@lagrangeengineering.ro"
                className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium"
              >
                {currentContent.cta.email}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}