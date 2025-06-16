import { getPayload } from "payload";
import configPromise from '@payload-config'

export default async function Homepage() {

  const payload = await getPayload({ config: configPromise })
  const homepage = await payload.find({
    collection: 'homepage',
    depth: 1,
  })
  return <div><pre>{JSON.stringify(homepage, null, 2)}</pre></div>
}

