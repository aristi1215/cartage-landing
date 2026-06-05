import { profile } from './content/profile'
import { architectureFlows, architectureLayers } from './content/architecture'
import './index.css'

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M8 2v8M5 7l3 3 3-3M3 12h10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M8 1.5a6.5 6.5 0 0 0-2.05 12.67c.325.06.445-.14.445-.31v-1.1c-1.8.39-2.18-.87-2.18-.87-.29-.74-1.18-.94-1.18-.94-.96-.66.07-.65.07-.65 1.06.07 1.62 1.09 1.62 1.09.94 1.62 2.47 1.15 3.07.88.1-.69.37-1.15.67-1.42-2.34-.27-4.8-1.17-4.8-5.2 0-1.15.41-2.09 1.08-2.83-.11-.27-.47-1.34.1-2.79 0 0 .88-.28 2.88 1.08a9.98 9.98 0 0 1 2.62-.35c.89 0 1.78.12 2.62.35 2-1.36 2.88-1.08 2.88-1.08.57 1.45.21 2.52.1 2.79.67.74 1.08 1.68 1.08 2.83 0 4.04-2.47 4.93-4.82 5.19.38.33.72.97.72 1.96v2.9c0 .17.12.37.45.31A6.5 6.5 0 0 0 8 1.5Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 12.5 2h-9ZM5.25 6h1.5v5.25h-1.5V6Zm.75-2.25a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8ZM7.5 6h1.44v.72h.02c.2-.4.7-.82 1.44-.82 1.54 0 1.82 1.01 1.82 2.33V11.25h-1.5V8.78c0-.55-.01-1.25-.76-1.25-.76 0-.88.6-.88 1.21v2.51H7.5V6Z" />
    </svg>
  )
}

export default function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="header-inner">
          <a href="#" className="brand">
            <span className="brand-mark">C</span>
            <span className="brand-text">Cartage Ops</span>
          </a>
          <nav className="nav-links" aria-label="Page sections">
            <a href="#overview">Overview</a>
            <a href="#demo">Demo</a>
            <a href="#architecture">Architecture</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="overview" className="section hero">
          <p className="hero-eyebrow">Built for Cartage.ai</p>
          <h1>
            Operations on the move, <em>before</em> delays escalate.
          </h1>
          <p className="hero-sub">
            A mobile operations companion for freight coordination teams — real-time
            shipment visibility, exception alerts, and coordinator workflows inspired
            by Wilson&apos;s always-on logistics model.
          </p>
          <div className="hero-actions">
            <a href="#demo" className="btn btn-primary">
              Watch demo
              <ArrowIcon />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in touch
              <ArrowIcon />
            </a>
          </div>

          <div className="overview-grid">
            <article className="overview-card">
              <h3>Always watching</h3>
              <p>
                ShipStation sync every 60 seconds. High-risk and delayed loads surface
                automatically — no manual spreadsheet sweeps.
              </p>
            </article>
            <article className="overview-card">
              <h3>Always acting</h3>
              <p>
                Coordinators acknowledge alerts, add notes, and trigger follow-ups from
                mobile — with optional Slack and push notifications.
              </p>
            </article>
            <article className="overview-card">
              <h3>Built to ship</h3>
              <p>
                React Native (Expo) + Express BFF, JWT auth, and mock mode for demos
                without production credentials.
              </p>
            </article>
          </div>
        </section>

        <section id="demo" className="section demo-section" aria-labelledby="demo-heading">
          <div className="demo-inner">
            <p className="section-label">Product demo</p>
            <h2 id="demo-heading" className="section-title">
              See Cartage Ops in action.
            </h2>
            <p className="section-lead">
              Walkthrough of the operations MVP: login, shipment summary, exception
              handling, and coordinator workflows — the same experience freight teams
              would use on the floor.
            </p>
            <div className="demo-frame">
              <video
                controls
                playsInline
                preload="metadata"
                poster=""
                aria-label="Cartage Ops product demonstration"
              >
                <source src="/demo-video.mp4" type="video/mp4" />
                Your browser does not support embedded video.
              </video>
            </div>
            <p className="demo-caption">
              Demo credentials: ops@cartage.ai / PIN 1234 · Mock ShipStation data enabled
            </p>
          </div>
        </section>

        <section id="architecture" className="section" aria-labelledby="arch-heading">
          <p className="section-label">System design</p>
          <h2 id="arch-heading" className="section-title">
            Architecture at a glance.
          </h2>
          <p className="section-lead">
            Layered BFF pattern keeping secrets off the client — representative of the
            production topology for this MVP.
          </p>

          <div className="arch-grid">
            <div className="arch-stack" role="list" aria-label="Architecture layers">
              {architectureLayers.map((layer) => (
                <div key={layer.id} className="arch-layer" role="listitem">
                  <div className="arch-layer-label">{layer.label}</div>
                  <ul>
                    {layer.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div>
              <div className="arch-flows">
                <h3>Data flows</h3>
                {architectureFlows.map((flow) => (
                  <div key={`${flow.from}-${flow.to}`} className="flow-item">
                    <div className="flow-route">
                      {flow.from} <span>→</span> {flow.to}
                    </div>
                    <p className="flow-detail">{flow.detail}</p>
                  </div>
                ))}
              </div>
              <p className="arch-note">
                <strong>Note:</strong> Mock data shown for illustration. In-memory store
                with optional push-token persistence; single-instance deployment suitable
                for MVP demos and founder review.
              </p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="section contact-section"
          aria-labelledby="contact-heading"
        >
          <p className="section-label">About the builder</p>
          <div className="contact-grid">
            <div className="contact-intro">
              <h2 id="contact-heading">
                {profile.displayName} — {profile.role}
              </h2>
              <p>{profile.tagline}</p>
              <p>
                I built this project to demonstrate how I&apos;d extend Wilson&apos;s
                logistics stack into mobile operations — and I&apos;d love to bring that
                same execution to the Cartage team.
              </p>
              <p className="contact-meta">
                <span>$</span> location → {profile.location}
                <br />
                <span>$</span> relocate → {profile.relocation}
              </p>
              <div className="contact-actions">
                <a href={`mailto:${profile.email}`} className="btn btn-primary">
                  Initiate contact
                  <ArrowIcon />
                </a>
                <a
                  href={profile.resumeUrl}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DownloadIcon />
                  Download résumé
                </a>
                <a
                  href={profile.github}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon />
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
              </div>
              <div className="contact-chips">
                {profile.chips.map((chip) => (
                  <span key={chip} className="chip">
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="contact-card">
              <pre>{`{
  "name": "${profile.name}",
  "role": "${profile.role}",
  "email": "${profile.email}",
  "github": "${profile.github.replace('https://', '')}",
  "linkedin": "${profile.linkedin.replace('https://www.', '')}",
  "status": "Open to roles at Cartage.ai"
}`}</pre>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          Showcase build for{' '}
          <a href="https://www.cartage.ai" target="_blank" rel="noopener noreferrer">
            Cartage.ai
          </a>
          {' · '}
          <a
            href="https://portfolio-v3-delta-ivory.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </p>
      </footer>
    </div>
  )
}
