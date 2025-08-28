import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica Cookies - Lagrange Engineering",
  description: "Politica cookies a Lagrange Engineering SRL",
  keywords: "politica cookies, Lagrange Engineering, cookies, tracking",
};

export default function PoliticaCookiesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-site">
      <h1 className="text-3xl font-bold mb-6">Politica Cookies</h1>
      <div className="prose max-w-none">
        <p>Conținutul va fi adăugat aici.</p>
      </div>
    </div>
  );
} 