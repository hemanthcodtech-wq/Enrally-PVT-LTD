import React from 'react';
import { Link } from 'react-router-dom';
import {
  Layers, Award, Sliders, DollarSign, Activity, Users,
  CheckCircle2, ArrowRight, ShieldCheck, Clock, FileCheck2,
  Sparkles, Check, X, Building2, Phone
} from 'lucide-react';
import partnershipImg from './Images/partnership.jpg';
import { useScrollReveal } from '../hooks/useScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';

export default function WhyEnrally() {
  useScrollReveal();
  const pillars = [
    {
      icon: <Layers size={28} />,
      title: 'Comprehensive Approach',
      desc: 'A unified single-window service partner across all facility, civil, housekeeping, and workforce operational needs.'
    },
    {
      icon: <Award size={28} />,
      title: 'Experience & Expertise',
      desc: 'Seasoned facility directors, certified MEP engineers, and PSARA-drilled security coordinators on site.'
    },
    {
      icon: <Sliders size={28} />,
      title: 'Customized SLA Solutions',
      desc: 'Tailored staffing matrices, shift rotations, and equipment allocations structured around your budget.'
    },
    {
      icon: <DollarSign size={28} />,
      title: 'Transparent Cost Savings',
      desc: 'Zero hidden surcharges. Clear line-item wage models with verified government statutory challans provided monthly.'
    },
    {
      icon: <Activity size={28} />,
      title: 'Real-time Digital Monitoring',
      desc: 'QR-code digitized inspection logs, biometric shift attendance, and prompt corrective action reporting.'
    },
    {
      icon: <Users size={28} />,
      title: 'Specialized Ready Workforce',
      desc: '100% background and police-verified personnel with a 15% standby bench reserve for instant zero-downtime replacements.'
    }
  ];

  const comparisonRows = [
    {
      dimension: 'Statutory Labor Compliance',
      enrally: '100% Guaranteed. Audited EPF, ESIC, professional tax & labor welfare receipts shared monthly before billing.',
      others: 'Frequent defaults, delays, and substantial legal liability risks passed onto the principal client.'
    },
    {
      dimension: 'Staff Verification & Police Records',
      enrally: '100% biometric ID authentication, permanent address validation, and mandatory local police verification.',
      others: 'Ad-hoc temporary recruitment with unverified identities and high security risks.'
    },
    {
      dimension: 'Absenteeism & Backup Replacement',
      enrally: '15% dedicated bench reserve ready on-call with guaranteed 2-hour emergency standby deployment.',
      others: 'Understaffed shifts, delayed relief, and repeated service compromises.'
    },
    {
      dimension: 'Equipment & Cleaning Consumables',
      enrally: 'Mechanized ride-on scrubbers, high-pressure washers, and certified non-toxic Green Seal chemicals.',
      others: 'Cheap abrasive powders and manual mopping that damage premium flooring and pollute indoor air.'
    },
    {
      dimension: 'Management Oversight & Point of Contact',
      enrally: 'Single dedicated Key Account Manager + weekly site audits by senior operations directors.',
      others: 'No dedicated manager, chaotic escalations, and unmonitored ground execution.'
    }
  ];

  return (
    <div className="inner-page">
      {/* 08. PAGE BANNER (Handshake Header) */}
      <section className="dark-page-banner handshake-banner">
        <div className="container banner-handshake-grid">
          <div className="banner-text-side">
            <span className="hero-badge-tag">
              <Sparkles size={14} /> THE ENRALLY ADVANTAGE
            </span>
            <h1 className="banner-title">Why Leading Enterprises Choose Enrally</h1>
            <div className="breadcrumb-nav">
              <Link to="/">Home</Link> <span>/</span> <span className="current">Why Choose Us</span>
            </div>
            <p className="banner-subtitle">
              Eliminating compliance liabilities, guaranteeing pristine facilities, and deploying verified, disciplined personnel across Pan-India sites.
            </p>
          </div>
          <div className="banner-handshake-visual">
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=700&q=80" 
              alt="Professional Business Handshake"
              className="handshake-img" 
            />
          </div>
        </div>
      </section>

      {/* METRIC ADVANTAGE STRIP */}
      <section className="why-stats-strip" data-reveal="fade-up">
        <div className="container">
          <div className="test-metrics-grid" data-stagger>
            <div className="test-metric-card">
              <span className="t-metric-num"><AnimatedCounter target={100} suffix="%" /></span>
              <strong className="t-metric-label">Legal Compliance</strong>
              <p className="t-metric-sub">Zero labor notice guarantee</p>
            </div>
            <div className="test-metric-card">
              <span className="t-metric-num"><AnimatedCounter target={72} suffix=" Hrs" /></span>
              <strong className="t-metric-label">Fast Mobilization</strong>
              <p className="t-metric-sub">Across tier-1 & tier-2 hubs</p>
            </div>
            <div className="test-metric-card">
              <span className="t-metric-num"><AnimatedCounter target={15} suffix="%" /></span>
              <strong className="t-metric-label">Bench Reserve</strong>
              <p className="t-metric-sub">Immediate standby replacements</p>
            </div>
            <div className="test-metric-card">
              <span className="t-metric-num">ISO 9001</span>
              <strong className="t-metric-label">Audited Quality</strong>
              <p className="t-metric-sub">SLA-backed service delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 ICON CARDS GRID */}
      <section className="why-pillars-section">
        <div className="container">
          <div className="section-head-center" data-reveal="fade-up">
            <span className="overview-pre-badge">CORE CAPABILITIES</span>
            <h2 className="block-title accent-line-heading center-line">Built for Reliability, Scale & Value</h2>
            <p className="block-subtitle">We assume complete operational ownership of non-core facility functions with measurable benchmarks.</p>
          </div>

          <div className="why-six-grid" data-stagger>
            {pillars.map((item, index) => (
              <div key={index} className="why-six-card" tabIndex={0}>
                <div className="six-card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED COMPARISON TABLE SECTION */}
      <section className="why-comparison-section">
        <div className="container">
          <div className="section-head-center">
            <span className="overview-pre-badge">SIDE-BY-SIDE EVALUATION</span>
            <h2 className="block-title">How Enrally Compares to Traditional Vendors</h2>
            <p className="block-subtitle">See why progressive corporate administrators and procurement heads make the switch to Enrally.</p>
          </div>

          <div className="why-table-wrapper">
            <table className="comparison-styled-table">
              <thead>
                <tr>
                  <th>Operational Dimension</th>
                  <th className="enrally-column-head">
                    <span className="enrally-badge-col">ENRALLY INTEGRATED CARE</span>
                  </th>
                  <th>Typical Unorganized Vendor</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, rIdx) => (
                  <tr key={rIdx}>
                    <td className="dimension-td">
                      <strong>{row.dimension}</strong>
                    </td>
                    <td className="enrally-td">
                      <div className="table-check-flex">
                        <Check size={18} className="tbl-icon-yes" />
                        <span>{row.enrally}</span>
                      </div>
                    </td>
                    <td className="others-td">
                      <div className="table-check-flex">
                        <X size={18} className="tbl-icon-no" />
                        <span>{row.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP PROMISE BANNER */}
      <section className="testimonials-cta-section">
        <div className="container">
          <div className="testimonials-cta-card">
            <div className="t-cta-left">
              <span className="t-cta-badge">
                <Sparkles size={14} /> SCHEDULE COMPLIMENTARY SITE SURVEY
              </span>
              <h2 className="t-cta-title">
                Experience the Difference in <span className="t-cta-highlight">Facility Standards</span>
              </h2>
              <p className="t-cta-desc">
                Our senior audit team will visit your premises, inspect high-traffic zones and technical assets, and present a custom operational improvement report within 24 hours.
              </p>

              <div className="t-cta-features-strip">
                <div className="tcf-item">
                  <CheckCircle2 size={16} color="#38bdf8" />
                  <span>No Obligation Audit</span>
                </div>
                <div className="tcf-item">
                  <CheckCircle2 size={16} color="#38bdf8" />
                  <span>Detailed Staffing Matrix</span>
                </div>
                <div className="tcf-item">
                  <CheckCircle2 size={16} color="#38bdf8" />
                  <span>Guaranteed SLA Pricing</span>
                </div>
              </div>
            </div>

            <div className="t-cta-right">
              <div className="t-cta-action-box">
                <Link to="/contact" className="btn-cta-primary">
                  <span>Book Site Assessment</span>
                  <ArrowRight size={17} />
                </Link>

                <div className="t-cta-or-divider">
                  <span>or call operations</span>
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
