import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import type { Footer as FooterType } from '@/payload-types'
import { Logo } from '@/components/Logo/Logo'
import { FooterClient } from './Component.client'

export async function Footer() {
  const footerData: FooterType = await getCachedGlobal('footer', 1)()

  return (
    <footer id="footer" className="mt-auto border-t border-border bg-background">
      <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between">
        <div className="flex gap-2">
          <Link className="flex items-center" href="/">
            <Logo />
          </Link>
          {footerData?.shortText && (
            <p className="text-sm text-muted-foreground">{footerData.shortText}</p>
          )}
        </div>
        <FooterClient footer={footerData} />
      </div>
    </footer>
  )
}
