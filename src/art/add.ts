import { sleep } from "@/util/sleep";
import { Art } from "./type";

export const addArt = async (art: Art)=>{
  await fetch("http://localhost:3001/arts", {
    method: "POST",
    body: JSON.stringify(art),
    headers:[
      ["Content-Type", "application/json"],
    ],
  })
  return 
}
