import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users, Building2, Wrench, FileCheck2, ArrowRight, ArrowUpRight,
  ShieldCheck, Star, Sparkles, CheckCircle2, Shield, Clock, Award,
  Layers, Sliders, DollarSign, Activity, HelpCircle, ChevronDown, ChevronUp,
  Headphones, Phone, Mail, MapPin, Send, Check
} from 'lucide-react';
import hqImg from './Images/hq.jpg';
import { useScrollReveal } from '../hooks/useScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';

export default function Home() {
  useScrollReveal();
  const [openFaq, setOpenFaq] = useState(0);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? -1 : idx);
  };

  // 03. Core Highlights (4 pillars)
  const pillars = [
    {
      icon: <Users size={24} />,
      title: 'Workforce Solutions',
      desc: 'Skilled & Technical Staffing'
    },
    {
      icon: <Building2 size={24} />,
      title: 'Facility Management',
      desc: 'Housekeeping, MEP & Maintenance'
    },
    {
      icon: <Wrench size={24} />,
      title: 'Industrial Services',
      desc: 'Plant Operations & Solar Technicians'
    },
    {
      icon: <FileCheck2 size={24} />,
      title: 'Government Tender Support',
      desc: 'Compliant Execution & GeM Bids'
    }
  ];

  // 05. Our Core Services (8 Detailed Cards)
  const coreServices = [
    {
      id: 'hr-manpower',
      title: 'HR & Human Resources',
      category: 'Workforce',
      desc: 'End-to-end recruitment, executive staffing, and certified manpower outsourcing with complete statutory coverage.',
      link: '/services/hr-manpower',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'industrial-manpower',
      title: 'Industrial Manpower',
      category: 'Workforce',
      desc: 'Warehouse operators, assembly line workers, palletizing handlers, and manufacturing plant labor teams.',
      link: '/services/hr-manpower',
      img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'security-surveillance',
      title: 'Security & Surveillance',
      category: 'Facility Management',
      desc: 'PSARA-licensed security guards, emergency quick response teams, visitor management, and 24/7 CCTV operators.',
      link: '/services/security-surveillance',
      img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'cleaning-housekeeping',
      title: 'Cleaning & Housekeeping',
      category: 'Facility Management',
      desc: 'Mechanized scrubbing, hospital-grade sanitization, eco-friendly consumables, and commercial premise care.',
      link: '/services/cleaning-housekeeping',
      img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'civil-construction',
      title: 'Civil & Construction Maintenance',
      category: 'Technical & Infra',
      desc: 'Masonry repairs, waterproofing, MEP support, certified electricians, plumbers, and tenant site fit-outs.',
      link: '/services/civil-construction',
      img: '/images/civil.jpg'
    },
    {
      id: 'solar-manpower',
      title: 'Solar Manpower & Maintenance',
      category: 'Technical & Infra',
      desc: 'Solar installers, electrical engineers, panel cleaners, inverter maintenance technicians, and farm crews.',
      link: '/services/solar-manpower',
      img: '/images/solar.jpg'
    },
    {
      id: 'mep-services',
      title: 'MEP (Mechanical, Electrical, Plumbing)',
      category: 'Technical & Infra',
      desc: 'Preventative HVAC maintenance, DG set operations, high-tension electrical upkeep, and plumbing lines.',
      link: '/services/civil-construction',
      img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'government-tender-support',
      title: 'Government Tender Support',
      category: 'Business Support',
      desc: 'Public sector facility contracts, municipal sanitation tenders, GeM portal execution, and compliance audits.',
      link: '/services/hr-manpower',
      img: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80'
    }
  ];

  // 06. Industries We Serve (8 Industries)
  const industries = [
    {
      title: 'IT & Business Parks',
      desc: 'Round-the-clock housekeeping, access control, and MEP operations for high-density corporate tech campuses.',
      icon: <Building2 size={24} />
    },
    {
      title: 'Healthcare & Hospitals',
      desc: 'Hospital-grade mechanized sanitization, biomedical waste handling, and ICU hygiene protocols.',
      icon: <ShieldCheck size={24} />
    },
    {
      title: 'Industrial & Manufacturing',
      desc: 'Forklift crews, machine operators, assembly labor, 5S workplace compliance, and plant civil support.',
      icon: <Wrench size={24} />
    },
    {
      title: 'Solar & Renewable Energy',
      desc: 'Turnkey solar panel installation crews, module cleaning staff, and site security guards for remote solar farms.',
      icon: <Activity size={24} />
    },
    {
      title: 'Retail Malls & Showrooms',
      desc: 'Floor buffing, facade glass cleaning, crowd management, and restroom hygiene maintenance.',
      icon: <Layers size={24} />
    },
    {
      title: 'Warehousing & Logistics',
      desc: 'High-speed loading/unloading handlers, inventory pickers, packaging staff, and dispatch teams.',
      icon: <Clock size={24} />
    },
    {
      title: 'Government & Public Sector',
      desc: 'Statutory tender execution, municipal utilities maintenance, and public enterprise facilities.',
      icon: <FileCheck2 size={24} />
    },
    {
      title: 'Educational Institutions',
      desc: 'Campus cleaning, security gating, student transport monitoring, and electrical/civil repairs.',
      icon: <Award size={24} />
    }
  ];

  // 07. Why Choose Enrally (6 Key Value Props)
  const whyChooseUs = [
    {
      icon: <Layers size={28} />,
      title: 'Comprehensive Approach',
      desc: 'A unified service partner across all facility and workforce operational requirements.'
    },
    {
      icon: <Award size={28} />,
      title: 'Experience & Expertise',
      desc: 'Seasoned facility managers, certified engineers, and domain-trained supervisory staff.'
    },
    {
      icon: <Sliders size={28} />,
      title: 'Customized Solutions',
      desc: 'Tailored SLAs structured around your facility size, operating shifts, and budget.'
    },
    {
      icon: <DollarSign size={28} />,
      title: 'Transparent Cost Savings',
      desc: 'Zero hidden surcharges. Clear line-item wage structures with maximum operational efficiency.'
    },
    {
      icon: <Activity size={28} />,
      title: 'Real-time Monitoring',
      desc: 'Biometric attendance, digital checklist audits, and proactive monthly compliance challans.'
    },
    {
      icon: <Users size={28} />,
      title: 'Specialized Workforce',
      desc: '100% background and police-verified personnel ready for prompt on-ground deployment.'
    }
  ];

  // 08. How We Work (4 Simple Steps)
  const workflowSteps = [
    {
      step: '01',
      title: 'Requirement & Site Audit',
      desc: 'Our operations directors conduct a thorough complimentary on-site evaluation of your facility scope and staffing matrix.'
    },
    {
      step: '02',
      title: 'Tailored SLA & Transparent Quote',
      desc: 'Within 24 hours, we deliver a line-item rate card covering wages, PF, ESIC, consumables, and machinery requirements.'
    },
    {
      step: '03',
      title: 'Screening & 72-Hour Mobilization',
      desc: 'Pre-screened, background-verified personnel are deployed in uniform, complete with biometric induction and safety SOPs.'
    },
    {
      step: '04',
      title: 'Ongoing Quality Oversight & Audits',
      desc: 'A dedicated Key Account Manager conducts bi-weekly mystery audits, digital inspections, and submits monthly verified challans.'
    }
  ];

  // 09. Client Testimonials (Featured 3)
  const testimonials = [
    {
      name: 'Vikramaditya Sengupta',
      role: 'Head of Facility Operations',
      company: 'Apex Horizon IT Parks, Bengaluru',
      text: 'Their professionalism and support have been exemplary. Enrally took charge of facility upkeep across our 450,000 sq.ft campus. Mechanized housekeeping and instant standby replacements have set an industry benchmark.'
    },
    {
      name: 'Sunita Mehra',
      role: 'Director - HR & Talent Acquisition',
      company: 'Zenith Logistics Hub, NCR',
      text: 'When we needed 120 warehouse operators mobilized within 5 days for peak festive operations, Enrally delivered without a single glitch. 100% verified and safety-trained.'
    },
    {
      name: 'Dr. Rajiv Malhotra',
      role: 'VP - Infrastructure & Admin',
      company: 'Metro Multispeciality Hospitals, Hyderabad',
      text: 'Hospital environments demand uncompromising infection control. Enrally sanitization crews execute mechanized cleaning and biomedical waste segregation with zero audit exceptions.'
    }
  ];

  // 10. Frequently Asked Questions
  const faqs = [
    {
      q: 'What is Enrally’s typical turnaround time for mobilizing manpower?',
      a: 'For standard skilled and semi-skilled staffing across major hubs, we mobilize ready teams within 48 to 72 hours. For specialized technical or large industrial deployments (100+ personnel), our timeline is 5 to 7 business days with verified standby reserves.'
    },
    {
      q: 'How does Enrally ensure statutory labor compliance?',
      a: 'We strictly follow all statutory mandates including EPF, ESIC, Minimum Wages Act, and PSARA laws. Verified government bank challans and monthly ECR receipts are provided proactively prior to every billing cycle.'
    },
    {
      q: 'Do you offer custom tailored facility management packages?',
      a: 'Yes. We engineer customized Service Level Agreements (SLAs) based on facility square footage, operating shifts, and technical scope — from basic housekeeping to turnkey MEP and security.'
    },
    {
      q: 'What happens in case of sudden staff absenteeism?',
      a: 'We maintain a 15% dedicated bench reserve across all operational zones. If any staff member is absent, a pre-trained, uniform-ready replacement is mobilized immediately with zero downtime.'
    }
  ];

  return (
    <div className="home-page-container">
      {/* ============================================================
          02. HERO SECTION (Full-Bleed Panoramic Layout)
          ============================================================ */}
      <section className="enrally-full-banner">
        <div className="container banner-overlay-container">
          <div className="banner-text-content">
            <span className="hero-badge-tag">
              <Sparkles size={14} /> VERIFIED & COMPLIANT WORKFORCE PARTNER
            </span>
            <h1 className="banner-main-title">
              Reliable Manpower. <br />
              <span className="highlight-cyan">Professional Facility</span> Management.
            </h1>
            <p className="banner-sub-description">
              Comprehensive facility management, manpower supply, industrial services and project support for businesses and government organizations across India.
            </p>
            <div className="banner-actions-group">
              <Link to="/contact" className="btn-cyan-pill banner-cta">
                <span>Request a Quote</span>
                <ArrowRight size={17} />
              </Link>
              <Link to="/services" className="btn-white-pill banner-cta-white">
                Explore Our Services
              </Link>
            </div>

            <div className="hero-stats-strip">
              <div className="h-stat-item">
                <strong><AnimatedCounter target={2500} suffix="+" /></strong>
                <span>Staff Deployed</span>
              </div>
              <div className="h-stat-sep"></div>
              <div className="h-stat-item">
                <strong><AnimatedCounter target={150} suffix="+" /></strong>
                <span>Corporate Clients</span>
              </div>
              <div className="h-stat-sep"></div>
              <div className="h-stat-item">
                <strong><AnimatedCounter target={100} suffix="%" /></strong>
                <span>Statutory Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          03. CORE SERVICE HIGHLIGHTS (4 Quick Pillars)
          ============================================================ */}
      <section className="pillars-strip" data-reveal="fade-up">
        <div className="container">
          <div className="pillars-strip-grid" data-stagger>
            {pillars.map((pil, idx) => (
              <div key={idx} className="pillar-item">
                <div className="pillar-round-icon">{pil.icon}</div>
                <div>
                  <span className="pillar-title">{pil.title}</span>
                  <p className="pillar-desc-sub">{pil.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          04. ABOUT ENRALLY (High-Impact Overview with HQ Photo)
          ============================================================ */}
      <section className="home-about-section">
        <div className="container">
          <div className="overview-split">
            <div className="overview-text" data-reveal="fade-right">
              <span className="overview-pre-badge">
                <Sparkles size={14} /> ABOUT ENRALLY (OPC) PVT. LTD.
              </span>
              <h2 className="section-heading accent-line-heading">
                A Trusted Partner for <span className="highlight-dark">Workforce & Facility Solutions</span>
              </h2>
              <p className="overview-paragraph">
                <strong>ENRALLY (OPC) PVT. LTD.</strong> is a premier facility management and manpower supply enterprise, providing reliable, compliant, and customized operational solutions across multiple industry sectors.
              </p>
              <p className="overview-subtext">
                We empower corporate enterprises, tech parks, hospitals, and industrial plants to focus on their core growth while our trained personnel manage daily cleaning, security, MEP engineering, and general operational support.
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
                <Link to="/about" className="btn-cyan-pill">
                  <span>Learn More About Us</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/services" className="btn-white-pill">
                  View Service Offerings
                </Link>
              </div>
            </div>

            <div className="overview-image-wrapper" data-reveal="fade-left">
              <div className="overview-building-frame">
                <img 
                  src={hqImg} 
                  alt="Enrally Modern Commercial Headquarters"
                  className="overview-building-img" 
                />
                <div className="overview-gradient-overlay"></div>
                
                <div className="overview-floating-card">
                  <div className="of-icon"><ShieldCheck size={24} color="#12BFD0" /></div>
                  <div>
                    <strong>Pan India Operations</strong>
                    <p>Corporate, Industrial & Public Utilities</p>
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

      {/* ============================================================
          05. OUR CORE SERVICES (8 Comprehensive Cards Grid)
          ============================================================ */}
      <section className="core-services-block">
        <div className="container">
          <div className="section-head-center" data-reveal="fade-up">
            <span className="overview-pre-badge">WHAT WE EXCEL AT</span>
            <h2 className="block-title accent-line-heading center-line">Our Core Services</h2>
            <p className="block-subtitle">
              Scalable, SLA-backed solutions custom-designed for corporate hubs, manufacturing plants, healthcare centers, and government infrastructure.
            </p>
          </div>

          <div className="core-cards-grid home-services-grid" data-stagger>
            {coreServices.map((cs) => (
              <div key={cs.id} className="core-card">
                <div className="core-card-img">
                  <img src={cs.img} alt={cs.title} />
                  <span className="service-card-tag">{cs.category}</span>
                </div>
                <div className="core-card-body">
                  <h4>{cs.title}</h4>
                  <p>{cs.desc}</p>
                </div>
                <div className="core-card-bottom">
                  <span className="cs-explore-txt">Explore Service</span>
                  <Link to={cs.link} className="card-action-btn" aria-label={`View ${cs.title}`}>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="services-footer-cta" data-reveal="fade-up">
            <Link to="/services" className="btn-cyan-pill">
              <span>View All Detailed Services</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          06. INDUSTRIES WE SERVE
          ============================================================ */}
      <section className="home-industries-section">
        <div className="container">
          <div className="section-head-center" data-reveal="fade-up">
            <span className="overview-pre-badge">DIVERSE SECTORS</span>
            <h2 className="block-title accent-line-heading center-line">Industries We Proudly Serve</h2>
            <p className="block-subtitle">
              Deploying specialized operational methodologies and compliance frameworks across unique enterprise environments.
            </p>
          </div>

          <div className="industries-cards-grid" data-stagger>
            {industries.map((ind, i) => (
              <div key={i} className="industry-box-card">
                <div className="ind-icon-box">{ind.icon}</div>
                <h3>{ind.title}</h3>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          07. WHY CHOOSE ENRALLY
          ============================================================ */}
      <section className="home-why-section">
        <div className="container">
          <div className="section-head-center" data-reveal="fade-up">
            <span className="overview-pre-badge">THE ENRALLY ADVANTAGE</span>
            <h2 className="block-title accent-line-heading center-line">Why Leading Enterprises Choose Enrally</h2>
            <p className="block-subtitle">
              Eliminating operational friction with strict compliance, rapid mobilization, and dedicated managerial oversight.
            </p>
          </div>

          <div className="why-six-grid" data-stagger>
            {whyChooseUs.map((w, idx) => (
              <div key={idx} className="why-six-card">
                <div className="six-card-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          08. HOW WE WORK (Step-by-Step Delivery Model with Progress Line)
          ============================================================ */}
      <section className="how-we-work-section" data-reveal="fade-up">
        <div className="container">
          <div className="section-head-center">
            <span className="overview-pre-badge">SEAMLESS ONBOARDING</span>
            <h2 className="block-title accent-line-heading center-line">How We Work</h2>
            <p className="block-subtitle">
              From site inspection to active shift management — a structured, reliable 4-step delivery lifecycle.
            </p>
          </div>

          <div className="workflow-steps-grid" data-stagger>
            {workflowSteps.map((ws, sIdx) => (
              <div key={sIdx} className="workflow-step-card">
                <div className="wf-step-number">{ws.step}</div>
                <h3>{ws.title}</h3>
                <p>{ws.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          09. CLIENT TESTIMONIALS (Highlighted Stories)
          ============================================================ */}
      <section className="home-testimonials-section">
        <div className="container">
          <div className="section-head-center" data-reveal="fade-up">
            <span className="overview-pre-badge">CLIENT ENDORSEMENTS</span>
            <h2 className="block-title accent-line-heading center-line">Trusted by Facility & HR Leaders</h2>
            <p className="block-subtitle">
              Discover what infrastructure directors and operational heads say about our reliability.
            </p>
          </div>

          <div className="home-test-grid" data-stagger>
            {testimonials.map((t, tIdx) => (
              <div key={tIdx} className="home-test-card">
                <div className="test-stars-row">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={15} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p className="test-quote-text">"{t.text}"</p>
                <div className="test-author-block">
                  <strong>{t.name}</strong>
                  <span className="test-role">{t.role}</span>
                  <span className="test-company"><Building2 size={12} /> {t.company}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials-view-all" data-reveal="fade-up">
            <Link to="/testimonials" className="view-all-link">
              Read All Enterprise Client Stories <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          10. FREQUENTLY ASKED QUESTIONS
          ============================================================ */}
      <section className="home-faq-section" data-reveal="fade-up">
        <div className="container">
          <div className="section-head-center">
            <span className="overview-pre-badge">CLEAR ANSWERS</span>
            <h2 className="block-title accent-line-heading center-line">Frequently Asked Questions</h2>
            <p className="block-subtitle">
              Common questions about staffing mobilization, compliance challans, and service agreements.
            </p>
          </div>

          <div className="faq-accordion-container">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item-card ${openFaq === idx ? 'expanded' : ''}`}
                onClick={() => toggleFaq(idx)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFaq(idx);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={openFaq === idx}
              >
                <div className="faq-question-row">
                  <div className="faq-q-text">
                    <HelpCircle size={20} className="faq-q-icon" />
                    <h3>{faq.q}</h3>
                  </div>
                  <div className="faq-toggle-arrow">
                    {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>

                {openFaq === idx && (
                  <div className="faq-answer-row">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          11. REQUEST A QUOTE CTA (Interactive Conversion Block)
          ============================================================ */}
      <section className="home-quote-section">
        <div className="container">
          <div className="home-quote-card">
            <div className="quote-text-side">
              <span className="t-cta-badge">GET STARTED TODAY</span>
              <h2>Ready to Elevate Your Facility Operations?</h2>
              <p>
                Request a comprehensive site survey and transparent line-item rate card within 24 hours. Zero compliance risks, guaranteed SLAs.
              </p>

              <div className="quote-benefits-list">
                <div className="qb-item">
                  <CheckCircle2 size={18} color="#38bdf8" />
                  <span>Complimentary on-site operational survey</span>
                </div>
                <div className="qb-item">
                  <CheckCircle2 size={18} color="#38bdf8" />
                  <span>100% Statutory Compliance (PF, ESIC, PSARA)</span>
                </div>
                <div className="qb-item">
                  <CheckCircle2 size={18} color="#38bdf8" />
                  <span>Dedicated Key Account Manager assigned to you</span>
                </div>
              </div>

              <div className="direct-call-badge">
                <Headphones size={20} color="#38bdf8" />
                <div>
                  <span>Need immediate assistance?</span>
                  <a href="tel:+918277611643">+91 82776 11643</a>
                </div>
              </div>
            </div>

            <div className="quote-form-side">
              {quoteSubmitted ? (
                <div className="submission-success">
                  <CheckCircle2 size={48} color="#009cb8" />
                  <h3>Quotation Request Received!</h3>
                  <p>Our commercial proposals director will review your requirements and connect with you shortly.</p>
                  <button className="btn-cyan-pill" onClick={() => setQuoteSubmitted(false)}>Submit Another Inquiry</button>
                </div>
              ) : (
                <form className="screen10-quote-form" onSubmit={(e) => { e.preventDefault(); setQuoteSubmitted(true); }}>
                  <h3 className="form-box-title">Get a Custom Proposal</h3>

                  <div className="screen-form-row">
                    <div className="screen-input-group">
                      <label htmlFor="h-name">Full Name *</label>
                      <input id="h-name" type="text" placeholder="e.g. Rajesh Kumar" required />
                    </div>
                    <div className="screen-input-group">
                      <label htmlFor="h-comp">Company Name *</label>
                      <input id="h-comp" type="text" placeholder="e.g. Apex Tech Parks" required />
                    </div>
                  </div>

                  <div className="screen-form-row">
                    <div className="screen-input-group">
                      <label htmlFor="h-phone">Phone Number *</label>
                      <input id="h-phone" type="tel" placeholder="+91 98765 00000" required />
                    </div>
                    <div className="screen-input-group">
                      <label htmlFor="h-email">Work Email *</label>
                      <input id="h-email" type="email" placeholder="rajesh@company.com" required />
                    </div>
                  </div>

                  <div className="screen-input-group full">
                    <label htmlFor="h-serv">Service Needed *</label>
                    <select id="h-serv" defaultValue="Facility Management">
                      <option value="HR & Manpower">HR & Manpower Outsourcing</option>
                      <option value="Facility Management">Complete Facility Management</option>
                      <option value="Cleaning & Housekeeping">Cleaning & Mechanized Housekeeping</option>
                      <option value="Security & Surveillance">Security & Guarding Services</option>
                      <option value="Solar Manpower">Solar Manpower & Maintenance</option>
                      <option value="Civil & Construction">Civil & MEP Engineering</option>
                      <option value="Government Tender">Government Tender Support</option>
                    </select>
                  </div>

                  <div className="screen-input-group full">
                    <label htmlFor="h-msg">Scope / Details</label>
                    <textarea id="h-msg" rows={3} placeholder="Mention location, facility square footage, or staff numbers..."></textarea>
                  </div>

                  <button type="submit" className="btn-cyan-submit">
                    <span>Generate Proposal Request</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
