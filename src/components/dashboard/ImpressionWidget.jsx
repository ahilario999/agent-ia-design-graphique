import React from 'react'

export default function ImpressionWidget() {
  return (
    <div className="widget-small glass stagger-6">
      <div className="widget-small__icons">
        <div className="widget-small__icon-circle">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5">
            <circle cx="8" cy="8" r="5" />
          </svg>
        </div>
        <div className="widget-small__icon-circle">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5">
            <line x1="4" y1="8" x2="12" y2="8" />
            <line x1="8" y1="4" x2="8" y2="12" />
          </svg>
        </div>
      </div>
      <div className="widget-small__subtitle">Comptez 5 jours ouvrables</div>
      <div className="widget-small__title">Impression</div>
      <div className="widget-small__detail">
        La Repro est située au local G0240
      </div>
    </div>
  )
}
