import React from 'react'

export default function MessageBubble({ role, text, timestamp }) {
  const isAgent = role === 'agent'

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString('fr-CA', {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className={`message message--${role}`}>
      <div className="message__bubble">
        {text}
      </div>
      {timestamp && (
        <span className="message__time">
          {isAgent && '🤖 '}{formatTime(timestamp)}
        </span>
      )}
    </div>
  )
}
