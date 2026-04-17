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
      {/* Titre */}
      <div className="design-veille__header">
        <h3 className="design-veille__title">Veille Design</h3>
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
