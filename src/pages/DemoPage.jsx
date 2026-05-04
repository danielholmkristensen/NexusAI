/**
 * Demo Page — YC Partner Walkthrough
 * Honest pitch: early stage, building in public, no fake traction.
 */

import { useEffect, useState } from 'react';
import { ScreenshotShowcase } from '../components/showcase';
import './DemoPage.css';

const SCREENSHOTS = [
  {
    src: '/screenshots/01-discover-echo-henrik.png',
    phase: 'Discover',
    title: 'Echo Interviews the CFO',
    description: 'AI agent conducts structured stakeholder interviews. Triangulates answers across sessions. Extracts requirements automatically.',
    url: 'portal.client.com/discovery/sessions',
  },
  {
    src: '/screenshots/02-discover-charter-goals.png',
    phase: 'Discover',
    title: 'Charter Goals Locked',
    description: 'Strategic goals extracted from interviews. Each goal has measurable success criteria. No ambiguity.',
    url: 'portal.client.com/charter/goals',
  },
  {
    src: '/screenshots/03-discover-home-sara.png',
    phase: 'Discover',
    title: 'Product Owner Dashboard',
    description: 'Real-time progress: sessions completed, chapters validated, stakeholders pending.',
    url: 'portal.client.com/home',
  },
  {
    src: '/screenshots/04-discover-recommendation-paths.png',
    phase: 'Discover',
    title: 'Implementation Paths',
    description: 'AI generates ranked options with trade-offs: timeline vs. cost vs. risk. Client chooses, agents execute.',
    url: 'portal.client.com/charter/recommendations',
  },
  {
    src: '/screenshots/05-discover-workflow-analyzer.png',
    phase: 'Discover',
    title: 'Workflow Analysis',
    description: 'Automated process mining from transcripts. Bottlenecks identified before code.',
    url: 'portal.client.com/discovery/workflows',
  },
  {
    src: '/screenshots/06-build-home-sara.png',
    phase: 'Build',
    title: 'Build Phase Dashboard',
    description: 'Client checks in each morning. Agents worked overnight. Screens ready for review.',
    url: 'portal.client.com/home',
  },
  {
    src: '/screenshots/07-build-review-screens.png',
    phase: 'Build',
    title: 'Async Screen Review',
    description: 'No meetings. Review when convenient. Feedback flows to agents instantly.',
    url: 'portal.client.com/gallery/review',
  },
  {
    src: '/screenshots/08-operate-outcomes.png',
    phase: 'Operate',
    title: 'Goal Outcomes',
    description: 'Track against charter goals. Green = achieved. Yellow = on track. Direct line to Discovery.',
    url: 'portal.client.com/outcomes',
  },
  {
    src: '/screenshots/09-operate-home-sara.png',
    phase: 'Operate',
    title: 'Product Owner in Operate',
    description: 'Sara monitors the live system: 99.94% uptime, feature adoption at 78%, feedback queue, NPS tracking. Full operational picture.',
    url: 'portal.client.com/home',
  },
];

function useImagePreloader(urls) {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let loadedCount = 0;
    const totalCount = urls.length;

    urls.forEach((url) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loadedCount++;
        setProgress(loadedCount / totalCount);
        if (loadedCount === totalCount) {
          setLoaded(true);
        }
      };
      img.src = url;
    });
  }, [urls]);

  return { loaded, progress };
}

