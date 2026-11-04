import { useEffect, useRef, useState } from "react";
import {
  profile, stats, platforms, about, experience, freelance, projects,
  skills, certificates, achievements, leadership, education, nav,
} from "./data.js";

const ext = { target: "_blank", rel: "noopener noreferrer" };
const host = (u) => u.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "");

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("theme") || ""; } catch { return ""; }
  });
  useEffect(() => {
    const root = document.documentElement;
    if (theme) root.setAttribute("data-theme", theme); else root.removeAttribute("data-theme");
    try { theme ? localStorage.setItem("theme", theme) : localStorage.removeItem("theme"); } catch { /* storage blocked */ }
  }, [theme]);
  const isDark = theme ? theme === "dark" : window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  return [isDark, () => setTheme(isDark ? "light" : "dark")];
}

function Section({ id, eyebrow, title, intro, children }) {
  return (
    <section id={id} className="section">
      <header className="section-head">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {intro && <p className="lede">{intro}</p>}
      </header>
      {children}
    </section>
  );
}

function LinkPill({ label, url, primary }) {
  return (
    <a className={primary ? "btn btn-primary" : "btn"} href={url} {...ext}>
      {label}
      <span aria-hidden="true" className="arrow">↗</span>
    </a>
  );
}

function Tags({ items }) {
  return <ul className="tags">{items.map((t) => <li key={t}>{t}</li>)}</ul>;
}

function BrowserFrame({ src, url, alt, tall }) {
  return (
    <figure className={tall ? "browser browser-tall" : "browser"}>
      <div className="browser-bar">
        <span className="dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="browser-url">{url}</span>
      </div>
      <div className="browser-view">
        <img src={src} alt={alt} loading="lazy" />
      </div>
    </figure>
  );
}

