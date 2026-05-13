'use client';

export default function CVPage() {
  return (
    <div className="cv-shell">
      <div className="printbar">
        <button type="button" className="btn-pdf" onClick={() => window.print()}>Save as PDF →</button>
      </div>

      <div className="page">
        <header className="cv-head">
          <div className="head-top">
            <div>
              <div className="head-name">Adekunle Emmanuel<span>.</span></div>
            </div>
            <div className="head-creds">
              <div className="head-title">Architect &amp; Visualizer</div>
              <div className="head-reg">
                B.Sc. Architecture — AAUA, 2024<br />
                Lagos, Nigeria
              </div>
            </div>
          </div>
          <div className="head-contacts">
            <div className="hc-item">Lagos, Nigeria</div>
            <div className="hc-item">Adekunleolufemie@gmail.com</div>
            <div className="hc-item">+234 706 491 6131</div>
            <div className="hc-item">www.linkedin.com/in/adekunle-olufemie</div>
            <div className="hc-item">Open to relocation &amp; remote</div>
          </div>
        </header>

        <div className="cv-body">
          <aside className="cv-side">
            <div className="side-sec">
              <div className="side-head">At a Glance</div>
              <div className="kn-grid">
                <div className="kn">
                  <div className="kn-val">4+</div>
                  <div className="kn-lbl">Years in Practice</div>
                </div>
                <div className="kn">
                  <div className="kn-val"></div>
                  <div className="kn-lbl">B.Sc. Arch AAUA</div>
                </div>
                <div className="kn">
                  <div className="kn-val">VI</div>
                  <div className="kn-lbl">Internship @ RTC</div>
                </div>
                <div className="kn">
                  <div className="kn-val">3D</div>
                  <div className="kn-lbl">Render Expert</div>
                </div>
              </div>
            </div>

            <div className="side-sec">
              <div className="side-head">Architecture Software</div>
              <ul className="skill-list">
                <li>Autodesk Revit
                  <div className="skill-dot"><div className="dot on"></div><div className="dot on"></div><div className="dot on"></div><div className="dot on"></div><div className="dot on"></div></div>
                </li>
                <li>AutoCAD
                  <div className="skill-dot"><div className="dot on"></div><div className="dot on"></div><div className="dot on"></div><div className="dot on"></div><div className="dot on"></div></div>
                </li>
                <li>Lumion
                  <div className="skill-dot"><div className="dot on"></div><div className="dot on"></div><div className="dot on"></div><div className="dot on"></div><div className="dot on"></div></div>
                </li>
                <li>Blender 3D
                  <div className="skill-dot"><div className="dot on"></div><div className="dot on"></div><div className="dot on"></div><div className="dot on"></div><div className="dot"></div></div>
                </li>
                <li>Chief Architect
                  <div className="skill-dot"><div className="dot on"></div><div className="dot on"></div><div className="dot on"></div><div className="dot on"></div><div className="dot"></div></div>
                </li>
                <li>SketchUp
                  <div className="skill-dot"><div className="dot on"></div><div className="dot on"></div><div className="dot on"></div><div className="dot on"></div><div className="dot"></div></div>
                </li>
                <li>V-Ray / Enscape
                  <div className="skill-dot"><div className="dot on"></div><div className="dot on"></div><div className="dot on"></div><div className="dot"></div><div className="dot"></div></div>
                </li>
              </ul>
            </div>

            <div className="side-sec">
              <div className="side-head">Architecture Skills</div>
              <div className="tag-wrap">
                <span className="tag">BIM Modelling</span>
                <span className="tag">3D Visualization</span>
                <span className="tag">Architectural Rendering</span>
                <span className="tag">Walkthrough Animation</span>
                <span className="tag">Construction Drawings</span>
                <span className="tag">Site Supervision</span>
                <span className="tag">Design Development</span>
                <span className="tag">Massing Studies</span>
                <span className="tag">Technical Drawings</span>
                <span className="tag">Spatial Planning</span>
                <span className="tag">Client Presentations</span>
                <span className="tag">Project Documentation</span>
              </div>
            </div>

            <div className="side-sec">
              <div className="side-head">Supporting Tools</div>
              <div className="tag-wrap">
                <span className="tag">Adobe Photoshop</span>
                <span className="tag">Adobe Illustrator</span>
                <span className="tag">Figma</span>
                <span className="tag">Microsoft Office</span>
              </div>
            </div>

            <div className="side-sec">
              <div className="side-head">Education</div>
              <div className="edu">
                <div className="edu-deg">B.Sc. Architecture</div>
                <div className="edu-sch">Adekunle Ajasin University<br />Akungba-Akoko, Ondo State</div>
                <div className="edu-yr">2021 – 2025</div>
              </div>
              <div className="rule"></div>
              <div className="edu">
                <div className="edu-deg">Masonry &amp; Structural Training</div>
                <div className="edu-sch">Vocational / Field Training — Nigeria</div>
                <div className="edu-yr">2021</div>
              </div>
            </div>

            <div className="side-sec">
              <div className="side-head">Languages</div>
              <ul className="skill-list">
                <li>English <div className="skill-dot"><div className="dot on"></div><div className="dot on"></div><div className="dot on"></div><div className="dot on"></div><div className="dot on"></div></div></li>
                <li>Yoruba <div className="skill-dot"><div className="dot on"></div><div className="dot on"></div><div className="dot on"></div><div className="dot on"></div><div className="dot on"></div></div></li>
              </ul>
            </div>
          </aside>

          <main className="cv-main">
            <div className="sec">
              <div className="sec-head">Professional Profile</div>
              <p className="summary-text">
                Architectural graduate and practising designer with a B.Sc. in Architecture from Adekunle Ajasin University (2025) and six months of hands-on internship experience at RTC Construction Ltd on Victoria Island, Lagos. Specialises in hyper-realistic 3D architectural visualization using Lumion, Blender, and Chief Architect, alongside production-grade BIM documentation in Revit and AutoCAD. Grounded by masonry training and direct site supervision experience, bringing a buildability-first approach to every design and drawing delivered.
              </p>
            </div>

            <div className="sec">
              <div className="sec-head">Professional Experience</div>

              <div className="exp">
                <div className="exp-row">
                  <div className="exp-role">Architectural Designer &amp; Visualizer</div>
                  <div className="exp-date">2024 – Present</div>
                </div>
                <div className="exp-org">Archiplus · Lagos, Nigeria</div>
                <ul className="bullets">
                  <li>Produce hyper-realistic architectural renders, animated walkthroughs, and 3D flyovers for residential and commercial clients using <strong>Lumion</strong>, <strong>Blender</strong>, and <strong>Chief Architect</strong>, enabling client sign-off and investor presentations before construction begins.</li>
                  <li>Develop coordinated <strong>Revit BIM models</strong> and full <strong>AutoCAD</strong> working drawing packages — floor plans, sections, elevations, and construction details — produced to contractor and planning submission standards.</li>
                  <li>Prepare 3D massing studies, concept visualizations, and material mood boards during design development to support client decision-making and project approvals.</li>
                  <li>Conduct design quality reviews of construction documentation, identifying drawing clashes, specification gaps, and buildability issues prior to issue for tender.</li>
                  <li>Deliver complete client presentation packages combining rendered visuals, technical drawings, and design narratives for residential and commercial briefs.</li>
                </ul>
              </div>

              <div className="rule"></div>

              <div className="exp">
                <div className="exp-row">
                  <div className="exp-role">Architectural Intern</div>
                  <div className="exp-date">May – Oct 2024</div>
                </div>
                <div className="exp-org">RTC Construction Ltd · Victoria Island, Lagos</div>
                <ul className="bullets">
                  <li>Assisted in <strong>on-site supervision</strong> of active construction projects on Victoria Island, verifying that structural execution matched approved architectural drawings and specifications.</li>
                  <li>Supported production of <strong>construction-phase drawings</strong> and site documentation using <strong>AutoCAD</strong>, contributing to on-time project delivery for the design team.</li>
                  <li>Conducted <strong>buildability reviews</strong> of architectural documentation — identifying drawing clashes and material inconsistencies before site deployment, reducing rework risk.</li>
                  <li>Coordinated with structural engineers, quantity surveyors, and contractors across live project environments, developing strong cross-discipline communication skills.</li>
                  <li>Applied <strong>masonry training</strong> in practical site assessments of structural integrity, earthwork execution, and material quality — providing a technical grounding for design decisions.</li>
                </ul>
              </div>

              <div className="rule"></div>

              <div className="exp">
                <div className="exp-row">
                  <div className="exp-role">Architectural Visualizer — Freelance</div>
                  <div className="exp-date">2022 – 2024</div>
                </div>
                <div className="exp-org">Independent Practice · Lagos &amp; Remote</div>
                <ul className="bullets">
                  <li>Delivered photorealistic architectural renders, 3D walkthroughs, and design presentation packages for residential and mixed-use projects using <strong>Lumion</strong>, <strong>Blender</strong>, and <strong>Chief Architect</strong>.</li>
                  <li>Produced interior visualization, daylighting studies, and material palettes for client-facing presentations and pre-approval design reviews.</li>
                  <li>Developed spatial planning concepts and 3D massing studies from initial client briefs through to final presentation-ready renders.</li>
                </ul>
              </div>
            </div>

            <div className="sec">
              <div className="sec-head">Notable Projects</div>

              <div className="exp">
                <div className="exp-row">
                  <div className="exp-role">Lagos Mainland Residential Complex</div>
                  <div className="exp-date">2024</div>
                </div>
                <div className="exp-org">Architectural Visualization · Lumion &amp; Blender</div>
                <ul className="bullets">
                  <li>Delivered a full photorealistic walkthrough animation and static render set for a multi-unit residential complex in Lagos — used directly in the client's investor presentation and pre-sale campaign before groundbreak.</li>
                </ul>
              </div>

              <div className="rule"></div>

              <div className="exp">
                <div className="exp-row">
                  <div className="exp-role">Mixed-Use Commercial Development</div>
                  <div className="exp-date">2025</div>
                </div>
                <div className="exp-org">3D Visualization &amp; BIM Documentation · Revit / AutoCAD / Lumion</div>
                <ul className="bullets">
                  <li>Produced coordinated Revit BIM model, full AutoCAD working drawing set, and Lumion visualization package for a mixed-use commercial brief — covering design development through to tender documentation.</li>
                </ul>
              </div>
            </div>

            <div className="sec">
              <div className="sec-head">Core Competencies</div>
              <div className="tag-wrap">
                <span className="tag">Architectural Design</span>
                <span className="tag">BIM / Revit Modelling</span>
                <span className="tag">3D Architectural Visualization</span>
                <span className="tag">AutoCAD Technical Drafting</span>
                <span className="tag">Lumion Rendering &amp; Animation</span>
                <span className="tag">Construction Documentation</span>
                <span className="tag">Site Supervision</span>
                <span className="tag">Design Development</span>
                <span className="tag">Client Presentation</span>
                <span className="tag">Spatial Planning</span>
                <span className="tag">Sustainable Design Awareness</span>
                <span className="tag">Nigerian Building Codes</span>
                <span className="tag">Project Coordination</span>
                <span className="tag">Quantity Survey Support</span>
              </div>
            </div>
          </main>
        </div>

        <div className="cv-foot">
          <span>Adekunle Emmanuel &nbsp;·&nbsp; <strong>Architect &amp; Visualizer</strong></span>
          <span>adekunleolufemie@gmail.com &nbsp;·&nbsp; Lagos, Nigeria</span>
          <span>References on request</span>
        </div>
      </div>

      <style jsx global>{`
        .cv-shell {
          min-height: 100vh;
          background: #e8e4de;
          padding: 40px 20px 60px;
          display: flex;
          justify-content: center;
        }
        .printbar {
          width: 720px;
          max-width: 100%;
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          margin-bottom: 18px;
        }
        .btn-pdf {
          font-family: var(--sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 9px 20px;
          border: none;
          cursor: pointer;
          background: #8b1a1a;
          color: white;
        }
        .btn-pdf:hover { background: #6e1414; }
        .page {
          width: 720px;
          max-width: 100%;
          background: white;
          box-shadow: 0 4px 48px rgba(0,0,0,0.13);
        }
        .cv-head {
          padding: 44px 52px 36px;
          border-bottom: 2.5px solid #111111;
        }
        .head-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 22px;
        }
        .head-name {
          font-family: 'Cormorant', Georgia, serif;
          font-size: 42px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.3px;
          color: #111111;
        }
        .head-name span { color: #8b1a1a; }
        .head-creds {
          text-align: right;
          flex-shrink: 0;
        }
        .head-title {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #8b1a1a;
          margin-bottom: 5px;
        }
        .head-reg {
          font-size: 11px;
          color: #777777;
          font-weight: 400;
          line-height: 1.7;
        }
        .head-contacts {
          display: flex;
          flex-wrap: wrap;
          gap: 4px 0;
          border-top: 1px solid #ddd9d2;
          padding-top: 14px;
          font-size: 11.5px;
          color: #444444;
        }
        .hc-item {
          display: flex;
          align-items: center;
          gap: 6px;
          padding-right: 20px;
        }
        .hc-item::before {
          content: '';
          width: 3px;
          height: 3px;
          background: #8b1a1a;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .cv-body {
          display: grid;
          grid-template-columns: 200px 1fr;
        }
        .cv-side {
          background: #f6f4f1;
          padding: 32px 24px;
          border-right: 1px solid #ddd9d2;
        }
        .cv-main {
          padding: 32px 40px;
        }
        .sec {
          margin-bottom: 30px;
        }
        .sec:last-child { margin-bottom: 0; }
        .sec-head {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #8b1a1a;
          margin-bottom: 12px;
          padding-bottom: 7px;
          border-bottom: 1px solid #ddd9d2;
        }
        .summary-text {
          font-family: 'Cormorant', Georgia, serif;
          font-size: 15px;
          line-height: 1.75;
          color: #444444;
          font-style: italic;
          border-left: 2.5px solid #8b1a1a;
          padding-left: 14px;
        }
        .exp { margin-bottom: 22px; }
        .exp:last-child { margin-bottom: 0; }
        .exp-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 2px;
        }
        .exp-role {
          font-family: 'Cormorant', Georgia, serif;
          font-size: 15.5px;
          font-weight: 700;
          color: #111111;
          line-height: 1.2;
        }
        .exp-date {
          font-size: 10px;
          font-weight: 600;
          color: #8b1a1a;
          white-space: nowrap;
          letter-spacing: 0.05em;
        }
        .exp-org {
          font-size: 11px;
          font-weight: 600;
          color: #777777;
          letter-spacing: 0.04em;
          margin-bottom: 9px;
          text-transform: uppercase;
        }
        .bullets {
          list-style: none;
          padding: 0;
        }
        .bullets li {
          font-size: 12.5px;
          line-height: 1.65;
          color: #444444;
          padding-left: 14px;
          position: relative;
          margin-bottom: 4px;
        }
        .bullets li::before {
          content: '–';
          position: absolute;
          left: 0;
          color: #8b1a1a;
          font-weight: 700;
        }
        .rule {
          height: 1px;
          background: #ddd9d2;
          margin: 18px 0;
        }
        .side-sec { margin-bottom: 24px; }
        .side-sec:last-child { margin-bottom: 0; }
        .side-head {
          font-size: 8.5px;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #8b1a1a;
          margin-bottom: 10px;
          padding-bottom: 6px;
          border-bottom: 1px solid #ddd9d2;
        }
        .skill-list { list-style: none; }
        .skill-list li {
          font-size: 12px;
          line-height: 1;
          color: #444444;
          padding: 5px 0;
          border-bottom: 1px solid #ddd9d2;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .skill-list li:last-child { border-bottom: none; }
        .skill-dot {
          display: flex;
          gap: 3px;
          flex-shrink: 0;
        }
        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ddd9d2;
        }
        .dot.on { background: #8b1a1a; }
        .edu { margin-bottom: 14px; }
        .edu:last-child { margin-bottom: 0; }
        .edu-deg {
          font-size: 12.5px;
          font-weight: 600;
          color: #111111;
          line-height: 1.3;
        }
        .edu-sch {
          font-size: 11px;
          color: #777777;
          margin-top: 2px;
          line-height: 1.5;
        }
        .edu-yr {
          font-size: 10px;
          font-weight: 600;
          color: #8b1a1a;
          margin-top: 2px;
          letter-spacing: 0.05em;
        }
        .kn-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        .kn {
          border: 1px solid #ddd9d2;
          padding: 8px;
          text-align: center;
        }
        .kn-val {
          font-family: 'Cormorant', Georgia, serif;
          font-size: 22px;
          font-weight: 700;
          color: #8b1a1a;
          line-height: 1;
        }
        .kn-lbl {
          font-size: 8.5px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #777777;
          margin-top: 4px;
          line-height: 1.3;
        }
        .tag-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }
        .tag {
          font-size: 10px;
          font-weight: 500;
          color: #444444;
          background: white;
          border: 1px solid #ddd9d2;
          padding: 3px 8px;
          letter-spacing: 0.02em;
        }
        .cv-foot {
          border-top: 2.5px solid #111111;
          padding: 14px 52px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #111111;
        }
        .cv-foot span {
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
        }
        .cv-foot strong { color: rgba(255,255,255,0.75); }
        @media print {
          .cv-shell { background: white; padding: 0; }
          .printbar { display: none; }
          .page { box-shadow: none; width: 100%; max-width: 100%; }
          @page { margin: 0; size: A4; }
        }
        @media (max-width: 620px) {
          .cv-shell { padding: 20px 12px 40px; }
          .page { width: 100%; }
          .cv-body { grid-template-columns: 1fr; }
          .cv-side { border-right: none; border-bottom: 1px solid #ddd9d2; padding: 24px 28px; }
          .cv-head { padding: 32px 28px 24px; }
          .head-name { font-size: 32px; }
          .head-top { flex-direction: column; gap: 10px; }
          .head-creds { text-align: left; }
          .cv-main { padding: 24px 28px; }
          .cv-foot { padding: 14px 28px; flex-direction: column; gap: 4px; text-align: center; }
        }
      `}</style>
    </div>
  );
}
