"use client"

import type React from "react"
import { useRef, useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Mic, MicOff, Send, Volume2, VolumeX } from "lucide-react"

// Types
interface Message {
  id: string
  text: string
  sender: "user" | "robot"
  timestamp: Date
}

// Komponen ChatInterface yang selalu terlihat
function ChatInterface({
  messages,
  onSendMessage,
  isListening,
  onToggleListening,
  isSpeaking,
  onToggleSpeaking,
}: {
  messages: Message[]
  onSendMessage: (message: string) => void
  isListening: boolean
  onToggleListening: () => void
  isSpeaking: boolean
  onToggleSpeaking: () => void
}) {
  const [inputMessage, setInputMessage] = useState("")
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const handleSend = () => {
    if (inputMessage.trim()) {
      onSendMessage(inputMessage.trim())
      setInputMessage("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  return (
    // 1. JADIKAN CARD SEBAGAI CONTAINER UTAMA, HAPUS LOGIC BUKA/TUTUP
    <Card className="w-full h-full flex flex-col shadow-none border-0 rounded-none bg-transparent">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <div className="size-3 rounded-full bg-green-500 animate-pulse" />
          AI Robot Assistant
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col flex-grow p-4 pt-0 overflow-hidden">
        <ScrollArea className="flex-1 pr-4" ref={scrollAreaRef}>
          <div className="space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-lg text-sm ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="flex gap-2 pt-3 border-t mt-4">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button onClick={handleSend} size="icon">
            <Send className="size-4" />
          </Button>
        </div>

        <div className="flex gap-2 pt-2">
          <Button
            onClick={onToggleListening}
            variant={isListening ? "destructive" : "outline"}
            size="sm"
            className="flex-1"
          >
            {isListening ? <MicOff className="size-4 mr-2" /> : <Mic className="size-4 mr-2" />}
            {isListening ? "Stop" : "Voice"}
          </Button>
          <Button
            onClick={onToggleSpeaking}
            variant={isSpeaking ? "destructive" : "outline"}
            size="sm"
            className="flex-1"
          >
            {isSpeaking ? <VolumeX className="size-4 mr-2" /> : <Volume2 className="size-4 mr-2" />}
            {isSpeaking ? "Mute" : "Speak"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// "Otak" dari Interactive Robot
export function InteractiveRobot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI robot assistant. How can I help you today?",
      sender: "robot",
      timestamp: new Date(),
    },
  ])
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [recognition, setRecognition] = useState<any>(null)
  const [synthesis, setSynthesis] = useState<any>(null)

  useEffect(() => {
    // Inisialisasi Speech Recognition & Synthesis
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition()
      recognitionInstance.continuous = false
      recognitionInstance.interimResults = false
      recognitionInstance.lang = "en-US"
      recognitionInstance.onresult = (event: any) => {
        handleSendMessage(event.results[0][0].transcript)
        setIsListening(false)
      }
      recognitionInstance.onerror = () => setIsListening(false)
      recognitionInstance.onend = () => setIsListening(false)
      setRecognition(recognitionInstance)
    }
    if (window.speechSynthesis) {
      setSynthesis(window.speechSynthesis)
    }
  }, [])

  const handleSendMessage = useCallback(
    (text: string) => {
      if (!text) return
      const userMessage: Message = {
        id: Date.now().toString(),
        text,
        sender: "user",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, userMessage])

      // Simulasi jawaban dari AI
      setTimeout(() => {
        const responses = [
          "That's a great question! Let me think about that.",
          "I'm processing your request. One moment please.",
          "Interesting point. How can I elaborate on that for you?",
          "I can certainly help with that. What are the specifics?",
        ]
        const robotMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: responses[Math.floor(Math.random() * responses.length)],
          sender: "robot",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, robotMessage])
        if (synthesis && isSpeaking) {
          const utterance = new SpeechSynthesisUtterance(robotMessage.text)
          synthesis.speak(utterance)
        }
      }, 1000)
    },
    [synthesis, isSpeaking]
  )
  
  const handleToggleListening = () => {
    if (!recognition) return
    if (isListening) {
      recognition.stop()
    } else {
      recognition.start()
    }
    setIsListening(!isListening)
  }

  const handleToggleSpeaking = () => {
    if (synthesis && isSpeaking) synthesis.cancel()
    setIsSpeaking(!isSpeaking)
  }

  // 2. KOMPONEN INI SEKARANG HANYA MERENDER CHAT INTERFACE
  return (
    <ChatInterface
      messages={messages}
      onSendMessage={handleSendMessage}
      isListening={isListening}
      onToggleListening={handleToggleListening}
      isSpeaking={isSpeaking}
      onToggleSpeaking={handleToggleSpeaking}
    />
  )
}