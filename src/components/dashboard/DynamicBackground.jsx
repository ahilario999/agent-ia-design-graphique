import React from 'react'

// Fond statique — le mouvement vient entièrement des orbes CSS
// Les transitions JS entre presets de gradient causaient des glitches visuels
export default function DynamicBackground() {
  return (
    <div className="bg-dynamic">
      <div className="bg-orb bg-orb--1" />
      <div className="bg-orb bg-orb--2" />
      <div className="bg-orb bg-orb--3" />
      <div className="bg-orb bg-orb--4" />
    </div>
  )
}
