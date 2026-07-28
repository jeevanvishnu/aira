import React from 'react';
import './AiraPromise.css';
import { 
  RefreshCw, 
  BadgeCheck, 
  ShieldCheck, 
  Gem, 
  Sparkles, 
  Award, 
  Tag,
  Package
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const promises = [
  {
    id: 1,
    title: '100% Value Gold Exchange',
    description: 'We give full value exchange without any deduction on gold jewellery purchased from us.',
    icon: <RefreshCw size={28} strokeWidth={1} />,
  },
  {
    id: 2,
    title: '100% Hallmarked Pure Gold',
    description: 'All our gold jewellery is hallmarked to assure the best purity when you buy.',
    icon: <BadgeCheck size={28} strokeWidth={1} />,
  },
  {
    id: 3,
    title: 'Guaranteed Buyback Value',
    description: 'We offer hassle-free buyback on all our products to protect your investment.',
    icon: <ShieldCheck size={28} strokeWidth={1} />,
  },
  {
    id: 4,
    title: 'Assured Diamond Exchange',
    description: 'Special trade-in values for diamonds to help you upgrade your legacy.',
    icon: <Gem size={28} strokeWidth={1} />,
  },
  {
    id: 5,
    title: 'Lifetime Free Maintenance',
    description: 'Enjoy free polishing and maintenance to ensure your items shine forever.',
    icon: <Sparkles size={28} strokeWidth={1} />,
  },
  {
    id: 6,
    title: 'Certified Fine Diamonds',
    description: 'All diamonds you buy are certified by internationally accredited laboratories.',
    icon: <Award size={28} strokeWidth={1} />,
  },
  {
    id: 7,
    title: 'Transparent Pricing Details',
    description: 'Complete breakdowns of gold weight, stones, making charges, and taxes.',
    icon: <Tag size={28} strokeWidth={1} />,
  },
  {
    id: 8,
    title: 'Free Insured Delivery',
    description: 'Your precious items are fully insured during transit until they reach you safely.',
    icon: <Package size={28} strokeWidth={1} />,
  },
];

const AiraPromise: React.FC = () => {
  return (
    <section className="aira-promise-section">
      <div className="promise-container">
        <ScrollReveal direction="up" className="promise-header">
          <span className="promise-eyebrow">OUR COMMITMENT</span>
          <h2 className="promise-main-title">The Aira Assurance</h2>
          <div className="promise-header-divider"></div>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.2} className="promise-grid">
          {promises.map((promise) => (
            <div key={promise.id} className="promise-item">
              <div className="promise-icon-wrapper">
                {promise.icon}
              </div>
              <h3 className="promise-title">{promise.title}</h3>
              <p className="promise-description">{promise.description}</p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AiraPromise;

