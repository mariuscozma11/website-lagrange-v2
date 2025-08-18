import HeroSectionOne from "@/components/hero-section-demo-1";
import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";

export const metadata: Metadata = {
  title:
    "Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web în România",
  description:
    "Lagrange Engineering este o companie română de tehnologie care oferă dezvoltare web, aplicații personalizate și soluții digitale de înaltă calitate pentru afacerea ta.",
  keywords:
    "dezvoltare web România, dezvoltare web Timisoara, aplicații personalizate, soluții digitale, tehnologie, Lagrange Engineering",
  openGraph: {
    title:
      "Lagrange Engineering - Soluții Tehnologice și Dezvoltare Web în România",
    description:
      "Lagrange Engineering este o companie română de tehnologie care oferă dezvoltare web, aplicații personalizate și soluții digitale de înaltă calitate pentru afacerea ta.",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSectionOne />
      <AboutSection />
    </>
  );
}
