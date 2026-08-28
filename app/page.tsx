import Link from 'next/link';
import { SiteShell, Meta, ConsultationBand } from './site-shell';

const solutions = [
  ['01', 'AI & AGENT SYSTEMS', 'Autonomous and assisted agents for data processing, customer engagement, and internal operations.'],
  ['02', 'AUTOMATION & WORKFLOWS', 'The invisible threads that connect software and eliminate manual repetition.'],
  ['03', 'BUSINESS OPERATIONS', 'Systems shaped around the way your people actually work.'],
  ['04', 'DATA & DASHBOARDS', 'Fragmented data made clear, actionable, and operational.'],
];

const foundingCapabilities = [
  ['AI AUTOMATION', 'Intelligent agents and automation systems that handle work, so people can focus on what matters.'],
  ['DIGITAL SYSTEMS', 'Custom platforms and applications designed for performance, reliability, and long-term growth.'],
  ['DATA INFRASTRUCTURE', 'Secure, scalable data systems that turn information into clarity and competitive advantage.'],
  ['INTEGRATION & CONNECTIVITY', 'Connecting the right systems, tools, and people so everything works together seamlessly.'],
];

export default function Home() {
  return <SiteShell>
    <section className="hero container">
      <Meta left="ZION / CORPORATE SYSTEMS" right="EST. 2023"/>
      <h1 className="display-xl">TOOLS FOR<br/><span>PEOPLE</span> AND<br/>MACHINES.</h1>
      <div className="hero-bottom">
        <p className="lead">Zion Systems Corporation designs and builds digital systems that help people, organizations, and artificial intelligence work together.</p>
        <div className="button-row">
          <Link className="button dark" href="/appointment/3">BOOK A STRATEGY CONSULTATION — $500</Link>
          <Link className="text-link" href="/how-we-work">HOW IT WORKS ↗</Link>
        </div>
      </div>
    </section>
    <section className="statement container section-rule">
      <Meta left="01 / POSITION" right="BUILD BETTER BUSINESS"/>
      <div className="editorial-grid">
        <h2>LET’S BUILD<br/>WHAT COMES NEXT.</h2>
        <p className="lead">Good technology should make an organization easier to operate. Zion builds the systems that make that possible—without unnecessary complexity or technology for technology’s sake.</p>
      </div>
    </section>
    <section className="container section-rule">
      <Meta left="02 / SOLUTIONS" right="SELECTED CAPABILITIES"/>
      <div className="solution-list">
        {solutions.map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}
      </div>
      <Link className="text-link block-link" href="/solutions">VIEW ALL SOLUTIONS ↗</Link>
    </section>
    <section className="principles container section-rule">
      <Meta left="03 / FOUNDING PHILOSOPHY" right="PRODUCTS BUILT WITH PURPOSE"/>
      <div className="philosophy-intro">
        <h2>CLEAR SCOPE.<br/>HUMAN GATES.<br/>USEFUL SYSTEMS.</h2>
        <p className="lead">We build products that solve real problems, empower people, and scale with purpose.</p>
      </div>
      <div className="philosophy-list">
        {foundingCapabilities.map(([title,description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}
      </div>
    </section>
    <ConsultationBand/>
  </SiteShell>;
}
