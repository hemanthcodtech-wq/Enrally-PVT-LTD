import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Clock, Calculator, Send } from 'lucide-react';

export default function RequestQuote() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="inner-page">
      <section className="page-header">
        <div className="container">
          <span className="section-subtitle">CUSTOM ESTIMATE</span>
          <h1 className="page-title">Request a Tailored Facility & Manpower Proposal</h1>
          <p className="page-lead">
            Get transparent pricing, customized staffing matrices, and guaranteed compliance coverage for your enterprise.
          </p>
        </div>
      </section>

      <section className="quote-page-section">
        <div className="container">
          <div className="quote-grid-container">
            {/* Left summary & assurances */}
            <div className="quote-assurances">
              <h2>What to Expect from Enrally</h2>
              <p>We provide enterprise-grade SLAs and transparent staffing breakdown without hidden surcharges or vague markups.</p>

              <div className="assurance-list">
                <div className="as-item">
                  <div className="as-icon"><Clock size={20} color="#0098b6" /></div>
                  <div>
                    <h4>Proposal Turnaround Within 24 Hours</h4>
                    <p>Our estimators review your scope and provide a line-item quotation promptly.</p>
                  </div>
                </div>

                <div className="as-item">
                  <div className="as-icon"><Calculator size={20} color="#0098b6" /></div>
                  <div>
                    <h4>Statutory-Compliant Rate Card</h4>
                    <p>Transparent wage structuring covering PF, ESIC, bonus, gratuity, and insurance.</p>
                  </div>
                </div>

                <div className="as-item">
                  <div className="as-icon"><ShieldCheck size={20} color="#0098b6" /></div>
                  <div>
                    <h4>Complimentary Site Survey</h4>
                    <p>Optionally schedule our field operations director to evaluate your premises in person.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="quote-page-form-wrapper">
              {submitted ? (
                <div className="submission-success">
                  <CheckCircle2 size={48} color="#0098b6" />
                  <h3>Quotation Request Received!</h3>
                  <p>Our commercial proposals team has logged your requirement. An account specialist will contact you with a customized estimate.</p>
                  <button className="btn-secondary" onClick={() => setSubmitted(false)}>Submit Another Request</button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="quote-form">
                  <h3>Proposal Request Form</h3>

                  <div className="form-group">
                    <label htmlFor="q-name">Your Full Name *</label>
                    <input id="q-name" type="text" placeholder="e.g. Rajesh Nair" required />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="q-company">Company / Facility Name *</label>
                      <input id="q-company" type="text" placeholder="e.g. Skyline Towers" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="q-city">City / Location *</label>
                      <input id="q-city" type="text" placeholder="e.g. Bengaluru / NCR / Mumbai" required />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="q-email">Business Email *</label>
                      <input id="q-email" type="email" placeholder="rajesh@company.com" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="q-phone">Contact Phone *</label>
                      <input id="q-phone" type="tel" placeholder="+91 98765 00000" required />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="q-service">Primary Service Required *</label>
                      <select id="q-service" defaultValue="Comprehensive Facility Management">
                        <option value="Comprehensive Facility Management">Comprehensive Facility Management</option>
                        <option value="HR & Manpower Outsourcing">HR & Manpower Outsourcing</option>
                        <option value="Housekeeping & Mechanized Cleaning">Housekeeping & Mechanized Cleaning</option>
                        <option value="Security & Guarding Services">Security & Guarding Services</option>
                        <option value="Civil & MEP Maintenance">Civil & MEP Maintenance</option>
                        <option value="Government Tender Fulfillment">Government Tender Fulfillment</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="q-scale">Estimated Personnel / Area</label>
                      <select id="q-scale" defaultValue="10-25 personnel">
                        <option value="Under 10 personnel">Under 10 personnel</option>
                        <option value="10-25 personnel">10 - 25 personnel</option>
                        <option value="25-100 personnel">25 - 100 personnel</option>
                        <option value="100+ personnel">100+ personnel / Large Campus</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="q-notes">Scope Details / Specific Instructions</label>
                    <textarea id="q-notes" rows={3} placeholder="Mention facility type (IT park, hospital, warehouse), shift timings, or special requirements..."></textarea>
                  </div>

                  <button type="submit" className="btn-primary full-width">
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
