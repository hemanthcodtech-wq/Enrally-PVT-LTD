import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Target, Users, ArrowRight, CheckCircle2, ShieldCheck, Building2, Sparkles } from 'lucide-react';
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
            <div className="founder-message-pane">
              <span className="founder-badge">FOUNDER & MANAGING DIRECTOR'S MESSAGE</span>
              <h3 className="founder-title">Leading with Purpose, Driven by Excellence</h3>
              
              <div className="founder-paragraphs">
                <p>
                  From the very beginning, our vision has been clear: to redefine what it means to excel in specialties management. Today, as we stand on the cusp of a new chapter, I am proud to say that we have stayed true to that vision. Each one of you has played an integral role in bringing us to this point, and I have every confidence that together, we will continue to push boundaries and surpass expectations.
                </p>
                <p>
                  In the dynamic landscape of specialties management, challenges will undoubtedly arise. But let us always remember that with challenge comes opportunity – an opportunity to learn, to grow, and to emerge stronger than ever before. Let us embrace these opportunities with open minds and courageous hearts, knowing that they are the building blocks of our success.
                </p>
                <p>
                  As we move forward, let us never lose sight of our values – integrity, collaboration, and a relentless pursuit of excellence. These values are the foundation upon which our company is built, and they will guide us through both triumphs and tribulations.
                </p>
                <p>
                  I am honored to lead such a talented and dedicated team, and I am inspired by the passion and determination that each of you brings to your work every day. Together, there is no limit to what we can achieve.
                </p>
                <p className="founder-closing">
                  Thank you for your unwavering commitment to our company and our vision. Here's to a future filled with growth, success, and endless possibilities.
                </p>
              </div>

              <div className="founder-signoff">
                <div className="founder-name-tag">
                  <strong>Founder & Managing Director</strong>
                  <span>ENRALLY (OPC) PVT. LTD.</span>
                </div>
              </div>
            </div>

            <div className="founder-photo-pane">
              <div className="founder-photo-frame">
                <img src={founderImg} alt="Founder & Managing Director, Enrally" className="founder-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: COMPANY VISION & MISSION (Pixel Matched to Reference Poster) */}
      <section className="vm-graphic-section">
        <div className="container">
          <div className="vm-poster-card">
            {/* Header Title with abstract background accent */}
            <div className="vm-poster-header">
              <span className="vm-super-label">Company</span>
              <h2 className="vm-poster-title">Vision & Mission</h2>
            </div>

            {/* Vision Block: Leader on left, Vision content on right */}
            <div className="vm-row vision-row">
              <div className="vm-figure-col">
                <div className="vm-photo-cutout">
                  <img src={visionImg} alt="Enrally Vision Leader" className="vm-person-img" />
                </div>
              </div>

              <div className="vm-content-col">
                <div className="vm-badge vision-badge">Vision</div>
                <p className="vm-lead-intro">
                  A <strong>ENRALLY (OPC) PVT. LTD.</strong>'s vision typically revolves around providing exceptional cleaning services while ensuring customer satisfaction, fostering a clean and healthy environment, and contributing positively to the community. Here's an example of a housekeeping company vision statement:
                </p>
                <blockquote className="vm-quote-block">
                  "Our vision is to be the leading provider of professional cleaning services, setting the standard for excellence in cleanliness, reliability, and customer satisfaction. We aim to create clean and healthy environments that enhance the well-being and productivity of our clients. Through our commitment to quality, integrity, and innovation, we strive to exceed expectations, build lasting relationships, and make a positive impact on the communities we serve."
                </blockquote>
              </div>
            </div>

            {/* Mission Block: Mission content on left, Team on right */}
            <div className="vm-row mission-row">
              <div className="vm-content-col">
                <div className="vm-badge mission-badge">Mission</div>
                <p className="vm-text-body">
                  At <strong>ENRALLY (OPC) PVT. LTD.</strong>, our mission is to provide impeccable cleaning services tailored to meet the unique needs of each client. We are dedicated to delivering consistent quality, reliability, and professionalism in every aspect of our work. Through attention to detail, eco-friendly practices, and continuous improvement, we aim to exceed our customers' expectations and earn their trust. Our team is driven by integrity, respect, and a passion for creating clean and comfortable spaces that enhance the lives of our clients. We are committed to excellence, customer satisfaction, and making a positive difference in the communities we serve.
                </p>
              </div>

              <div className="vm-figure-col">
                <div className="vm-photo-cutout team-cutout">
                  <img src={missionImg} alt="Enrally Professional Team" className="vm-team-img" />
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
