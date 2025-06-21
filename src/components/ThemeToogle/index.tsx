'use client'

import React from 'react'
import { useTheme } from '@/providers/Theme'
import { Moon, Sun } from 'lucide-react'
import { Switch } from '@/components/ui/switch'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const handleToggle = (isToggled: boolean) => {
    setTheme(isToggled ? 'dark' : 'light')
  }

  const isDark = theme === 'dark'

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-[1.2rem] w-[1.2rem]" />
      <Switch checked={isDark} onCheckedChange={handleToggle} />
      <Moon className="h-[1.2rem] w-[1.2rem]" />
    </div>
  )
} 