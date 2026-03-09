import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageMeta = ({
  title,
  description,
  path = '',
  type = 'website',
  image = null
}) => {
  const siteUrl = 'https://agenticagency.dev';
  const fullUrl = `${siteUrl}${path}`;
  const siteName = 'Agentic Agency';

  return (
    <Helmet>
      <title>{title} | {siteName}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};

export default PageMeta;
