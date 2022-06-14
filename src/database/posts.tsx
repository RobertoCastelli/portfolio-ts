//-- POSTS
import uno from "../posts/001.md";
import due from "../posts/002.md";
import tre from "../posts/003.md";

export interface Posts {
  title: string;
}

export const posts: Posts[] = [
  {
    title: uno,
  },
  {
    title: due,
  },
  {
    title: tre,
  },
];
