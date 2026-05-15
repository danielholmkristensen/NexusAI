// Social crawler user agents
const SOCIAL_CRAWLERS = [
  'linkedinbot',
  'twitterbot',
  'facebookexternalhit',
  'slackbot',
  'telegrambot',
  'whatsapp',
  'discordbot',
];

// Practitioner data for OG tags (subset needed for social previews)
const PRACTITIONERS = {
  'prayson-wilfred-daniel': {
    name: 'Prayson Wilfred Daniel',
    title: 'Principal Data Scientist',
    organisation: 'Norlys',
    ogImage: '/practitioners/prayson_carousel.pdf', // Will need proper OG image
    interviewTeaser: 'On the Seal Team model at Norlys, why every LLM wears mascara, and why the eureka moments have plateaued — the bottleneck isn\'t intelligence, it\'s context.',
    publishedAt: '2026-04-01',
  },
  'martin-rosen-lidholm': {
    name: 'Martin Rosén-Lidholm',
    title: 'Engineering Leader',
    organisation: '',
    ogImage: null,
    interviewTeaser: 'On leading engineering teams through AI transformation, maintaining quality at speed, and the cultural shifts that make or break adoption.',
    publishedAt: '2026-04-08',
  },
  'nana-lin': {
    name: 'Nana Lin',
    title: 'Director',
    organisation: 'The LEGO Group',
    ogImage: null,
    interviewTeaser: 'On building platforms that serve millions, enterprise architecture decisions, and what it takes to ship at LEGO scale.',
    publishedAt: '2026-04-15',
  },
  'anton-gersvang-golles': {
    name: 'Anton Gersvang Golles',
    title: 'Head of AI',
    organisation: 'Simply.TV',
    ogImage: '/practitioners/anton/04-needle-haystack.jpg',
    interviewTeaser: 'On automating metadata editors, why 95% accuracy isn\'t good enough, the agent he named Dream, and why the next paradigm is computer use.',
    publishedAt: '2026-04-22',
  },
};

function isSocialCrawler(userAgent) {
  const ua = (userAgent || '').toLowerCase();
  return SOCIAL_CRAWLERS.some(bot => ua.includes(bot));
}

function getPractitionerOgHtml(practitioner, slug, url) {
  const title = `${practitioner.name} — The Practitioners | Agentic Agency`;
  const description = practitioner.interviewTeaser;
  const image = practitioner.ogImage
    ? `https://agenticagency.dev${practitioner.ogImage}`
    : 'https://agenticagency.dev/practitioners/anton/04-needle-haystack.jpg';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <meta name="description" content="${description}">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${url}">
  <meta property="og:site_name" content="Agentic Agency">
  <meta property="og:image" content="${image}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${image}">

  <!-- Article metadata -->
  <meta property="article:author" content="Daniel Holm Kristensen">
  <meta property="article:published_time" content="${practitioner.publishedAt}">

  <link rel="canonical" href="${url}">
</head>
<body>
  <h1>${practitioner.name}</h1>
  <p>${practitioner.title}${practitioner.organisation ? `, ${practitioner.organisation}` : ''}</p>
  <p>${description}</p>
  <a href="${url}">Read the full interview</a>
</body>
</html>`;
}

export const config = {
  matcher: [
    '/practitioners/:slug*',
    '/STARK-procurement',
    '/STARK-procurement/:path*'
  ],
};

export default function middleware(request) {
  const url = new URL(request.url);
  const userAgent = request.headers.get('user-agent') || '';

  // Handle practitioners pages for social crawlers
  if (url.pathname.startsWith('/practitioners/')) {
    const slug = url.pathname.split('/practitioners/')[1]?.replace(/\/$/, '');

    if (slug && isSocialCrawler(userAgent)) {
      const practitioner = PRACTITIONERS[slug];

      if (practitioner) {
        const html = getPractitionerOgHtml(practitioner, slug, url.toString());
        return new Response(html, {
          headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
          },
        });
      }
    }

    // Not a crawler or practitioner not found - let SPA handle it
    return;
  }

  // STARK procurement auth check
  if (url.pathname.startsWith('/STARK-procurement')) {
    const cookies = request.headers.get('cookie') || '';
    const hasAuth = cookies.includes('stark_auth=verified');

    if (!hasAuth) {
      return Response.redirect(new URL('/STARK-procurement-auth/', request.url), 302);
    }
  }

  return;
}
