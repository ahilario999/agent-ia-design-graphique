import React from 'react'

// TODO: Connecter à Supabase — type peut être 'stage', 'bourse', 'info', etc.
const FLEX_MOCK = {
  type: 'Stage',
  content: 'Stagiaire en impression chez Artext',
}

export default function FlexWidget() {
  return (
    <div className="flex-widget glass stagger-5">
      {/* Ornement croix concentriques */}
      <div className="ornament ornament--top-right">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="9" cy="9" r="7" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
          <circle cx="9" cy="9" r="3.5" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
          <circle cx="9" cy="9" r="1.2" fill="rgba(255,255,255,0.3)"/>
        </svg>
      </div>
      <div className="flex-widget__type">{FLEX_MOCK.type}</div>
      <div className="flex-widget__content">{FLEX_MOCK.content}</div>
    </div>
  )
}
