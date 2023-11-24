import prisma from "@/prisma/client"
import React from "react"

const ProfiliBiljaka = async () => {
  const profili = await prisma.plantProfile.findMany()
  return (
    <ul>
      {profili.map((profil) => (
        <li key="profil.id">{profil.botanicalName}</li>
      ))}
    </ul>
  )
}

export default ProfiliBiljaka
