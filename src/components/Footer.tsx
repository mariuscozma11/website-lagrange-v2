import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navItems = [
    { name: "Acasă", link: "/" },
    { name: "Servicii", link: "/servicii" },
    { name: "Despre", link: "/despre" },
    { name: "Portofoliu", link: "/portofoliu" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <footer className="w-full border-t border-gray-200/60 dark:border-white/10 bg-white/70 dark:bg-transparent backdrop-blur-sm">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Company + Contact (combined) */}
          <div className="md:col-span-2">
            <div className="flex items-start gap-4">
              {/* Theme-aware logo */}
              <div className="mt-1 shrink-0">
                <Image
                  src="/lg-black.svg"
                  alt="Lagrange Engineering logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 dark:hidden"
                />
                <Image
                  src="/lg-white.svg"
                  alt="Lagrange Engineering logo"
                  width={48}
                  height={48}
                  className="hidden h-12 w-12 dark:block"
                />
              </div>
              <div className="space-y-1 text-sm">
                <p className="font-semibold text-gray-900 dark:text-white">Lagrange Engineering SRL</p>
                <p className="text-gray-700 dark:text-gray-300">Jud. Timiş, Municipiul Timişoara</p>
                <p className="text-gray-700 dark:text-gray-300">Str. Ioan Alexandru, Nr. 20, Etaj POD, Ap. POD 2</p>
                <p>
                  <Link href="mailto:office@lagrangeengineering.ro" className="text-emerald-700 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300">
                    office@lagrangeengineering.ro
                  </Link>
                </p>
                <p>
                  <Link href="tel:+40756109881" className="text-gray-800 hover:text-emerald-800 dark:text-gray-300 dark:hover:text-emerald-300">
                    +40 756 109 881
                  </Link>
                </p>
                <p className="text-gray-700 dark:text-gray-300">CUI 51196824</p>
                <p className="text-gray-700 dark:text-gray-300">J20505646004</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Navigație" className="space-y-3">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">Navigație</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.link} className="text-sm text-gray-700 hover:text-emerald-700 dark:text-gray-300 dark:hover:text-emerald-400">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/termeni-si-conditii" className="text-sm text-gray-700 hover:text-emerald-700 dark:text-gray-300 dark:hover:text-emerald-400">
                  Termeni și condiții
                </Link>
              </li>
              <li>
                <Link href="/politica-cookies" className="text-sm text-gray-700 hover:text-emerald-700 dark:text-gray-300 dark:hover:text-emerald-400">
                  Politica Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ANPC badges */}
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Link href="https://anpc.ro/ce-este-sal/" target="_blank" rel="nofollow noopener">
              <Image
                src="https://etamade-com.github.io/anpc-sal-sol-logo/anpc-sal.svg"
                alt="Soluționarea Alternativă a Litigiilor (SAL)"
                width={180}
                height={60}
                className="h-auto w-[180px]"
              />
            </Link>
            <Link href="https://ec.europa.eu/consumers/odr" target="_blank" rel="nofollow noopener">
              <Image
                src="https://etamade-com.github.io/anpc-sal-sol-logo/anpc-sol.svg"
                alt="Soluționarea Online a Litigiilor (SOL)"
                width={180}
                height={60}
                className="h-auto w-[180px]"
              />
            </Link>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Lagrange Engineering. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
} 