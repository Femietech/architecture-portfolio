'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  useEffect(() => {
    // ── CURSOR ────────────────────────────────────────────────────────────────────
    const cursor = document.getElementById('cursor');
    if (!cursor) return;
    let cx = 0, cy = 0;

    document.addEventListener('mousemove', e => {
      cx = e.clientX; cy = e.clientY;
      cursor.style.transform = `translate(calc(${cx}px - 50%), calc(${cy}px - 50%))`;
    });

    document.querySelectorAll('a, button, [data-cursor], .work-card, .service-item').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('expand'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('expand'));
    });

    document.querySelectorAll('p, h1, h2, h3, input, textarea').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('text'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('text'));
    });

    // ── NAV SCROLL ───────────────────────────────────────────────────────────────
    const nav = document.getElementById('nav');
    if (nav) {
      window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 60);
      }, { passive: true });
    }

    // ── SCROLL REVEAL ─────────────────────────────────────────────────────────────
    const revealEls = document.querySelectorAll('.reveal');
    const revealObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => revealObs.observe(el));

    // ── CAPABILITY BAR ANIMATION ──────────────────────────────────────────────────
    const capItems = document.querySelectorAll('.cap-item');
    const capObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.3 });
    capItems.forEach(el => capObs.observe(el));

    // ── FORM ──────────────────────────────────────────────────────────────────────
    const contactForm = document.getElementById('contactForm') as HTMLFormElement | null;
    const formSuccess = document.getElementById('formSuccess') as HTMLElement | null;
    if (contactForm && formSuccess) {
      contactForm.addEventListener('submit', e => {
        e.preventDefault();
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';
      });
    }

    // ── MOBILE NAV ────────────────────────────────────────────────────────────────
    const burger = document.getElementById('burger') as HTMLElement | null;
    const navLinks = document.querySelector('.nav-links') as HTMLElement | null;
    const navCta = document.querySelector('.nav-cta') as HTMLElement | null;
    let mobileOpen = false;

    if (burger && navLinks && navCta) {
      const burgerEl = burger;
      const navLinksEl = navLinks;
      const navCtaEl = navCta;

      burgerEl.addEventListener('click', () => {
        mobileOpen = !mobileOpen;
        if (mobileOpen) {
          navLinksEl.style.cssText = 'display:flex;flex-direction:column;gap:20px;position:fixed;top:0;left:0;right:0;bottom:0;background:var(--paper);padding:100px 28px;z-index:99;';
          navCtaEl.style.cssText = 'display:block;position:fixed;bottom:40px;left:28px;right:28px;text-align:center;z-index:100;';
          navLinksEl.querySelectorAll('a').forEach(a => {
            (a as HTMLElement).style.cssText = 'font-size:32px;font-family:var(--serif);font-weight:400;letter-spacing:0;text-transform:none;color:var(--ink);';
          });
          (burgerEl.children[0] as HTMLElement).style.transform = 'rotate(45deg) translate(4px,5px)';
          (burgerEl.children[1] as HTMLElement).style.opacity = '0';
          (burgerEl.children[2] as HTMLElement).style.transform = 'rotate(-45deg) translate(4px,-5px)';
        } else {
          navLinksEl.removeAttribute('style');
          navCtaEl.removeAttribute('style');
          navLinksEl.querySelectorAll('a').forEach(a => (a as HTMLElement).removeAttribute('style'));
          (burgerEl.children[0] as HTMLElement).style.transform = '';
          (burgerEl.children[1] as HTMLElement).style.opacity = '';
          (burgerEl.children[2] as HTMLElement).style.transform = '';
        }
      });

      // Close mobile nav on link click
      document.querySelectorAll('.nav-links a').forEach(a => {
        a.addEventListener('click', () => {
          if (mobileOpen) burgerEl.click();
        });
      });
    }

    // ── SMOOTH SCROLL OFFSET ─────────────────────────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target instanceof HTMLElement) {
            e.preventDefault();
            const offset = 80;
            window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
          }
        }
      });
    });
  }, []);

  return (
    <>
      {/* CURSOR */}
      <div id="cursor"></div>

      {/* ══════════════════════════════════
         NAVIGATION
      ═══════════════════════════════════ */}
      <nav id="nav">
        <a href="#" className="nav-logo">Archiplus<span>.</span></a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Hire Me</a>
        <button className="nav-burger" id="burger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* ══════════════════════════════════
         HERO
      ═══════════════════════════════════ */}
      <section className="hero" id="home">
        <div className="hero-text">
          <p className="hero-eyebrow">Architect &amp; Visualizer — Lagos, Nigeria</p>
          <h1 className="hero-name">
            Adekunle<br />
            <em>Emmanuel</em>
          </h1>
          <p className="hero-descriptor">
            Architecture visualized with precision.<br />
            Spaces designed before they are built.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn-primary">View Work</a>
            <a href="#contact" className="btn-ghost">Get in Touch</a>
          </div>
        </div>

        <div className="hero-visual">
          <Image
            className="hero-img"
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=85&w=1400&auto=format&fit=crop"
            alt="Architectural visualization — Archiplus"
            width={1400}
            height={1000}
            priority
          />
        </div>

        <div className="hero-counter">
          <div className="counter-item">
            <div className="counter-val">4+</div>
            <div className="counter-lbl">Years Active</div>
          </div>
          <div className="counter-item">
            <div className="counter-val">B.Sc.</div>
            <div className="counter-lbl">Architecture · AAUA</div>
          </div>
          <div className="counter-item">
            <div className="counter-val">VI</div>
            <div className="counter-lbl">Lagos Internship</div>
          </div>
        </div>

        <div className="hero-scroll">
          <div className="hero-scroll-line"></div>
          <span className="hero-scroll-text">scroll</span>
        </div>
      </section>

      {/* ══════════════════════════════════
         MARQUEE
      ═══════════════════════════════════ */}
      <div className="marquee-strip" aria-hidden="true">
        <div className="marquee-inner">
          <span className="marquee-item">Architectural Visualization</span>
          <span className="marquee-item">Revit BIM</span>
          <span className="marquee-item">Lumion Rendering</span>
          <span className="marquee-item">AutoCAD Drafting</span>
          <span className="marquee-item">Blender 3D</span>
          <span className="marquee-item">Chief Architect</span>
          <span className="marquee-item">Site Supervision</span>
          <span className="marquee-item">Construction Documents</span>
          <span className="marquee-item">3D Walkthroughs</span>
          <span className="marquee-item">Design Development</span>
          <span className="marquee-item">Spatial Planning</span>
          <span className="marquee-item">Architectural Visualization</span>
          <span className="marquee-item">Revit BIM</span>
          <span className="marquee-item">Lumion Rendering</span>
          <span className="marquee-item">AutoCAD Drafting</span>
          <span className="marquee-item">Blender 3D</span>
          <span className="marquee-item">Chief Architect</span>
          <span className="marquee-item">Site Supervision</span>
          <span className="marquee-item">Construction Documents</span>
          <span className="marquee-item">3D Walkthroughs</span>
          <span className="marquee-item">Design Development</span>
          <span className="marquee-item">Spatial Planning</span>
        </div>
      </div>

      {/* ══════════════════════════════════
         ABOUT
      ═══════════════════════════════════ */}
      <section className="about" id="about">
        <div className="about-grid">
          <div className="about-left reveal">
            <div className="about-portrait">
              <Image
                src="/images/ard - Copy.jpg"
                alt="Adekunle Emmanuel — Architect"
                width={800}
                height={1200}
              />
            </div>
            <p className="about-portrait-cap">Adekunle Emmanuel — Lagos, 2025</p>
          </div>

          <div className="about-right">
            <p className="section-eyebrow reveal">The Architect</p>
            <h2 className="about-headline reveal reveal-delay-1">
              Form follows<br />
              <em>function.</em><br />
              Always.
            </h2>
            <p className="about-body reveal reveal-delay-2">
              I am a graduate Architect and Visualizer based in Lagos, Nigeria, operating under the <strong>Archiplus</strong> brand. I hold a B.Sc. in Architecture from Adekunle Ajasin University and completed a six-month internship at <strong>RTC Construction Ltd</strong>  on Victoria Island — where design meets execution in one of Africa's most demanding construction markets.
            </p>
            <p className="about-body reveal reveal-delay-2">
              My practice sits at the intersection of architectural precision and photorealistic visualization. Every project I take on is approached the same way: understand the brief deeply, resolve the design rigorously, then render it so convincingly that a client can feel themselves inside the space before a single brick is laid.
            </p>
            <p className="about-body reveal reveal-delay-3">
              Grounded in masonry training and live site supervision, I bring a <strong>buildability-first mindset</strong> to design that most visualizers lack — understanding not just how a building looks, but how it stands.
            </p>
            <div className="about-actions reveal reveal-delay-4">
              <Link href="/cv" className="about-button">View CV</Link>
            </div>

            <div className="about-credentials reveal reveal-delay-3">
              <div className="cred">
                <div className="cred-val">B.Sc.</div>
                <div className="cred-lbl">Architecture — <strong>AAUA</strong></div>
              </div>
              <div className="cred">
                <div className="cred-val">RTC</div>
                <div className="cred-lbl">Victoria Island Internship</div>
              </div>
              <div className="cred">
                <div className="cred-val">7+</div>
                <div className="cred-lbl">Years in Practice; masonry training as the foundation</div>
              </div>
              <div className="cred">
                <div className="cred-val">10+</div>
                <div className="cred-lbl">Software Platforms</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
         SERVICES
      ═══════════════════════════════════ */}
      <section className="services" id="services">
        <div className="services-inner">
          <div className="services-header">
            <div>
              <p className="section-eyebrow reveal">Disciplines</p>
              <h2 className="services-headline reveal reveal-delay-1">
                What I<br />
                <em>deliver</em>
              </h2>
            </div>
            <p className="services-intro reveal reveal-delay-2">
              From the first concept sketch to the final construction document — and every render in between. Architecture practiced end-to-end, without compromise.
            </p>
          </div>

          <ul className="services-list">
            <li className="service-item reveal">
              <span className="service-num">01</span>
              <div className="service-content">
                <h3 className="service-title">Architectural Visualization</h3>
                <p className="service-desc">Photorealistic renders, animated walkthroughs, and immersive flyovers that communicate design intent with absolute clarity — before construction begins.</p>
                <div className="service-tags">
                  <span className="service-tag">Lumion</span>
                  <span className="service-tag">Blender</span>
                  <span className="service-tag">Chief Architect</span>
                  <span className="service-tag">3D Animation</span>
                </div>
              </div>
              <span className="service-arrow">↗</span>
            </li>
            <li className="service-item reveal reveal-delay-1">
              <span className="service-num">02</span>
              <div className="service-content">
                <h3 className="service-title">BIM Documentation &amp; Drafting</h3>
                <p className="service-desc">Coordinated Revit BIM models and full AutoCAD working drawing packages — floor plans, sections, elevations, and construction details to contractor standard.</p>
                <div className="service-tags">
                  <span className="service-tag">Revit BIM</span>
                  <span className="service-tag">AutoCAD</span>
                  <span className="service-tag">Construction Docs</span>
                  <span className="service-tag">Technical Drawings</span>
                </div>
              </div>
              <span className="service-arrow">↗</span>
            </li>
            <li className="service-item reveal reveal-delay-2">
              <span className="service-num">03</span>
              <div className="service-content">
                <h3 className="service-title">Design Development</h3>
                <p className="service-desc">Concept massing, spatial planning, material studies, and design iteration — from initial client brief through to a resolved scheme ready for documentation.</p>
                <div className="service-tags">
                  <span className="service-tag">Concept Design</span>
                  <span className="service-tag">Massing Studies</span>
                  <span className="service-tag">Spatial Planning</span>
                </div>
              </div>
              <span className="service-arrow">↗</span>
            </li>
            <li className="service-item reveal reveal-delay-3">
              <span className="service-num">04</span>
              <div className="service-content">
                <h3 className="service-title">Site Supervision &amp; Buildability</h3>
                <p className="service-desc">On-ground construction oversight grounded in masonry training and practical internship experience — ensuring what is drawn can actually be built.</p>
                <div className="service-tags">
                  <span className="service-tag">Site Supervision</span>
                  <span className="service-tag">Masonry</span>
                  <span className="service-tag">Buildability Review</span>
                </div>
              </div>
              <span className="service-arrow">↗</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ══════════════════════════════════
         WORK
      ═══════════════════════════════════ */}
      <section className="work" id="work">
        <div className="work-inner">
          <div className="work-header">
            <div>
              <p className="section-eyebrow reveal">Selected Work</p>
              <h2 className="work-headline reveal reveal-delay-1">
                The work<br />
                <em>speaks.</em>
              </h2>
            </div>
            <a href="#contact" className="work-view-all reveal">Commission a project →</a>
          </div>

          <div className="work-grid">
            <article className="work-card reveal">
              <Image
                className="work-card-img"
                src="/images/CV.jpg"
                alt="Lagos Mainland Residential Complex"
                width={1400}
                height={1000}
                loading="lazy"
              />
              <div className="work-card-overlay"></div>
              <div className="work-card-info">
                <div className="work-card-tag">Visualization · Lumion</div>
                <div className="work-card-title">Lagos Mainland<br />Residential Complex</div>
                <div className="work-card-year">2024 — Photography: want images of this work?....reach out.</div>
              </div>
            </article>

            <article className="work-card reveal reveal-delay-1">
              <Image
                className="work-card-img"
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
                alt="Mixed-Use Commercial Development"
                width={1200}
                height={800}
                loading="lazy"
              />
              <div className="work-card-overlay"></div>
              <div className="work-card-info">
                <div className="work-card-tag">Revit BIM · AutoCAD</div>
                <div className="work-card-title">Mixed-Use Commercial Development</div>
                <div className="work-card-year">2023</div>
              </div>
            </article>

            <article className="work-card reveal reveal-delay-2">
              <Image
                className="work-card-img"
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop"
                alt="Residential Interior Visualization"
                width={1200}
                height={800}
                loading="lazy"
              />
              <div className="work-card-overlay"></div>
              <div className="work-card-info">
                <div className="work-card-tag">Interior · Blender</div>
                <div className="work-card-title">Residential Interior Render</div>
                <div className="work-card-year">2024</div>
              </div>
            </article>

            <article className="work-card reveal reveal-delay-1">
              <Image
                className="work-card-img"
                src="/images/cons.png"
                alt="RTC Victoria Island Site Supervision"
                width={900}
                height={600}
                loading="lazy"
              />
              <div className="work-card-overlay"></div>
              <div className="work-card-info">
                <div className="work-card-tag">Site Supervision</div>
                <div className="work-card-title">RTC Victoria Island</div>
                <div className="work-card-year">2024</div>
              </div>
            </article>

            <article className="work-card reveal reveal-delay-2">
              <Image
                className="work-card-img"
                src="/images/int.jpg"
                alt="Luxury Villa Concept Design"
                width={1400}
                height={1000}
                loading="lazy"
              />
              <div className="work-card-overlay"></div>
              <div className="work-card-info">
                <div className="work-card-tag">Concept · Chief Architect</div>
                <div className="work-card-title">Luxury Villa Concept &amp; Visualization</div>
                <div className="work-card-year">2023</div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
         PROCESS
      ═══════════════════════════════════ */}
      <section className="process" id="process">
        <div className="process-inner">
          <p className="section-eyebrow reveal">How I Work</p>
          <h2 className="process-headline reveal reveal-delay-1">
            A method as<br />
            considered as<br />
            <em>the design itself.</em>
          </h2>

          <div className="process-steps">
            <div className="process-step reveal">
              <div className="step-num">01</div>
              <h3 className="step-title">Brief &amp; Discovery</h3>
              <p className="step-desc">Every project begins with listening. Understanding the programme, the site, the budget, and what success looks like before any lines are drawn.</p>
            </div>
            <div className="process-step reveal reveal-delay-1">
              <div className="step-num">02</div>
              <h3 className="step-title">Design &amp; Concept</h3>
              <p className="step-desc">Massing studies, spatial planning, and concept development iterated rapidly until the design resolves — with buildability considered from day one.</p>
            </div>
            <div className="process-step reveal reveal-delay-2">
              <div className="step-num">03</div>
              <h3 className="step-title">Visualization</h3>
              <p className="step-desc">Photorealistic renders and animated walkthroughs produced in Lumion, Blender, or Chief Architect — communicating the design so clients experience it before it exists.</p>
            </div>
            <div className="process-step reveal reveal-delay-3">
              <div className="step-num">04</div>
              <h3 className="step-title">Documentation &amp; Delivery</h3>
              <p className="step-desc">Full working drawing packages in Revit and AutoCAD — coordinated, dimensioned, and produced to planning submission and contractor standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
         CAPABILITIES STRIP
      ═══════════════════════════════════ */}
      <div className="caps" id="capabilities">
        <div className="caps-inner">
          <p className="section-eyebrow reveal" style={{ marginBottom: '40px' }}>Software &amp; Tools</p>
          <div className="caps-grid">
            <div className="cap-item reveal">
              <div className="cap-software">Lumion</div>
              <div className="cap-level">Expert</div>
              <div className="cap-bar"><div className="cap-bar-fill" style={{ width: '96%' }}></div></div>
            </div>
            <div className="cap-item reveal reveal-delay-1">
              <div className="cap-software">AutoCAD</div>
              <div className="cap-level">Expert</div>
              <div className="cap-bar"><div className="cap-bar-fill" style={{ width: '94%' }}></div></div>
            </div>
            <div className="cap-item reveal reveal-delay-2">
              <div className="cap-software">Revit</div>
              <div className="cap-level">Expert</div>
              <div className="cap-bar"><div className="cap-bar-fill" style={{ width: '92%' }}></div></div>
            </div>
            <div className="cap-item reveal reveal-delay-3">
              <div className="cap-software">Blender</div>
              <div className="cap-level">Advanced</div>
              <div className="cap-bar"><div className="cap-bar-fill" style={{ width: '86%' }}></div></div>
            </div>
            <div className="cap-item reveal reveal-delay-4">
              <div className="cap-software">Chief Architect</div>
              <div className="cap-level">Advanced</div>
              <div className="cap-bar"><div className="cap-bar-fill" style={{ width: '88%' }}></div></div>
            </div>
            <div className="cap-item reveal reveal-delay-4">
              <div className="cap-software">SketchUp</div>
              <div className="cap-level">Advanced</div>
              <div className="cap-bar"><div className="cap-bar-fill" style={{ width: '84%' }}></div></div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
         QUOTE
      ═══════════════════════════════════ */}
      <div className="quote-section">
        <div className="quote-mark reveal">"</div>
        <p className="quote-text reveal reveal-delay-1">
          Architecture is not about space and buildings. It is about event and movement.
        </p>
        <p className="quote-attr reveal reveal-delay-2">Bernard Tschumi — Architect</p>
      </div>

      {/* ══════════════════════════════════
         CONTACT
      ═══════════════════════════════════ */}
      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="contact-left">
            <p className="section-eyebrow reveal">Contact</p>
            <h2 className="contact-headline reveal reveal-delay-1">
              Let&apos;s build<br />
              <em>something</em><br />
              together.
            </h2>
            <p className="contact-body reveal reveal-delay-2">
              Available for architectural visualization commissions, BIM documentation, design consultations, and site supervision engagements across Lagos and beyond.
            </p>
            <ul className="contact-info reveal reveal-delay-2">
              <li>
                <span className="ci-label">Location</span>
                <span className="ci-val">Lagos, Nigeria</span>
              </li>
              <li>
                <span className="ci-label">Email</span>
                <span className="ci-val">adekunleolufemie@gmail.com</span>
              </li>
              <li>
                <span className="ci-label">Social</span>
                <span className="ci-val">@Archiplus</span>
              </li>
              <li>
                <span className="ci-label">Availability</span>
                <span className="ci-val">Open to projects</span>
              </li>
            </ul>
          </div>

          <div className="contact-right reveal reveal-delay-1">
            <form id="contactForm">
              <div className="form-row">
                <div className="form-field first">
                  <span className="form-label">Name</span>
                  <input type="text" name="name" placeholder="Your full name" required />
                </div>
                <div className="form-field first">
                  <span className="form-label">Email</span>
                  <input type="email" name="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="form-field">
                <span className="form-label">Project Type</span>
                <select name="type">
                  <option value="" disabled selected>Select a service...</option>
                  <option>Architectural Visualization</option>
                  <option>BIM / Revit Documentation</option>
                  <option>AutoCAD Drafting</option>
                  <option>Design Development</option>
                  <option>Site Supervision</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-field">
                <span className="form-label">Message</span>
                <textarea name="message" rows={6} placeholder="Tell me about your project — brief, timeline, budget..."></textarea>
              </div>
              <button type="submit" className="form-submit">Send Message →</button>
            </form>
            <div id="formSuccess" style={{ display: 'none', padding: '40px 0', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '28px', color: 'var(--ink)', fontStyle: 'italic' }}>Message received.</p>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '12px' }}>I&apos;ll be in touch within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
         FOOTER
      ═══════════════════════════════════ */}
      <footer>
        <div className="footer-brand">Archiplus<span>.</span></div>
        <ul className="footer-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <p className="footer-copy">© 2024 Archiplus · Lagos, Nigeria</p>
      </footer>
    </>
  );
}