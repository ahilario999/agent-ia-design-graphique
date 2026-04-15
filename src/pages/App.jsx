import React, { useState, useEffect } from 'react'
import LoadingScreen from '../components/dashboard/LoadingScreen'
import DynamicBackground from '../components/dashboard/DynamicBackground'
import HeaderBranding from '../components/dashboard/HeaderBranding'
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
        {/* Header Row */}
        <HeaderBranding />
        <HeaderBRO />
        <DatesImportantes />

        {/* Left Column */}
        <div className="col-left">
          <HoraireWidget />
          <div className="widgets-row">
            <ImpressionWidget />
            <PretMultimediaWidget />
          </div>
        </div>

        {/* Center Column — Chatbot */}
        <div className="col-center glass glass--no-hover stagger-4">
          <div className="chat-bg">
            <div className="chat-bg__gradient" />
          </div>
          <div className="chat-content">
            <ChatInterface />
          </div>
        </div>

        {/* Right Column */}
        <div className="col-right">
          <div className="right-top-row">
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
