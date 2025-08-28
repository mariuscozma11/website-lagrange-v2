import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicii - Lagrange Engineering | Dezvoltare Web și Aplicații Personalizate",
  description: "Descoperă serviciile noastre de dezvoltare web, aplicații personalizate și soluții digitale. Lagrange Engineering oferă soluții tehnologice complete pentru afacerea ta.",
  keywords: "servicii dezvoltare web, aplicații personalizate, soluții digitale, tehnologie, România",
  openGraph: {
    title: "Servicii - Lagrange Engineering | Dezvoltare Web și Aplicații Personalizate",
    description: "Descoperă serviciile noastre de dezvoltare web, aplicații personalizate și soluții digitale. Lagrange Engineering oferă soluții tehnologice complete pentru afacerea ta.",
  },
};

export default function ServiciiPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-site">
      <h1 className="text-3xl font-bold mb-6">Serviciile Noastre</h1>
      <p className="text-lg text-gray-700">
        Conținutul paginii de servicii va fi adăugat aici.
      </p>
    </div>
  );
} 