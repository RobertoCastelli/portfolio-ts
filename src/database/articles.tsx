import uno from "../posts/001.md"
import due from "../posts/002.md"

//--- INTERFACE
export interface Articles {
  page: string
  article: string
}

export const articles = [
  {
    page: "01",
    article: uno,
  },
  {
    page: "02",
    article: due,
  },
]
