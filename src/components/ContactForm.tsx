"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Building, Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Bilingual content
  const content = {
    en: {
      title: "Get In Touch",
      subtitle: "Ready to start your project? Let's discuss how we can help bring your vision to life.",
      form: {
        name: "Full Name",
        email: "Email Address",
        company: "Company Name",
        phone: "Phone Number",
        service: "Service Type",
        message: "Project Details",
        submit: "Send Message",
        submitting: "Sending...",
        success: "Message Sent Successfully!"
      },
      contact: {
        title: "Contact Information",
        address: "Str. Ioan Alexandru, No. 20, POD Floor, Ap. POD 2",
        city: "Timișoara, Timiș County",
        email: "office@lagrangeengineering.ro",
        phone: "+40 756 109 881",
        company: "Lagrange Engineering SRL",
        cui: "CUI 51196824",
        j: "J2025005646004"
      }
    },
    ro: {
      title: "Contactează-ne",
      subtitle: "Gata să începi proiectul tău? Să discutăm cum te putem ajuta să îți realizezi viziunea.",
      form: {
        name: "Numele Complet",
        email: "Adresa de Email",
        company: "Numele Companiei",
        phone: "Numărul de Telefon",
        service: "Tipul de Serviciu",
        message: "Detaliile Proiectului",
        submit: "Trimite Mesajul",
        submitting: "Se trimite...",
        success: "Mesajul a fost trimis cu succes!"
      },
      contact: {
        title: "Informații de Contact",
        address: "Str. Ioan Alexandru, Nr. 20, Etaj POD, Ap. POD 2",
        city: "Timișoara, Județul Timiș",
        email: "office@lagrangeengineering.ro",
        phone: "+40 756 109 881",
        company: "Lagrange Engineering SRL",
        cui: "CUI 51196824",
        j: "J2025005646004"
      }
    }
  };

  const currentContent = content[language as keyof typeof content] || content.ro;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      e.currentTarget.reset();
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700 dark:text-slate-300 mb-6">
          {currentContent.title
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true }}
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
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
        >
          {currentContent.subtitle}
        </motion.p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <CardHeader>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <CardTitle className="text-2xl font-bold text-slate-700 dark:text-slate-300">
                  {currentContent.contact.title}
                </CardTitle>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <CardDescription className="text-base text-neutral-600 dark:text-neutral-400">
                  {currentContent.subtitle}
                </CardDescription>
              </motion.div>
            </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <motion.div 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                  <Building className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="font-semibold text-slate-700 dark:text-slate-300">
                    {currentContent.contact.company}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {currentContent.contact.cui}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {currentContent.contact.j}
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                  <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="font-semibold text-slate-700 dark:text-slate-300">
                    Address
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {currentContent.contact.address}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {currentContent.contact.city}
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                  <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="font-semibold text-slate-700 dark:text-slate-300">
                    Email
                  </p>
                  <a 
                    href={`mailto:${currentContent.contact.email}`}
                    className="text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                  >
                    {currentContent.contact.email}
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                  <Phone className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="font-semibold text-slate-700 dark:text-slate-300">
                    Phone
                  </p>
                  <a 
                    href={`tel:${currentContent.contact.phone}`}
                    className="text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                  >
                    {currentContent.contact.phone}
                  </a>
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <CardHeader>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <CardTitle className="text-2xl font-bold text-slate-700 dark:text-slate-300">
                  {currentContent.title}
                </CardTitle>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <CardDescription className="text-base text-neutral-600 dark:text-neutral-400">
                  {currentContent.subtitle}
                </CardDescription>
              </motion.div>
            </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    {currentContent.form.success}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    We'll get back to you soon!
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-700 dark:text-slate-300">
                      {currentContent.form.name} *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder={currentContent.form.name}
                      className="border-neutral-200 dark:border-neutral-700 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">
                      {currentContent.form.email} *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder={currentContent.form.email}
                      className="border-neutral-200 dark:border-neutral-700 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-slate-700 dark:text-slate-300">
                      {currentContent.form.company}
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder={currentContent.form.company}
                      className="border-neutral-200 dark:border-neutral-700 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-slate-700 dark:text-slate-300">
                      {currentContent.form.phone}
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder={currentContent.form.phone}
                      className="border-neutral-200 dark:border-neutral-700 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-slate-700 dark:text-slate-300">
                    {currentContent.form.service}
                  </Label>
                  <select
                    id="service"
                    name="service"
                    className="flex h-10 w-full rounded-md border border-neutral-200 dark:border-neutral-700 bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                  >
                    <option value="">{language === 'en' ? 'Select a service' : 'Selectează un serviciu'}</option>
                    <option value="website">{language === 'en' ? 'Website & Web Platforms' : 'Website & Platforme Web'}</option>
                    <option value="web-app">{language === 'en' ? 'Web & SaaS Applications' : 'Aplicații Web & SaaS'}</option>
                    <option value="mobile">{language === 'en' ? 'Mobile & Cross-Platform Apps' : 'Aplicații Mobile & Cross-Platform'}</option>
                    <option value="automation">{language === 'en' ? 'Digitalization & Automation' : 'Digitalizare & Automatizare'}</option>
                    <option value="consulting">{language === 'en' ? 'Consulting & Technical Guidance' : 'Consultanță & Îndrumare Tehnică'}</option>
                    <option value="other">{language === 'en' ? 'Other' : 'Altele'}</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-700 dark:text-slate-300">
                    {currentContent.form.message} *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder={language === 'en' ? 'Tell us about your project, requirements, and timeline...' : 'Spune-ne despre proiectul tău, cerințele și termenul limită...'}
                    className="border-neutral-200 dark:border-neutral-700 focus:border-emerald-500 focus:ring-emerald-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      {currentContent.form.submitting}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      {currentContent.form.submit}
                    </>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
        </motion.div>
      </div>
    </div>
  );
} 