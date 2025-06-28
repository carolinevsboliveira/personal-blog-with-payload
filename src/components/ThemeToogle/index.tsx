'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from '@/providers/Theme'
import { Moon, Sun } from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import { usePathname, useRouter } from 'next/navigation'
import { Languages } from 'lucide-react'

function LanguageToggle() {
  const pathname = usePathname()
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  // Extract lang from pathname (assumes /[lang]/... structure)
  const pathParts = pathname.split('/').filter(Boolean)
  const currentLang = pathParts[0] === 'en' ? 'en' : 'pt-BR'
  const otherLang = currentLang === 'en' ? 'pt-BR' : 'en'
  // Replace the lang part with the other language
  const newPath = '/' + [otherLang, ...pathParts.slice(1)].join('/')

  const handleToggle = (checked: boolean) => {
    router.push(newPath)
  }

  const isEnglish = currentLang === 'en'

  return (
    <div className="flex items-center space-x-2">
      <span className="text-xs font-medium">PT</span>
      <Switch checked={isEnglish} onCheckedChange={handleToggle} />
      <span className="text-xs font-medium">EN</span>
      <Languages className="ml-1 h-4 w-4 text-muted-foreground" />
    </div>
  )
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  const handleToggle = (isToggled: boolean) => {
    setTheme(isToggled ? 'dark' : 'light')
  }

  const isDark = theme === 'dark'

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <Switch checked={isDark} onCheckedChange={handleToggle} />
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      </div>
      <LanguageToggle />
    </div>
  )
} 