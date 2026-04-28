/**
 * The Practitioners Series
 *
 * Trailblazers in Agentic Engineering — leaders and individual contributors
 * gathering experiences the rest of us can learn from and be inspired by.
 */

export const practitioners = [
  {
    slug: "prayson-wilfred-daniel",
    name: "Prayson Wilfred Daniel",
    title: "Principal Data Scientist",
    organisation: "Norlys",
    location: "Denmark",
    pedigree: "Norlys · Team _42 · Data Innovation Summit Speaker",
    portrait: "/practitioners/prayson.jpg",
    linkedInUrl: "https://www.linkedin.com/in/prayson/",
    carouselUrl: "/practitioners/prayson_carousel.pdf",
    reelUrl: null, // LinkedIn reel URL when available
    tagline: "Solve the problem. Do not stop due to imperfect conditions.",
    bio: `Prayson didn't start with code. He started with theology and philosophy — and modelled free will with Bayesian probability. The bridge to data science was shorter than it looks.

Now he leads Team _42 at Norlys, Denmark's largest energy company serving 1 million homes. His team operates outside standard SAFe cadence with a mandate from the top: idea to production in under 5 days. 5 projects in 3 weeks. They're not running pilots — they're shipping agent-based systems into live infrastructure.`,
    credentials: [
      "Principal Data Scientist at Norlys (Denmark's largest energy company)",
      "Leads Team _42: 15-person cross-domain squad with executive mandate",
      "Speaking at Data Innovation Summit, Stockholm, May 2026",
      "MSc Information Technology & Persuasive Design, Aalborg University"
    ],
    topics: [
      "Production ML systems",
      "The Seal Team model",
      "Data-first decision making",
      "Agentic systems at scale"
    ],
    pullQuote: "Do not stop due to imperfect conditions. Solve the problem.",
    interviewTeaser: "On the Seal Team model at Norlys, why every LLM wears mascara, and why the eureka moments have plateaued — the bottleneck isn't intelligence, it's context.",
    publishedAt: "2026-04-01",
    publishedDisplay: "April 2026",
    episode: 1
  },
  {
    slug: "martin-rosen-lidholm",
    name: "Martin Rosén-Lidholm",
    title: "Engineering Leader",
    organisation: "",
    location: "Sweden",
    pedigree: "Engineering Leadership · Nordics",
    portrait: "/practitioners/martin.jpg",
    linkedInUrl: "https://www.linkedin.com/in/martinrosenlidholm/",
    reelUrl: null,
    tagline: "Engineering leadership in the age of AI",
    bio: `Martin is an engineering leader with deep experience building and scaling technical teams across the Nordics. He brings a pragmatic perspective on how AI is reshaping engineering organisations — not just the code, but the people, processes, and culture around it.

His focus is on the human side of technical transformation: how teams adapt, what leadership looks like when AI is a collaborator, and how to maintain engineering excellence while moving fast.`,
    credentials: [
      "Engineering leadership across Nordic technology companies",
      "Experience scaling technical teams through transformation",
      "Focus on engineering culture and team dynamics"
    ],
    topics: [
      "Engineering leadership",
      "Team scaling",
      "AI adoption in organisations",
      "Technical culture"
    ],
    pullQuote: "The question isn't whether AI will change how we build software. It's whether we'll be intentional about how we adapt.",
    interviewTeaser: "On leading engineering teams through AI transformation, maintaining quality at speed, and the cultural shifts that make or break adoption.",
    publishedAt: "2026-04-08",
    publishedDisplay: "April 2026",
    episode: 2
  },
  {
    slug: "nana-lin",
    name: "Nana Lin",
    title: "Director",
    organisation: "The LEGO Group",
    location: "Denmark",
    pedigree: "The LEGO Group · IMD · INSEAD",
    portrait: "/practitioners/nana.jpg",
    linkedInUrl: "https://www.linkedin.com/in/nanalin/",
    reelUrl: null,
    tagline: "Enterprise-scale platform infrastructure and engineering leadership",
    bio: `Nana is a Director at The LEGO Group, where she's responsible for platform architecture and the LEGO Play App — serving over 7 million users worldwide. Her work sits at the intersection of enterprise infrastructure, product engineering, and programme management.

She brings the perspective of someone who has shipped at massive scale, navigating the complexities of enterprise organisations while maintaining the craft of engineering. Her path through IMD and INSEAD executive programmes adds a strategic lens to her technical depth.`,
    credentials: [
      "Director at The LEGO Group since 2021",
      "Responsible for platform architecture and LEGO Play App (7M+ users)",
      "IMD executive programme",
      "INSEAD"
    ],
    topics: [
      "Enterprise platform architecture",
      "Scaling consumer products",
      "Programme management",
      "Engineering at scale"
    ],
    pullQuote: "At enterprise scale, every architectural decision is a bet on the future. The skill is knowing which bets to make.",
    interviewTeaser: "On building platforms that serve millions, enterprise architecture decisions, and what it takes to ship at LEGO scale.",
    publishedAt: "2026-04-15",
    publishedDisplay: "April 2026",
    episode: 3
  },
  {
    slug: "anton-gersvang-golles",
    name: "Anton Gersvang Golles",
    title: "AI Lead",
    organisation: "Simply.TV",
    location: "Denmark",
    pedigree: "Simply.TV · Halfspace/Accenture · University of Copenhagen",
    portrait: "/practitioners/anton.jpg",
    linkedInUrl: "https://www.linkedin.com/in/golles/",
    reelUrl: null,
    carouselUrl: null,
    articleSlug: "anton-gersvang-golles",
    tagline: "Comprehension is compression. Compression is comprehension.",
    bio: `Anton is a 26-year-old computational physicist running the AI function at Simply.TV — the Danish B2B firm that supplies TV metadata to operators in roughly sixty countries. His company has just crossed a quietly historic threshold: 99-point-x-percent accuracy, on enough of its features, that the editors have started, for real, to be replaced by software he wrote.

Before Simply.TV, Anton was at Halfspace (acquired by Accenture), advising Nordic enterprises on AI strategy. His master's thesis at University of Copenhagen was on text-to-motion generation. But the defining moment came earlier: a third-year physics project where he met the autoencoder and realized that comprehension and compression are the same thing.`,
    credentials: [
      "AI Lead at Simply.TV (450 employees, 60 countries)",
      "Former consultant at Halfspace/Accenture Nordic AI practice",
      "MSc Computational Physics, University of Copenhagen",
      "Rokoko motion-capture research"
    ],
    topics: [
      "Cascade architectures",
      "Production AI at scale",
      "The 99.x% accuracy problem",
      "Compression as cognition"
    ],
    pullQuote: "Comprehension is compression. Compression is comprehension. The two are the same thing.",
    interviewTeaser: "On automating metadata editors, why 95% accuracy isn't good enough, the agent he named Dream, and why the next paradigm is computer use.",
    publishedAt: "2026-04-22",
    publishedDisplay: "April 2026",
    episode: 4
  }
];

export const getPractitionerBySlug = (slug) => {
  return practitioners.find(p => p.slug === slug);
};

export const getLatestPractitioners = (count = 3) => {
  return [...practitioners]
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, count);
};
