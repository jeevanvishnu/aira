import React from 'react';
import './AiraPromise.css';
import { 
  RefreshCw, 
  BadgeCheck, 
  ShieldCheck, 
  Gem, 
  Sparkles, 
  Award, 
  Tag 
} from 'lucide-react';

const promises = [
  {
    id: 1,
    title: '100% VALUE ON GOLD EXCHANGE',
    description: 'we give full value exchange without any deduction on gold jewellery purchased from us',
    icon: <RefreshCw size={32} strokeWidth={1.5} />,
  },
  {
    id: 2,
    title: '100% HALLMARKED PURE GOLD',
    description: 'our all gold jewellery hallmarked to assure the best purity when you buy',
    icon: <BadgeCheck size={32} strokeWidth={1.5} />,
  },
  {
    id: 3,
    title: 'GUARANTEED BUYBACK',
    description: 'we offer buyback of all our products to ensure you get the best value',
    icon: <ShieldCheck size={32} strokeWidth={1.5} />,
  },
  {
    id: 4,
    title: 'ASSURED DIAMOND EXCHANGE VALUE',
    description: 'our all gold jewellery hallmarked to assure the best purity when you buy',
    icon: <Gem size={32} strokeWidth={1.5} />,
  },
  {
    id: 5,
    title: 'LIFETIME MAINTENANCE',
    description: 'we offer lifetime free maintenance for the jewellery to ensure that it makes you shine forever',
    icon: <Sparkles size={32} strokeWidth={1.5} />,
  },
  {
    id: 6,
    title: 'CERTIFIED DIAMONDS',
    description: 'all the diamonds you buy from us are certified by internationally accredited laboratories',
    icon: <Award size={32} strokeWidth={1.5} />,
  },
  {
    id: 7,
    title: 'TRANSPARENT PRICING',
    description: 'we provide exact details of the components of jewellery like gold weight and stone weight, making charges, taxes, etc',
    icon: <Tag size={32} strokeWidth={1.5} />,
  },
];

const AiraPromise: React.FC = () => {
  return (
    <section className="aira-promise-section">
      <div className="promise-container">
        <h2 className="promise-main-title">AIRA ASSURANCE</h2>
        
        <div className="promise-grid">
          {promises.map((promise) => (
            <div key={promise.id} className="promise-item">
              <div className="promise-icon-wrapper">
                {promise.icon}
              </div>
              <h3 className="promise-title">{promise.title}</h3>
              <p className="promise-description">{promise.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiraPromise;
