import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Confidențialitate - Lagrange Engineering",
  description: "Politica de confidențialitate a Lagrange Engineering SRL",
  keywords: "politica confidențialitate, Lagrange Engineering, protecția datelor",
};

export default function PoliticaConfidentialitatePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-site">
      <h1 className="text-3xl font-bold mb-6">Politica de Confidențialitate</h1>
      <div className="prose max-w-none">
        <p>Conținutul va fi adăugat aici.</p>
      </div>
    </div>
  );
} 