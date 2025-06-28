import { getPayload } from "payload";
import configPromise from '@payload-config'
import { RenderHero } from '@/heros/RenderHero'
import { CareerJourney } from "@/components/carrerJourney";
import { Projects } from '@/components/Projects'
import { LatestPosts } from '@/components/LatestPosts'

export default async function Homepage({ params }: { params: Promise<{ lang: 'pt-BR' | 'en' }> }) {
  const { lang } = await params
  console.log("🚀 ~ Homepage ~ lang:", lang)

  const payload = await getPayload({ config: configPromise })
7

  const [homepage, posts] = await Promise.all([
    payload.find({
      collection: 'homepage',
      depth: 1,
      locale: lang
    }),
    payload.find({
      collection: 'posts',
      limit: 1,
      sort: '-publishedAt',
      depth: 1,
      locale: lang
    }),
  ])

  const heroData = homepage.docs[0]?.hero
  const careerJourneyData = homepage.docs[0]?.careerJourney
  const projectsData = homepage.docs[0]?.projects

  return (
    <div>
      {heroData && <RenderHero {...heroData} />}
      <CareerJourney career={careerJourneyData} />
      <Projects projects={projectsData} />
      {posts.docs.length > 0 && <LatestPosts posts={posts.docs} params={params} />}
    </div>
  )
}

