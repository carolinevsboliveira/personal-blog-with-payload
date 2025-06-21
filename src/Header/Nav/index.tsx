'use client'

import React, { useState, useEffect } from 'react'

import type { Header as HeaderType } from '@/payload-types'
import { Media as MediaType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import { usePathname } from 'next/navigation'
import { useAuth } from '@payloadcms/ui'
import { Logo } from '@/components/Logo/Logo'
import Link from 'next/link'
import { ThemeToggle } from '@/components/ThemeToogle'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const { user } = useAuth()
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
console.log(data)
  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  const navItems = data?.navItems || []
  const logo = data?.logo as MediaType
  const [scrolled, setScrolled] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      id="top"
      className={`h-16 fixed w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-background/95 backdrop-blur-sm border-border'
          : 'bg-transparent border-transparent'
      } ${user ? 'top-10' : 'top-0'}`}
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <Link href="#top">
            <Logo src={logo?.url || undefined} />
          </Link>
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ link }, i) => {
              return <CMSLink key={i} {...link} appearance="link" />
            })}
            <Link href="#footer" className="flex items-center">Test Link</Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
