import prisma from "@/prisma/client"
import React from "react"
import PageHead from "../components/PageHead"
import Card from "../components/Card"
import CardGrid from "../components/CardGrid"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Profili biljaka - Nega biljaka",
  description: "Vodiči za negu vaših sobnih biljaka",
}

const ProfiliBiljaka = async () => {
  const items = await prisma.plantProfile.findMany({
    where: { published: "PUBLISHED" },
  })

  return (
    <>
      <PageHead title="Profili biljaka" />
      <CardGrid>
        {items.map((item) => (
          <Card
            key={item.id}
            item={item}
            imgFolder="plants"
            pageFolder="profili-biljaka"
          />
        ))}
      </CardGrid>
    </>
  )
}

export default ProfiliBiljaka
