import { sleep } from "@/util/sleep"
import "server-only"
import { Art, ArtSchema } from "./type"

export const dynamic = "force-dynamic"

export const getTrends = async ():Promise<Art[]>=>{
  await sleep(1000)
  const res = await fetch("http://localhost:3001/arts")
    .then(r=>r.json())
    .then(json => ArtSchema.array().parse(json))
  return res
}
