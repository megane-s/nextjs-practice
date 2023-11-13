"use server"

import { addArt } from "@/art/add"
import { getTrends } from "@/art/getTrends"
import { Art } from "@/art/type"
import { revalidatePath } from "next/cache"

export const handleAddArt = async (art: Art)=>{
  await addArt(art)
  revalidatePath("/")
}
