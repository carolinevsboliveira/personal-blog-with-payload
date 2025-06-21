'use client'
import React, { useEffect, useState } from 'react'

import { Media as MediaComponent } from '@/components/Media'
import type { Page } from '@/payload-types'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
export const HomePageHero: React.FC<Page['hero']> = ({
  mainTitle,
  secondaryTitles,
  actionButtons,
  optionalText,
  homePageHeroMedia,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [typedText, setTypedText] = useState('')
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  useEffect(() => {
    const currentText = secondaryTitles?.[currentTextIndex]?.title
    let charIndex = 0
    setTypedText('')

    const typeInterval = setInterval(() => {
      if (charIndex < (currentText?.length ?? 0)) {
        setTypedText(currentText?.slice(0, charIndex + 1) ?? '')
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

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-64 h-64 bg-purple-500/20 rounded-full blur-2xl all 0.5s ease-out"
          style={{
            left: `${mousePosition.x - 128}px`,
            top: `${mousePosition.y - 128}px`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative flex flex-col items-center justify-center">
        {homePageHeroMedia && typeof homePageHeroMedia === 'object' && (
          <MediaComponent resource={homePageHeroMedia} className="w-40 h-40" />
        )}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-purple-600">
            {mainTitle}
          </span>
        </h1>
        <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 h-12">
          {typedText && <span className="font-mono text-purple-300">{typedText}</span>}
          <span className="animate-pulse text-purple-400">|</span>
        </div>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-12 text-muted-foreground">
          {optionalText?.[0]?.text}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          {actionButtons?.map((button, index) => (
            <Button key={index} size="lg" variant={button.link.appearance}>
              {button.link.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <Link
        href="#career-journey"
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
      >
        <ChevronDown className="w-8 h-8 text-purple-400" />
      </Link>
    </section>
  )
}