function Nav({ isDark, toggle }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <a href="#top" className="brand">
        <img src={profile.photo} alt="" />
        <span>Harshad Khatale</span>
      </a>
      <button className="menu-btn" aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(!open)}>
        {open ? "Close" : "Menu"}
      </button>
      <ul id="nav-links" className={open ? "nav-links open" : "nav-links"}>
        {nav.map((n) => (
          <li key={n.id}><a href={`#${n.id}`} onClick={() => setOpen(false)}>{n.label}</a></li>
        ))}
        <li>
          <button className="theme-btn" onClick={toggle} aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}>
            {isDark ? "Light" : "Dark"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <header id="top" className="hero">
      <div className="hero-text">
        <p className="status"><span className="pulse" aria-hidden="true" />Open to internships, freelance projects and collaborations</p>
        <h1>
          <span>Harshad</span>
          <span className="accent">Khatale</span>
        </h1>
        <p className="role">{profile.role}</p>
        <p className="tagline">{profile.tagline}</p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="#projects">See my projects</a>
          <a className="btn" href="#showcase">Watch 2-min showcase</a>
          <a className="btn" href={profile.resume} {...ext}>Resume (PDF) <span className="arrow" aria-hidden="true">↗</span></a>
        </div>
        <ul className="platforms" aria-label="Profiles">
          {platforms.map((p) => (
            <li key={p.name}>
              <a href={p.url} {...ext} title={p.name}>
                <span className="plat-badge" aria-hidden="true">{p.short}</span>{p.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hero-photo">
        <div className="photo-ring">
          <img src={profile.photo} alt="Portrait of Harshad Khatale" />
        </div>
        <dl className="hero-card">
          <div><dt>Now</dt><dd>B.Tech AIML · WCE Sangli</dd></div>
          <div><dt>Based in</dt><dd>Sangli, Maharashtra</dd></div>
        </dl>
      </div>
    </header>
  );
}

function Stats() {
  return (
    <ul className="stats">
      {stats.map((s) => (
        <li key={s.label}><strong>{s.value}</strong><span>{s.label}</span></li>
      ))}
    </ul>
  );
}

function Showcase() {
  return (
    <Section id="showcase" eyebrow="Video" title="Two minutes, everything about me"
      intro="A quick tour of my journey, Upwork work, projects, certificates and platforms.">
      <div className="video-wrap">
        <video src={profile.video} poster={profile.poster} controls playsInline preload="none" />
      </div>
    </Section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="Builder first, student always">
      <div className="about-grid">
        <div className="prose">{about.map((p, i) => <p key={i}>{p}</p>)}</div>
        <ol className="edu">
          {education.map((e) => (
            <li key={e.school}>
              <span className="mono">{e.period}</span>
              <h3>{e.school}</h3>
              <p>{e.degree}</p>
              <p className="score">{e.score}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

function Experience({ onOpen }) {
  const cert = certificates.find((c) => c.issuer === "Devionx Technologies");
  return (
    <Section id="work" eyebrow="Experience" title={experience.company}>
      <article className="exp">
        <div>
          <p className="meta"><strong>{experience.role}</strong><span>{experience.period} · {experience.place}</span></p>
          <ul className="bullets">{experience.points.map((p) => <li key={p}>{p}</li>)}</ul>
          <Tags items={experience.stack} />
          <div className="links">{experience.links.map((l) => <LinkPill key={l.url} {...l} />)}</div>
        </div>
        <button className="doc-thumb" onClick={() => onOpen(cert)} aria-label="View Devionx experience letter">
          <img src={cert.image} alt="Devionx internship experience letter" loading="lazy" />
          <span>View experience letter</span>
        </button>
      </article>
    </Section>
  );
}

function Freelance() {
  return (
    <Section id="freelance" eyebrow="Freelance · Upwork" title="Working with real clients" intro={freelance.intro}>
      <div className="links"><LinkPill label="My Upwork profile" url={freelance.upwork} primary /></div>

      <h3 className="sub">What I offer</h3>
      <ul className="services">
        {freelance.services.map((s) => (
          <li key={s.title}><h4>{s.title}</h4><p>{s.text}</p></li>
        ))}
      </ul>

      <h3 className="sub">How I work: the client handshake</h3>
      <ol className="steps">
        {freelance.handshake.map((s, i) => (
          <li key={s.step}><span className="mono">Step {i + 1}</span><h4>{s.step}</h4><p>{s.text}</p></li>
        ))}
      </ol>

      {freelance.clients.map((cs, i) => (
        <article key={cs.client} className="case">
          <div className="case-text">
            <p className="eyebrow">Client case study {i + 1}</p>
            <h3>{cs.client}</h3>
            <p className="muted">{cs.place} · Freelance project</p>
            <p className="goal"><strong>Goal:</strong> {cs.goal}</p>
            <ul className="bullets">{cs.features.map((f) => <li key={f}>{f}</li>)}</ul>
            <div className="links">
              <LinkPill label="Visit live site" url={cs.live} primary />
              {cs.repo && <LinkPill label="GitHub repo" url={cs.repo} />}
            </div>
          </div>
          <BrowserFrame src={cs.image} url={host(cs.live)} alt={`${cs.client} website`} tall={cs.tall} />
        </article>
      ))}
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've shipped">
      <div className="projects">
        {projects.map((p, i) => (
          <article key={p.id} className={i % 2 ? "project flip" : "project"}>
            <div className="project-media">
              {p.url
                ? <BrowserFrame src={p.image} url={p.url} alt={`${p.title} screenshot`} />
                : <img className="project-img" src={p.image} alt={`${p.title} certificate`} loading="lazy" />}
            </div>
            <div className="project-body">
              <p className="eyebrow">{p.kicker} · {p.date}</p>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              {p.pipeline && (
                <ol className="pipeline" aria-label="RAG pipeline">
                  {p.pipeline.map((s) => <li key={s}>{s}</li>)}
                </ol>
              )}
              <div className="groups">
                {p.groups.map((g) => (
                  <div key={g.title}>
                    <h4>{g.title}</h4>
                    <ul className="bullets">{g.items.map((it) => <li key={it}>{it}</li>)}</ul>
                  </div>
                ))}
              </div>
              <Tags items={p.stack} />
              <div className="links">
                {p.links.map((l, k) => <LinkPill key={l.url} {...l} primary={k === 0} />)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="My toolkit">
      <dl className="skills">
        {skills.map((s) => (
          <div key={s.group}><dt>{s.group}</dt><dd><Tags items={s.items} /></dd></div>
        ))}
      </dl>
    </Section>
  );
}

function Certificates({ onOpen }) {
  const withImg = certificates.filter((c) => c.image);
  const rest = certificates.filter((c) => !c.image);
  return (
    <Section id="certificates" eyebrow="Certificates & awards" title="Proof of work"
      intro="Every certificate and document from my resume. Click one to view it, or open the original.">
      <ul className="cert-grid">
        {withImg.map((c) => (
          <li key={c.title} className="cert">
            <button onClick={() => onOpen(c)} aria-label={`View ${c.title}`}>
              <img src={c.image} alt={c.title} loading="lazy" />
            </button>
            <div className="cert-body">
              <span className="kind">{c.kind}</span>
              <h3>{c.title}</h3>
              <p>{c.issuer}</p>
              <a href={c.url} {...ext}>Open original ↗</a>
            </div>
          </li>
        ))}
      </ul>
      <ul className="cert-list">
        {rest.map((c) => (
          <li key={c.title}>
            <span className="kind">{c.kind}</span>
            <h3>{c.title}</h3>
            {c.issuer && <p>{c.issuer}</p>}
            {c.url ? <a href={c.url} {...ext}>View certificate ↗</a> : <span className="muted">Completed</span>}
          </li>
        ))}
      </ul>

      <div className="ach-grid">
        <div>
          <h3 className="sub">Achievements</h3>
          <ul className="ach">
            {achievements.map((a) => <li key={a.title}><h4>{a.title}</h4><p>{a.text}</p></li>)}
          </ul>
        </div>
        <div>
          <h3 className="sub">Leadership & extracurricular</h3>
          <ul className="bullets">{leadership.map((l) => <li key={l}>{l}</li>)}</ul>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 1800); }
    catch { setCopied(false); }
  };
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something real">
      <div className="contact">
        <div>
          <p className="lede">Open to internships, freelance projects and collaborations. The fastest way to reach me is email.</p>
          <p className="contact-line">
            <a href={`mailto:${profile.email}`} className="big">{profile.email}</a>
            <button className="btn" onClick={copy}>{copied ? "Copied" : "Copy email"}</button>
          </p>
          <p className="muted">Phone: <span className="mono">{profile.phone}</span> · {profile.location}</p>
        </div>
        <ul className="contact-plats">
          {platforms.map((p) => (
            <li key={p.name}><a href={p.url} {...ext}><span className="plat-badge" aria-hidden="true">{p.short}</span><span><strong>{p.name}</strong><small>{p.handle}</small></span></a></li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function Lightbox({ item, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (item && !d.open) d.showModal();
    if (!item && d.open) d.close();
  }, [item]);
  return (
    <dialog ref={ref} className="lightbox" onClose={onClose} onClick={(e) => e.target === ref.current && onClose()}>
      {item && (
        <figure>
          <img src={item.image} alt={item.title} />
          <figcaption>
            <span><strong>{item.title}</strong>{item.issuer && ` · ${item.issuer}`}</span>
            <span className="lb-actions">
              {item.url && <a href={item.url} {...ext}>Open original ↗</a>}
              <button className="btn" onClick={onClose}>Close</button>
            </span>
          </figcaption>
        </figure>
      )}
    </dialog>
  );
}

export default function App() {
  const [isDark, toggle] = useTheme();
  const [open, setOpen] = useState(null);
  return (
    <>
      <Nav isDark={isDark} toggle={toggle} />
      <main className="wrap">
        <Hero />
        <Stats />
        <Showcase />
        <About />
        <Experience onOpen={setOpen} />
        <Freelance />
        <Projects />
        <Skills />
        <Certificates onOpen={setOpen} />
        <Contact />
      </main>
      <footer className="footer wrap">
        <span>© 2026 Harshad Khatale</span>
        <a href="#top">Back to top ↑</a>
      </footer>
      <Lightbox item={open} onClose={() => setOpen(null)} />
    </>
  );
}
