import React from 'react'

export default function ContactWidget() {
  return (
    <div className="contact glass stagger-8">
      <div className="contact__prefix">+ Pour nous rejoindre</div>
      <div className="contact__info">
        ahilar@lacitec.on.ca | 613-742-2493 x2601
      </div>
      <a
        className="contact__cta"
        href="mailto:ahilar@lacitec.on.ca?subject=Demande de rendez-vous"
        target="_blank"
        rel="noopener noreferrer"
      >
        Clique sur ce lien pour prendre rendez-vous
      </a>
    </div>
  )
}
