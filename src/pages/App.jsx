import React, { useState, useEffect } from 'react'
import LoadingScreen from '../components/dashboard/LoadingScreen'
import DynamicBackground from '../components/dashboard/DynamicBackground'
import HeaderBRO from '../components/dashboard/HeaderBRO'
import DatesImportantes from '../components/dashboard/DatesImportantes'
import HoraireWidget from '../components/dashboard/HoraireWidget'
import ImpressionWidget from '../components/dashboard/ImpressionWidget'
import PretMultimediaWidget from '../components/dashboard/PretMultimediaWidget'
import TutoratWidget from '../components/dashboard/TutoratWidget'
import FlexWidget from '../components/dashboard/FlexWidget'
import MediasSociaux from '../components/dashboard/MediasSociaux'
import ContactWidget from '../components/dashboard/ContactWidget'
import ChatInterface from '../components/ChatInterface'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen visible={isLoading} />
      <DynamicBackground />

      <div className="dashboard">
        {/* ===== ROW 1 : Header ===== */}

        {/* Col 1 : Logo vert officiel */}
        <div className="grid-logo stagger-1">
          <div className="brand-logo">
            <img
              src="/assets/logo-design-graphique.png"
              alt="Design Graphique La Cité"
              className="brand-logo__img"
            />
          </div>
        </div>

        {/* Col 2 : Session info */}
        <div className="grid-session glass stagger-1">
          <div className="brand-session__label">Session</div>
          <div className="brand-session__title">Automne</div>
          <div className="brand-session__number-row">
            <span className="brand-session__number">26</span>
            <span className="brand-session__dot" />
          </div>
          <div className="brand-session__ornament">
            <span className="brand-session__ornament-dot" />
            <span className="brand-session__ornament-rule" />
            <span className="brand-session__ornament-dot" />
          </div>
          <div className="brand-session__links">
            cours · info · chat
          </div>
        </div>

        {/* Cols 3-4 : Le chatbot occupe cette zone (row 1+2) */}

        {/* Col 5-6 : Dates Importantes */}
        <DatesImportantes />

        {/* ===== ROW 2 : Contenu principal ===== */}

        {/* Cols 1-2 : Colonne gauche */}
        <div className="grid-left">
          <HoraireWidget />
          <div className="widgets-row">
            <ImpressionWidget />
            <PretMultimediaWidget />
          </div>
        </div>

        {/* Cols 3-4 : Chatbot central — B.R.O capsule est DEDANS */}
        <div className="grid-center glass glass--no-hover stagger-4">
          <div className="chat-bg">
            <div className="chat-bg__gradient" />
          </div>
          <div className="chat-content">
            <HeaderBRO />
            <ChatInterface />
          </div>
        </div>

        {/* Cols 5-6 : Colonne droite */}
        <div className="grid-right">
          <div className="widgets-row">
            <TutoratWidget />
            <FlexWidget />
          </div>
          <MediasSociaux />
          <ContactWidget />
        </div>
      </div>
    </>
  )
}
