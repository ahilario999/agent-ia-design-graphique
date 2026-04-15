import React from 'react'

// TODO: Connecter à Supabase pour données dynamiques
const DATES_MOCK = [
  {
    icon: '✱',
    date: '30 août 2026',
    label: "Journée d'accueil à La Cité",
  },
  {
    icon: '○',
    date: '7 septembre 2026',
    label: "Début de la session d'automne",
  },
  {
    icon: '◇',
    date: '19 septembre 2026',
    label: "Date limite pour se retirer d'un cours",
  },
]

function generateICS(date, label) {
  const d = new Date(date)
  const pad = (n) => String(n).padStart(2, '0')
  const dateStr = `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}`
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    `DTSTART;VALUE=DATE:${dateStr}`,
    `SUMMARY:${label}`,
    'DESCRIPTION:Design Graphique - La Cité',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')

  const blob = new Blob([ics], { type: 'text/calendar' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `rappel-${dateStr}.ics`
  a.click()
  URL.revokeObjectURL(url)
}

export default function DatesImportantes() {
  return (
    <div className="header-dates glass stagger-3">
      {DATES_MOCK.map((item, i) => (
        <div className="date-item" key={i}>
          <div className="date-item__icon">{item.icon}</div>
          <div className="date-item__content">
            <div className="date-item__date">{item.date}</div>
            <div className="date-item__label">{item.label}</div>
            <button
              className="date-item__rappel"
              onClick={() => generateICS(item.date, item.label)}
            >
              Ajouter un rappel
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
