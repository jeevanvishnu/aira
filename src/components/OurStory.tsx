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
      { threshold: 0.15 }
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
      className={`story-premium-split ${isVisible ? 'is-visible' : ''}`}
      ref={sectionRef}
    >
      <div className="story-split-container">
        
        {/* Left Side: Full Bleed Image */}
        <div className="story-image-side">
          <img
            src={brandAmbassador}
            alt="Brand Ambassador Ariana Grande"
            className="story-full-image"
          />
        </div>

        {/* Right Side: Clean Typography */}
        <div className="story-text-side">
          <div className="story-watermark">AIRA</div>
          
          <div className="story-text-content">
            <h2 className="story-title">OUR STORY</h2>
            <div className="story-title-divider"></div>

            <div className="story-paragraphs">
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
          </div>
        </div>

      </div>
    </section>
  );
}
