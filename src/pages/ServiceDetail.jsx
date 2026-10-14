import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Users, UserCheck, CheckCircle2, ShieldCheck, ArrowRight,
  Sparkles, Wrench, Sun, Video, PhoneCall, Award, Clock,
  FileCheck2, Building2, Check, HelpCircle, ChevronDown, ChevronUp,
  Headphones, Send, Layers, Sliders, DollarSign, Activity, Image as ImageIcon
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const serviceDatabase = {
  'hr-manpower': {
    id: 'hr-manpower',
    title: 'HR & Human Resources',
    category: 'Workforce Solutions',
    badge: '100% BACKGROUND VERIFIED',
    heroTag: 'DEPLOYMENT-READY TALENT',
    desc: 'End-to-end recruitment, executive staffing, and certified manpower outsourcing with complete statutory PF & ESIC coverage across Pan-India sites.',
    overviewTitle: 'Strategic Workforce Mobilization Built for Enterprise Reliability',
    overviewText: 'Enrally provides comprehensive HR and manpower outsourcing solutions tailored to modern enterprises. We handle the entire employee lifecycle—from sourcing, verification, and technical skill matching to on-site payroll, daily attendance tracking, and monthly statutory compliances. With our structured recruitment pipelines, businesses overcome talent shortages and minimize non-compliance risks.',
    heroImg: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
    capabilities: [
      { title: 'Executive & Technical Staffing', desc: 'Sourcing specialized facility managers, engineers, safety officers, and administrative staff.' },
      { title: 'Blue-Collar Labor Mobilization', desc: 'Deploying assembly line operators, warehouse material handlers, and industrial trade workers.' },
      { title: 'End-to-End Payroll Management', desc: 'Biometric shift tracking, automated pay registers, and monthly wage disbursement.' },
      { title: 'Statutory Compliance Shield', desc: '100% adherence to EPF, ESIC, Professional Tax, Minimum Wages, and Labor Welfare funds.' }
    ],
    features: [
      'Comprehensive 3-tier background check and local police verification',
      'Rapid 72-hour talent mobilization across major industrial and IT hubs',
      'Dedicated on-site Field Operations Officers for shift grooming and discipline',
      '15% dedicated bench reserve for immediate standby replacements',
      'Proactive submission of audited government challans before invoice payments',
      'Standardized behavioral etiquette and safety training for all deployed staff'
    ],
    industries: [
      { name: 'IT & Business Parks', desc: 'Administrative staff, helpdesk associates, and facility coordinators.' },
      { name: 'Warehousing & Logistics', desc: 'Pickers, packers, forklift operators, and dispatch handlers.' },
      { name: 'Manufacturing Plants', desc: 'Machine operators, assembly technicians, and quality inspectors.' },
      { name: 'Healthcare & Hospitals', desc: 'Ward boys, front desk assistants, and biomedical assistants.' }
    ],
    workflow: [
      { step: '01', title: 'Scope & Matrix Definition', desc: 'We assess role specifications, headcounts, shift hours, and compliance tiers.' },
      { step: '02', title: 'Talent Sourcing & Vetting', desc: 'Candidates undergo skill tests, document audits, and biometric police verification.' },
      { step: '03', title: 'Induction & 72-Hour Deployment', desc: 'Personnel deploy in uniform with safety orientation and clear KPIs.' },
      { step: '04', title: 'Payroll & Monthly Audit', desc: 'Timely salary credits, ECR challan generation, and quarterly performance reviews.' }
    ],
    whyEnrally: [
      { title: '100% Legal Immunity', desc: 'Zero liability for principal employers through proactive audited compliance records.' },
      { title: 'Pan-India Footprint', desc: 'Multi-location mobilization capability across Karnataka, NCR, Maharashtra, and Southern states.' },
      { title: 'Single-Window Account Manager', desc: 'Direct point of contact for escalations, roster changes, and billing transparency.' }
    ],
    gallery: [
      { img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80', caption: 'Corporate HR Recruitment & Onboarding' },
      { img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80', caption: 'Executive Talent Interview Session' },
      { img: '/images/hero-team.jpg', caption: 'Field Team Supervisory Briefing' }
    ],
    faqs: [
      { q: 'What is the mobilization turnaround time for HR staffing?', a: 'Standard skilled personnel are mobilized within 48 to 72 hours. Large industrial teams (100+ personnel) are deployed within 5 to 7 business days.' },
      { q: 'How is statutory compliance handled for outsourced employees?', a: 'Enrally operates as the statutory employer of record. We manage EPF, ESIC, and labor registrations, sharing audited government challans monthly.' },
      { q: 'What happens if a deployed staff member is absent?', a: 'We maintain a 15% dedicated bench reserve across all regions to guarantee immediate standby replacement.' }
    ]
  },
  'cleaning-housekeeping': {
    id: 'cleaning-housekeeping',
    title: 'Cleaning & Housekeeping',
    category: 'Facility Hygiene',
    badge: 'HOSPITAL-GRADE SANITIZATION',
    heroTag: 'MECHANIZED GREEN CLEANING',
    desc: 'Mechanized scrubbing, hospital-grade sanitization, eco-friendly consumables, and dedicated housekeeping crews for pristine corporate and industrial spaces.',
    overviewTitle: 'Elevating Workplace Hygiene with Mechanized Precision & Green Standards',
    overviewText: 'Enrally delivers state-of-the-art commercial cleaning and mechanized housekeeping services engineered for grade-A office spaces, hospitals, and industrial shop floors. Our trained janitorial staff employ industrial ride-on scrubbers, micro-fiber sanitization tools, and certified eco-friendly consumables to deliver spotless aesthetics and hygienic environments.',
    heroImg: '/images/cleaning.jpg',
    capabilities: [
      { title: 'Mechanized Floor Care', desc: 'Industrial ride-on scrubbers, single-disc buffing, marble crystallization, and epoxy maintenance.' },
      { title: 'Corporate Janitorial Upkeep', desc: 'Daily dusting, sanitized workstation wiping, washroom hygiene, and pantry support.' },
      { title: 'Hospital Infection Control', desc: 'Color-coded micro-fiber sanitization, biomedical waste segregation, and OT disinfection.' },
      { title: 'Facade & High-Rise Cleaning', desc: 'Certified facade cleaning teams equipped with safety harnesses and cradle rigs.' }
    ],
    features: [
      '100% Green Seal certified, non-toxic, eco-friendly cleaning chemicals',
      'Industrial scrubbing and steam extraction machinery deployed permanently on-site',
      'Hourly QR-code digitized inspection logs on every floor and washroom',
      'Trained staff in cross-contamination prevention and chemical dilution ratios',
      'Bi-weekly supervisory hygiene audits and digital quality sign-offs with client heads',
      'Complete statutory wage and safety PPE compliance for all housekeeping staff'
    ],
    industries: [
      { name: 'Commercial IT Parks', desc: 'Lobbies, common areas, elevators, cafeteria, and executive boardrooms.' },
      { name: 'Hospitals & Clinics', desc: 'Wards, ICUs, OPD clinics, laboratory sanitization, and bio-waste protocols.' },
      { name: 'Manufacturing Hubs', desc: 'Shop-floor degreasing, cleanroom maintenance, and warehouse sweeping.' },
      { name: 'Retail Malls & Showrooms', desc: 'High-gloss floor polishing, escalator care, and high-traffic washroom hygiene.' }
    ],
    workflow: [
      { step: '01', title: 'Premises Hygiene Audit', desc: 'We map floor square footage, high-traffic touchpoints, and equipment requirements.' },
      { step: '02', title: 'Machinery & Consumable Deployment', desc: 'Industrial scrubbers and eco-friendly chemicals are staged on site.' },
      { step: '03', title: 'Crew Induction & Shift Rostering', desc: 'Groomed housekeeping personnel deploy in uniform under shift supervisors.' },
      { step: '04', title: 'Digital QA & Periodic Audits', desc: 'Checklist audits, monthly ATP hygiene tests, and client satisfaction sign-offs.' }
    ],
    whyEnrally: [
      { title: 'Advanced Machinery Suite', desc: 'We deploy ride-on scrubbers and high-pressure washers, eliminating outdated manual mopping.' },
      { title: 'Zero Surface Damage', desc: 'pH-balanced, non-abrasive chemicals protect expensive Italian marble and wooden floors.' },
      { title: 'Trained & Polished Staff', desc: 'Courteous, background-checked personnel equipped with professional uniforms and badges.' }
    ],
    gallery: [
      { img: '/images/cleaning.jpg', caption: 'Mechanized Floor Scrubbing in Corporate Lobby' },
      { img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80', caption: 'High-Grade Commercial Sanitization' },
      { img: '/images/hq.jpg', caption: 'Grade-A Commercial Complex Upkeep' }
    ],
    faqs: [
      { q: 'What types of cleaning chemicals are used on premises?', a: 'We exclusively use certified, eco-safe, pH-neutral green chemicals that sanitize effectively without emitting harmful VOCs or damaging floor surfaces.' },
      { q: 'Can you support round-the-clock 24/7 housekeeping shifts?', a: 'Yes. We structure 24/7 rotating shifts with night crews dedicated to deep mechanized scrubbing and day crews for continuous upkeep.' },
      { q: 'Do you provide specialized facade glass cleaning?', a: 'Yes. Our certified facade specialists operate with cradle systems, safety harnesses, and ropes in full compliance with workplace safety norms.' }
    ]
  },
  'security-surveillance': {
    id: 'security-surveillance',
    title: 'Security & Surveillance',
    category: 'Protection Services',
    badge: 'PSARA LICENSED & VERIFIED',
    heroTag: '24/7 VIGILANCE & ASSET SAFETY',
    desc: 'PSARA-certified security personnel, boom-barrier control, quick reaction teams, and 24/7 CCTV monitoring room operations for secure premises.',
    overviewTitle: 'Uncompromising Physical Security Backed by Modern Surveillance Technology',
    overviewText: 'Enrally provides robust, licensed security solutions designed to protect corporate assets, intellectual property, and personnel. Combining vetted ex-servicemen, trained civilian guards, and state-of-the-art surveillance operators, we ensure seamless access control, strict perimeter vigilance, and prompt emergency response.',
    heroImg: '/images/security.jpg',
    capabilities: [
      { title: 'Guarding & Access Control', desc: 'PSARA-licensed armed and unarmed uniformed guards managing gates and turnstiles.' },
      { title: '24/7 CCTV Control Room Operations', desc: 'Trained tech operators monitoring multi-channel camera walls and perimeter feeds.' },
      { title: 'Quick Reaction Teams (QRT)', desc: 'Mobile incident response squads drilled in evacuation, containment, and fire-safety.' },
      { title: 'Visitor & Vehicle Logistics', desc: 'Digital QR visitor pass management, material inward/outward gate passes, and frisking.' }
    ],
    features: [
      '100% PSARA licensed and police-verified security personnel',
      'Supervisory field inspections and night-shift surprise audits by senior officers',
      'Electronic patrol verification using RFID checkpoint wand systems',
      'Emergency fire-fighting and first-aid certified guards on every shift',
      'Strict loading dock procedures preventing material pilferage or unauthorized dispatch',
      'Customized post orders tailored specifically to your facility layout and risks'
    ],
    industries: [
      { name: 'Corporate Tech Parks', desc: 'Employee turnstiles, visitor badges, executive protection, and server room access.' },
      { name: 'Industrial Plants & SEZs', desc: 'Perimeter fencing, truck weighing scale verification, and material gate passes.' },
      { name: 'Educational Campuses', desc: 'Student transport tracking, anti-ragging security presence, and visitor logging.' },
      { name: 'Gated Townships', desc: 'Boom-barrier automation, vehicle RFID scanners, and 24/7 mobile patrol vans.' }
    ],
    workflow: [
      { step: '01', title: 'Threat & Vulnerability Assessment', desc: 'We inspect entry gates, dead zones, perimeter walls, and lighting.' },
      { step: '02', title: 'Post Orders & Guard Sourcing', desc: 'Custom security protocols drafted and vetted personnel deployed.' },
      { step: '03', title: 'CCTV & Patrol Setup', desc: 'Surveillance monitors integrated with RFID checkpoint tags.' },
      { step: '04', title: 'Daily Incident Logs & Audits', desc: 'Digital visitor reports, shift handovers, and weekly executive briefings.' }
    ],
    whyEnrally: [
      { title: 'Rigorous Ex-Servicemen Training', desc: 'Guards trained in emergency response, customer etiquette, and disciplined posture.' },
      { title: 'Zero Pilferage Record', desc: 'Multi-layer gate checks eliminate inventory leakage and unauthorized material movement.' },
      { title: 'Legal PSARA Standing', desc: 'Fully licensed and bonded with strict adherence to state regulatory standards.' }
    ],
    gallery: [
      { img: '/images/security.jpg', caption: '24/7 Central CCTV Surveillance Control Center' },
      { img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80', caption: 'Uniformed Access Control Security Guards' },
      { img: '/images/support.jpg', caption: 'Emergency Incident Dispatch Operations' }
    ],
    faqs: [
      { q: 'Are your security guards certified under PSARA?', a: 'Yes. Every guard and supervisor is licensed under the Private Security Agencies Regulation Act (PSARA) with verified police credentials.' },
      { q: 'Can you handle automated boom barriers and visitor software?', a: 'Yes. Our guards are tech-trained to operate digital visitor management systems, ANPR cameras, and biometric turnstiles.' },
      { q: 'What emergency procedures are guards trained in?', a: 'All personnel are trained in fire evacuation, basic life support (BLS/CPR), incident containment, and crowd management.' }
    ]
  },
  'civil-construction': {
    id: 'civil-construction',
    title: 'Civil & Construction Maintenance',
    category: 'Engineering & Infrastructure',
    badge: 'TURNKEY MEP & CIVIL UPKEEP',
    heroTag: 'ENGINEERING EXCELLENCE',
    desc: 'Turnkey site civil assistance, electrical/plumbing fit-outs, masonry repairs, structural maintenance crews, and specialized site trades.',
    overviewTitle: 'Maintaining Structural Integrity & Technical Infrastructure Uptime',
    overviewText: 'Enrally provides comprehensive civil maintenance and engineering support services for commercial properties, industrial estates, and infrastructure projects. From preventative civil waterproofing and structural repairs to certified mechanical, electrical, and plumbing (MEP) operations, our technical teams ensure optimal asset lifespan.',
    heroImg: '/images/civil.jpg',
    featureImg: '/images/civil.jpg',
    capabilities: [
      { title: 'Preventative Civil Repairs', desc: 'Masonry repairs, joint sealing, structural waterproofing, and protective epoxy coatings.' },
      { title: 'Commercial Fit-Outs & Alterations', desc: 'Drywall partitioning, false ceiling repairs, tile replacements, and office modifications.' },
      { title: 'MEP Infrastructure Care', desc: 'Certified electricians and plumbers servicing HVAC chillers, DG sets, and water pumps.' },
      { title: 'HSE & Supervisory Oversight', desc: 'Site engineers ensuring workplace safety, tool calibrations, and scaffold safety compliance.' }
    ],
    features: [
      'Site supervisory engineers and certified safety (HSE) officers on duty',
      'Preventative pre-monsoon waterproofing audits preventing costly interior water leaks',
      'Zero-disruption evening and weekend facility overhaul schedules for active offices',
      'Turnkey civil teams handling flooring, painting, carpentry, and electrical wiring',
      'Quick response emergency plumbing and power breakdown troubleshooting teams',
      'Adherence to National Building Code (NBC) standards and workplace health & safety regulations'
    ],
    industries: [
      { name: 'Commercial IT Hubs', desc: 'Tenant office fit-outs, HVAC duct maintenance, and electrical load testing.' },
      { name: 'Manufacturing Plants', desc: 'Heavy-duty epoxy floor resurfacing, machine civil footings, and roof repairs.' },
      { name: 'Hospitals & Labs', desc: 'Medical gas line checks, cleanroom civil sealing, and UPS backup wiring.' },
      { name: 'Residential Complexes', desc: 'External building painting, basement sump maintenance, and water pump servicing.' }
    ],
    workflow: [
      { step: '01', title: 'Engineering Site Inspection', desc: 'Structural health check, electrical thermal imaging, and plumbing tests.' },
      { step: '02', title: 'BOQ & Scope Specification', desc: 'Clear bill of quantities with itemized labor and material costs.' },
      { step: '03', title: 'Safety Briefing & Execution', desc: 'Execution under qualified civil engineers adhering to safety SOPs.' },
      { step: '04', title: 'Quality Sign-Off & Warranty', desc: 'Post-completion inspection, load testing, and maintenance warranty handovers.' }
    ],
    whyEnrally: [
      { title: 'Single Vendor for Civil + MEP', desc: 'Eliminates the complexity of managing multiple disjointed contractors.' },
      { title: 'Preventative Focus', desc: 'Routine preventative audits reduce catastrophic breakdowns and expensive emergency fixes.' },
      { title: 'High Safety Standards', desc: '100% PPE compliance, scaffolding checks, and zero-accident target track record.' }
    ],
    gallery: [
      { img: '/images/civil.jpg', caption: 'Civil Engineering Site Supervision & Blueprint Review' },
      { img: '/images/mep.jpg', caption: 'Commercial MEP Chiller & Electrical Panel Servicing' },
      { img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80', caption: 'Structural Infrastructure Maintenance Crews' }
    ],
    faqs: [
      { q: 'Can civil work be scheduled during non-business hours?', a: 'Yes. To avoid noise or operational disruption, our civil and painting teams execute heavy maintenance during night shifts and weekends.' },
      { q: 'Are your technicians licensed and certified?', a: 'All electrical technicians hold wireman licenses, and plumbing/civil crews are trade-certified under qualified project engineers.' },
      { q: 'Do you provide turnkey material supply along with labor?', a: 'Yes. We offer both labor-only contracts and turnkey material-inclusive contracts with transparent rate cards.' }
    ]
  },
  'solar-manpower': {
    id: 'solar-manpower',
    title: 'Solar Manpower & Maintenance',
    category: 'Renewable Energy',
    badge: 'SPECIALIZED GREEN ENERGY CREWS',
    heroTag: 'SOLAR EFFICIENCY MAXIMIZED',
    desc: 'Skilled solar technicians, electrical engineers, photovoltaic array cleaners, and maintenance personnel for utility-scale solar farms.',
    overviewTitle: 'Deploying Disciplined Technical Crews for Utility-Scale Solar Projects',
    overviewText: 'Enrally provides specialized workforce and operation & maintenance (O&M) teams for solar energy developers and EPC contractors. Our trained technicians handle module mounting, DC cable dressing, inverter preventative servicing, and scheduled non-abrasive solar panel washing to ensure maximum kilowatt-hour generation.',
    heroImg: '/images/solar.jpg',
    featureImg: '/images/solar.jpg',
    capabilities: [
      { title: 'Solar Array Installation Crews', desc: 'Structure mounting, torque checking, panel alignment, and module fixing.' },
      { title: 'Electrical DC/AC Cable Dressing', desc: 'Combiner box terminations, MC4 crimping, inverter connections, and transformer wiring.' },
      { title: 'Scheduled Panel Cleaning', desc: 'Trained crews using demineralized water and automated tractor washers to clear dust.' },
      { title: 'Remote Solar Farm Security', desc: '24/7 perimeter guards and drone monitoring preventing cable theft on remote tracts.' }
    ],
    features: [
      'Specialized workforce trained in high-voltage DC safety and arc-flash protocols',
      'Capable of managing 100+ technician camp accommodations at remote solar parks',
      'Scheduled cleaning cycles that improve photovoltaic generation yield by up to 18%',
      'String-level testing, open-circuit voltage verification, and thermal hotspot audits',
      'Vegetation control, gravel maintenance, and anti-shading ground care',
      'Full compliance with Central Electricity Authority (CEA) safety guidelines'
    ],
    industries: [
      { name: 'Utility-Scale Solar Parks', desc: '10MW to 500MW ground-mounted solar power plants across rural tracts.' },
      { name: 'Commercial Rooftop Solar', desc: 'Factory and corporate building rooftop panel installation and maintenance.' },
      { name: 'Floating Solar Projects', desc: 'Specialized marine-safe module assembly and floating pontoon anchoring.' },
      { name: 'Off-Grid & Hybrid Plants', desc: 'Battery energy storage system (BESS) wiring and inverter upkeep.' }
    ],
    workflow: [
      { step: '01', title: 'Solar Farm Layout Mapping', desc: 'We assess MW capacity, terrain conditions, water availability, and access roads.' },
      { step: '02', title: 'Camp Setup & Staff Mobilization', desc: 'Housing, logistics, safety PPE, and tool kits mobilized on-site.' },
      { step: '03', title: 'Execution & Module Maintenance', desc: 'Daily cleaning rounds, mechanical torquing, and electrical health logs.' },
      { step: '04', title: 'Generation Tracking & Reports', desc: 'SCADA generation reports, soiling ratio logs, and preventative maintenance sign-offs.' }
    ],
    whyEnrally: [
      { title: 'Proven Remote Mobilization', desc: 'Experienced in deploying self-sufficient technician crews to remote semi-arid solar belts.' },
      { title: 'Generation Yield Boost', desc: 'Regular scientific panel washing directly enhances your plant power output and ROI.' },
      { title: 'Zero Cable Theft Incidents', desc: 'Vigilant security and perimeter patrol protocols safeguard multi-crore infrastructure.' }
    ],
    gallery: [
      { img: '/images/solar.jpg', caption: 'Photovoltaic Array Alignment & Installation' },
      { img: '/images/mep.jpg', caption: 'High-Voltage Inverter & Transformer Maintenance' },
      { img: '/images/civil.jpg', caption: 'Site Civil Foundation & Structural Mounting' }
    ],
    faqs: [
      { q: 'How often should solar panels be washed in dusty regions?', a: 'Depending on regional dust soiling rates, we recommend bi-weekly or monthly washing cycles to prevent 15-20% generation losses.' },
      { q: 'Can you mobilize large crews for short-term installation phases?', a: 'Yes. We frequently deploy 50 to 150 technicians for 3-6 month peak EPC installation sprints.' },
      { q: 'Do your teams bring their own cleaning equipment?', a: 'We can provide both manual telescopic cleaning squeegees and tractor-mounted high-pressure washing machinery.' }
    ]
  }
};

export default function ServiceDetail() {
  useScrollReveal();
  const { serviceId } = useParams();
  const service = serviceDatabase[serviceId] || serviceDatabase['hr-manpower'];

  const [openFaq, setOpenFaq] = useState(0);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? -1 : idx);
  };

  const otherServices = Object.keys(serviceDatabase)
    .filter(id => id !== service.id)
    .slice(0, 3)
    .map(id => serviceDatabase[id]);

  return (
    <div className="service-detail-complete-page">
      {/* ============================================================
          01. BREADCRUMBS & SERVICE HERO
          ============================================================ */}
      <section className="sd-hero-section">
        <div className="container">
          {/* Breadcrumb Navigation */}
          <nav className="sd-breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="bc-sep">/</span>
            <Link to="/services">Services</Link>
            <span className="bc-sep">/</span>
            <span className="bc-current">{service.title}</span>
          </nav>

          <div className="sd-hero-grid">
            <div className="sd-hero-text">
              <div className="sd-hero-badges-row">
                <span className="sd-hero-category-tag">{service.category}</span>
                <span className="sd-hero-badge-tag">
                  <Sparkles size={13} style={{ display: 'inline', marginRight: 5, verticalAlign: -1 }} />
                  {service.badge}
                </span>
              </div>

              <h1>{service.title}</h1>
              <p className="sd-hero-lead">{service.desc}</p>

              <div className="sd-hero-actions-row">
                <a href="#inquiry-form" className="btn-cyan-cta">
                  <span>Request Custom Quote</span>
                  <ArrowRight size={17} />
                </a>
                <a href="tel:+918277611643" className="btn-outline-white-cta">
                  <PhoneCall size={17} />
                  <span>Speak with Operations</span>
                </a>
              </div>

              <div className="sd-hero-assurance-bar">
                <div className="sd-assurance-item">
                  <CheckCircle2 size={17} color="#38bdf8" />
                  <span>100% Statutory PF/ESIC Compliance</span>
                </div>
                <div className="sd-assurance-item">
                  <CheckCircle2 size={17} color="#38bdf8" />
                  <span>Rapid 72-Hour Mobilization</span>
                </div>
                <div className="sd-assurance-item">
                  <CheckCircle2 size={17} color="#38bdf8" />
                  <span>Guaranteed Standby Backup</span>
                </div>
              </div>
            </div>

            <div className="sd-hero-visual">
              <div className="sd-hero-img-box">
                <img src={service.heroImg} alt={service.title} />
                <div className="sd-floating-sla-tag">
                  <ShieldCheck size={24} color="#38bdf8" />
                  <div>
                    <strong>SLA Guaranteed Operations</strong>
                    <p>Audited Monthly Performance & Zero Risk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ============================================================
          02. SERVICE OVERVIEW
          ============================================================ */}
      <section className="sd-overview-section" data-reveal="fade-up">
        <div className="container">
          <div className="sd-overview-card">
            <span className="overview-pre-badge">OVERVIEW & SCOPE</span>
            <h2 className="accent-line-heading">{service.overviewTitle}</h2>
            <p className="overview-narrative-p">{service.overviewText}</p>
          </div>
        </div>
      </section>

      {/* ============================================================
          03. SERVICES & CAPABILITIES
          ============================================================ */}
      <section className="sd-capabilities-section">
        <div className="container">
          <div className="section-head-center" data-reveal="fade-up">
            <span className="overview-pre-badge">CORE CAPABILITIES</span>
            <h2 className="block-title accent-line-heading center-line">Key Capabilities & Deliverables</h2>
            <p className="block-subtitle">Engineered to support seamless facility operations with measurable SLAs.</p>
          </div>

          <div className="capabilities-quad-grid" data-stagger>
            {service.capabilities.map((cap, cIdx) => (
              <div key={cIdx} className="capability-card">
                <div className="cap-card-header">
                  <div className="cap-icon-bubble">
                    <Sparkles size={20} />
                  </div>
                  <span className="cap-badge-number">0{cIdx + 1}</span>
                </div>
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          04. KEY FEATURES & BENEFITS
          ============================================================ */}
      <section className="sd-features-section">
        <div className="container">
          <div className="features-split-grid">
            <div className="features-list-pane" data-reveal="fade-right">
              <span className="overview-pre-badge">WHY IT WORKS</span>
              <h2 className="features-pane-heading accent-line-heading">Key Features & Value Propositions</h2>
              <ul className="service-checklist-styled" data-stagger>
                {service.features.map((feat, fIdx) => (
                  <li key={fIdx}>
                    <span className="check-bullet-icon">
                      <CheckCircle2 size={16} />
                    </span>
                    <span className="bullet-text">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="features-image-pane" data-reveal="fade-left">
              <div className="feature-frame-enhanced">
                <img src={service.heroImg} alt={`${service.title} Key Features`} />
                <div className="feature-frame-tag">
                  <strong>Enrally Quality Assurance</strong>
                  <p>Certified Supervisors on Duty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          05. INDUSTRIES & APPLICATIONS
          ============================================================ */}
      <section className="sd-industries-section">
        <div className="container">
          <div className="section-head-center" data-reveal="fade-up">
            <span className="overview-pre-badge">TARGET SECTORS</span>
            <h2 className="block-title accent-line-heading center-line">Industries & Applications</h2>
            <p className="block-subtitle">Customized operational deployment across specialized sector environments.</p>
          </div>

          <div className="sd-industries-grid" data-stagger>
            {service.industries.map((ind, iIdx) => (
              <div key={iIdx} className="sd-industry-card">
                <Building2 size={24} className="sdi-icon" />
                <h3>{ind.name}</h3>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          06. HOW THE SERVICE WORKS (Workflow with Progressive Line)
          ============================================================ */}
      <section className="sd-workflow-section" data-reveal="fade-up">
        <div className="container">
          <div className="section-head-center">
            <span className="overview-pre-badge">STRUCTURED EXECUTION</span>
            <h2 className="block-title accent-line-heading center-line">How the Service Works</h2>
            <p className="block-subtitle">From initial site inspection to ongoing shift governance — a seamless 4-step delivery lifecycle.</p>
          </div>

          <div className="workflow-steps-grid" data-stagger>
            {service.workflow.map((w, wIdx) => (
              <div key={wIdx} className="workflow-step-card">
                <div className="wf-step-number">{w.step}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          07. WHY ENRALLY FOR THIS SERVICE
          ============================================================ */}
      <section className="sd-why-section">
        <div className="container">
          <div className="section-head-center" data-reveal="fade-up">
            <span className="overview-pre-badge">THE ENRALLY ADVANTAGE</span>
            <h2 className="block-title accent-line-heading center-line">Why Enrally for {service.title}</h2>
            <p className="block-subtitle">Guaranteed compliance, certified supervisors, and transparent line-item pricing.</p>
          </div>

          <div className="sd-why-grid" data-stagger>
            {service.whyEnrally.map((item, yIdx) => (
              <div key={yIdx} className="sd-why-card">
                <div className="sdw-icon-box">
                  <Award size={26} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          08. PROJECT GALLERY / IMAGERY
          ============================================================ */}
      <section className="sd-gallery-section">
        <div className="container">
          <div className="section-head-center" data-reveal="fade-up">
            <span className="overview-pre-badge">ON-SITE OPERATIONS</span>
            <h2 className="block-title accent-line-heading center-line">Project Gallery & Operations in Action</h2>
            <p className="block-subtitle">Real imagery from client facility deployments and active service crews.</p>
          </div>

          <div className="sd-gallery-grid" data-stagger>
            {service.gallery.map((g, gIdx) => (
              <div key={gIdx} className="sd-gallery-item">
                <img src={g.img} alt={g.caption} />
                <div className="sd-gallery-caption">
                  <ImageIcon size={14} />
                  <span>{g.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          09. FREQUENTLY ASKED QUESTIONS
          ============================================================ */}
      <section className="sd-faq-section" data-reveal="fade-up">
        <div className="container">
          <div className="section-head-center">
            <span className="overview-pre-badge">COMMON QUERIES</span>
            <h2 className="block-title accent-line-heading center-line">Frequently Asked Questions</h2>
            <p className="block-subtitle">Clear answers regarding staffing mobilization, equipment, and service agreements.</p>
          </div>

          <div className="faq-accordion-container">
            {service.faqs.map((faq, idx) => (
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
          10. RELATED SERVICES
          ============================================================ */}
      <section className="other-services-section">
        <div className="container">
          <div className="section-head-center" data-reveal="fade-up">
            <span className="overview-pre-badge">EXPLORE MORE</span>
            <h2 className="block-title accent-line-heading center-line">Related Facility Services</h2>
            <p className="block-subtitle">Discover how Enrally provides full integrated coverage across your facility portfolio.</p>
          </div>

          <div className="other-services-grid" data-stagger>
            {otherServices.map((os) => (
              <div key={os.id} className="other-srv-card">
                <div className="other-srv-img">
                  <img src={os.heroImg} alt={os.title} />
                  <span className="other-srv-tag">{os.category}</span>
                </div>
                <div className="other-srv-body">
                  <h4>{os.title}</h4>
                  <p>{os.desc}</p>
                  <Link to={`/services/${os.id}`} className="other-srv-link">
                    <span>View Specifications</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          11. FINAL CTA & INQUIRY FORM
          ============================================================ */}
      <section id="inquiry-form" className="home-quote-section">
        <div className="container">
          <div className="home-quote-card">
            <div className="quote-text-side">
              <span className="t-cta-badge">GET STARTED TODAY</span>
              <h2>Request a Custom Proposal for {service.title}</h2>
              <p>
                Get a comprehensive site assessment, staffing matrix, and transparent line-item rate card delivered within 24 hours. Zero compliance risks, guaranteed SLAs.
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
                  <span>Dedicated Key Account Director assigned</span>
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
                  <h3>Proposal Request Received!</h3>
                  <p>Our operations director will review your facility specifications and contact you shortly.</p>
                  <button className="btn-cyan-pill" onClick={() => setQuoteSubmitted(false)}>Submit Another Inquiry</button>
                </div>
              ) : (
                <form className="screen10-quote-form" onSubmit={(e) => { e.preventDefault(); setQuoteSubmitted(true); }}>
                  <h3 className="form-box-title">Get an Instant Quote</h3>

                  <div className="screen-form-row">
                    <div className="screen-input-group">
                      <label htmlFor="sd-name">Full Name *</label>
                      <input id="sd-name" type="text" placeholder="e.g. Anand Sharma" required />
                    </div>
                    <div className="screen-input-group">
                      <label htmlFor="sd-comp">Company Name *</label>
                      <input id="sd-comp" type="text" placeholder="e.g. Apex Enterprises" required />
                    </div>
                  </div>

                  <div className="screen-form-row">
                    <div className="screen-input-group">
                      <label htmlFor="sd-phone">Phone Number *</label>
                      <input id="sd-phone" type="tel" placeholder="+91 98765 00000" required />
                    </div>
                    <div className="screen-input-group">
                      <label htmlFor="sd-email">Work Email *</label>
                      <input id="sd-email" type="email" placeholder="anand@company.com" required />
                    </div>
                  </div>

                  <div className="screen-input-group full">
                    <label htmlFor="sd-serv">Service Selected</label>
                    <input id="sd-serv" type="text" value={service.title} readOnly />
                  </div>

                  <div className="screen-input-group full">
                    <label htmlFor="sd-details">Facility Scope / Estimated Requirements</label>
                    <textarea id="sd-details" rows={3} placeholder="Mention location, square footage, team size, shift timings, or special requirements..."></textarea>
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
