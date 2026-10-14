import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft, ChevronRight, Star, Building2, Quote,
  CheckCircle2, ShieldCheck, Award, ThumbsUp, ArrowRight,
  TrendingUp, Users, HeartHandshake, Sparkles
} from 'lucide-react';
import partnershipImg from './Images/partnership.jpg';
import { useScrollReveal } from '../hooks/useScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';

export default function Testimonials() {
  useScrollReveal();
  const testimonials = [
    {
      name: 'Vikramaditya Sengupta',
      designation: 'Head of Facility Operations',
      company: 'Apex Horizon IT Parks, Bengaluru',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      tag: 'Integrated Facility Management',
      rating: 5,
      text: 'Their professionalism and support have been exemplary. Enrally took charge of facility upkeep across our 450,000 sq.ft campus. Their mechanized housekeeping standards, strict adherence to digitized checklists, and instant standby replacements have set an industry benchmark.'
    },
    {
      name: 'Sunita Mehra',
      designation: 'Director - HR & Talent Acquisition',
      company: 'Zenith Logistics & Supply Hub, NCR',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      tag: 'Workforce Mobilization',
      rating: 5,
      text: 'When we needed 120 warehouse operators and logistics handlers mobilized within 5 days for our peak festive operations, Enrally delivered without a single glitch. Every single worker was police-verified, safety-trained, and backed by ready PF/ESIC accounts.'
    },
    {
      name: 'Dr. Rajiv Malhotra',
      designation: 'VP - Administration & Infrastructure',
      company: 'Metro Multispeciality Hospitals, Hyderabad',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      tag: 'Healthcare Sanitization',
      rating: 5,
      text: 'Hospital environments demand uncompromising infection prevention protocols. Enrally trained sanitization crews execute mechanized cleaning and biomedical waste segregation with zero audit exceptions. Highly dependable leadership team.'
    },
    {
      name: 'Pooja Agarwal',
      designation: 'Senior Procurement & Contracts Lead',
      company: 'Nexus Commercial Retail Outlets, Pune',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      tag: 'Statutory Compliance',
      rating: 5,
      text: 'Zero compliance worries! With previous vendors we were constantly chasing monthly EPF and ESIC payment receipts. Enrally proactively provides audited bank challans and government ECR receipts every billing cycle before payments fall due.'
    },
    {
      name: 'Karthik Ramanathan',
      designation: 'Chief Project Engineer',
      company: 'SunPower Renewable Infrastructures, Karnataka',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
      tag: 'Solar & Technical Manpower',
      rating: 5,
      text: 'Finding certified technicians and disciplined site trades for remote solar installation sites used to be our biggest hurdle. Enrally deployed over 80 electrical and mechanical staff on short notice, ensuring complete workplace safety and 100% attendance.'
    },
    {
      name: 'Nandita Joshi',
      designation: 'General Manager - Corporate Services',
      company: 'FinEdge Global Technologies, Mumbai',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      tag: 'Corporate Security & Guarding',
      rating: 5,
      text: 'Enrally provides well-groomed, polite, and vigilant security personnel for our corporate headquarters. Their visitor access management, CCTV monitoring, and proactive incident response have given our employees total peace of mind.'
    }
  ];

  const industryMetrics = [
    { num: '99.4%', label: 'Client Retention Rate', sub: 'Long-term enterprise contracts' },
    { num: '150+', label: 'Corporate Clients', sub: 'Across Tech Parks & Industry' },
    { num: '4.9 / 5', label: 'Average Client Rating', sub: 'Based on 200+ site audits' },
    { num: '100%', label: 'Compliance Adherence', sub: 'Audited monthly PF & ESIC' }
  ];

  const industryTags = [
    'IT & Business Parks', 'Healthcare & Hospitals', 'Industrial & Warehousing',
    'Renewable & Solar Parks', 'Retail & Commercial Malls', 'Government Utilities',
    'Educational Institutions', 'Residential Townships'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 2 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= testimonials.length - 2 ? 0 : prev + 1));
  };

  return (
    <div className="inner-page">
      {/* 09. TESTIMONIALS PAGE BANNER */}
      <section className="dark-page-banner">
        <div className="container">
          <h1 className="banner-title">Trusted by Our Clients</h1>
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link> <span>/</span> <span className="current">Testimonials & Client Stories</span>
          </div>
          <p className="banner-subtitle">
            Discover why corporate facilities, tech parks, hospitals, and industrial hubs across India choose Enrally as their trusted manpower and facility management partner.
          </p>
        </div>
      </section>

      {/* METRICS & CLIENT SATISFACTION STRIP */}
      <section className="testimonials-metrics-strip" data-reveal="fade-up">
        <div className="container">
          <div className="test-metrics-grid" data-stagger>
            <div className="test-metric-card">
              <span className="t-metric-num"><AnimatedCounter target={99.4} suffix="%" /></span>
              <strong className="t-metric-label">Client Retention Rate</strong>
              <p className="t-metric-sub">Long-term enterprise contracts</p>
            </div>
            <div className="test-metric-card">
              <span className="t-metric-num"><AnimatedCounter target={150} suffix="+" /></span>
              <strong className="t-metric-label">Corporate Clients</strong>
              <p className="t-metric-sub">Across Tech Parks & Industry</p>
            </div>
            <div className="test-metric-card">
              <span className="t-metric-num"><AnimatedCounter target={4.9} suffix=" / 5" /></span>
              <strong className="t-metric-label">Average Client Rating</strong>
              <p className="t-metric-sub">Based on 200+ site audits</p>
            </div>
            <div className="test-metric-card">
              <span className="t-metric-num"><AnimatedCounter target={100} suffix="%" /></span>
              <strong className="t-metric-label">Compliance Adherence</strong>
              <p className="t-metric-sub">Audited monthly PF & ESIC</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SLIDER SECTION (Enhanced Duo Carousel) */}
      <section className="testimonials-slider-section">
        <div className="container">
          <div className="test-slider-head" data-reveal="fade-up">
            <span className="overview-pre-badge">
              <Sparkles size={14} /> CLIENT ENDORSEMENTS
            </span>
            <h2 className="section-heading accent-line-heading center-line">What Industry Leaders Say About Enrally</h2>
            <p className="section-sub-copy">
              Real testimonials from Facility Heads, Procurement Directors, and Infrastructure Leaders who count on our services daily.
            </p>
          </div>

          <div className="slider-wrapper">
            <button className="slider-nav-btn prev" onClick={prevSlide} aria-label="Previous Testimonial">
              <ChevronLeft size={22} />
            </button>

            <div className="testimonials-duo-grid">
              {testimonials.slice(currentIndex, currentIndex + 2).map((item, idx) => (
                <div key={idx} className="minimal-testimonial-card enhanced">
                  <div className="card-top-row">
                    <span className="testimonial-tag">{item.tag}</span>
                    <div className="test-stars">
                      {[...Array(item.rating)].map((_, s) => (
                        <Star key={s} size={15} fill="#f59e0b" color="#f59e0b" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="quote-mark">“</div>
                  <p className="testimonial-text">{item.text}</p>
                  
                  <div className="testimonial-person">
                    <img src={item.avatar} alt={item.name} className="person-avatar" />
                    <div>
                      <strong className="person-name">{item.name}</strong>
                      <span className="person-desig">{item.designation}</span>
                      <span className="person-comp"><Building2 size={12} /> {item.company}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="slider-nav-btn next" onClick={nextSlide} aria-label="Next Testimonial">
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="slider-dots">
            {Array.from({ length: testimonials.length - 1 }).map((_, dIdx) => (
              <span 
                key={dIdx} 
                className={`dot ${currentIndex === dIdx ? 'active' : ''}`}
                onClick={() => setCurrentIndex(dIdx)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* ENTERPRISE PARTNERSHIP SHOWCASE SECTION */}
      <section className="partnership-showcase-section">
        <div className="container">
          <div className="partnership-card">
            <div className="partnership-text-col">
              <span className="partner-badge">ENTERPRISE SLA GUARANTEE</span>
              <h2>Building Relationships Grounded in Accountability & Value</h2>
              <p>
                At Enrally, we do not simply act as an external vendor. We integrate seamlessly into your organizational ecosystem as a strategic operational partner. Our clients enjoy zero statutory compliance risks, dedicated on-ground supervisors, and guaranteed facility uptime.
              </p>

              <div className="partner-key-benefits">
                <div className="pkb-item">
                  <CheckCircle2 size={18} color="#009cb8" />
                  <span>Transparent cost structure with line-item transparency</span>
                </div>
                <div className="pkb-item">
                  <CheckCircle2 size={18} color="#009cb8" />
                  <span>Dedicated Key Account Manager assigned to every enterprise</span>
                </div>
                <div className="pkb-item">
                  <CheckCircle2 size={18} color="#009cb8" />
                  <span>Bi-weekly site quality audits and SLA performance metrics</span>
                </div>
                <div className="pkb-item">
                  <CheckCircle2 size={18} color="#009cb8" />
                  <span>Proactive PF/ESIC compliance challans submitted monthly</span>
                </div>
              </div>

              <Link to="/contact" className="btn-cyan-pill">
                <span>Partner with Enrally Today</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="partnership-visual-col">
              <div className="partner-img-frame">
                <img src={partnershipImg} alt="Enrally Enterprise Client Partnership Handshake" className="partner-img" />
                <div className="partner-floating-badge">
                  <Award size={24} color="#009cb8" />
                  <div>
                    <strong>ISO 9001:2015 & PSARA Certified</strong>
                    <p>Highest quality & security standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES THAT TRUST ENRALLY */}
      <section className="industries-cloud-section">
        <div className="container">
          <div className="industries-header">
            <h3>Sectors We Proudly Support</h3>
            <p>Deploying specialized facility manpower and operational maintenance across diverse industry domains.</p>
          </div>

          <div className="industry-tags-list">
            {industryTags.map((tag, tIdx) => (
              <span key={tIdx} className="industry-pill-tag">
                <CheckCircle2 size={14} color="#009cb8" /> {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL ENHANCED CTA BANNER */}
      <section className="testimonials-cta-section">
        <div className="container">
          <div className="testimonials-cta-card">
            <div className="t-cta-left">
              <span className="t-cta-badge">
                <Sparkles size={14} /> ZERO-RISK FACILITY TRANSITION
              </span>
              <h2 className="t-cta-title">
                Join Over <span className="t-cta-highlight">150+ Leading Organizations</span> Today
              </h2>
              <p className="t-cta-desc">
                Experience reliable on-demand staffing, spotless facility hygiene, and 100% verified statutory compliance tailored to your corporate premises.
              </p>

              <div className="t-cta-features-strip">
                <div className="tcf-item">
                  <CheckCircle2 size={16} color="#38bdf8" />
                  <span>Free Initial Site Assessment</span>
                </div>
                <div className="tcf-item">
                  <CheckCircle2 size={16} color="#38bdf8" />
                  <span>Transparent Rate Cards</span>
                </div>
                <div className="tcf-item">
                  <CheckCircle2 size={16} color="#38bdf8" />
                  <span>SLA Guarantee & Standby Backup</span>
                </div>
              </div>
            </div>

            <div className="t-cta-right">
              <div className="t-cta-action-box">
                <Link to="/contact" className="btn-cta-primary">
                  <span>Request a Custom Quote</span>
                  <ArrowRight size={17} />
                </Link>
                
                <div className="t-cta-or-divider">
                  <span>or speak directly with an expert</span>
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
