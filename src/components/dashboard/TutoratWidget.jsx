import React from 'react'

export default function TutoratWidget() {
  return (
    <div className="tutorat glass stagger-5">
      {/* Ornement starburst style B.R.O — 4× plus gros */}
      <div className="ornament ornament--top-right">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          {/* 8 branches du starburst */}
          <line x1="40" y1="2" x2="40" y2="78" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8"/>
          <line x1="2" y1="40" x2="78" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8"/>
          <line x1="11.7" y1="11.7" x2="68.3" y2="68.3" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8"/>
          <line x1="68.3" y1="11.7" x2="11.7" y2="68.3" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8"/>
          {/* Points aux extrémités */}
          <circle cx="40" cy="2" r="2" fill="rgba(255,255,255,0.25)"/>
          <circle cx="78" cy="40" r="2" fill="rgba(255,255,255,0.25)"/>
          <circle cx="40" cy="78" r="2" fill="rgba(255,255,255,0.25)"/>
          <circle cx="2" cy="40" r="2" fill="rgba(255,255,255,0.25)"/>
          {/* Cercle centre */}
          <circle cx="40" cy="40" r="3" fill="rgba(255,255,255,0.15)"/>
        </svg>
      </div>

      <div className="tutorat__title">Tutorat</div>

      {/* Ligne décorative style B.R.O */}
      <div className="widget-ornament-line">
        <span className="widget-ornament-line__dot" />
        <span className="widget-ornament-line__rule" />
        <span className="widget-ornament-line__dot" />
      </div>

      <div className="tutorat__cta">
        <a href="https://www.collegelacite.ca/zone-reussite" target="_blank" rel="noopener noreferrer">
          Faire une demande de tutorat — c'est gratuit
        </a>
      </div>
    </div>
  )
}
