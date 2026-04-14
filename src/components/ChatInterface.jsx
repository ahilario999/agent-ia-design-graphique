import React, { useState, useRef, useEffect } from 'react'
import MessageBubble from './MessageBubble'
import InputField from './InputField'
import TypingIndicator from './TypingIndicator'

const WELCOME_MESSAGE = {
  role: 'agent',
  text: "Salut! Je suis l'Agent IA du programme Design Graphique de La Cite. Je peux t'aider avec tes questions sur l'horaire, l'inscription, l'equipement, les bourses et plus encore. Comment je peux t'aider?",
  timestamp: new Date(),
}

export default function ChatInterface() {
  const [messages, setMessages] = useState([WELCOME_MESSAGE])
  const [isTyping, setIsTyping] = useState(false)
  const chatEndRef = useRef(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const handleSend = async (text) => {
    const userMessage = {
      role: 'user',
      text,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    // Simulated agent response (will be replaced by Claude API)
    setTimeout(() => {
      const agentResponse = {
        role: 'agent',
        text: "Bonne question! Pour l'instant, je suis en mode developpement. Bientot, je serai connecte a Claude pour te donner des reponses completes. Reste a l'affut!",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, agentResponse])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header__avatar">🤖</div>
        <div className="header__info">
          <h1>Agent IA - La Cite</h1>
          <p>Design Graphique | Support etudiant</p>
        </div>
      </header>

      <div className="chat-area">
        {messages.map((msg, i) => (
          <MessageBubble
            key={i}
            role={msg.role}
            text={msg.text}
            timestamp={msg.timestamp}
          />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={chatEndRef} />
      </div>

      <InputField onSend={handleSend} disabled={isTyping} />
    </div>
  )
}
