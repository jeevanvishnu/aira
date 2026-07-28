import { useEffect, useRef, useState } from 'react';
import './OurStory.css';
import brandAmbassador from '../assets/brand_ambassador.png';

export default function OurStory() {
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
      { threshold: 0.12 }
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
      id="about"
      className={`story-section ${isVisible ? 'is-visible' : ''}`}
      ref={sectionRef}
    >
      <div className="story-container">

        {/* ── Image — flush to left edge ── */}
        <div className="story-image-container">
          <div className="story-image-outer-bezel">
            <div className="story-image-inner-bezel">
              <img
                src={brandAmbassador}
                alt="Brand Ambassador Ariana Grande"
                className="story-image"
              />
              <div className="story-image-overlay"></div>
            </div>
          </div>
        </div>

        {/* ── Text Content ── */}
        <div className="story-content">
          <span className="story-eyebrow">Est. 2020 · Aira Jewels</span>
          <h2 className="story-title">OUR STORY</h2>
          <div className="story-title-divider"></div>

          <div className="story-text">
            <p>
              We are passionate artisans and designers dedicated to bringing you
              exquisite jewelry that reflects timeless beauty and modern style. With
              decades of experience and a deep love for the craft, we create pieces
              that celebrate life's most precious moments.
            </p>
            <p>
              Discover a world where magic and logic collide, where the
              transformative power of crystal shines and joyful self-expression brings
              style fantasies to life. Starring pop icon and Global Brand Ambassador
              Ariana Grande.
            </p>
          </div>

          <button className="story-cta">Discover More</button>
        </div>

      </div>
    </section>
  );
}
