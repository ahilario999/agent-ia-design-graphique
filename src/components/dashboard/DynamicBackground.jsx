import React from 'react'

// Fond : image enhanced_edit-enhance.png
// Animation : Ken Burns ultra-subtil (CSS transform only, GPU, zéro glitch)
// + 2 orbes légers pour maintenir un peu de mouvement dans les coins
export default function DynamicBackground() {
  return (
    <div className="bg-dynamic">
      <div className="bg-image" />
      <div className="bg-overlay" />
      <div className="bg-orb bg-orb--1" />
      <div className="bg-orb bg-orb--2" />
    </div>
  )
}
