import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portofoliu - Lagrange Engineering | Proiecte și Lucrări Realizate",
  description: "Explorează portofoliul nostru de proiecte web și aplicații personalizate. Lagrange Engineering a realizat soluții digitale pentru diverse companii din România.",
  keywords: "portofoliu proiecte web, aplicații realizate, lucrări Lagrange Engineering, proiecte tehnologie România",
  openGraph: {
    title: "Portofoliu - Lagrange Engineering | Proiecte și Lucrări Realizate",
    description: "Explorează portofoliul nostru de proiecte web și aplicații personalizate. Lagrange Engineering a realizat soluții digitale pentru diverse companii din România.",
  },
};

export default function PortofoliuPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-site">
      <h1 className="text-3xl font-bold mb-6">Portofoliul Nostru</h1>
      <p className="text-lg text-gray-700">
        Conținutul paginii de portofoliu va fi adăugat aici.
      </p>
    </div>
  );
} 