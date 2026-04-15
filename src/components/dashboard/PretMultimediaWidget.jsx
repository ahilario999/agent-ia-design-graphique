import React from 'react'

export default function PretMultimediaWidget() {
  return (
    <div className="widget-small glass stagger-6">
      <div className="widget-small__title">Prêt Multimédia</div>
      <div className="widget-small__icons">
        {/* Flèche droite */}
        <div className="widget-small__icon-circle">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5">
            <line x1="4" y1="8" x2="12" y2="8" />
            <polyline points="9,5 12,8 9,11" />
          </svg>
        </div>
        {/* Grille pixels */}
        <div className="widget-small__icon-circle">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1">
            <rect x="4" y="4" width="3" height="3" />
            <rect x="9" y="4" width="3" height="3" />
            <rect x="4" y="9" width="3" height="3" />
            <rect x="9" y="9" width="3" height="3" />
          </svg>
        </div>
        {/* Flèche haut */}
        <div className="widget-small__icon-circle">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5">
            <line x1="8" y1="12" x2="8" y2="4" />
            <polyline points="5,7 8,4 11,7" />
          </svg>
        </div>
      </div>
      <div className="widget-small__detail">
        Local D2070<br />Gratuit avec votre carte étudiante
      </div>
    </div>
  )
}