export default function DemoPage() {
  const { loaded, progress } = useImagePreloader(SCREENSHOTS.map((s) => s.src));

  if (!loaded) {
    return (
      <div className="demo-loading">
        <div className="demo-loading-content">
          <span className="demo-loading-mark">{'>>'}</span>
          <div className="demo-loading-bar">
            <div className="demo-loading-fill" style={{ transform: `scaleX(${progress})` }} />
          </div>
          <span className="demo-loading-text">Loading demo...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="demo-page">
      {/* Navigation */}
      <nav className="demo-nav">
        <span className="demo-logo">{'>>'} Agentic Agency</span>
      </nav>

      {/* Hero */}
      <section className="demo-hero">
        <div className="demo-hero-content">
          <div className="demo-stage-badge">Building in Public</div>
          <h1 className="demo-hero-title">
            Empowering enterprises<br />
            with an Agentic OS.
          </h1>
          <p className="demo-hero-subtitle">
            AI agents that discover requirements, build features, and operate production systems.
            Not copilots. Not assistants. <strong>Autonomous delivery.</strong>
          </p>
          <p className="demo-hero-status">
            Pre-revenue. Building the platform. Looking for design partners.
          </p>
        </div>
        <div className="demo-scroll-indicator">
          <span>See what we're building</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* The Problem */}
      <section className="demo-problem">
        <div className="demo-problem-content">
          <p className="demo-eyebrow">The Problem</p>
          <h2 className="demo-section-title">
            Enterprise Software projects fail at&nbsp;70%.
          </h2>
          <div className="demo-problem-grid">
            <div className="demo-problem-card">
              <span className="demo-problem-number">01</span>
              <h3>Discovery is theater</h3>
              <p>Weeks of workshops. Hundreds of slides. Requirements still wrong.</p>
            </div>
            <div className="demo-problem-card">
              <span className="demo-problem-number">02</span>
              <h3>Build is blocked</h3>
              <p>Developers wait for decisions. Meetings about meetings. Scope creep.</p>
            </div>
            <div className="demo-problem-card">
              <span className="demo-problem-number">03</span>
              <h3>Operate is chaos</h3>
              <p>Launch day surprises. No connection to original goals. Finger-pointing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Insight */}
      <section className="demo-insight">
        <div className="demo-insight-content">
          <p className="demo-eyebrow">The Insight</p>

          <div className="demo-time-comparison">
            <div className="demo-time-block">
              <span className="demo-time-label">Code</span>
              <div className="demo-time-bar">
                <div className="demo-time-fill compressed" />
              </div>
              <span className="demo-time-value code">Minutes</span>
            </div>
            <div className="demo-time-block">
              <span className="demo-time-label">Process</span>
              <div className="demo-time-bar">
                <div className="demo-time-fill expanded" />
              </div>
              <span className="demo-time-value">Months</span>
            </div>
          </div>

          <h2 className="demo-insight-headline">
            AI compressed code.<br />
            <span className="muted">The process didn't follow.</span>
          </h2>

          <div className="demo-insight-grid">
            <div className="demo-insight-stat">
              <span className="stat-old">Weeks</span>
              <span className="stat-arrow">→</span>
              <span className="stat-new">Hours</span>
              <span className="stat-label">Discovery</span>
            </div>
            <div className="demo-insight-stat">
              <span className="stat-old">Sprints</span>
              <span className="stat-arrow">→</span>
              <span className="stat-new">Minutes</span>
              <span className="stat-label">Feedback</span>
            </div>
            <div className="demo-insight-stat">
              <span className="stat-old">Months</span>
              <span className="stat-arrow">→</span>
              <span className="stat-new">Weeks</span>
              <span className="stat-label">Delivery</span>
            </div>
          </div>

          <p className="demo-insight-text">
            To capture AI productivity gains, you need an autonomous product and operations loop that matches AI speed.
          </p>

          <div className="demo-insight-punchline">
            <span className="punchline-small">The traditional lifecycle wasn't built for this.</span>
            <span className="punchline-large">The Agentic OS is.</span>
          </div>

          {/* Platform Architecture */}
          <div className="demo-platform-arch">
            <div className="arch-os">
              <span className="arch-label">Agentic OS</span>
              <span className="arch-tagline">The orchestration layer</span>
            </div>

            <div className="arch-grid">
              <div className="arch-column studio-column">
                <div className="arch-product studio-product">
                  <span className="arch-label">Agentic Studio</span>
                </div>
                <div className="phase-row">
                  <div className="arch-phase discover-phase">
                    <span className="phase-icon">◉</span>
                    <span className="phase-name">Discover</span>
                  </div>
                  <div className="arch-phase build-phase">
                    <span className="phase-icon">◉</span>
                    <span className="phase-name">Build</span>
                  </div>
                </div>
                <p className="arch-desc studio-desc">
                  <span className="desc-highlight">AI interviews stakeholders.</span>
                  <span className="desc-text">Extracts requirements. Ships features. Async feedback loops.</span>
                </p>
              </div>

              <div className="arch-column cc-column">
                <div className="arch-product cc-product">
                  <span className="arch-label">Command Center</span>
                </div>
                <div className="phase-row">
                  <div className="arch-phase operate-phase">
                    <span className="phase-icon">◉</span>
                    <span className="phase-name">Operate</span>
                  </div>
                </div>
                <p className="arch-desc cc-desc">
                  <span className="desc-highlight">Track against goals.</span>
                  <span className="desc-text">Measure outcomes. ROI dashboards. Continuous alignment.</span>
                </p>
              </div>
            </div>

            {/* Animated connector lines */}
            <svg className="arch-connectors" viewBox="0 0 700 20" preserveAspectRatio="none">
              <path className="connector-line line-1" d="M0,10 L700,10" />
              <circle className="connector-dot dot-1" cx="175" cy="10" r="4" />
              <circle className="connector-dot dot-2" cx="350" cy="10" r="4" />
              <circle className="connector-dot dot-3" cx="525" cy="10" r="4" />
            </svg>
          </div>
        </div>
      </section>

      {/* Solution Intro */}
      <section className="demo-solution">
        <div className="demo-solution-content">
          <p className="demo-eyebrow">What We're Building</p>
          <h2 className="demo-section-title">
            Three phases.<br />
            AI agents throughout.
          </h2>
          <div className="demo-phase-preview">
            <div className="demo-phase-item">
              <span className="demo-phase-dot discover" />
              <span className="demo-phase-name">Discover</span>
              <span className="demo-phase-desc">AI interviews stakeholders</span>
            </div>
            <div className="demo-phase-arrow">→</div>
            <div className="demo-phase-item">
              <span className="demo-phase-dot build" />
              <span className="demo-phase-name">Build</span>
              <span className="demo-phase-desc">Agents ship features</span>
            </div>
            <div className="demo-phase-arrow">→</div>
            <div className="demo-phase-item">
              <span className="demo-phase-dot operate" />
              <span className="demo-phase-name">Operate</span>
              <span className="demo-phase-desc">Track against goals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot Showcase */}
      <ScreenshotShowcase
        title="The Product"
        subtitle="Screens from our development environment"
        screenshots={SCREENSHOTS}
      />

      {/* How It's Different */}
      <section className="demo-difference">
        <div className="demo-difference-content">
          <p className="demo-eyebrow">How It's Different</p>
          <h2 className="demo-section-title">A fundamental shift.</h2>
          <div className="demo-difference-grid">
            <div className="demo-diff-card">
              <h3>Traditional Lifecycle</h3>
              <ul>
                <li>Requirements gathered in workshops</li>
                <li>Humans coordinate humans</li>
                <li>Progress measured in meetings</li>
                <li>Feedback queued for next sprint</li>
                <li>Months from idea to production</li>
              </ul>
            </div>
            <div className="demo-diff-card highlight">
              <h3>Agentic OS</h3>
              <ul>
                <li>Requirements extracted by AI</li>
                <li>Humans approve, agents execute</li>
                <li>Progress measured in commits</li>
                <li>Feedback triggers immediate rework</li>
                <li>Weeks from idea to production</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Ask */}
      <section className="demo-ask">
        <div className="demo-ask-content">
          <p className="demo-eyebrow">Where We Are</p>
          <h2 className="demo-section-title">Looking for design partners.</h2>
          <div className="demo-ask-grid">
            <div className="demo-ask-card">
              <h3>What we have</h3>
              <ul>
                <li>Work-in-progress platform (3-4 weeks post-pivot)</li>
                <li>AI discovery agent (Echo)</li>
                <li>Async review system</li>
                <li>Goal tracking from charter to outcomes</li>
              </ul>
            </div>
            <div className="demo-ask-card">
              <h3>What we need</h3>
              <ul>
                <li>3-5 enterprise design partners</li>
                <li>Real projects to prove the model</li>
                <li>Feedback to shape the product</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="demo-cta">
        <div className="demo-cta-content">
          <h2 className="demo-cta-title">
            Engineering {'>'} Prompting
          </h2>
          <p className="demo-cta-subtitle">
            Founded in Europe. Copenhagen & Berlin. Remote-first.<br />
            Building the machine that directs the machine.
          </p>
          <div className="demo-cta-buttons">
            <a href="mailto:daniel.holm@agenticagency.dev?subject=Design%20Partner%20Inquiry" className="demo-cta-primary">
              Become a Design Partner
            </a>
            <a href="mailto:daniel.holm@agenticagency.dev?subject=YC%20Demo%20Follow-up" className="demo-cta-secondary">
              Talk to Founders
            </a>
          </div>
          <div className="demo-founders">
            <div className="demo-founder">
              <span className="demo-founder-name">Daniel Holm Kristensen</span>
              <span className="demo-founder-role">Co-founder · Product</span>
            </div>
            <div className="demo-founder">
              <span className="demo-founder-name">Christoph Frei</span>
              <span className="demo-founder-role">Co-founder · Engineering</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
