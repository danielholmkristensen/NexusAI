import React from 'react';

// Organization schema (used on landing and about pages)
export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Agentic Agency",
    "url": "https://agenticagency.dev",
    "description": "We transform development teams from ad-hoc AI usage into structured, production-grade agentic engineering practitioners.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@agenticagency.dev",
      "contactType": "sales"
    }
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};

// Service schema for The Spark
export const SparkCourseSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "The Spark — Onboarding & Readiness",
    "description": "Structured onboarding that prepares your organization to receive and benefit from AI Development as a Service. Infrastructure, governance, team alignment.",
    "provider": {
      "@type": "Organization",
      "name": "Agentic Agency"
    },
    "serviceType": "Consulting",
    "offers": {
      "@type": "Offer",
      "price": "75000",
      "priceCurrency": "DKK",
      "description": "1-2 week onboarding and readiness process",
      "availability": "https://schema.org/InStock"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Denmark and Nordics"
    }
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};

// Service schema for The Catalyst
export const CatalystCourseSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "The Catalyst — AI Development as a Service",
    "description": "Fixed-price enterprise software delivery. Production-grade code with 80%+ test coverage, full documentation. Code built for YOU. 8-12 weeks from kickoff to production.",
    "provider": {
      "@type": "Organization",
      "name": "Agentic Agency"
    },
    "serviceType": "Software Development",
    "areaServed": {
      "@type": "Place",
      "name": "Denmark and Nordics"
    }
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};

// Service schema for The Core
export const CoreServiceSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "The Core — Command Center & Support",
    "description": "The Command Center for AI-driven development. Real-time dashboards, session management, operational control, and SLA-backed support across all your Catalyst engagements.",
    "provider": {
      "@type": "Organization",
      "name": "Agentic Agency"
    },
    "serviceType": "Support and Operations",
    "areaServed": {
      "@type": "Place",
      "name": "Denmark and Nordics"
    }
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};

// Person schema for founders
export const FounderSchema = ({ name, jobTitle, description }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": jobTitle,
    "description": description,
    "worksFor": {
      "@type": "Organization",
      "name": "Agentic Agency"
    }
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};

// FAQ schema
export const FAQSchema = ({ faqs }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};

// Breadcrumb schema
export const BreadcrumbSchema = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://agenticagency.dev${item.path}`
    }))
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};

export default {
  OrganizationSchema,
  SparkCourseSchema,
  CatalystCourseSchema,
  CoreServiceSchema,
  FounderSchema,
  FAQSchema,
  BreadcrumbSchema
};
