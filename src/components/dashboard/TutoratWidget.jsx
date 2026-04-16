import React from 'react'

export default function TutoratWidget() {
  return (
    <div className="tutorat glass stagger-5">
      {/* Ornement starburst */}
      <div className="ornament ornament--top-right">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <line x1="10" y1="0" x2="10" y2="20" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
          <line x1="0" y1="10" x2="20" y2="10" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
          <line x1="2.93" y1="2.93" x2="17.07" y2="17.07" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
          <line x1="17.07" y1="2.93" x2="2.93" y2="17.07" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
        </svg>
      </div>
      <div className="tutorat__title">Tutorat</div>
      <div className="tutorat__cta">
        <a href="https://www.collegelacite.ca/zone-reussite" target="_blank" rel="noopener noreferrer">
          Faire une demande de tutorat — c'est gratuit
        </a>
      </div>
    </div>
  )
}
