import React from 'react'

// TODO: Connecter à Supabase pour données dynamiques — mises à jour par IA tous les 3 jours
// Structure : { id, image, title, description, link, source }
const VEILLE_DATA = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    title: 'Tendances Typographie 2026',
    description: 'Explorer les nouvelles directions en typographie : minimalisme extrême et retours classiques',
    link: 'https://www.typewolf.com',
    source: 'Typewolf',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=400&h=300&fit=crop',
    title: 'Branding Minimaliste',
    description: 'Comment les marques redéfinissent leur identité avec des approaches épurées et directes',
    link: 'https://www.instagram.com/designspiration/',
    source: 'Design Inspiration',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    title: 'Motion Design — Cas d\'étude',
    description: 'Analyse de projets award-winning : technique, stratégie et impact utilisateur',
    link: 'https://www.motionographer.com',
    source: 'Motionographer',
  },
]

export default function DesignVeilleWidget() {
  return (
    <div className="design-veille glass stagger-7">
      {/* Titre + Ornement */}
      <div className="design-veille__header">
        <h3 className="design-veille__title">Veille Design</h3>
        <div className="design-veille__subtitle">Actualités & Inspiration</div>
      </div>

      {/* Grille 3 articles */}
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

            {/* Contenu */}
            <div className="design-veille__content">
              <h4 className="design-veille__card-title">{article.title}</h4>
              <p className="design-veille__description">{article.description}</p>
              <span className="design-veille__source">{article.source}</span>
            </div>
          </a>
        ))}
      </div>

      {/* Footer — info mise à jour */}
      <div className="design-veille__footer">
        Mis à jour automatiquement tous les 3 jours par IA
      </div>
    </div>
  )
}
