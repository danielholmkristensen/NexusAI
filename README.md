# The Agentic Agency - Website

Official website for **The Agentic Agency**, a consultancy helping organizations build AI-powered workflows and agentic engineering capabilities.

## Live Sites

| Environment | URL |
|-------------|-----|
| **Production** | [www.agenticagency.dev](https://www.agenticagency.dev) |
| **Production (DK)** | [www.theagenticagency.dk](https://www.theagenticagency.dk) |

---

## About The Agentic Agency

The Agentic Agency helps companies transform how they work with AI through hands-on workshops and strategic advisory. We specialize in **agentic engineering** — building AI systems that can autonomously execute complex workflows.

### Products & Services

| Product | Format | Description |
|---------|--------|-------------|
| **The Spark** | 2-day workshop | Hands-on introduction to agentic engineering. Teams build their first AI agent and learn the fundamentals. |
| **The Catalyst** | 12-week program | Deep transformation program. We embed with your team to build production-ready agentic systems. |
| **The Scale Engine** | Advisory retainer | Ongoing strategic partnership for organizations scaling their agentic capabilities. |

### Target Audience

- Technical leaders and engineering teams
- Product organizations exploring AI integration
- Companies seeking to automate complex workflows
- Organizations building internal AI capabilities

---

## Technical Overview

### Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 18 + Vite |
| Routing | React Router v7 |
| Styling | Tailwind CSS |
| Animations | GSAP (ScrollTrigger, magnetic effects) |
| SEO | react-helmet-async + JSON-LD structured data |
| Hosting | Vercel |
| Testing | Playwright |

### Project Structure

```
src/
├── main.jsx                    # App entry point
├── index.css                   # Global styles
├── router/                     # Route configuration
├── layouts/                    # Page layout wrappers
├── pages/                      # Page components
│   ├── LandingPage.jsx         # Homepage
│   ├── SparkPage.jsx           # The Spark workshop
│   ├── CatalystPage.jsx        # The Catalyst program
│   ├── ScaleEnginePage.jsx     # The Scale Engine advisory
│   ├── AboutPage.jsx           # About us + team
│   └── MethodPage.jsx          # Our methodology
└── components/
    ├── common/                 # Shared UI components
    ├── navigation/             # Nav + footer
    ├── sections/               # Page sections
    └── seo/                    # Meta tags + structured data
```

### Routes

| Path | Page |
|------|------|
| `/` | Landing Page |
| `/the-spark` | The Spark (2-day workshop) |
| `/the-catalyst` | The Catalyst (12-week program) |
| `/the-scale-engine` | The Scale Engine (advisory) |
| `/about` | About + Team |
| `/method` | Our Methodology |

---

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Testing

```bash
# Run Playwright tests
npm test

# Run tests with UI
npm run test:ui
```

---

## Deployment

The site auto-deploys to Vercel when changes are pushed to `main`.

### Manual Deployment

```bash
# Deploy to production
npm run deploy:release

# Deploy to staging
npm run deploy:stage

# Check deployment status
npm run deploy:status
```

### DNS Configuration

The site is served from Vercel. DNS should be configured as:

| Domain | Record Type | Value |
|--------|-------------|-------|
| Root (`@`) | A | `76.76.21.21` |
| `www` | CNAME | `cname.vercel-dns.com` |

---

## Design System

### Colors

- **Background:** `#E6E6E1` (cement)
- **Text:** `#000000` (black)

### Typography

- **Font:** Space Grotesk
- **Headlines:** Black weight, uppercase, tight tracking
- **Body:** Medium weight, 70% opacity

### Visual Elements

- Noise texture overlay
- Magnetic hover effects on buttons
- Brutalist drop shadows
- Word-by-word scroll animations
- Industrial/grayscale imagery

---

## Repository

| Remote | URL |
|--------|-----|
| Origin | [github.com/danielholmkristensen/NexusAI](https://github.com/danielholmkristensen/NexusAI) |
| Agentic Agency | [github.com/theagenticagency/AA_website](https://github.com/theagenticagency/AA_website) |

---

## Contact

- **Website:** [agenticagency.dev](https://agenticagency.dev)
- **Email:** hello@agenticagency.dev
