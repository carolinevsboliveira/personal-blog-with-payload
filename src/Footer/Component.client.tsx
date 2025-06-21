'use client'

import React from 'react'
import Link from 'next/link'
import type { Footer as FooterType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Github, Linkedin, Mail } from 'lucide-react'

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
}

export const FooterClient: React.FC<{ footer: FooterType }> = ({ footer }) => {
  const { navItems, socialLinks } = footer || {}

  return (
    <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
      <nav className="flex flex-col md:flex-row gap-4">
        {navItems?.map(({ link }, i) => {
          return <CMSLink className="text-foreground" key={i} {...link} />
        })}
      </nav>

      <div className="flex gap-4">
        {socialLinks?.map((link) => {
          const Icon = socialIcons[link.network]
          return (
            <Link key={link.id} href={link.url}>
              <Icon className="w-6 h-6 text-muted-foreground hover:text-primary" />
            </Link>
          )
        })}
      </div>
    </div>
  )
} 