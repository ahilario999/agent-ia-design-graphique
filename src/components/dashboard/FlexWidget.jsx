import React from 'react'

// TODO: Connecter à Supabase — type peut être 'stage', 'bourse', 'info', etc.
const FLEX_MOCK = {
  type: 'Stage',
  content: 'Stagiaire en impression chez Artext',
}

export default function FlexWidget() {
  return (
    <div className="flex-widget glass stagger-5">
      {/* Ornement cercles concentriques style B.R.O — 4× plus gros */}
      <div className="ornament ornament--top-right">
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
          <circle cx="36" cy="36" r="30" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8"/>
          <circle cx="36" cy="36" r="18" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8"/>
          <circle cx="36" cy="36" r="6" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8"/>
          <circle cx="36" cy="36" r="2" fill="rgba(255,255,255,0.25)"/>
          {/* Points cardinaux sur le grand cercle */}
          <circle cx="36" cy="6" r="2" fill="rgba(255,255,255,0.2)"/>
          <circle cx="66" cy="36" r="2" fill="rgba(255,255,255,0.2)"/>
          <circle cx="36" cy="66" r="2" fill="rgba(255,255,255,0.2)"/>
          <circle cx="6" cy="36" r="2" fill="rgba(255,255,255,0.2)"/>
        </svg>
      </div>

      <div className="flex-widget__type">{FLEX_MOCK.type}</div>

      {/* Ligne décorative style B.R.O */}
      <div className="widget-ornament-line">
        <span className="widget-ornament-line__dot" />
        <span className="widget-ornament-line__rule" />
        <span className="widget-ornament-line__arrow">▶</span>
      </div>

      <div className="flex-widget__content">{FLEX_MOCK.content}</div>
    </div>
  )
}
