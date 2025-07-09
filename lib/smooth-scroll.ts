import type React from "react"
export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

export const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (href.startsWith("#")) {
    e.preventDefault()
    const elementId = href.substring(1)
    smoothScrollTo(elementId)
  }
}
