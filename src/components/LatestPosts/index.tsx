import Link from 'next/link'
import React from 'react'

import { Post } from '@/payload-types'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'

// Helper function to truncate rich text content
const truncateRichText = (content: any, wordLimit: number) => {
  if (!content || !content.root || !content.root.children) {
    return ''
  }

  let wordCount = 0
  let truncatedText = ''
  const paragraphs = content.root.children

  for (const p of paragraphs) {
    if (p.type === 'paragraph') {
      for (const child of p.children) {
        if (child.type === 'text' && child.text) {
          const words = child.text.split(' ')
          for (const word of words) {
            if (wordCount < wordLimit) {
              truncatedText += word + ' '
              wordCount++
            } else {
              break
            }
          }
        }
        if (wordCount >= wordLimit) {
          break
        }
      }
    }
    if (wordCount >= wordLimit) {
      break
    }
  }

  return truncatedText.trim() + (wordCount >= wordLimit ? '...' : '')
}

export const LatestPosts = ({ posts }: { posts: Post[] }) => {
  return (
    <section className="bg-background py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Latest Blog Posts</h2>
          <p className="mt-2 text-muted-foreground md:text-xl/relaxed">
            Check out our latest articles and updates.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full items-center p-3 lg:p-0">
          {posts.map(post => {
            const { slug, title, content } = post
            const truncatedContent = truncateRichText(content, 20)
            return (
              <Link href={`/posts/${slug}`} key={slug}>
                <Card className="flex h-full lg:max-w-[800px] transform-gpu flex-col overflow-hidden rounded-lg border shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{truncatedContent}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
} 