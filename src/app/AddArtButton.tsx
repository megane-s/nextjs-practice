"use client"

import { Button } from "@mantine/core"
import { handleAddArt } from "./actions"
import { FC } from "react"

interface AddArtButtonProps {
}
export const AddArtButton: FC<AddArtButtonProps> = () => {
  const handleClick = async () => {
    await handleAddArt({
      id: "test-art-" + Date.now(),
      title: "てきとう おぶ てきとう " + Date.now(),
      tag: [],
    })
  }
  return (
    <Button onClick={handleClick}>
      適当に追加
    </Button>
  )
}
