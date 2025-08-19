import Link from "next/link";
import { Button } from "./ui/button";

export default function HomeServicesSection() {
  

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 flex flex-col md:flex-row">
      <div className="md:block hidden w-1/2">
        <img src="/services-illustration.svg" alt="Services" width={500} height={500} />
      </div>
      <div className="md:w-1/2 text-center md:text-left flex flex-col justify-between">
        <div >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Servicii</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Lagrange Engineering oferă o gamă largă de servicii de dezvoltare software, incluzând dezvoltarea de aplicații web, mobile și desktop, precum și dezvoltarea de API-uri și servicii back-end.
        </p>
        </div>
        <Link
              href="/servicii"
              className=" rounded-md bg-emerald-500 px-6 py-3 text-center font-medium text-white transition-colors hover:bg-emerald-600"
            >
              Vezi toate serviciile
            </Link>
      </div>
    </section>
  );
}