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

// Course schema for The Spark
export const SparkCourseSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "The Spark — Agentic Engineering Workshop",
    "description": "A 2-day hands-on workshop that transforms development teams into agentic engineering practitioners.",
    "provider": {
      "@type": "Organization",
      "name": "Agentic Agency"
    },
    "courseMode": "onsite",
    "duration": "P2D",
    "offers": [
      {
        "@type": "Offer",
        "name": "Open Workshop",
        "price": "49999",
        "priceCurrency": "DKK",
        "description": "3 participants from your organization, learn alongside up to 3 other companies",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Closed Workshop",
        "price": "199996",
        "priceCurrency": "DKK",
        "description": "Exclusive workshop for your organization, up to 12 participants",
        "availability": "https://schema.org/InStock"
      }
    ],
    "occupationalCategory": "Software Development",
    "teaches": "Agentic engineering methodology for production-grade AI-assisted software development",
    "coursePrerequisites": "Software development experience",
    "maximumAttendeeCapacity": 12
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};

// Course schema for The Catalyst
export const CatalystCourseSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "The Catalyst — 12-Week Agentic Transformation",
    "description": "12-week embedded program transforming one team into agentic engineering practitioners with weekly on-site support.",
    "provider": {
      "@type": "Organization",
      "name": "Agentic Agency"
    },
    "courseMode": "onsite",
    "duration": "P12W",
    "occupationalCategory": "Software Development",
    "teaches": "Deep agentic engineering transformation with embedded expert guidance",
    "coursePrerequisites": "Completion of The Spark workshop"
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};

// Service schema for The Scale Engine
export const ScaleEngineServiceSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "The Scale Engine — Advisory Retainer",
    "description": "Advisory retainer to scale agentic engineering across your organization. Build internal capability with expert guidance.",
    "provider": {
      "@type": "Organization",
      "name": "Agentic Agency"
    },
    "serviceType": "Consulting",
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
  ScaleEngineServiceSchema,
  FounderSchema,
  FAQSchema,
  BreadcrumbSchema
};
