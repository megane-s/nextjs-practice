import "server-only";
import { Art, ArtSchema } from "./type";

export const dynamic = "force-dynamic";

export const getTrends = async (): Promise<Art[]> => {
  const res = await fetch("http://localhost:3001/arts", {
    cache: "force-cache",
  })
    .then((r) => r.json())
    .then((json) => ArtSchema.array().parse(json));
  return res;
};
