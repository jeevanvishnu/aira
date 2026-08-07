import React, { useState } from 'react';
import './Contact.css';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out. Aira Jewels will contact you shortly.');
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        {/* Left Side: Contact Information */}
        <ScrollReveal direction="left" className="contact-info-wrapper">
          <span className="contact-info-eyebrow">CONNECT</span>
          <h2 className="contact-title">Get in Touch</h2>
          <div className="contact-info-divider"></div>
          <p className="contact-subtitle">
            We invite you to reach out for bespoke inquiries, private store appointments, or assistance with our collections.
          </p>
          
          <div className="contact-details">
            <div className="contact-detail-item">
              <MapPin className="contact-icon" size={20} strokeWidth={1.5} />
              <div>
                <h4>Visit Our Store</h4>
                <p>8th Street, Al Ghuwair<br/>Near Rolla Square Park<br/>Rolla - 97629, Sharjah - UAE</p>
              </div>
            </div>
            
            <div className="contact-detail-item">
              <Phone className="contact-icon" size={20} strokeWidth={1.5} />
              <div>
                <h4>Call Us</h4>
                <p>+971 50 184 7916<br/>+971 65 64 6425</p>
              </div>
            </div>
            
            <div className="contact-detail-item">
              <Mail className="contact-icon" size={20} strokeWidth={1.5} />
              <div>
                <h4>Email Us</h4>
                <p>contact@airajewels.com</p>
              </div>
            </div>
            
            <div className="contact-detail-item">
              <Clock className="contact-icon" size={20} strokeWidth={1.5} />
              <div>
                <h4>Store Hours</h4>
                <p>Monday - Sunday: 10AM - 10PM</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Side: Contact Form */}
        <ScrollReveal direction="right" className="contact-form-wrapper">
          <h3 className="form-title">Send us a Message</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            
            <div className="form-group">
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
            
            <div className="form-group">
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
            
            <div className="form-group">
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
            
            <div className="form-group">
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
            
            <button type="submit" className="btn-gold contact-submit-btn">
              Send Message
            </button>
          </form>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Contact;

