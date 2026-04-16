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
        href="https://bookings.cloud.microsoft/book/AntonioHilario@live.lacitec.on.ca/?ismsaljsauthenabled=true"
        target="_blank"
        rel="noopener noreferrer"
      >
        Prendre un rendez-vous
      </a>
    </div>
  )
}
