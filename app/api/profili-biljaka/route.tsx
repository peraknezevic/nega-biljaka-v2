import prisma from "@/prisma/client"

export async function GET(request: Request) {
  const plants = await prisma.plantProfile.findMany()
  return Response.json(plants)
}
