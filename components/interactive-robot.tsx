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

// Fungsi untuk memanggil Gemini API
async function getAiResponse(prompt: string): Promise<string> {
  // KOMENTAR: Ganti dengan API Key Anda dari Google AI Studio
  const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

  if (!API_KEY) {
    return "API Key for Gemini is not configured. Please set it up in your environment variables."
  }

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    })

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }

    const data = await response.json()
    return data.candidates[0].content.parts[0].text
  } catch (error) {
    console.error("Error fetching AI response:", error)
    return "Sorry, I'm having trouble connecting to my brain right now."
  }
}

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
      const scrollElement = scrollAreaRef.current.querySelector("div")
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight
      }
    }
  }, [messages])

  return (
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
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
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

export function InteractiveRobot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI robot assistant. Ask me anything or try a command like !aboutme, !techsteck, !alamat.",
      sender: "robot",
      timestamp: new Date(),
    },
  ])
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(true) // Default to speak
  const [recognition, setRecognition] = useState<any>(null)
  const [synthesis, setSynthesis] = useState<any>(null)

  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition()
      recognitionInstance.continuous = false
      recognitionInstance.interimResults = false
      recognitionInstance.lang = "id-ID" // Changed to Indonesian
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
    async (text: string) => {
      if (!text) return
      const userMessage: Message = {
        id: Date.now().toString(),
        text,
        sender: "user",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, userMessage])

      let robotResponseText = ""
      const command = text.trim().toLowerCase()

      // KOMENTAR: Logika untuk menangani command khusus
      switch (command) {
        case "!alamat":
          robotResponseText = "Perak, Jombang, Jawa Timur"
          break
        case "!aboutme":
          robotResponseText = "Ahmad Lazim, 20 tahun, Universitas Airlangga"
          break
        case "!techstack":
          robotResponseText = "Laravel, Next.js, Flutter"
          break
        default:
          // KOMENTAR: Jika bukan command, panggil AI
          robotResponseText = await getAiResponse(text)
          break
      }

      const robotMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: robotResponseText,
        sender: "robot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, robotMessage])

      if (synthesis && isSpeaking) {
        const utterance = new SpeechSynthesisUtterance(robotMessage.text)
        utterance.lang = "id-ID"
        synthesis.speak(utterance)
      }
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