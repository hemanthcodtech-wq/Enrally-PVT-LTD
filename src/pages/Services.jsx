import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    'All',
    'Workforce',
    'Facility Management',
    'Technical & Infrastructure',
    'Business Support'
  ];

  const allServices = [
    {
      id: 'hr-manpower',
      title: 'HR & Human Resources',
      category: 'Workforce',
      link: '/services/hr-manpower',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'industrial-manpower',
      title: 'Industrial Manpower',
      category: 'Workforce',
      link: '/services/hr-manpower',
      img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'security-surveillance',
      title: 'Security & Surveillance',
      category: 'Facility Management',
      link: '/services/security-surveillance',
      img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'cleaning-housekeeping',
      title: 'Cleaning & Housekeeping',
      category: 'Facility Management',
      link: '/services/cleaning-housekeeping',
      img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'civil-construction',
      title: 'Civil & Construction',
      category: 'Technical & Infrastructure',
      link: '/services/civil-construction',
      img: '/images/civil.jpg'
    },
    {
      id: 'solar-manpower',
      title: 'Solar Manpower',
      category: 'Technical & Infrastructure',
      link: '/services/solar-manpower',
      img: '/images/solar.jpg'
    },
    {
      id: 'mep-services',
      title: 'MEP Services',
      category: 'Technical & Infrastructure',
      link: '/services/civil-construction',
      img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'government-tender-support',
      title: 'Government Tender Support',
      category: 'Business Support',
      link: '/services/hr-manpower',
      img: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const filteredServices = activeFilter === 'All' 
    ? allServices 
    : allServices.filter(s => s.category === activeFilter);

  return (
    <div className="inner-page">
      {/* 03. PAGE HEADER BANNER (Dark Navy with Engineers) */}
      <section className="dark-page-banner">
        <div className="container">
          <h1 className="banner-title">Our Services</h1>
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link> <span>/</span> <span className="current">Services</span>
          </div>
          <p className="banner-subtitle">
            A comprehensive range of facility management, manpower supply, and industrial support services.
          </p>
        </div>
      </section>

      {/* FILTER PILLS STRIP */}
      <section className="services-filter-strip">
        <div className="container">
          <div className="filters-wrapper">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 8 SERVICE CARDS GRID (4 per row matching screenshot) */}
          <div className="services-overview-grid">
            {filteredServices.map((srv) => (
              <div key={srv.id} className="core-card">
                <div className="core-card-img">
                  <img src={srv.img} alt={srv.title} />
                </div>
                <div className="core-card-bottom">
                  <h4>{srv.title}</h4>
                  <Link to={srv.link} className="core-arrow-btn" aria-label={`View ${srv.title}`}>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
