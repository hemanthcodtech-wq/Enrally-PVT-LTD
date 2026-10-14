import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, Mail, MapPin, Building, Send, CheckCircle2,
  Clock, ShieldCheck, ChevronDown, ChevronUp, HelpCircle,
  Headphones, MessageSquare, Sparkles, ArrowRight
} from 'lucide-react';
import supportImg from './Images/support.jpg';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  const faqs = [
    {
      q: 'What is Enrally’s typical turnaround time for mobilizing manpower?',
      a: 'For standard skilled and semi-skilled staffing requirements across major hubs, we mobilize ready teams within 48 to 72 hours. For specialized technical or high-volume industrial projects (100+ personnel), our mobilization timeline ranges from 5 to 7 business days with verified standby reserves.'
    },
    {
      q: 'How does Enrally ensure statutory labor compliance?',
      a: 'We strictly follow all statutory requirements including EPF (Employee Provident Fund), ESIC (Employees State Insurance Corporation), Minimum Wages Act, Bonus Act, and PSARA guidelines. Every month, verified government challans and ECR copies are shared with clients prior to billing cycles to ensure zero client liability.'
    },
    {
      q: 'Do you offer custom tailored facility management packages?',
      a: 'Yes. We engineer customized Service Level Agreements (SLAs) based on facility square footage, operating shifts, and technical scope. Options range from dedicated housekeeping crews and security surveillance to full integrated turnkey facility management (MEP, civil, and sanitization).'
    },
    {
      q: 'Are all deployed personnel background and police verified?',
      a: 'Absolutely. 100% of our workforce undergoes comprehensive background checks, address validation, biometric identity checks, and local police verification before being deployed to client premises.'
    },
    {
      q: 'What happens in case of sudden staff absenteeism or emergencies?',
      a: 'We maintain a 15% dedicated bench reserve across all operational zones. If any staff member is absent, a pre-trained, uniform-ready replacement is mobilized immediately with zero operational disruption.'
    },
    {
      q: 'Which regions across India do you serve?',
      a: 'Enrally has active operational footprints across Karnataka, NCR, Maharashtra, Tamil Nadu, Telangana, and Andhra Pradesh, with dedicated supervisory teams capable of supporting Pan-India multi-location enterprise contracts.'
    }
  ];

  return (
    <div className="inner-page">
      {/* 10. CONTACT PAGE BANNER */}
      <section className="dark-page-banner">
        <div className="container">
          <h1 className="banner-title">Contact Us</h1>
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link> <span>/</span> <span className="current">Contact Us</span>
          </div>
          <p className="banner-subtitle">
            Get in touch with our team for service inquiries, customized proposals, and tender support.
          </p>
        </div>
      </section>

      {/* THREE DIRECT TOUCHPOINT PILLS */}
      <section className="contact-quick-touchpoints" data-reveal="fade-up">
        <div className="container">
          <div className="touchpoints-grid" data-stagger>
            <div className="touchpoint-card">
              <div className="tp-icon"><Phone size={22} color="#009cb8" /></div>
              <div>
                <h4>Direct Operations Line</h4>
                <a href="tel:+918277611643">+91 82776 11643</a>
                <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>

            <div className="touchpoint-card">
              <div className="tp-icon"><Mail size={22} color="#009cb8" /></div>
              <div>
                <h4>Official RFP Inquiries</h4>
                <a href="mailto:enrallyopcpvtltd@gmail.com">enrallyopcpvtltd@gmail.com</a>
                <p>Guaranteed 2-hour response time</p>
              </div>
            </div>

            <div className="touchpoint-card">
              <div className="tp-icon"><Headphones size={22} color="#009cb8" /></div>
              <div>
                <h4>Emergency Facility Desk</h4>
                <span className="emergency-badge">24/7 Available</span>
                <p>Real-time on-ground support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT INFO & REQUEST A QUOTE SPLIT FORM */}
      <section className="contact-block-section">
        <div className="container">
          <div className="contact-page-layout">
            {/* LEFT: GET IN TOUCH */}
            <div className="get-in-touch-box">
              <h2 className="git-title">Get in Touch</h2>
              <p className="git-lead">
                Have a facility query or need an immediate staffing quote? Reach our registered desk directly or visit our office.
              </p>

              <div className="git-item">
                <div className="git-icon"><Phone size={18} /></div>
                <div>
                  <span className="git-label">Phone</span>
                  <a href="tel:+918277611643" className="git-value">+91 82776 11643</a>
                </div>
              </div>

              <div className="git-item">
                <div className="git-icon"><Mail size={18} /></div>
                <div>
                  <span className="git-label">Email</span>
                  <a href="mailto:enrallyopcpvtltd@gmail.com" className="git-value">enrallyopcpvtltd@gmail.com</a>
                </div>
              </div>

              <div className="git-item">
                <div className="git-icon"><MapPin size={18} /></div>
                <div>
                  <span className="git-label">Address</span>
                  <p className="git-value address-txt">
                    Door No 47, Ward No 3,<br />
                    M P Prathiba Nagara,<br />
                    Hagaribommanahalli, Hbh Halli,<br />
                    Bellary, Karnataka - 583212, India.
                  </p>
                </div>
              </div>

              <div className="git-item cin-block">
                <div className="git-icon"><Building size={18} /></div>
                <div>
                  <span className="git-label">CIN (Corporate Identity Number)</span>
                  <p className="git-value cin-code">U78300KA2024OPC183145</p>
                </div>
              </div>

              {/* Support Center Visual */}
              <div className="support-team-preview">
                <img src={supportImg} alt="Enrally Dedicated Support Hub" className="support-team-img" />
                <div className="support-team-overlay">
                  <span>Enrally Operations & Dispatch Center</span>
                </div>
              </div>
            </div>

            {/* RIGHT: REQUEST A QUOTE FORM */}
            <div className="quote-form-container">
              {submitted ? (
                <div className="submission-success">
                  <CheckCircle2 size={52} color="#009cb8" />
                  <h3>Quotation Request Sent!</h3>
                  <p>Our commercial proposals team has logged your requirement. An account specialist will contact you with a customized estimate.</p>
                  <button className="btn-cyan-pill" onClick={() => setSubmitted(false)}>Submit Another Inquiry</button>
                </div>
              ) : (
                <form className="screen10-quote-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                  <div className="form-header-badge">
                    <Sparkles size={14} /> FREE ESTIMATE & SLA PROPOSAL
                  </div>
                  <h3 className="form-box-title">Request a Custom Quote</h3>
                  <p className="form-box-subtitle">Fill out the details below and get a transparent proposal within 24 hours.</p>

                  <div className="screen-form-row">
                    <div className="screen-input-group">
                      <label htmlFor="fn">Full Name *</label>
                      <input id="fn" type="text" placeholder="e.g. Anand Sharma" required />
                    </div>
                    <div className="screen-input-group">
                      <label htmlFor="cn">Company Name *</label>
                      <input id="cn" type="text" placeholder="e.g. Apex Enterprises" required />
                    </div>
                  </div>

                  <div className="screen-form-row">
                    <div className="screen-input-group">
                      <label htmlFor="ph">Phone Number *</label>
                      <input id="ph" type="tel" placeholder="+91 98765 43210" required />
                    </div>
                    <div className="screen-input-group">
                      <label htmlFor="em">Email Address *</label>
                      <input id="em" type="email" placeholder="anand@company.com" required />
                    </div>
                  </div>

                  <div className="screen-form-row">
                    <div className="screen-input-group">
                      <label htmlFor="cat">Service Category *</label>
                      <select id="cat" defaultValue="">
                        <option value="" disabled>Select Category</option>
                        <option value="HR & Manpower">HR & Manpower Supply</option>
                        <option value="Facility Management">Complete Facility Management</option>
                        <option value="Cleaning & Housekeeping">Cleaning & Mechanized Housekeeping</option>
                        <option value="Security & Surveillance">Security & Surveillance</option>
                        <option value="Solar Manpower">Solar Manpower & Maintenance</option>
                        <option value="Civil & Construction">Civil & MEP Maintenance</option>
                        <option value="Government Tender">Government Tender Support</option>
                      </select>
                    </div>

                    <div className="screen-input-group">
                      <label htmlFor="loc">Location / City</label>
                      <input id="loc" type="text" placeholder="e.g. Bengaluru / NCR / Bellary" />
                    </div>
                  </div>

                  <div className="screen-input-group full">
                    <label htmlFor="pd">Project Details / Requirements</label>
                    <textarea id="pd" rows={4} placeholder="Describe team size, facility square footage, shift timings, or specific compliance expectations..."></textarea>
                  </div>

                  <button type="submit" className="btn-cyan-submit">
                    Submit Proposal Request
                  </button>

                  <p className="form-privacy-note">
                    🔒 We respect your privacy. Your information is confidential and will never be shared.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION (ACCORDION) */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-header">
            <span className="faq-badge">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="faq-main-title">Everything You Need to Know</h2>
            <p className="faq-lead-desc">
              Have questions regarding mobilization, pricing models, or labor compliance? Find clear answers below.
            </p>
          </div>

          <div className="faq-accordion-container">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item-card ${openFaq === idx ? 'expanded' : ''}`}
                onClick={() => toggleFaq(idx)}
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

          {/* Still Have Questions Box */}
          <div className="faq-cta-callout">
            <div className="faq-cta-content">
              <h3>Still Have Questions?</h3>
              <p>Speak directly with our senior facility directors for immediate guidance.</p>
            </div>
            <div className="faq-cta-btns">
              <a href="tel:+918277611643" className="btn-cyan-pill">
                <Phone size={16} /> Call +91 82776 11643
              </a>
              <a href="mailto:enrallyopcpvtltd@gmail.com" className="btn-white-pill">
                <Mail size={16} /> Email Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
