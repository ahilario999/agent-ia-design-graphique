import React from 'react'

// VEILLE DESIGN — Sources variées à mettre à jour manuellement
// Structure : { id, image, title, link }
const VEILLE_DATA = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1636622433525-127afdf3662d?w=600&h=400&fit=crop',
    title: 'Identités visuelles qui marquent',
    link: 'https://www.etapes.com/identite-visuelle/',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    title: 'Typographie : les tendances du moment',
    link: 'https://www.itsnicethat.com/categories/graphic-design',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&h=400&fit=crop',
    title: 'Packaging design primé 2026',
    link: 'https://www.underconsideration.com/brandnew/',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    title: 'Motion & design interactif',
    link: 'https://www.awwwards.com/',
  },
]

export default function DesignVeilleWidget() {
  return (
    <div className="design-veille glass stagger-7">
      {/* En-tête avec titre + ligne ornementale */}
      <div className="design-veille__header">
        <div className="design-veille__title">Veille Design</div>
        <svg className="horaire__line-ornament ornament-interactive" width="100%" height="20" viewBox="0 0 300 20" preserveAspectRatio="none" fill="none">
          <line x1="0" y1="10" x2="300" y2="10" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2"/>
          <circle cx="20" cy="10" r="1.5" fill="rgba(255,255,255,0.25)"/>
          <circle cx="80" cy="10" r="1" fill="rgba(255,255,255,0.15)"/>
          <circle cx="160" cy="10" r="1.5" fill="rgba(255,255,255,0.2)"/>
          <circle cx="240" cy="10" r="1" fill="rgba(255,255,255,0.15)"/>
          <circle cx="290" cy="10" r="1.5" fill="rgba(255,255,255,0.25)"/>
        </svg>
      </div>

      {/* Rangée horizontale d'articles */}
      <div className="design-veille__grid">
        {VEILLE_DATA.map((article) => (
          <a
            key={article.id}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="design-veille__card"
          >
            {/* Image */}
            <div className="design-veille__image-wrapper">
              <img
                src={article.image}
                alt={article.title}
                className="design-veille__image"
              />
              <div className="design-veille__image-overlay" />
            </div>

            {/* Titre court sous la photo */}
            <h4 className="design-veille__card-title">{article.title}</h4>
          </a>
        ))}
      </div>

    </div>
  )
}
