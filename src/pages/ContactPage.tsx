import React, { useState, useEffect } from 'react';
import './ContactPage.css';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import HeroBg from '../assetss/hero/hero_1.webp';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out. Aira Jewels will contact you shortly.');
  };

  return (
    <div className="contact-page">
      {/* Premium Hero Section */}
      <section 
        className="contact-hero" 
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <ScrollReveal direction="up">
            <span className="contact-hero-eyebrow">CONNECT WITH AIRA</span>
            <h1 className="contact-hero-title">Contact Us</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Overlapping Content Card */}
      <section className="contact-content-wrapper">
        <div className="contact-main-card">
          
          {/* Left Side: Contact Information */}
          <div className="contact-info-panel">
            <ScrollReveal direction="left">
              <h2 className="info-panel-title">Get in Touch</h2>
              <div className="info-panel-divider"></div>
              <p className="info-panel-subtitle">
                We invite you to reach out for bespoke inquiries, private store appointments, or assistance with our exclusive collections.
              </p>
              
              <div className="info-details-list">
                <div className="info-detail-item">
                  <div className="info-icon-wrapper"><MapPin size={22} strokeWidth={1.2} /></div>
                  <div>
                    <h4>Visit Our Store</h4>
                    <p>8th Street, Al Ghuwair<br/>Near Rolla Square Park<br/>Rolla - Sharjah - UAE</p>
                  </div>
                </div>
                
                <div className="info-detail-item">
                  <div className="info-icon-wrapper"><Phone size={22} strokeWidth={1.2} /></div>
                  <div>
                    <h4>Call Us</h4>
                    <p>+971 50 184 7916<br/>(06) 564 6425</p>
                  </div>
                </div>
                
                <div className="info-detail-item">
                  <div className="info-icon-wrapper"><Mail size={22} strokeWidth={1.2} /></div>
                  <div>
                    <h4>Email Us</h4>
                    <p>Info@airajewels.ae</p>
                  </div>
                </div>
                
                <div className="info-detail-item">
                  <div className="info-icon-wrapper"><Clock size={22} strokeWidth={1.2} /></div>
                  <div>
                    <h4>Store Hours</h4>
                    <p>10:00 AM - 10:30 PM</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact-form-panel">
            <ScrollReveal direction="right">
              <h3 className="form-panel-title">Send us a Message</h3>
              <form className="premium-contact-form" onSubmit={handleSubmit}>
                
                <div className="form-group-premium">
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    placeholder=" "
                  />
                  <label htmlFor="name">Full Name</label>
                </div>
                
                <div className="form-group-premium">
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    placeholder=" "
                  />
                  <label htmlFor="email">Email Address</label>
                </div>
                
                <div className="form-group-premium">
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder=" "
                    required
                  />
                  <label htmlFor="phone">Phone Number</label>
                </div>
                
                <div className="form-group-premium">
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    rows={4}
                    placeholder=" "
                  ></textarea>
                  <label htmlFor="message">Your Message</label>
                </div>
                
                <button type="submit" className="btn-premium-submit">
                  <span>Send Message</span>
                </button>
              </form>
            </ScrollReveal>
          </div>
          
        </div>
      </section>

      {/* Full-width Map Section */}
      <section className="contact-map-section">
        <ScrollReveal direction="up" className="premium-map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.44116953737!2d55.383992785835595!3d25.356526767509628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b0038dde073%3A0x26fbe84764f78186!2sAira%20jewels!5e0!3m2!1sen!2sin!4v1786364421124!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{border: 0}} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
            title="Aira Jewels Location"
          ></iframe>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default ContactPage;
