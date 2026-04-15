import React from 'react'

export default function HeaderBranding() {
  return (
    <div className="header-branding glass stagger-1">
      <div>
        <div className="header-branding__logo-text">
          Design<br />Graphi<br />que <span style={{ fontSize: '0.6em', opacity: 0.7 }}>La Cité</span>
        </div>
        <div className="header-branding__subtitle">
          Design Graphique // Mode Coop
        </div>
      </div>
      <div className="header-branding__session">
        <div className="header-branding__session-tag">automne</div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2px' }}>
          <span className="header-branding__number">26</span>
          <span className="header-branding__number-dot" />
        </div>
        <div className="header-branding__links">
          cours<br />info<br />chat
        </div>
      </div>
      <div className="header-branding__star">✱</div>
    </div>
  )
}
