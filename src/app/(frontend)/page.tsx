import { getPayload } from "payload";
import configPromise from '@payload-config'
import { RenderHero } from '@/heros/RenderHero'
import { CareerJourney } from "@/components/carrerJourney";
import { Projects } from '@/components/Projects'
import { LatestPosts } from '@/components/LatestPosts'

export default async function Homepage() {

  const payload = await getPayload({ config: configPromise })

  const [homepage, posts] = await Promise.all([
    payload.find({
      collection: 'homepage',
      depth: 1,
    }),
    payload.find({
      collection: 'posts',
      limit: 1,
      sort: '-publishedAt',
      depth: 1,
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
      {posts.docs.length > 0 && <LatestPosts posts={posts.docs} />}
    </div>
  )
}

