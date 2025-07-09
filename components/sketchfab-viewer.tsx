"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, RotateCcw, Play, Pause } from "lucide-react"

interface SketchfabViewerProps {
  modelId: string
  title: string
  description?: string
  autostart?: boolean
  className?: string
}

// CSS-based 3D model placeholder since we can't use actual Sketchfab in this environment
function CSS3DModelViewer({ title, description }: { title: string; description?: string }) {
  const [isRotating, setIsRotating] = useState(true)
  const [rotationSpeed, setRotationSpeed] = useState(1)

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-muted via-background to-muted overflow-hidden">
      {/* 3D Model Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: "800px" }}>
        <div
          className={`relative w-32 h-32 ${isRotating ? "animate-spin" : ""}`}
          style={{
            transformStyle: "preserve-3d",
            animationDuration: `${4 / rotationSpeed}s`,
          }}
        >
          {/* Cube faces */}
          <div
            className="absolute w-32 h-32 bg-gradient-to-br from-primary to-primary/70 border border-primary/20"
            style={{ transform: "rotateY(0deg) translateZ(64px)" }}
          >
            <div className="w-full h-full flex items-center justify-center text-white font-bold text-xl">Front</div>
          </div>
          <div
            className="absolute w-32 h-32 bg-gradient-to-br from-secondary to-secondary/70 border border-secondary/20"
            style={{ transform: "rotateY(90deg) translateZ(64px)" }}
          >
            <div className="w-full h-full flex items-center justify-center text-white font-bold text-xl">Right</div>
          </div>
          <div
            className="absolute w-32 h-32 bg-gradient-to-br from-accent to-accent/70 border border-accent/20"
            style={{ transform: "rotateY(180deg) translateZ(64px)" }}
          >
            <div className="w-full h-full flex items-center justify-center text-white font-bold text-xl">Back</div>
          </div>
          <div
            className="absolute w-32 h-32 bg-gradient-to-br from-muted-foreground to-muted-foreground/70 border border-muted-foreground/20"
            style={{ transform: "rotateY(-90deg) translateZ(64px)" }}
          >
            <div className="w-full h-full flex items-center justify-center text-white font-bold text-xl">Left</div>
          </div>
          <div
            className="absolute w-32 h-32 bg-gradient-to-br from-destructive to-destructive/70 border border-destructive/20"
            style={{ transform: "rotateX(90deg) translateZ(64px)" }}
          >
            <div className="w-full h-full flex items-center justify-center text-white font-bold text-xl">Top</div>
          </div>
          <div
            className="absolute w-32 h-32 bg-gradient-to-br from-green-500 to-green-500/70 border border-green-500/20"
            style={{ transform: "rotateX(-90deg) translateZ(64px)" }}
          >
            <div className="w-full h-full flex items-center justify-center text-white font-bold text-xl">Bottom</div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="absolute top-4 right-4 flex gap-2">
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setIsRotating(!isRotating)}
          className="bg-background/80 backdrop-blur-sm"
        >
          {isRotating ? <Pause className="size-4" /> : <Play className="size-4" />}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setRotationSpeed(rotationSpeed === 1 ? 2 : 1)}
          className="bg-background/80 backdrop-blur-sm"
        >
          <RotateCcw className="size-4" />
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => window.open("https://sketchfab.com", "_blank")}
          className="bg-background/80 backdrop-blur-sm"
        >
          <ExternalLink className="size-4" />
        </Button>
      </div>

      {/* Info overlay */}
      <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm rounded-lg p-3 border max-w-xs">
        <p className="text-sm font-medium mb-1">{title}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

export function SketchfabViewer({
  modelId,
  title,
  description,
  autostart = true,
  className = "",
}: SketchfabViewerProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Card className={`${className} overflow-hidden`}>
      <div className="relative aspect-video bg-muted">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-sm text-muted-foreground">Loading 3D Model...</p>
            </div>
          </div>
        )}

        <CSS3DModelViewer title={title} description={description} />
      </div>

      {(title || description) && (
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold mb-1">{title}</h3>
              {description && <p className="text-sm text-muted-foreground">{description}</p>}
            </div>
            <Badge variant="secondary" className="shrink-0">
              3D Model
            </Badge>
          </div>
        </CardContent>
      )}
    </Card>
  )
}
