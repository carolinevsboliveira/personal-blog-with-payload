import { getPayload } from "payload";
import configPromise from '@payload-config'
import { RenderHero } from '@/heros/RenderHero'
import { CareerJourney } from "@/components/carrerJourney";

export default async function Homepage() {

  const payload = await getPayload({ config: configPromise })
  const homepage = await payload.find({
    collection: 'homepage',
    depth: 1,
  })

  const heroData = homepage.docs[0]?.hero
  console.log("🚀 ~ Homepage ~ heroData:", heroData)

  return (
    <div>
      {heroData && <RenderHero {...heroData} />}
      <CareerJourney career={homepage.docs[0]?.careerJourney} />
    </div>
  )
}

