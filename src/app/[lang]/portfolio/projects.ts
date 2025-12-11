export interface Project {
  id: number;
  titleRo: string;
  titleEn: string;
  category: string;
  shortDescriptionRo: string;
  shortDescriptionEn: string;
  longDescriptionRo: string;
  longDescriptionEn: string;
  technologies: string[];
  statusRo: string;
  statusEn: string;
  typeRo: string;
  typeEn: string;
  featuredImage?: string;
  liveUrl?: string;
  gallery?: string[];
}

const ids = {
    medis:1,
    novaworks: 2,
    corox: 3,
    anaf: 6,
    handlyze: 5,
    mechafusion: 4
};
export const projects: Project[] = [
  // Completed Projects / Proiecte Finalizate
  {
    id: ids.corox,
    titleRo: "Website Corox Engineering",
    titleEn: "Corox Engineering Website",
    category: "web",
    shortDescriptionRo:
      "Website profesional pentru companie de automatizări industriale și Machine Safety din Timișoara.",
    shortDescriptionEn:
      "Professional website for industrial automation and Machine Safety company in Timișoara.",
    longDescriptionRo:
      "Website corporativ complet pentru Corox Engineering, o companie specializată în automatizări industriale, Machine Safety, evaluări de risc și sisteme tehnice integrate. Construit cu Next.js și tehnologii web moderne, cu design responsive, formulare de contact, prezentare servicii și branding profesional. Website-ul servește clienți din toată România cu servicii profesionale de calitate europeană.",
    longDescriptionEn:
      "Complete corporate website for Corox Engineering, a company specializing in industrial automation, Machine Safety, risk assessments, and integrated technical systems. Built with Next.js and modern web technologies, featuring responsive design, contact forms, service showcase, and professional branding. The website serves clients across Romania with European-quality professional services.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "SEO"],
    statusRo: "Finalizat",
    statusEn: "Completed",
    typeRo: "Website Corporativ",
    typeEn: "Corporate Website",
    featuredImage: "/portfolio/corox-1.webp",
    liveUrl: "https://coroxengineering.ro",
  },
  {
    id: ids.mechafusion,
    titleRo: "Website Mechafusion UPT",
    titleEn: "Mechafusion UPT Website",
    category: "web",
    shortDescriptionRo:
      "Website oficial pentru clubul de robotică al Universității Politehnica Timișoara.",
    shortDescriptionEn:
      "Official website for the robotics club of Universitatea Politehnica Timișoara.",
    longDescriptionRo:
      "Website modern și captivant pentru Mechafusion, clubul oficial de robotică al Universității Politehnica Timișoara. Include prezentarea proiectelor, profiluri membri, anunțuri evenimente, rezultate competiții și informații recrutare. Construit cu focus pe prezentarea proiectelor inovatoare de robotică și promovarea implicării în comunitatea studenților ingineri.",
    longDescriptionEn:
      "Modern and engaging website for Mechafusion, the official robotics club of Universitatea Politehnica Timișoara. Features include project showcases, member profiles, event announcements, competition results, and recruitment information. Built with a focus on showcasing innovative robotics projects and fostering community engagement among engineering students.",
    technologies: ["HTML", "JavaScript", "TailwindCSS", "AWS S3", "Cloudflare"],
    statusRo: "Finalizat",
    statusEn: "Completed",
    typeRo: "Website Organizație",
    typeEn: "Organization Website",
    featuredImage: "/portfolio/mechafusion-featured.webp",
    liveUrl: "https://www.clubrobotica.upt.ro/",
    gallery: [
      "/portfolio/mechafusion-1.jpg",
      "/portfolio/mechafusion-2.jpg",
      "/portfolio/mechafusion-3.jpg",
      "/portfolio/mechafusion-4.jpg",
    ],
  },
  {
    id: ids.anaf,
    titleRo: "Aplicație Comparare SAGA-ANAF",
    titleEn: "SAGA-ANAF Comparison Tool",
    category: "web",
    shortDescriptionRo:
      "Aplicație web pentru compararea datelor export SAGA cu facturile CSV oficiale ANAF.",
    shortDescriptionEn:
      "Web application for comparing SAGA export data with ANAF official CSV invoices.",
    longDescriptionRo:
      "Aplicație web specializată dezvoltată pentru profesioniștii contabili pentru compararea eficientă a datelor Excel exportate din software-ul de contabilitate SAGA cu tabelele oficiale CSV de facturi de la ANAF. Include parsare automată de date, algoritmi inteligenți de potrivire, detectare discrepanțe, raportare detaliată și capabilități export. Eficientizează procesul de reconciliere și asigură acuratețea în raportarea fiscală.",
    longDescriptionEn:
      "Specialized web application developed for accounting professionals to efficiently compare Excel data exported from SAGA accounting software with official CSV invoice tables from ANAF (Romanian tax authority). Features include automated data parsing, intelligent matching algorithms, discrepancy detection, detailed reporting, and export capabilities. Streamlines the reconciliation process and ensures accuracy in tax reporting.",
    technologies: ["Next.js", "Excel.js", "CSV Parser"],
    statusRo: "Finalizat",
    statusEn: "Completed",
    typeRo: "Instrument Business",
    typeEn: "Business Tool",
    featuredImage: "/portfolio/saga-anaf-featured.webp",
    gallery: [
      "/portfolio/saga-anaf-1.jpg",
      "/portfolio/saga-anaf-2.jpg",
      "/portfolio/saga-anaf-3.jpg",
    ],
  },

  {
    id: ids.medis,
    titleRo: "Platformă Conferințe Medicale",
    titleEn: "Medical Conference Platform",
    category: "web",
    shortDescriptionRo:
      "Aplicație web completă și website pentru studenții la medicină cu ticketing și management workshop-uri.",
    shortDescriptionEn:
      "Complete conference web app and website for medical students with ticketing and workshop management.",
    longDescriptionRo:
      "Platformă comprehensivă de management conferințe destinată evenimentelor pentru studenții la medicină. Include sistem avansat de vânzare bilete cu multiple tipuri de bilete, management înscrieri workshop-uri cu logică prioritate înregistrare, sistem scanare coduri QR pentru check-in voluntari, pagină aterizare responsivă conferință, management capacitate workshop-uri, sistem comunicare participanți și dashboard analitică detaliată. Construită pentru a gestiona conferințe medicale la scară largă cu cerințe complexe de programare.",
    longDescriptionEn:
      "Comprehensive conference management platform designed for medical student events. Features include advanced ticket sales system with multiple ticket types, workshop enrollment management with priority registration logic, QR code scanning system for volunteer check-ins, responsive conference landing page, workshop capacity management, attendee communication system, and detailed analytics dashboard. Built to handle large-scale medical conferences with complex scheduling requirements.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Stripe",
      "QR Code API",
      "Email API",
    ],
    statusRo: "În dezvoltare",
    statusEn: "In Development",
    typeRo: "Platformă Conferințe",
    typeEn: "Conference Platform",
    featuredImage: "/medis1.png",
    liveUrl: "https://medistm.ro",
    gallery: ["/medis2.png", "/medis3.png"],
  },
  {
    id: ids.handlyze,
    titleRo: "Handlyze - Analiză Handbal",
    titleEn: "Handlyze - Handball Analytics",
    category: "mobile",
    shortDescriptionRo:
      "Aplicație cross-platform statistici handbal pentru cluburile românești cu analiză detaliată jucători.",
    shortDescriptionEn:
      "Cross-platform handball statistics app for Romanian clubs with detailed player analytics.",
    longDescriptionRo:
      "Platformă avansată de statistici și analiză handbal destinată cluburilor românești de handbal. Oferă urmărire comprehensivă performanță jucători, statistici meciuri, analiză echipă, tendințe performanță, analiză comparativă și raportare detaliată. Include scoring meciuri în timp real, urmărire dezvoltare jucători, monitorizare accidentări, management încărcare antrenament și instrumente analiză strategică. Ajută antrenorii să ia decizii bazate pe date și să îmbunătățească performanța echipei.",
    longDescriptionEn:
      "Advanced handball statistics and analytics platform designed for Romanian handball clubs. Provides comprehensive player performance tracking, match statistics, team analytics, performance trends, comparative analysis, and detailed reporting. Features include real-time match scoring, player development tracking, injury monitoring, training load management, and strategic analysis tools. Helps coaches make data-driven decisions and improve team performance.",
    technologies: ["React Native", "Supabase", "Video Analytics", "Charts.js"],
    statusRo: "În dezvoltare",
    statusEn: "In Development",
    typeRo: "Aplicație Analiză Sport",
    typeEn: "Sports Analytics App",
    featuredImage: "/portfolio/handlyze-featured.webp",
  },
  {
    id: ids.novaworks,
    titleRo: "Platformă Shop Printare 3D",
    titleEn: "3D Printing Shop Platform",
    category: "web",
    shortDescriptionRo:
      "Website e-commerce cu analiză instantanee fișiere STEP și stabilire preț automată pentru servicii printare 3D.",
    shortDescriptionEn:
      "E-commerce website with instant STEP file analysis and automated pricing for 3D printing services.",
    longDescriptionRo:
      "Platformă e-commerce inovatoare pentru servicii de printare 3D cu generare automată cotații folosind API analiză fișiere STEP. Clienții pot încărca modele 3D și primi stabilire preț instantanee bazată pe calcule volum, material și complexitate. Include funcționalitate e-commerce completă cu coș cumpărături, procesare plăți, urmărire comenzi, selecție materiale, opțiuni calitate printare și dashboard administrativ comprehensiv pentru management comenzi și control inventar.",
    longDescriptionEn:
      "Innovative e-commerce platform for 3D printing services featuring automated quote generation using STEP file analysis API. Customers can upload 3D models and receive instant pricing based on volume, material, and complexity calculations. Includes full e-commerce functionality with shopping cart, payment processing, order tracking, material selection, print quality options, and comprehensive admin dashboard for order management and inventory control.",
    technologies: [
      "Next.js",
      "TypeScript",
      "STEP Reader API",
      "Stripe",
      "Admin Dashboard",
      "File Upload",
    ],
    statusRo: "În dezvoltare",
    statusEn: "In Development",
    typeRo: "Platformă E-commerce",
    typeEn: "E-commerce Platform",
    featuredImage: "/portfolio/3dprinting-featured.webp",
  },
];
