import { MapPin, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Homepage } from '@/payload-types'

export const CareerJourney = ({ career }: { career: Homepage['careerJourney'] }) => {
  if (!career || career.length < 1) return null

  return (
    <section className="py-20 bg-muted/50" id="career-journey">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Career Journey</h2>
        <div className="max-w-4xl mx-auto">
          {career?.map((job, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/30"></div>
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2"></div>

              <Card className="ml-6">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {job.period}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 text-muted-foreground">
                    <span className="font-medium">{job.company}</span>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{job.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
