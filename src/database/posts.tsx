//--- POSTS
import plan from "../images/posts/plan.jpg"
import resources from "../images/posts/resources.jpg"
import vim from "../images/posts/vim.png"
import ups from "../images/posts/ups.jpg"
import project from "../images/posts/project.jpg"
import holiday from "../images/posts/holiday.png"
import holidayAlt from "../images/posts/holidayAlt.jpg"
import mind from "../images/posts/mind.jpg"
import sport from "../images/posts/sport.jpg"

export interface PostsList {
  title: string
  intro: string
  date: string
  image: string
  tags: string[]
  page: string
}

export const posts: PostsList[] = [
  {
    title: "PLANNING",
    intro: "Plans are worthless. Planning is essential. ~ Dwight D. Eisenhower",
    date: "01-08-2019",
    image: plan,
    tags: ["generic"],
    page: "01",
  },
  {
    title: "RESOURCES",
    intro:
      "This is an evolving compendium of resources that helped me going on",
    date: "02-08-2019",
    image: resources,
    tags: ["generic, tools"],
    page: "02",
  },
  {
    title: "PROJECT LIST",
    intro:
      "Motivation is what gets you started, but it's the habits that keep you going. ~ Jim Rohn",
    date: "03-08-2019",
    image: project,
    tags: ["generic", "projects"],
    page: "03",
  },
  {
    title: "LEARN ON HOLIDAYS",
    intro:
      "The holidays are only holy if we make them so. ~ Marianne Williamson",
    date: "01-09-2019",
    image: holiday,
    tags: ["generic", "js"],
    page: "04",
  },
  {
    title: "LEARN ON HOLIDAYS",
    date: "15-09-2019",
    image: holiday,
    intro:
      "You can never lose focus on your individual goals because of the lack of effort. ~ Michael Jordan",
    tags: ["generic", "js"],
    page: "05",
  },
  {
    title: "MIND SET",
    date: "01-10-2019",
    image: mind,
    intro:
      "Choose to do it rather than forcing yourself to do it ~ My 2 cents.",
    tags: ["generic"],
    page: "06",
  },
  {
    title: "UPS & DOWNS",
    date: "01-11-2019",
    image: ups,
    intro:
      "When all seems to be going against you, remember planes take off vs the wind ~ H. Ford",
    tags: ["generic"],
    page: "07",
  },
  {
    title: "pag.8 BODY & MIND",
    date: "2019-11-22",
    image: sport,
    intro:
      "Sports not only build better athletes but also better people ~ Julie Foudy",
    tags: ["generic", "react"],
    page: "08",
  },
]
