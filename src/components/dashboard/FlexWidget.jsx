import React from 'react'

// TODO: Connecter à Supabase — type peut être 'stage', 'bourse', 'info', etc.
const FLEX_MOCK = {
  type: 'Stage',
  content: 'Stagiaire en impression chez Artext',
}

export default function FlexWidget() {
  return (
    <div className="flex-widget glass stagger-5">
      <div className="flex-widget__type">{FLEX_MOCK.type}</div>
      <div className="flex-widget__content">{FLEX_MOCK.content}</div>
    </div>
  )
}
