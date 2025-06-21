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
}) => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])
  
  return (
    <section
    className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-900/20 via-background to-purple-800/10"
  >
    {/* Animated Background Symbols */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => {
        const baseX = Math.random() * 100
        const baseY = Math.random() * 100
        const symbol = ["<", ">", "/", "{", "}", "(", ")", "[", "]", "</>"][Math.floor(Math.random() * 10)]
        const size = Math.random() * 3 + 1

        return (
          <div
            key={i}
            className="absolute font-mono font-bold transition-all duration-1000 ease-out"
            style={{
              left: `${baseX}%`,
              top: `${baseY}%`,
              fontSize: `${size}rem`,
              color: `hsl(${270 + Math.random() * 60}, ${60 + Math.random() * 40}%, ${30 + Math.random() * 40}%)`,
              transform: `translate(${(mousePosition.x - window.innerWidth / 2) * (0.02 + i * 0.001)}px, ${(mousePosition.y - window.innerHeight / 2) * (0.02 + i * 0.001)}px) rotate(${Math.sin(Date.now() * 0.001 + i) * 10}deg)`,
              opacity: 0.1 + Math.sin(Date.now() * 0.002 + i) * 0.1,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            {symbol}
          </div>
        )
      })}

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-purple-500 rounded-full opacity-30 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * (0.05 + i * 0.002)}px, ${(mousePosition.y - window.innerHeight / 2) * (0.05 + i * 0.002)}px)`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Large background symbols */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`large-${i}`}
          className="absolute font-mono font-bold text-purple-500/5 select-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${8 + Math.random() * 12}rem`,
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * (0.01 + i * 0.0005)}px, ${(mousePosition.y - window.innerHeight / 2) * (0.01 + i * 0.0005)}px) rotate(${Math.sin(Date.now() * 0.0005 + i) * 5}deg)`,
            zIndex: 1,
          }}
        >
          {["</>", "{}", "[]", "()"][Math.floor(Math.random() * 4)]}
        </div>
      ))}
    </div>

    {/* Purple glow effects */}
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        style={{
          left: `${mousePosition.x - 192}px`,
          top: `${mousePosition.y - 192}px`,
          transition: "all 0.3s ease-out",
        }}
      />
      <div
        className="absolute w-64 h-64 bg-purple-400/5 rounded-full blur-2xl"
        style={{
          left: `${mousePosition.x - 128}px`,
          top: `${mousePosition.y - 128}px`,
          transition: "all 0.5s ease-out",
        }}
      />
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
        Hi, I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
          John Doe
        </span>
      </h1>
      <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 h-12">
        {/* <span className="font-mono text-purple-300">{typedText}</span> */}
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