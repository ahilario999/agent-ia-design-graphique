import React, { useState, useRef, useEffect } from 'react'
import MessageBubble from './MessageBubble'
import InputField from './InputField'
import TypingIndicator from './TypingIndicator'

const WELCOME_MESSAGE = {
  role: 'agent',
  text: "Salut! Je suis l'Agent IA du programme Design Graphique de La Cité. Je peux t'aider avec tes questions sur l'horaire, l'inscription, l'équipement, les bourses et plus encore. Comment je peux t'aider?",
  timestamp: new Date(),
}

export default function ChatInterface() {
  const [messages, setMessages] = useState([WELCOME_MESSAGE])
  const [isTyping, setIsTyping] = useState(false)
  const chatEndRef = useRef(null)
  // Conversation history for API context (excludes welcome message)
  const conversationRef = useRef([])

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const handleSend = async (text) => {
    // Add user message to UI
    const userMessage = {
      role: 'user',
      text,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    // Add to conversation history
    conversationRef.current.push({ role: 'user', text })

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: conversationRef.current,
        }),
      })

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      const data = await response.json()
      const replyText = data.reply

      // Add agent response to conversation history
      conversationRef.current.push({ role: 'agent', text: replyText })

      const agentResponse = {
        role: 'agent',
        text: replyText,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, agentResponse])
    } catch (error) {
      console.error('Chat error:', error)
      const errorMessage = {
        role: 'agent',
        text: "Oups! J'ai eu un petit problème technique. Essaie encore dans quelques secondes, ou contacte monsieur Hilario directement: ahilar@lacitec.on.ca",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header__avatar">🤖</div>
        <div className="header__info">
          <h1>Agent IA - La Cité</h1>
          <p>Design Graphique | Support étudiant</p>
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
