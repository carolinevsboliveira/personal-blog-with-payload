'use client'
import React from 'react'
import { Homepage } from '@/payload-types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import { ExternalLink } from 'lucide-react'

interface ProjectsProps {
  projects: Homepage['projects']
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return null
  }

  return (
    <section className="py-20" id="projects">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {project.title}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github ?? ''} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.live ?? ''} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project?.tech?.map((tech, techIndex) => (
                  <Badge key={techIndex} className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-md">
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
  )
} 