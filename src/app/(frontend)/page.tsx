import { getPayload } from "payload";
import configPromise from '@payload-config'
import { RenderHero } from '@/heros/RenderHero'
import { CareerJourney } from "@/components/carrerJourney";
import { Projects } from '@/components/Projects'

export default async function Homepage() {

  const payload = await getPayload({ config: configPromise })
  const homepage = await payload.find({
    collection: 'homepage',
    depth: 1,
  })

  const heroData = homepage.docs[0]?.hero
  const careerJourneyData = homepage.docs[0]?.careerJourney
  const projectsData = homepage.docs[0]?.projects

  console.log("🚀 ~ Homepage ~ heroData:", heroData)

  return (
    <div>
      {heroData && <RenderHero {...heroData} />}
      <CareerJourney career={careerJourneyData} />
      <Projects projects={projectsData} />
    </div>
  )
}

