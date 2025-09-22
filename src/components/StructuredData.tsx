import Script from 'next/script'

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'WebPage' | 'Service'
  data: Record<string, unknown>
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  }

  return (
    <Script
      id={`structured-data-${type.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  )
}

// Predefined structured data for Lagrange Engineering
export const organizationData = {
  name: 'Lagrange Engineering',
  url: 'https://lagrangeengineering.ro',
  logo: 'https://lagrangeengineering.ro/lg-white.svg',
  description: 'Romanian technology company providing web development, custom applications, and high-quality digital solutions.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'RO',
    addressLocality: 'Romania',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'contact@lagrangeengineering.ro',
  },
  sameAs: [
    // Add social media URLs when available
  ],
  foundingDate: '2024',
  numberOfEmployees: '1-10',
  industry: 'Technology',
  services: [
    'Web Development',
    'Custom Applications',
    'Digital Solutions',
    'Technology Consulting',
  ],
}

export const websiteData = {
  name: 'Lagrange Engineering',
  url: 'https://lagrangeengineering.ro',
  description: 'Romanian technology company providing web development, custom applications, and high-quality digital solutions.',
  publisher: {
    '@type': 'Organization',
    name: 'Lagrange Engineering',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://lagrangeengineering.ro/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

export const serviceData = {
  name: 'Web Development Services',
  description: 'Professional web development, custom applications, and digital solutions for businesses.',
  provider: {
    '@type': 'Organization',
    name: 'Lagrange Engineering',
  },
  serviceType: 'Web Development',
  areaServed: 'Romania',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Technology Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Development',
          description: 'Custom web applications and websites',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Applications',
          description: 'Tailored software solutions for business needs',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Solutions',
          description: 'Comprehensive digital transformation services',
        },
      },
    ],
  },
}