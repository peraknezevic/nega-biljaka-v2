"use server"

import prisma from "@/prisma/client"

export const getPlantProfile = async (slug: string) => {
  return await prisma.plantProfile.findFirst({
    where: {
      slug,
    },
  })
}

export const getAllPlantProfiles = async () => {
  return await prisma.plantProfile.findMany({
    where: {
      published: "PUBLISHED",
    },
  })
}

export const getAllGenera = async () => {
  return await prisma.genusPage.findMany({
    where: {
      published: "PUBLISHED",
    },
  })
}
