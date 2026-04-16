import React, { useState, useEffect, useRef } from 'react'

// Gradients vibrants style bokeh/light leak — reproduit l'effet de ton image de fond
const BOKEH_PRESETS = [
  // Preset 1: Bleu/Orange/Rose — comme ton image de référence
  `
    radial-gradient(circle at 45% 45%, rgba(60,130,220,0.9) 0%, transparent 40%),
    radial-gradient(circle at 70% 30%, rgba(30,60,120,0.8) 0%, transparent 35%),
    radial-gradient(ellipse at 50% 50%, rgba(180,40,20,0.7) 0%, transparent 45%),
    radial-gradient(circle at 30% 55%, rgba(80,160,240,0.8) 0%, transparent 30%),
    radial-gradient(circle at 65% 60%, rgba(240,150,50,0.85) 0%, transparent 30%),
    radial-gradient(circle at 80% 50%, rgba(255,180,200,0.6) 0%, transparent 35%),
    radial-gradient(circle at 20% 30%, rgba(20,30,60,0.9) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 80%, rgba(10,15,40,1) 0%, transparent 60%),
    linear-gradient(135deg, #0a0a1a 0%, #0d1020 50%, #050510 100%)
  `,
  // Preset 2: Violet/Cyan/Magenta
  `
    radial-gradient(circle at 30% 40%, rgba(120,50,200,0.85) 0%, transparent 40%),
    radial-gradient(circle at 70% 60%, rgba(0,200,180,0.7) 0%, transparent 35%),
    radial-gradient(circle at 55% 35%, rgba(200,50,120,0.6) 0%, transparent 30%),
    radial-gradient(circle at 20% 70%, rgba(50,100,220,0.7) 0%, transparent 35%),
    radial-gradient(circle at 80% 30%, rgba(255,100,50,0.5) 0%, transparent 30%),
    radial-gradient(ellipse at 50% 50%, rgba(20,10,40,0.9) 0%, transparent 60%),
    linear-gradient(135deg, #0a0510 0%, #100820 50%, #050510 100%)
  `,
  // Preset 3: Doré/Rouge/Bleu profond
  `
    radial-gradient(circle at 60% 40%, rgba(220,160,30,0.85) 0%, transparent 35%),
    radial-gradient(circle at 35% 55%, rgba(200,40,30,0.75) 0%, transparent 40%),
    radial-gradient(circle at 75% 65%, rgba(30,80,180,0.7) 0%, transparent 35%),
    radial-gradient(circle at 25% 30%, rgba(180,100,220,0.5) 0%, transparent 30%),
    radial-gradient(circle at 50% 70%, rgba(240,120,60,0.6) 0%, transparent 30%),
    radial-gradient(ellipse at 50% 50%, rgba(15,10,30,0.9) 0%, transparent 55%),
    linear-gradient(160deg, #0a0808 0%, #100a15 50%, #050508 100%)
  `,
  // Preset 4: Turquoise/Rose/Orange
  `
    radial-gradient(circle at 40% 35%, rgba(0,180,160,0.85) 0%, transparent 38%),
    radial-gradient(circle at 65% 55%, rgba(240,80,120,0.75) 0%, transparent 35%),
    radial-gradient(circle at 25% 65%, rgba(250,160,40,0.7) 0%, transparent 32%),
    radial-gradient(circle at 80% 35%, rgba(60,40,150,0.6) 0%, transparent 35%),
    radial-gradient(circle at 50% 80%, rgba(20,100,200,0.5) 0%, transparent 30%),
    radial-gradient(ellipse at 50% 50%, rgba(10,15,25,0.85) 0%, transparent 55%),
    linear-gradient(145deg, #080a12 0%, #0a1018 50%, #050510 100%)
  `,
  // Preset 5: Aurore boréale
  `
    radial-gradient(circle at 50% 30%, rgba(30,200,120,0.8) 0%, transparent 40%),
    radial-gradient(circle at 30% 50%, rgba(80,50,200,0.75) 0%, transparent 35%),
    radial-gradient(circle at 70% 60%, rgba(0,150,255,0.7) 0%, transparent 35%),
    radial-gradient(circle at 55% 70%, rgba(200,50,180,0.5) 0%, transparent 30%),
    radial-gradient(circle at 20% 35%, rgba(255,200,50,0.4) 0%, transparent 28%),
    radial-gradient(ellipse at 50% 50%, rgba(5,10,20,0.9) 0%, transparent 55%),
    linear-gradient(130deg, #050810 0%, #080a18 50%, #030508 100%)
  `,
]

export default function DynamicBackground() {
  const [bgStyle, setBgStyle] = useState({})
  const containerRef = useRef(null)

  useEffect(() => {
    const idx = Math.floor(Math.random() * BOKEH_PRESETS.length)
    setBgStyle({ background: BOKEH_PRESETS[idx].replace(/\n/g, '') })
  }, [])

  return (
    <div className="bg-dynamic" ref={containerRef} style={bgStyle}>
      {/* Orbes animés pour effet de mouvement subtil */}
      <div className="bg-orb bg-orb--1" />
      <div className="bg-orb bg-orb--2" />
      <div className="bg-orb bg-orb--3" />
    </div>
  )
}
