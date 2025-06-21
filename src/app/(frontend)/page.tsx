import { getPayload } from "payload";
import configPromise from '@payload-config'
import { RenderHero } from '@/heros/RenderHero'

export default async function Homepage() {

  const payload = await getPayload({ config: configPromise })
  const homepage = await payload.find({
    collection: 'homepage',
    depth: 1,
  })

  const heroData = homepage.docs[0]?.hero

  return (
    <div>
      {heroData && <RenderHero {...heroData} />}
    </div>
  )
}

