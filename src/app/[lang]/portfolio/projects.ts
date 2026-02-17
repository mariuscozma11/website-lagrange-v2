export interface Project {
  id: number;
  titleRo: string;
  titleEn: string;
  category: string;
  shortDescriptionRo: string;
  shortDescriptionEn: string;
  longDescriptionRo: string;
  longDescriptionEn: string;
  statusRo: string;
  statusEn: string;
  typeRo: string;
  typeEn: string;
  featuredImage?: string;
  liveUrl?: string;
  gallery?: string[];
}

const ids = {
    medis: 1,
    corox: 2,
    dkat: 3,
    hazzard: 4,
    cumcomunic: 5,
    cliniva: 6,
    novaworks: 7,
    anaf: 8,
    mechafusion: 9,
    handlyze: 10
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
      "Website corporativ complet pentru Corox Engineering, o companie specializată în automatizări industriale, Machine Safety, evaluări de risc și sisteme tehnice integrate. Include design responsive, formulare de contact, prezentare servicii și branding profesional. Website-ul servește clienți din toată România cu servicii profesionale de calitate europeană.",
    longDescriptionEn:
      "Complete corporate website for Corox Engineering, a company specializing in industrial automation, Machine Safety, risk assessments, and integrated technical systems. Features responsive design, contact forms, service showcase, and professional branding. The website serves clients across Romania with European-quality professional services.",
    statusRo: "Finalizat",
    statusEn: "Completed",
    typeRo: "Website Corporativ",
    typeEn: "Corporate Website",
    featuredImage: "/portfolio/corox-1.webp",
    liveUrl: "https://coroxengineering.ro",
  },
  {
    id: ids.dkat,
    titleRo: "Website D-KAT Tour",
    titleEn: "D-KAT Tour Website",
    category: "web",
    shortDescriptionRo:
      "Website de prezentare pentru experiențe auto de lux cu supercar-uri, organizare rally-uri și tururi exclusive.",
    shortDescriptionEn:
      "Showcase website for luxury automotive experiences with supercars, rally organization, and exclusive tours.",
    longDescriptionRo:
      "Website elegant de prezentare pentru D-KAT Tour, o companie care organizează experiențe auto exclusive cu supercar-uri și vehicule exotice. Platforma prezintă flota de vehicule disponibile, inclusiv Porsche 911 Turbo S, Lamborghini Huracán, Ferrari SF90 și Rolls-Royce Dawn. Include galerie foto, sistem de parteneriate, pagină de înscriere și secțiune de contact. Design-ul reflectă poziționarea premium a brandului, targetând pasionații auto și clienții interesați de experiențe de lux.",
    longDescriptionEn:
      "Elegant showcase website for D-KAT Tour, a company organizing exclusive automotive experiences with supercars and exotic vehicles. The platform showcases the available vehicle fleet, including Porsche 911 Turbo S, Lamborghini Huracán, Ferrari SF90, and Rolls-Royce Dawn. Features include photo gallery, partnership system, registration page, and contact section. The design reflects the brand's premium positioning, targeting automotive enthusiasts and clients interested in luxury experiences.",
    statusRo: "Finalizat",
    statusEn: "Completed",
    typeRo: "Website Prezentare",
    typeEn: "Showcase Website",
    featuredImage: "/dkat.png",
    liveUrl: "http://d-kat.com/",
  },
  {
    id: ids.hazzard,
    titleRo: "Website Hazzard Studio",
    titleEn: "Hazzard Studio Website",
    category: "web",
    shortDescriptionRo:
      "Website modern pentru salon de frizerie din Timișoara, cu prezentare servicii și integrare programări.",
    shortDescriptionEn:
      "Modern website for a barbershop in Timișoara, featuring service showcase and booking integration.",
    longDescriptionRo:
      "Website profesional pentru Hazzard Studio, un salon modern de frizerie din Timișoara. Platforma include prezentarea serviciilor de tuns, aranjat barbă și mustață, galerie foto cu lucrări realizate, profiluri ale friserilor, program de funcționare și integrare cu aplicație mobilă pentru programări. Design-ul modern și curat reflectă identitatea brandului, cu focus pe experiența utilizatorului și conversie clienți noi.",
    longDescriptionEn:
      "Professional website for Hazzard Studio, a modern barbershop in Timișoara. The platform includes service presentation for haircuts, beard and mustache grooming, photo gallery of completed work, barber profiles, operating hours, and mobile app integration for bookings. The modern and clean design reflects the brand identity, with a focus on user experience and new client conversion.",
    statusRo: "Finalizat",
    statusEn: "Completed",
    typeRo: "Website Servicii",
    typeEn: "Service Website",
    featuredImage: "/hazzard.png",
    liveUrl: "http://hazzardstudio.ro/",
  },
  {
    id: ids.cumcomunic,
    titleRo: "Website Cum Comunic - Consiliere Relațională",
    titleEn: "Cum Comunic - Relational Counseling Website",
    category: "web",
    shortDescriptionRo:
      "Website de prezentare pentru consilier relațional și formator acreditat în Metoda ESPERE, Timișoara.",
    shortDescriptionEn:
      "Showcase website for a relational counselor and accredited trainer in the ESPERE Method, Timișoara.",
    longDescriptionRo:
      "Website profesional pentru Liliana Enculescu, consilier relațional și formator acreditat în Metoda ESPERE, cu peste 20 de ani de experiență și peste 13.000 de clienți. Platforma prezintă serviciile de consiliere pentru relații de cuplu, părinte-copil, relații profesionale, relația educator-elev, relația profesionist sănătate-pacient și relația cu sine. Include secțiuni pentru testimoniale, FAQ, programare consultații și prezentare detaliată a metodologiei ESPERE.",
    longDescriptionEn:
      "Professional website for Liliana Enculescu, a relational counselor and accredited trainer in the ESPERE Method, with over 20 years of experience and 13,000+ clients. The platform presents counseling services for couple relationships, parent-child dynamics, workplace relationships, educator-student relations, healthcare professional-patient communication, and self-relationship. Includes sections for testimonials, FAQ, consultation booking, and detailed presentation of the ESPERE methodology.",
    statusRo: "Finalizat",
    statusEn: "Completed",
    typeRo: "Website Prezentare",
    typeEn: "Showcase Website",
    featuredImage: "/cumcomunic.png",
    liveUrl: "http://cumcomunic.ro/",
  },
  {
    id: ids.cliniva,
    titleRo: "Website Cliniva - Centru Medical",
    titleEn: "Cliniva - Medical Center Website",
    category: "web",
    shortDescriptionRo:
      "Website pentru centru medical de recuperare și wellness din Timișoara, cu prezentare servicii și programări online.",
    shortDescriptionEn:
      "Website for a medical recovery and wellness center in Timișoara, with service showcase and online booking.",
    longDescriptionRo:
      "Website complet pentru Cliniva, un centru medical modern de recuperare și wellness din Timișoara, cu tradiție din 1993. Platforma prezintă gama completă de servicii medicale: ortopedie, fizioterapie (terapie TECAR, laser, ultrasunet, magnetoterapie), kinetoterapie, chiropractică, masaj terapeutic, medicină internă și psihologie. Include profiluri ale echipei medicale, testimoniale pacienți, sistem de programări online și informații despre decontare CNAS.",
    longDescriptionEn:
      "Complete website for Cliniva, a modern medical recovery and wellness center in Timișoara, with a tradition dating back to 1993. The platform showcases the full range of medical services: orthopedics, physical therapy (TECAR therapy, laser, ultrasound, magnetotherapy), kinesiotherapy, chiropractic, therapeutic massage, internal medicine, and psychology. Includes medical team profiles, patient testimonials, online booking system, and CNAS insurance coverage information.",
    statusRo: "Finalizat",
    statusEn: "Completed",
    typeRo: "Website Medical",
    typeEn: "Medical Website",
    featuredImage: "/cliniva.png",
    liveUrl: "http://cliniva.ro/",
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
      "Platformă comprehensivă de management conferințe destinată evenimentelor pentru studenții la medicină. Include sistem avansat de vânzare bilete cu multiple tipuri de bilete, management înscrieri workshop-uri cu logică prioritate înregistrare, sistem scanare coduri QR pentru check-in voluntari, pagină aterizare responsivă conferință, management capacitate workshop-uri, sistem comunicare participanți și dashboard analitică detaliată. Proiectată pentru a gestiona conferințe medicale la scară largă cu cerințe complexe de programare.",
    longDescriptionEn:
      "Comprehensive conference management platform designed for medical student events. Features include advanced ticket sales system with multiple ticket types, workshop enrollment management with priority registration logic, QR code scanning system for volunteer check-ins, responsive conference landing page, workshop capacity management, attendee communication system, and detailed analytics dashboard. Designed to handle large-scale medical conferences with complex scheduling requirements.",
    statusRo: "În dezvoltare",
    statusEn: "In Development",
    typeRo: "Platformă Conferințe",
    typeEn: "Conference Platform",
    featuredImage: "/medis1.png",
    liveUrl: "https://medistm.ro",
    gallery: ["/medis2.png", "/medis3.png"],
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
      "Platformă e-commerce inovatoare pentru servicii de printare 3D cu generare automată cotații. Clienții pot încărca modele 3D și primi stabilire preț instantanee bazată pe calcule volum, material și complexitate. Include funcționalitate e-commerce completă cu coș cumpărături, procesare plăți, urmărire comenzi, selecție materiale, opțiuni calitate printare și dashboard administrativ comprehensiv pentru management comenzi și control inventar.",
    longDescriptionEn:
      "Innovative e-commerce platform for 3D printing services featuring automated quote generation. Customers can upload 3D models and receive instant pricing based on volume, material, and complexity calculations. Includes full e-commerce functionality with shopping cart, payment processing, order tracking, material selection, print quality options, and comprehensive admin dashboard for order management and inventory control.",
    statusRo: "În dezvoltare",
    statusEn: "In Development",
    typeRo: "Platformă E-commerce",
    typeEn: "E-commerce Platform",
    featuredImage: "/novaworks.png",
    liveUrl: "https://novaworks.ro",
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
      "Aplicație web specializată dezvoltată pentru profesioniștii contabili pentru compararea eficientă a datelor exportate din software-ul de contabilitate SAGA cu tabelele oficiale de facturi de la ANAF. Include parsare automată de date, algoritmi inteligenți de potrivire, detectare discrepanțe, raportare detaliată și capabilități export. Eficientizează procesul de reconciliere și asigură acuratețea în raportarea fiscală.",
    longDescriptionEn:
      "Specialized web application developed for accounting professionals to efficiently compare data exported from SAGA accounting software with official invoice tables from ANAF (Romanian tax authority). Features include automated data parsing, intelligent matching algorithms, discrepancy detection, detailed reporting, and export capabilities. Streamlines the reconciliation process and ensures accuracy in tax reporting.",
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
    id: ids.mechafusion,
    titleRo: "Website Mechafusion UPT",
    titleEn: "Mechafusion UPT Website",
    category: "web",
    shortDescriptionRo:
      "Website oficial pentru clubul de robotică al Universității Politehnica Timișoara.",
    shortDescriptionEn:
      "Official website for the robotics club of Universitatea Politehnica Timișoara.",
    longDescriptionRo:
      "Website modern și captivant pentru Mechafusion, clubul oficial de robotică al Universității Politehnica Timișoara. Include prezentarea proiectelor, profiluri membri, anunțuri evenimente, rezultate competiții și informații recrutare. Concentrat pe prezentarea proiectelor inovatoare de robotică și promovarea implicării în comunitatea studenților ingineri.",
    longDescriptionEn:
      "Modern and engaging website for Mechafusion, the official robotics club of Universitatea Politehnica Timișoara. Features include project showcases, member profiles, event announcements, competition results, and recruitment information. Focused on showcasing innovative robotics projects and fostering community engagement among engineering students.",
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
    statusRo: "În dezvoltare",
    statusEn: "In Development",
    typeRo: "Aplicație Analiză Sport",
    typeEn: "Sports Analytics App",
    featuredImage: "/portfolio/handlyze-featured.webp",
  },
];
