import { getTrends } from "@/art/getTrends"
import { AddArtButton } from "./AddArtButton"

export default async function Home() {
  const trends = await getTrends()
  return (
    <div>
      {trends.map(art =>
        <div key={art.id}>
          {art.title}
        </div>
      )}
      <AddArtButton />
    </div>
  )
}
