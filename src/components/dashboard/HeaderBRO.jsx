import React from 'react'

export default function HeaderBRO() {
  return (
    <div className="header-bro glass stagger-2">
      <div className="header-bro__ornament" />
      <div style={{ textAlign: 'center' }}>
        <div className="header-bro__title">B.R.O</div>
        <div className="header-bro__subtitle">
          Bureau de Renseignements et d'Orientation →
        </div>
      </div>
      <div className="header-bro__ornament header-bro__ornament--filled" />
    </div>
  )
}
