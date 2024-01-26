import { getPlantProfile } from "@/app/_utils/actions"

type Params = {
  params: { slug: string }
}

const PlantProfile = async ({ params }: Params) => {
  const plant = await getPlantProfile(params.slug)

  if (!plant) return <p>Nemamo profil te biljke.</p>

  if (plant.published === "DRAFT")
    return <p>Profil ove biljke još nije objavljen.</p>

  if (plant.published === "REVIEW")
    return <p>Profil ove bilje je u pripremi.</p>

  return <div>{plant?.title}</div>
}

export default PlantProfile
