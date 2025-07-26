
'use client';
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const { content } = useLanguage();

  return (
    <main id="home" className="hero-main">
      <div className="hero-container">
        {/* Background with gradient */}
        <div className="hero-background"></div>
        
        {/* Decorative circles */}
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>

        <div className="hero-content">
          <div className="hero-grid">
            {/* Content */}
            <div className="hero-text">
              <div className="text-content">
                <h2 className="hero-title">
                  {content.hero.title}
                </h2>
                <p className="hero-subtitle">
                  {content.hero.subtitle}
                </p>
              </div>

              {/* CTA Button */}
              <div className="cta-container">
                <button className="cta-button">
                  <svg className="download-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>{content.hero.downloadCV}</span>
                </button>
              </div>
            </div>

            {/* Right side - Visual element */}
            <div className="hero-visual">
              <div className="profile-container">
                {/* Profile image placeholder */}
                <div className="profile-image">
                  <svg className="profile-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                
                {/* Decorative elements around profile */}
                <div className="decoration decoration-1"></div>
                <div className="decoration decoration-2"></div>
                <div className="decoration decoration-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;