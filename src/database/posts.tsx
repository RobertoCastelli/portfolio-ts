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
import react from "../images/posts/react.png"
import meetup from "../images/posts/meetup.png"
import freecodecamp from "../images/posts/freecodecamp.png"
import gatsby from "../images/posts/gatsby.jpg"
import year from "../images/posts/year.jpg"
import opensource from "../images/posts/opensource.jpg"
import gol from "../images/posts/gol.png"
import typescript from "../images/posts/typescript.png"

//--- INTERFACE
export interface PostsList {
  title: string
  intro: string
  date: string
  image: string
  tags: string[]
  page: string
}

//--- POSTS LIST
export const posts: PostsList[] = [
  {
    title: "PLANNING",
    intro: "Plans are worthless. Planning is essential ~ Dwight D. Eisenhower",
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
      "Motivation is what gets you started, but it's the habits that keep you going ~ Jim Rohn",
    date: "03-08-2019",
    image: project,
    tags: ["generic", "projects"],
    page: "03",
  },
  {
    title: "HOLIDAYS 1",
    intro:
      "The holidays are only holy if we make them so.~ Marianne Williamson",
    date: "01-09-2019",
    image: holiday,
    tags: ["generic", "js"],
    page: "04",
  },
  {
    title: "HOLIDAYS 2",
    date: "15-09-2019",
    image: holiday,
    intro:
      "You can never lose focus on your individual goals because of the lack of effort ~ Michael Jordan",
    tags: ["generic", "js"],
    page: "05",
  },
  {
    title: "MINDSET",
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
    title: "BODY & MIND",
    date: "22-11-2019",
    image: sport,
    intro:
      "Sports not only build better athletes but also better people ~ Julie Foudy",
    tags: ["generic", "react"],
    page: "08",
  },
  {
    title: "TIME TO REACT",
    date: "12-12-2019",
    image: react,
    intro:
      "Life is 10% what happens to you and 90% how you REACT to it ~ Charles R. Swindoll",
    tags: ["react", "tools"],
    page: "09",
  },
  {
    title: "MEET UP",
    date: "17-12-2019",
    intro: "I meet people and they become chapters in my stories ~ Avijeet Das",
    image: meetup,
    tags: ["generic"],
    page: "10",
  },
  {
    title: "FREE CODE CAMP 1",
    date: "01-01-2020",
    intro:
      "If you are willing to learn, no one can help you. If you are determined, no one can stop you ~ Anonymous",
    image: freecodecamp,
    tags: ["js", "tools"],
    page: "11",
  },
  {
    title: "FREE CODE CAMP 2",
    date: "15-02-2020",
    intro:
      "To acquire knowledge, one must study, but to acquire wisdom, one must observe ~ Marilyn vos Savant",
    image: freecodecamp,
    tags: ["js", "tools"],
    page: "12",
  },
  {
    title: "THE GREAT GATSBY",
    date: "03-06-2020",
    intro:
      "My life has got to be like this, it's got to keep going up ~ Gatsby",
    image: gatsby,
    tags: ["react", "gatsby"],
    page: "13",
  },
  {
    title: "ONE YEAR LATER",
    date: "07-06-2020",
    intro:
      "Life is like riding a bicycle. To keep your balance, you must keep moving ~ Albert Einstein",
    image: year,
    tags: ["js", "react", "gatsby"],
    page: "14",
  },
  {
    title: "VI IMPROVED",
    date: "07-07-2020",
    intro: "Improvement is better than delayed perfection ~ Mark Twain",
    image: vim,
    tags: ["js"],
    page: "15",
  },
  {
    title: "HOLIDAYS 3",
    date: "30-08-2020",
    intro:
      "A mind which closely pursues one study must infallibly arrive at great proficiency in that study ~ Mary Shelley",
    image: holidayAlt,
    tags: ["js", "react"],
    page: "16",
  },
  {
    title: "OPEN SOURCE",
    date: "08-09-2020",
    intro:
      "In real open source, you have the right to control your own destiny ~ Linus Torvalds",
    image: opensource,
    tags: ["js"],
    page: "17",
  },
  {
    title: "GAME OF LIFE",
    date: "20-09-2020",
    intro:
      "Once the game is over, the king and the pawn go back in the same box ~ Italian proverb",
    image: gol,
    tags: ["react"],
    page: "18",
  },
  {
    title: "TYPESCRIPT",
    date: "01-03-2021",
    intro: "That isn't writing at all, it's typing ~ Truman Capote",
    image: typescript,
    tags: ["typescript"],
    page: "19",
  },
]
