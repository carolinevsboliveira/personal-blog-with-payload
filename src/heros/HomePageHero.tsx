'use client'
import React, { useEffect, useState } from 'react'

import { CMSLink } from '@/components/Link'
import type { Page } from '@/payload-types'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const HomePageHero: React.FC<Page['hero']> = ({
  mainTitle,
  secondaryTitles,
  actionButtons,
  optionalText,
  homePageHeroMedia,
}) => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [typedText, setTypedText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  useEffect(() => {
    const currentText = secondaryTitles?.[currentTextIndex]?.title
    let charIndex = 0
    setTypedText("")

    const typeInterval = setInterval(() => {
      if (charIndex < (currentText?.length ?? 0)) {
        setTypedText(currentText?.slice(0, charIndex + 1) ?? "")
        charIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % (secondaryTitles?.length ?? 0))
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [currentTextIndex])


  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])
  
  return (
    <section
    className="min-h-screen flex items-center justify-center relative overflow-hidden"
  >

    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute w-64 h-64 bg-purple-500/20 rounded-full blur-2xl all 0.5s ease-out"
        style={{
          left: `${mousePosition.x - 128}px`,
          top: `${mousePosition.y - 128}px`,
        }}
      />
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
      
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-purple-600">
          {mainTitle}
        </span>
      </h1>
      <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 h-12">
       { typedText && <span className="font-mono text-purple-300">{typedText}</span>}
        <span className="animate-pulse text-purple-400">|</span>
      </div>
      <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-12 text-muted-foreground">
        Passionate about creating beautiful, functional, and user-friendly applications that solve real-world
        problems.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <Button
          size="lg"
          className="text-lg px-8 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
        >
          View My Work
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="text-lg px-8 bg-background text-foreground border-purple-300 hover:bg-purple-50 hover:border-purple-400"
        >
          Contact Me
        </Button>
      </div>
    </div>

    {/* Scroll Down Arrow */}
    <button
     
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
    >
      <ChevronDown className="w-8 h-8 text-purple-400" />
    </button>
  </section>
    // <div className="home-page-hero">
    //   {mainTitle && <h1>{mainTitle}</h1>}
    //   {Array.isArray(secondaryTitles) && secondaryTitles.length > 0 && (
    //     <div className="secondary-titles">
    //       {secondaryTitles.map((item, i) => (
    //         <h2 key={i}>{item.title}</h2>
    //       ))}
    //     </div>
    //   )}
    //   {Array.isArray(actionButtons) && actionButtons.length > 0 && (
    //     <div className="action-buttons">
    //       {actionButtons.map(({ link }, i) => (
    //         <CMSLink key={i} {...link} />
    //       ))}
    //     </div>
    //   )}
    //   {Array.isArray(optionalText) && optionalText.length > 0 && (
    //     <div className="optional-text">
    //       {optionalText.map((item, i) => (
    //         <p key={i}>{item.text}</p>
    //       ))}
    //     </div>
    //   )}
    // </div>
  )
} 