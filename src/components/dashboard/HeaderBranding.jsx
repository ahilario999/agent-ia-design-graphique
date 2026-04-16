import React from 'react'

export default function HeaderBranding() {
  return (
    <div className="header-branding stagger-1">
      {/* Carré vert avec le logo officiel Design Graphique La Cité */}
      <div className="brand-logo">
        <img
          src="/assets/logo-design-graphique.png"
          alt="Design Graphique La Cité"
          className="brand-logo__img"
        />
      </div>

      {/* Carte glass séparée avec l'info de session */}
      <div className="brand-session glass">
        <div className="brand-session__tag">automne</div>
        <div className="brand-session__number-row">
          <span className="brand-session__number">26</span>
          <span className="brand-session__dot" />
        </div>
        <div className="brand-session__links">
          cours<br />info<br />chat
        </div>
        <div className="brand-session__star">✱</div>
      </div>
    </div>
  )
}
