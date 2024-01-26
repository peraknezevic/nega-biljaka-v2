import { Metadata } from "next"
import { getAllPlantProfiles } from "../_utils/actions"
import Card from "../components/Card"
import CardGrid from "../components/CardGrid"
import PageHead from "../components/PageHead"

export const metadata: Metadata = {
  title: "Profili biljaka - Nega biljaka",
  description: "Vodiči za negu vaših sobnih biljaka",
}

const PlantProfiles = async () => {
  const plants = await getAllPlantProfiles()

  return (
    <>
      <PageHead title="Profili biljaka" />
      <CardGrid>
        {plants.map((plant) => (
          <Card
            key={plant.id}
            item={plant}
            imgFolder="plants"
            pageFolder="profili-biljaka"
          />
        ))}
      </CardGrid>
    </>
  )
}

export default PlantProfiles
