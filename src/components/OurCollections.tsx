import { useEffect, useRef, useState } from 'react';
import './OurCollections.css';

const collections = [
  { id: 'rings', title: 'Rings', subtitle: 'Eternity & Engagement' },
  { id: 'necklaces', title: 'Necklaces', subtitle: 'Statement & Pendants' },
  { id: 'bracelets', title: 'Bracelets', subtitle: 'Bangles & Chains' },
  { id: 'earrings', title: 'Earrings', subtitle: 'Studs & Drops' },
];

export default function OurCollections() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (sectionRef.current) observer.unobserve(sectionRef.current);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section 
      id="collections" 
      className={`collections-section ${isVisible ? 'is-visible' : ''}`}
      ref={sectionRef}
    >
      <div className="collections-header">
        <h2 className="collections-title">DISCOVER THE COLLECTIONS</h2>
        <p className="collections-subtitle">Curated masterpieces for every occasion.</p>
      </div>

      <div className="collections-grid">
        {collections.map((item, index) => (
          <div 
            key={item.id} 
            className="collection-card" 
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            <div className="collection-card-inner">
              <div className="collection-bg-pattern"></div>
              <div className="collection-content">
                <span className="collection-number">0{index + 1}</span>
                <h3 className="collection-name">{item.title}</h3>
                <p className="collection-sub">{item.subtitle}</p>
                <div className="collection-explore">
                  Explore <span className="explore-arrow">→</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
