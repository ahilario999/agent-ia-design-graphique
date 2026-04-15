import React, { useState, useEffect } from 'react'

// Collection d'images de fond — ajouter vos images dans public/assets/backgrounds/
// Pour l'instant on utilise des gradients CSS générés dynamiquement
const GRADIENT_PRESETS = [
  'radial-gradient(ellipse at 20% 50%, #1a0a2e 0%, #16213e 30%, #0a1628 60%, #000 100%), radial-gradient(circle at 80% 30%, rgba(216,90,48,0.3) 0%, transparent 50%), radial-gradient(circle at 30% 80%, rgba(29,158,117,0.2) 0%, transparent 40%)',
  'radial-gradient(ellipse at 70% 20%, #1e1233 0%, #0d1b2a 40%, #000 100%), radial-gradient(circle at 20% 60%, rgba(59,130,246,0.25) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(216,90,48,0.2) 0%, transparent 40%)',
  'radial-gradient(ellipse at 50% 50%, #1a0a2e 0%, #0a192f 40%, #000 100%), radial-gradient(circle at 10% 40%, rgba(236,72,153,0.2) 0%, transparent 45%), radial-gradient(circle at 90% 60%, rgba(59,130,246,0.25) 0%, transparent 45%)',
  'radial-gradient(ellipse at 30% 70%, #0d1117 0%, #161b22 40%, #000 100%), radial-gradient(circle at 70% 20%, rgba(251,146,60,0.3) 0%, transparent 45%), radial-gradient(circle at 40% 30%, rgba(124,58,237,0.2) 0%, transparent 40%)',
  'radial-gradient(ellipse at 60% 30%, #1a0a2e 0%, #0c1445 30%, #000 100%), radial-gradient(circle at 25% 70%, rgba(29,158,117,0.3) 0%, transparent 45%), radial-gradient(circle at 85% 50%, rgba(239,68,68,0.2) 0%, transparent 40%)',
]

export default function DynamicBackground() {
  const [bgStyle, setBgStyle] = useState({})

  useEffect(() => {
    // Choisir un gradient aléatoire à chaque visite
    const idx = Math.floor(Math.random() * GRADIENT_PRESETS.length)
    setBgStyle({ background: GRADIENT_PRESETS[idx] })
  }, [])

  return <div className="bg-dynamic" style={bgStyle} />
}
