import React, { useState } from 'react'

// TODO: Connecter à Supabase pour données dynamiques
const HORAIRE_MOCK = {
  'Étape 1': [
    { nom: 'Design fondamental', detail: 'Lun 9h-12h | D2050' },
    { nom: 'Typographie I', detail: 'Mar 13h-16h | D2060' },
    { nom: 'Couleur & composition', detail: 'Mer 9h-12h | D2050' },
  ],
  'Étape 3': [
    { nom: 'Infographie', detail: 'Lun 9h-12h | D2050' },
    { nom: 'Illustration numérique', detail: 'Mar 13h-16h | D2060' },
    { nom: 'Photo & retouche', detail: 'Jeu 9h-12h | D2050' },
  ],
  'Étape 5': [
    { nom: 'Portfolio', detail: 'Lun 13h-16h | D2060' },
    { nom: 'Production imprimée', detail: 'Mer 9h-12h | D2050' },
    { nom: 'Stage préparation', detail: 'Ven 9h-12h | D2060' },
  ],
}

const TABS = Object.keys(HORAIRE_MOCK)

export default function HoraireWidget() {
  const [activeTab, setActiveTab] = useState(TABS[0])

  return (
    <div className="horaire glass stagger-5">
      <div className="horaire__header">
        <div className="horaire__header-text">
          <div className="horaire__title">Horaire : Automne</div>
          <div className="horaire__update">[ Mise à jour ] A26</div>
        </div>
      </div>
      <div className="horaire__ornement">
        <img
          src="/assets/horaire_ornements.svg"
          alt=""
          className="horaire__ornement-img"
          aria-hidden="true"
        />
      </div>

      <div className="horaire__tabs">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`horaire__tab ${activeTab === tab ? 'horaire__tab--active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab} ↓
          </button>
        ))}
      </div>

      <div className="horaire__courses">
        {HORAIRE_MOCK[activeTab].map((course, i) => (
          <div className="horaire__course" key={i}>
            <div className="horaire__course-name">{course.nom}</div>
            <div className="horaire__course-detail">{course.detail}</div>
          </div>
        ))}
      </div>

      <div className="horaire__disclaimer">
        * Présenté en guise d'information rapide. Sujet à changement sans préavis.
        Veuillez valider votre horaire sur votre portail étudiant — eCité.
      </div>
    </div>
  )
}
