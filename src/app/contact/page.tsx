import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Lagrange Engineering | Contactează-ne Pentru Soluții Tehnologice",
  description: "Contactează Lagrange Engineering pentru soluții tehnologice personalizate. Suntem aici să te ajutăm cu proiectele tale de dezvoltare web și aplicații.",
  keywords: "contact Lagrange Engineering, soluții tehnologice, dezvoltare web România, consultanță IT",
  openGraph: {
    title: "Contact - Lagrange Engineering | Contactează-ne Pentru Soluții Tehnologice",
    description: "Contactează Lagrange Engineering pentru soluții tehnologice personalizate. Suntem aici să te ajutăm cu proiectele tale de dezvoltare web și aplicații.",
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-site">
      <h1 className="text-3xl font-bold mb-6">Contactează-ne</h1>
      <p className="text-lg text-gray-700">
        Conținutul paginii de contact va fi adăugat aici.
      </p>
    </div>
  );
} 