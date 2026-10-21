import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Target, Users, ArrowRight, CheckCircle2, ShieldCheck, Building2, Sparkles, Quote, Award, Compass } from 'lucide-react';
import founderImg from './Images/founder.png';
import missionImg from './Images/mission.png';
import visionImg from './Images/vision.jpg';
import valuesImg from './Images/values.jpg';
import hqImg from './Images/hq.jpg';
import { useScrollReveal } from '../hooks/useScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';

export default function About() {
  useScrollReveal();
  return (
    <div className="inner-page">
      {/* 02. PAGE HEADER BANNER (Dark Navy with Building Silhouette) */}
      <section className="dark-page-banner">
        <div className="container">
          <h1 className="banner-title">About Enrally</h1>
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link> <span>/</span> <span className="current">About Us</span>
          </div>
        </div>
      </section>

      {/* SECTION 1: TRUSTED PARTNER (ENHANCED) */}
      <section className="about-overview-section">
        <div className="container">
          <div className="overview-split">
            <div className="overview-text" data-reveal="fade-right">
              <span className="overview-pre-badge">
                <Sparkles size={14} /> EXCELLENCE IN WORKFORCE & FACILITY CARE
              </span>
              <h2 className="section-heading accent-line-heading">
                A Trusted Partner for <span className="highlight-dark">Workforce and Facility Solutions</span>
              </h2>
              <p className="overview-paragraph">
                <strong>ENRALLY (OPC) PVT. LTD.</strong> is a leading professional facility management and manpower supply enterprise, providing reliable, compliant, and customized operational solutions across multiple industry sectors.
              </p>
              <p className="overview-subtext">
                We bridge the gap between complex organizational demands and skilled, verified field personnel. From corporate campuses and industrial plants to healthcare facilities and government utilities, we take complete ownership of your non-core facility operations with verified SLAs.
              </p>

              <div className="overview-highlights-grid" data-stagger>
                <div className="oh-item">
                  <CheckCircle2 size={18} color="#12BFD0" />
                  <span>100% Statutory Compliance (PF, ESIC & Labor Laws)</span>
                </div>
                <div className="oh-item">
                  <CheckCircle2 size={18} color="#12BFD0" />
                  <span>Vetted, Background-Verified & Trained Personnel</span>
                </div>
                <div className="oh-item">
                  <CheckCircle2 size={18} color="#12BFD0" />
                  <span>Rapid 72-Hour Deployment & Standby Replacements</span>
                </div>
                <div className="oh-item">
                  <CheckCircle2 size={18} color="#12BFD0" />
                  <span>Modern Equipment & Certified Eco-Safe Consumables</span>
                </div>
              </div>

              <div className="overview-actions-strip">
                <Link to="/services" className="btn-cyan-pill">
                  <span>Explore Our Services</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn-white-pill">
                  Request Facility Assessment
                </Link>
              </div>
            </div>

            <div className="overview-image-wrapper" data-reveal="fade-left">
              <div className="overview-building-frame">
                <img 
                  src={hqImg} 
                  alt="Enrally Modern Commercial Glass Headquarters"
                  className="overview-building-img" 
                />
                <div className="overview-gradient-overlay"></div>
                
                {/* Floating Assurance Pill */}
                <div className="overview-floating-card">
                  <div className="of-icon"><ShieldCheck size={24} color="#12BFD0" /></div>
                  <div>
                    <strong>Pan India Operations</strong>
                    <p>Serving Corporate, Industrial & Gov Projects</p>
                  </div>
                </div>

                <div className="overview-stat-pill">
                  <strong><AnimatedCounter target={2500} suffix="+" /></strong>
                  <span>Active Deployments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FOUNDER'S NOTE & MESSAGE */}
      <section className="founder-note-section" data-reveal="fade-up">
        <div className="container">
          <div className="founder-note-card">
            {/* Animated Multi-Layer Glow Orbs */}
            <div className="founder-ambient-glow orb-cyan"></div>
            <div className="founder-ambient-glow orb-navy"></div>
            <div className="founder-card-mesh-bg"></div>

            <div className="founder-message-pane">
              <div className="founder-badge-row">
                <span className="founder-badge">
                  <span className="founder-badge-dot"></span>
                  <Sparkles size={14} className="sparkle-cyan-icon" />
                  <span>FOUNDER & MANAGING DIRECTOR'S MESSAGE</span>
                </span>
              </div>

              <h2 className="founder-title">
                Leading with Purpose, <br className="hide-mobile" />
                <span className="text-cyan-gradient">Driven by Excellence</span>
              </h2>
              
              <div className="founder-paragraphs">
                <p className="founder-lead-para">
                  From the very beginning, our vision has been clear: to redefine what it means to excel in enterprise workforce supply and facility management across India. Today, as we stand on the cusp of an ambitious new chapter, I am proud to say that we have stayed true to that vision.
                </p>
                <p>
                  In the dynamic landscape of industrial staffing and multi-disciplinary facility operations, challenges will undoubtedly arise. But let us always remember that with challenge comes opportunity — an opportunity to innovate, to elevate statutory compliance, and to emerge stronger than ever before.
                </p>
                <p>
                  As we scale across pan-India projects, our core pillars remain uncompromised: <strong>integrity</strong>, <strong>collaboration</strong>, and an <strong>unrelenting pursuit of operational excellence</strong>. These values are the bedrock upon which ENRALLY is built.
                </p>

                {/* Animated Glassmorphic Pull Quote Callout */}
                <div className="founder-quote-callout">
                  <div className="callout-light-bar"></div>
                  <Quote size={28} className="founder-quote-mark" />
                  <p className="founder-closing">
                    "Together with our dedicated supervisors and verified personnel on the ground, there is no limit to the benchmark of service we can achieve for our partners."
                  </p>
                </div>

                {/* Leadership Key Milestones / Chips */}
                <div className="founder-milestones-row">
                  <div className="milestone-chip">
                    <span className="chip-digit">100%</span>
                    <span className="chip-label">Audited EPF & ESIC</span>
                  </div>
                  <div className="milestone-chip">
                    <span className="chip-digit">Pan-India</span>
                    <span className="chip-label">Rapid Deployment</span>
                  </div>
                  <div className="milestone-chip">
                    <span className="chip-digit">24/7</span>
                    <span className="chip-label">Operations Control</span>
                  </div>
                </div>
              </div>

              <div className="founder-signoff">
                <div className="founder-sign-seal">
                  <Award size={22} className="seal-icon-cyan" />
                </div>
                <div className="founder-name-tag">
                  <strong>Founder & Managing Director</strong>
                  <span>ENRALLY (OPC) PVT. LTD.</span>
                  <small>CIN: U78300KA2024OPC183145</small>
                </div>
              </div>
            </div>

            <div className="founder-photo-pane">
              <div className="founder-photo-stage">
                {/* Rotating Cyber-Halo Ring */}
                <div className="founder-cyber-ring"></div>
                <div className="founder-cyber-ring-outer"></div>

                <div className="founder-photo-frame">
                  <div className="founder-frame-ambient-curtain"></div>
                  <img src={founderImg} alt="Founder & Managing Director, Enrally" className="founder-img" />
                  <div className="founder-sheen-line"></div>
                </div>

                {/* Floating Authenticated Credential Badge */}
                <div className="founder-float-credential">
                  <span className="credential-pulse"></span>
                  <div className="credential-text">
                    <strong>Leadership & Integrity</strong>
                    <span>Executive Board of Directors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: COMPANY VISION (DEDICATED SECTION) */}
      <section className="vision-standalone-section" data-reveal="fade-up">
        <div className="container">
          <div className="standalone-vm-card vision-card">
            {/* Ambient Background Glow & Mesh */}
            <div className="vm-card-mesh-bg"></div>
            <div className="vm-ambient-orb vision-orb"></div>

            <div className="standalone-vm-grid">
              {/* Leader Photo Column with Rotating Halo */}
              <div className="vm-figure-col">
                <div className="vm-photo-stage">
                  <div className="vm-cyber-ring"></div>
                  <div className="vm-photo-cutout">
                    <div className="vm-cutout-glow"></div>
                    <img src={visionImg} alt="Enrally Vision Leader" className="vm-person-img" />
                    <div className="vm-sheen-line"></div>
                  </div>
                  <div className="vm-float-tag vision-tag">
                    <Target size={14} className="tag-icon-cyan" />
                    <span>Future Horizon</span>
                  </div>
                </div>
              </div>

              {/* Vision Content Column */}
              <div className="vm-content-col">
                <div className="vm-header-pill">
                  <span className="vm-pill-dot"></span>
                  <span className="vm-super-label">Strategic Blueprint</span>
                </div>

                <div className="vm-badge vision-badge">
                  <Target size={16} />
                  <span>Our Vision</span>
                </div>

                <h2 className="vm-section-title">
                  Setting Pan-India Benchmarks in <br className="hide-mobile" />
                  <span className="text-cyan-gradient">Operational Reliability</span>
                </h2>

                <p className="vm-lead-intro">
                  At <strong>ENRALLY (OPC) PVT. LTD.</strong>, our vision revolves around providing world-class workforce deployment and facility management while maintaining 100% statutory transparency, continuous innovation, and measurable client satisfaction across all operational sites:
                </p>

                <blockquote className="vm-quote-block">
                  <div className="vm-quote-bar"></div>
                  <Quote size={24} className="vm-quote-icon" />
                  <span>
                    "To be the premier partner of choice for industrial, corporate, and renewable infrastructure staffing across India — establishing unparalleled benchmarks in workforce dignity, safety, uptime, and transparent statutory compliance."
                  </span>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: COMPANY MISSION (DEDICATED SECTION) */}
      <section className="mission-standalone-section" data-reveal="fade-up">
        <div className="container">
          <div className="standalone-vm-card mission-card">
            {/* Ambient Background Glow & Mesh */}
            <div className="vm-card-mesh-bg"></div>
            <div className="vm-ambient-orb mission-orb"></div>

            <div className="standalone-vm-grid mission-grid-flow">
              {/* Mission Content Column */}
              <div className="vm-content-col">
                <div className="vm-header-pill">
                  <span className="vm-pill-dot mission-dot"></span>
                  <span className="vm-super-label">Core Purpose</span>
                </div>

                <div className="vm-badge mission-badge">
                  <Compass size={16} />
                  <span>Our Mission</span>
                </div>

                <h2 className="vm-section-title">
                  Delivering Excellence with <br className="hide-mobile" />
                  <span className="text-cyan-gradient">Integrity & Precision</span>
                </h2>

                <p className="vm-text-body">
                  Our mission is to engineer tailored staffing and facility maintenance ecosystems that empower our clients to operate with zero downtime. We are committed to:
                </p>

                <div className="vm-mission-pillars">
                  <div className="vm-m-pill" style={{ '--pill-delay': '0s' }}>
                    <div className="pill-check-circle">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <strong>100% Statutory Compliance:</strong>
                      <p>Guaranteed monthly challans for EPF, ESIC & Minimum Wages.</p>
                    </div>
                  </div>
                  <div className="vm-m-pill" style={{ '--pill-delay': '0.1s' }}>
                    <div className="pill-check-circle">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <strong>Rapid Mobilization:</strong>
                      <p>48–72 hour deployment with verified standby bench reserves.</p>
                    </div>
                  </div>
                  <div className="vm-m-pill" style={{ '--pill-delay': '0.2s' }}>
                    <div className="pill-check-circle">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <strong>Quality Oversight:</strong>
                      <p>Dedicated Key Account Managers and digitized SLA audits.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Photo Column with Rotating Cyber Halo */}
              <div className="vm-figure-col">
                <div className="vm-photo-stage team-stage">
                  <div className="vm-cyber-ring team-ring"></div>
                  <div className="vm-photo-cutout team-cutout">
                    <div className="vm-cutout-glow"></div>
                    <img src={missionImg} alt="Enrally Professional Team" className="vm-team-img" />
                    <div className="vm-sheen-line"></div>
                  </div>
                  <div className="vm-float-tag team-tag">
                    <ShieldCheck size={14} className="tag-icon-cyan" />
                    <span>Certified Ground Crew</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR VALUES SECTION (WITH GENERATED VALUES PHOTO) */}
      <section className="values-showcase-section">
        <div className="container">
          <div className="values-showcase-card">
            <div className="values-header-area">
              <span className="values-sub-badge">WHAT WE STAND FOR</span>
              <h2 className="values-showcase-title">Our Core Values</h2>
              <p className="values-showcase-intro">
                Our culture is grounded in trust, accountability, and a shared ambition to deliver spotless, safe, and efficient facility operations across all client sites.
              </p>
            </div>

            <div className="values-banner-wrapper">
              <img src={valuesImg} alt="Enrally Team Standing in Unity for Core Values" className="values-banner-img" />
              <div className="values-banner-overlay"></div>
            </div>

            <div className="values-pillars-quad">
              <div className="value-pillar-card">
                <div className="pillar-num">01</div>
                <h3>Quality & Excellence</h3>
                <p>Unyielding standards of cleanliness, safety, and operational rigor backed by regular audits.</p>
              </div>

              <div className="value-pillar-card">
                <div className="pillar-num">02</div>
                <h3>Reliability & Uptime</h3>
                <p>On-demand staff deployment and 99.8% statutory compliance so you never face operational bottlenecks.</p>
              </div>

              <div className="value-pillar-card">
                <div className="pillar-num">03</div>
                <h3>Professionalism & Dignity</h3>
                <p>Fair living wages, biometric background verification, and continuous grooming for our workforce.</p>
              </div>

              <div className="value-pillar-card">
                <div className="pillar-num">04</div>
                <h3>Customer Satisfaction</h3>
                <p>Transparent SLA tracking, dedicated account directors, and flexible customized service agreements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: STATUTORY ACCREDITATIONS & CORPORATE DISCLOSURES */}
      <section className="about-compliance-section">
        <div className="container">
          <div className="compliance-card-banner">
            <div className="compliance-text-pane">
              <span className="overview-pre-badge">
                <ShieldCheck size={14} /> STATUTORY COMPLIANCE ASSURANCE
              </span>
              <h2>Registered, Audited & Fully Compliant</h2>
              <p>
                Operating with complete legal and corporate integrity. We uphold strict adherence to the Companies Act, Private Security Agencies Regulation Act (PSARA), and Ministry of Labour guidelines.
              </p>

              <div className="compliance-grid-details">
                <div className="comp-item">
                  <strong>CIN (Corporate Identity Number)</strong>
                  <span className="cin-code-tag">U78300KA2024OPC183145</span>
                </div>
                <div className="comp-item">
                  <strong>Quality Certification</strong>
                  <span>ISO 9001:2015 Standards</span>
                </div>
                <div className="comp-item">
                  <strong>Social Security Coverage</strong>
                  <span>100% EPF, ESIC & Workmen Compensation</span>
                </div>
                <div className="comp-item">
                  <strong>Registered Office</strong>
                  <span>Hagaribommanahalli, Bellary, Karnataka - 583212</span>
                </div>
              </div>
            </div>

            <div className="compliance-seal-pane">
              <div className="seal-circle-badge">
                <ShieldCheck size={48} color="#009cb8" />
                <span className="seal-title">100% AUDITED</span>
                <span className="seal-sub">Labor Law Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: READY TO TRANSFORM YOUR FACILITY CTA */}
      <section className="testimonials-cta-section">
        <div className="container">
          <div className="testimonials-cta-card">
            <div className="t-cta-left">
              <span className="t-cta-badge">
                <Sparkles size={14} /> COMMITTED TO EXCELLENCE
              </span>
              <h2 className="t-cta-title">
                Experience Professional <span className="t-cta-highlight">Workforce & Facility Care</span>
              </h2>
              <p className="t-cta-desc">
                Partner with an organization that values reliability, quality, and statutory transparency. Contact our facility operations directors today.
              </p>

              <div className="t-cta-features-strip">
                <div className="tcf-item">
                  <CheckCircle2 size={16} color="#38bdf8" />
                  <span>Free Operational Survey</span>
                </div>
                <div className="tcf-item">
                  <CheckCircle2 size={16} color="#38bdf8" />
                  <span>SLA Guarantee</span>
                </div>
                <div className="tcf-item">
                  <CheckCircle2 size={16} color="#38bdf8" />
                  <span>Ready Standby Bench</span>
                </div>
              </div>
            </div>

            <div className="t-cta-right">
              <div className="t-cta-action-box">
                <Link to="/contact" className="btn-cta-primary">
                  <span>Schedule Site Assessment</span>
                  <ArrowRight size={17} />
                </Link>
                
                <div className="t-cta-or-divider">
                  <span>or call direct desk</span>
                </div>

                <a href="tel:+918277611643" className="btn-cta-secondary">
                  <span className="call-icon-dot"></span>
                  <span>Call +91 82776 11643</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
