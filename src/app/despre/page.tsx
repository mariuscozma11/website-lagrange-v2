import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despre Noi - Lagrange Engineering | Companie Română de Tehnologie",
  description: "Află mai multe despre Lagrange Engineering, compania română de tehnologie care oferă soluții digitale inovatoare și dezvoltare web de calitate.",
  keywords: "despre Lagrange Engineering, companie tehnologie România, echipa dezvoltare, istoric companie",
  openGraph: {
    title: "Despre Noi - Lagrange Engineering | Companie Română de Tehnologie",
    description: "Află mai multe despre Lagrange Engineering, compania română de tehnologie care oferă soluții digitale inovatoare și dezvoltare web de calitate.",
  },
};

export default function DesprePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-site">
      <h1 className="text-3xl font-bold mb-6">Despre Noi</h1>
      <p className="text-lg text-gray-700">
        Conținutul paginii despre noi va fi adăugat aici.
      </p>
    </div>
  );
} 