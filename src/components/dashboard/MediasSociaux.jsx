import React from 'react'

const INSTAGRAM_URL = 'https://www.instagram.com/design_graphique_lacite/'
const FACEBOOK_URL = 'https://www.facebook.com/'
const YOUTUBE_URL = 'https://www.youtube.com/'

export default function MediasSociaux() {
  return (
    <div className="medias glass stagger-7">

      {/* Ornement starburst — rotation lente en haut à droite */}
      <div className="ornament ornament--top-right ornament--spin-slow">
        <svg width="48" height="48" viewBox="0 0 80 80" fill="none" className="ornament-interactive">
          <line x1="40" y1="2" x2="40" y2="78" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2"/>
          <line x1="2" y1="40" x2="78" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2"/>
          <line x1="11.7" y1="11.7" x2="68.3" y2="68.3" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2"/>
          <line x1="68.3" y1="11.7" x2="11.7" y2="68.3" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2"/>
          <circle cx="40" cy="2" r="2.5" fill="rgba(255,255,255,0.25)"/>
          <circle cx="78" cy="40" r="2.5" fill="rgba(255,255,255,0.25)"/>
          <circle cx="40" cy="78" r="2.5" fill="rgba(255,255,255,0.25)"/>
          <circle cx="2" cy="40" r="2.5" fill="rgba(255,255,255,0.25)"/>
          <circle cx="40" cy="40" r="3.5" fill="rgba(255,255,255,0.15)"/>
        </svg>
      </div>

      {/* Ornement cercle — pulsation en bas à gauche */}
      <div className="ornament ornament--bottom-right ornament--pulse-slow" style={{ opacity: 0.3 }}>
        <svg width="36" height="36" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="26" stroke="rgba(255,255,255,0.35)" strokeWidth="1"/>
          <circle cx="30" cy="30" r="18" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8"/>
          <circle cx="30" cy="30" r="4" fill="rgba(255,255,255,0.2)"/>
        </svg>
      </div>

      {/* En-tête avec titre + ligne ornementale */}
      <div className="medias__header">
        <div className="medias__title">Médias Sociaux</div>
        <svg className="horaire__line-ornament ornament-interactive" width="100%" height="20" viewBox="0 0 300 20" preserveAspectRatio="none" fill="none">
          <line x1="0" y1="10" x2="300" y2="10" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2"/>
          <circle cx="20" cy="10" r="1.5" fill="rgba(255,255,255,0.25)"/>
          <circle cx="100" cy="10" r="1" fill="rgba(255,255,255,0.15)"/>
          <circle cx="200" cy="10" r="1.5" fill="rgba(255,255,255,0.2)"/>
          <circle cx="280" cy="10" r="1" fill="rgba(255,255,255,0.15)"/>
        </svg>
      </div>

      <div className="medias__insta-hint">Dernier post sur Instagram →</div>

      <div className="medias__row">
        <div className="medias__icons">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="medias__icon" aria-label="Instagram">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="medias__icon" aria-label="Facebook">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/>
            </svg>
          </a>
          <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="medias__icon" aria-label="YouTube">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>

        {/* QR Code placeholder — sera généré dynamiquement */}
        <div className="medias__qr" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.5rem',
          color: '#000',
          textAlign: 'center',
          lineHeight: 1.2,
        }}>
          QR
        </div>
      </div>

      <div className="medias__handle">@design_graphique_lacite</div>
    </div>
  )
}
