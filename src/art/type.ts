import { z } from "zod"

export const ArtSchema = z.object({
  id: z.string(),
  title: z.string(),
  author: z.string().optional(),
  tag: z.string().array(),
})
export type Art = z.infer<typeof ArtSchema>
