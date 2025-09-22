import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";

// Define supported languages
const supportedLanguages = ["en", "ro"] as const;
type SupportedLanguage = typeof supportedLanguages[number];

interface TermsPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: TermsPageProps): Promise<Metadata> {
  const lang = (await params).lang as SupportedLanguage;
  
  if (!supportedLanguages.includes(lang)) {
    notFound();
  }
  
  return {
    title: lang === 'en' ? 'Terms & Conditions - Lagrange Engineering' : 'Termeni și Condiții - Lagrange Engineering',
    description: lang === 'en' ? 'Terms and conditions for Lagrange Engineering services' : 'Termeni și condiții pentru serviciile Lagrange Engineering',
  };
}

export default async function TermsPage({ params }: TermsPageProps) {
  const lang = (await params).lang as SupportedLanguage;
  
  if (!supportedLanguages.includes(lang)) {
    notFound();
  }

  const content = {
    en: {
      title: "Terms & Conditions",
      subtitle: "Please read these terms and conditions carefully before using our services.",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content: "By accessing and using the services provided by Lagrange Engineering SRL, you accept and agree to be bound by the terms and provision of this agreement."
        },
        {
          title: "2. Description of Service",
          content: "Lagrange Engineering SRL provides technology solutions, web development, custom applications, and digital services. We reserve the right to modify or discontinue the service at any time."
        },
        {
          title: "3. User Responsibilities",
          content: "Users are responsible for providing accurate information and ensuring compliance with applicable laws and regulations when using our services."
        },
        {
          title: "4. Intellectual Property",
          content: "All content, trademarks, and intellectual property on this website and in our services are owned by Lagrange Engineering SRL unless otherwise stated."
        },
        {
          title: "5. Limitation of Liability",
          content: "Lagrange Engineering SRL shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services."
        },
        {
          title: "6. Payment Terms",
          content: "Payment terms are agreed upon in individual contracts. Late payments may result in service suspension or termination."
        },
        {
          title: "7. Personal Data Processing",
          content: "Lagrange Engineering SRL, as data controller, processes personal data in accordance with GDPR and Romanian data protection laws. We collect and process personal data only for legitimate business purposes including service delivery, communication, and legal compliance."
        },
        {
          title: "8. Types of Personal Data We Collect",
          content: "We may collect: contact information (name, email, phone), business information (company name, position), technical data (IP address, browser type), communication data (messages, inquiries), and project-related information necessary for service delivery."
        },
        {
          title: "9. Purposes of Data Processing",
          content: "Personal data is processed for: providing requested services, responding to inquiries, project management, business communication, legal compliance, contract fulfillment, marketing communications (with consent), and improving our services."
        },
        {
          title: "10. Data Retention",
          content: "We retain personal data only as long as necessary for the purposes outlined above or as required by law. Contact data is typically retained for 3 years after last interaction, project data for 7 years for legal compliance, and marketing data until consent is withdrawn."
        },
        {
          title: "11. Data Security",
          content: "We implement appropriate technical and organizational measures to protect personal data against unauthorized access, alteration, disclosure, or destruction. This includes encryption, access controls, regular security assessments, and staff training."
        },
        {
          title: "12. Your Rights",
          content: "You have the right to: access your personal data, rectify inaccurate data, erase data (right to be forgotten), restrict processing, data portability, object to processing, and withdraw consent. Contact us at office@lagrangeengineering.ro to exercise these rights."
        },
        {
          title: "13. Data Sharing",
          content: "We do not sell personal data. We may share data with trusted third parties only when necessary for service delivery (hosting providers, payment processors) or when required by law. All third parties are bound by confidentiality agreements."
        },
        {
          title: "14. Privacy Policy",
          content: "Your privacy is important to us. Please review our Privacy Policy, which provides detailed information about our data processing practices and your rights under GDPR."
        },
        {
          title: "15. Modifications",
          content: "We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms. We will notify users of significant changes via email or website notice."
        },
        {
          title: "16. Governing Law",
          content: "These terms shall be governed by and construed in accordance with Romanian law. Any disputes will be subject to the jurisdiction of Romanian courts."
        },
        {
          title: "17. Contact Information",
          content: "For questions regarding these terms and conditions or data protection matters, please contact us at office@lagrangeengineering.ro or +40 756 109 881. Our Data Protection Officer can be reached at dpo@lagrangeengineering.ro."
        }
      ]
    },
    ro: {
      title: "Termeni și Condiții",
      subtitle: "Vă rugăm să citiți cu atenție acești termeni și condiții înainte de a utiliza serviciile noastre.",
      sections: [
        {
          title: "1. Acceptarea Termenilor",
          content: "Prin accesarea și utilizarea serviciilor furnizate de Lagrange Engineering SRL, acceptați și sunteți de acord să fiți obligați de termenii și prevederile acestui acord."
        },
        {
          title: "2. Descrierea Serviciului",
          content: "Lagrange Engineering SRL oferă soluții tehnologice, dezvoltare web, aplicații personalizate și servicii digitale. Ne rezervăm dreptul de a modifica sau întrerupe serviciul în orice moment."
        },
        {
          title: "3. Responsabilitățile Utilizatorului",
          content: "Utilizatorii sunt responsabili pentru furnizarea de informații exacte și pentru asigurarea conformității cu legile și reglementările aplicabile atunci când utilizează serviciile noastre."
        },
        {
          title: "4. Proprietatea Intelectuală",
          content: "Toate conținuturile, mărcile comerciale și proprietatea intelectuală de pe acest site web și din serviciile noastre sunt deținute de Lagrange Engineering SRL, cu excepția cazurilor în care se specifică altfel."
        },
        {
          title: "5. Limitarea Răspunderii",
          content: "Lagrange Engineering SRL nu va fi răspunzător pentru daune indirecte, incidentale, speciale sau consecvențiale care decurg din utilizarea serviciilor noastre."
        },
        {
          title: "6. Termenii de Plată",
          content: "Termenii de plată sunt conveniți în contractele individuale. Plățile întârziate pot duce la suspendarea sau încetarea serviciului."
        },
        {
          title: "7. Prelucrarea Datelor cu Caracter Personal",
          content: "Lagrange Engineering SRL, ca operator de date, prelucrează datele cu caracter personal în conformitate cu GDPR și legislația română privind protecția datelor. Colectăm și prelucrăm datele cu caracter personal doar în scopuri comerciale legitime, inclusiv livrarea serviciilor, comunicarea și conformitatea legală."
        },
        {
          title: "8. Tipurile de Date cu Caracter Personal pe care le Colectăm",
          content: "Putem colecta: informații de contact (nume, email, telefon), informații de afaceri (numele companiei, funcția), date tehnice (adresa IP, tipul browserului), date de comunicare (mesaje, întrebări) și informații legate de proiecte necesare pentru livrarea serviciilor."
        },
        {
          title: "9. Scopurile Prelucrării Datelor",
          content: "Datele cu caracter personal sunt prelucrate pentru: furnizarea serviciilor solicitate, răspunderea la întrebări, managementul proiectelor, comunicarea de afaceri, conformitatea legală, îndeplinirea contractelor, comunicările de marketing (cu acordul), și îmbunătățirea serviciilor noastre."
        },
        {
          title: "10. Păstrarea Datelor",
          content: "Păstrăm datele cu caracter personal doar atât timp cât este necesar pentru scopurile menționate mai sus sau conform cerințelor legale. Datele de contact sunt de obicei păstrate 3 ani după ultima interacțiune, datele proiectelor 7 ani pentru conformitatea legală, și datele de marketing până când acordul este retras."
        },
        {
          title: "11. Securitatea Datelor",
          content: "Implementăm măsuri tehnice și organizaționale adecvate pentru a proteja datele cu caracter personal împotriva accesului neautorizat, modificării, divulgării sau distrugerii. Acest lucru include criptarea, controalele de acces, evaluările de securitate regulate și formarea personalului."
        },
        {
          title: "12. Drepturile Dumneavoastră",
          content: "Aveți dreptul de a: accesa datele dumneavoastră cu caracter personal, rectifica datele inexacte, șterge datele (dreptul de a fi uitat), restricționa prelucrarea, portabilitatea datelor, obiecta la prelucrare, și retrage acordul. Contactați-ne la office@lagrangeengineering.ro pentru a exercita aceste drepturi."
        },
        {
          title: "13. Partajarea Datelor",
          content: "Nu vindem date cu caracter personal. Putem partaja date cu terți de încredere doar când este necesar pentru livrarea serviciilor (furnizori de hosting, procesatori de plăți) sau când este cerut de lege. Toți terții sunt obligați prin acorduri de confidențialitate."
        },
        {
          title: "14. Politica de Confidențialitate",
          content: "Confidențialitatea dumneavoastră este importantă pentru noi. Vă rugăm să consultați Politica noastră de Confidențialitate, care oferă informații detaliate despre practicile noastre de prelucrare a datelor și drepturile dumneavoastră conform GDPR."
        },
        {
          title: "15. Modificări",
          content: "Ne rezervăm dreptul de a modifica acești termeni în orice moment. Utilizarea continuă a serviciilor noastre după modificări constituie acceptarea noilor termeni. Vom notifica utilizatorii despre modificările semnificative prin email sau notificare pe site."
        },
        {
          title: "16. Legea Aplicabilă",
          content: "Acești termeni vor fi guvernați și interpretați în conformitate cu legislația română. Orice dispute vor fi supuse jurisdicției instanțelor române."
        },
        {
          title: "17. Informații de Contact",
          content: "Pentru întrebări privind acești termeni și condiții sau chestiuni de protecție a datelor, vă rugăm să ne contactați la office@lagrangeengineering.ro sau +40 756 109 881. Responsabilul nostru pentru Protecția Datelor poate fi contactat la dpo@lagrangeengineering.ro."
        }
      ]
    }
  };

  const currentContent = content[lang] || content.ro;

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <PageHeader 
        title={currentContent.title}
        subtitle={currentContent.subtitle}
      />
      
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {currentContent.sections.map((section, index) => (
              <div key={index} className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-6">
                <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-4">
                  {section.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-neutral-50 dark:bg-neutral-900/50 rounded-lg border border-neutral-200 dark:border-neutral-800">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
              {lang === 'en' 
                ? 'Last updated: September 2025' 
                : 'Ultima actualizare: Septembrie 2025'
              }
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}