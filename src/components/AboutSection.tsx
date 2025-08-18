import Link from "next/link";
import { Code2, Layers, FileCode2, Wind, Smartphone, Monitor, Server, Database, Search, Gauge } from "lucide-react";
import TechMarquee from "@/components/TechMarquee";

export default function AboutSection() {
  const tech = [
    { Icon: Layers, label: "Next.js" },
    { Icon: Code2, label: "React" },
    { Icon: FileCode2, label: "TypeScript" },
    { Icon: Wind, label: "Tailwind CSS" },
    { Icon: Smartphone, label: "React Native" },
    { Icon: Monitor, label: "Electron" },
    { Icon: Server, label: "NestJS" },
    { Icon: Server, label: "Node.js" },
    { Icon: Server, label: "Fastify" },
    { Icon: Database, label: "PostgreSQL" },
    { Icon: Database, label: "SQLite" },
    { Icon: Database, label: "MongoDB" },
    { Icon: Search, label: "SEO" },
    { Icon: Gauge, label: "Performanță" },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        {/* Left: Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Despre Lagrange Engineering
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300">
            Lagrange Engineering este o companie românească de tehnologie, cu focus puternic pe dezvoltare backend.
            Avem o experiență solidă și o abordare practică: livrăm produse de calitate în timp bun, la un preț corect, sub media pieței.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300">
            Construim site-uri web, aplicații web și software la comandă, cu infrastructură backend robustă,
            baze de date proiectate corect și API-uri rapide. Pentru interfețe, folosim unelte moderne (inclusiv AI)
            ca să iterăm mai repede fără a compromite calitatea și accesibilitatea.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/despre"
              className="rounded-md bg-emerald-500 px-6 py-3 text-center font-medium text-white transition-colors hover:bg-emerald-600"
            >
              Află mai multe
            </Link>
            <Link
              href="/portofoliu"
              className="rounded-md border border-gray-300 px-6 py-3 text-center font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Vezi lucrările
            </Link>
          </div>
        </div>

        {/* Right: Promises & Tech */}
        <div className="space-y-6">
          <div className="hidden md:block rounded-2xl border border-gray-200/60 bg-white/70 p-4 sm:p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">Cum lucrăm</h3>
            <ul className="list-inside list-disc space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>Prețuri transparente, sub prețul pieței pentru același nivel de calitate</li>
              <li>Timeline realist, cu status clar pe parcurs</li>
              <li>Arhitecturi backend stabile, API-uri rapide și baze de date bine modelate</li>
              <li>Comunicare directă și suport după lansare</li>
            </ul>
          </div>
          <div className="hidden md:block rounded-2xl border border-gray-200/60 p-4 sm:p-6 backdrop-blur-sm dark:border-white/10">
            <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">Tehnologii</h3>
            <div className="overflow-hidden">
              <TechMarquee items={tech} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 