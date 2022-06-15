//--- POSTS
import unoImg from "../images/posts/plan.jpg"
import dueImg from "../images/posts/resources.jpg"

export interface Posts {
  title: string
  intro: string
  date: string
  image: string
  tags: string
  page: string
}

export const posts: Posts[] = [
  {
    title: "PLANNING",
    intro: "Plans are worthless. Planning is essential. ~ Dwight D. Eisenhower",
    date: "2019-08-01",
    image: unoImg,
    tags: "generic",
    page: "01",
  },
  {
    title: "RESOURCES",
    intro:
      "This is an evolving compendium of resources that helped me going on. I'll keep adding them whatever I find rilevant in this journey.",
    date: "2019-08-02",
    image: dueImg,
    tags: "generic, tools",
    page: "02",
  },
]
