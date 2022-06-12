import nightrun from "../images/projects/bgnight.jpg"
import todo from "../images/projects/bgtodo.jpg"
import pokedex from "../images/projects/bgpoke.jpg"
import advice from "../images/projects/bgadvice.jpg"
import weather from "../images/projects/bgweather.jpg"
import eightball from "../images/projects/bgeightball.jpg"
import meme from "../images/projects/bgmeme.jpg"
import weatherAlt from "../images/projects/bgweather2.jpg"
import news from "../images/projects/bgnews.jpg"
import metro from "../images/projects/bgmetro.png"
import postIt from "../images/projects/bgpostit.jpg"
import books from "../images/projects/bgbooks.png"
import budget from "../images/projects/bgbudget.jpg"
import rock from "../images/projects/bgrock.jpg"
import pomodoro from "../images/projects/bgpomodoro.png"
import countdown from "../images/projects/bgcountdown.jpg"
import split from "../images/projects/bgsplit.jpg"
import drum from "../images/projects/bgdrum.jpg"
import quiz from "../images/projects/bgquiz.jpg"
import portfolio from "../images/projects/bgportfolio.jpg"
import advanced from "../images/projects/bgadvanced.png"
import warehouse from "../images/projects/bgwarehouse.png"
import gol from "../images/projects/bggame.png"
import paint from "../images/projects/bgpaintalt.jpg"
import store from "../images/projects/bgstore.png"

//--- INTERFACE
export interface List {
  title: string
  src: string
  tech: string
  link: string
}

//--- PROJECT LIST
export const projects: List[] = [
  {
    title: "NIGHT RUN",
    src: nightrun,
    tech: "javascript",
    link: "https://to-night-run.netlify.com/",
  },
  {
    title: "TO DO LIST",
    tech: "vue",
    src: todo,
    link: "https://to-vue-list.netlify.com/",
  },
  {
    title: "POKEDEX JS",
    tech: "api",
    src: pokedex,
    link: "https://to-pokedex.netlify.com/",
  },
  {
    title: "ADVICE SLIP",
    tech: "api",
    src: advice,
    link: "https://to-advice.netlify.com/",
  },
  {
    title: "WEATHER APP",
    tech: "api",
    src: weather,
    link: "https://to-weather.netlify.com/",
  },
  {
    title: "8-BALL QUEST",
    tech: "api",
    src: eightball,
    link: "https://to-eight.netlify.com/",
  },
  {
    title: "CREATE MEME",
    tech: "react, api",
    src: meme,
    link: "https://to-meme.netlify.com/",
  },
  {
    title: "WEATHER APP",
    tech: "react, api",
    src: weatherAlt,
    link: "https://to-weather-react.netlify.com/",
  },
  {
    title: "TECH NEWS",
    tech: "react, api",
    src: news,
    link: "https://to-news.netlify.com/",
  },
  {
    title: "READING LIST",
    tech: "react",
    src: books,
    link: "https://to-books.netlify.com/",
  },
  {
    title: "METRONOMO",
    tech: "react",
    src: metro,
    link: "https://to-metronome.netlify.com",
  },
  {
    title: "POST-IT JS",
    tech: "vue",
    src: postIt,
    link: "https://vue-it-fire.web.app/#/",
  },
  {
    title: "BUDGET BUDDY",
    tech: "tables",
    src: budget,
    link: "https://to-budget.netlify.com/",
  },
  {
    title: "ROCK PAPER",
    tech: "javascript",
    src: rock,
    link: "https://to-rock.netlify.com/",
  },
  {
    title: "POMO CLOCK",
    tech: "javascript",
    src: pomodoro,
    link: "https://to-pomodoro.netlify.com/",
  },
  {
    title: "COUNTDOWN",
    tech: "javascript",
    src: countdown,
    link: "https://to-countdown.netlify.com/",
  },
  {
    title: "GO FIX IT APP",
    tech: "javascript",
    src: split,
    link: "https://to-naajeni.netlify.com/",
  },
  {
    title: "DRUM MACHINE",
    tech: "javascript",
    src: drum,
    link: "https://to-drum-machine.netlify.com/",
  },
  {
    title: "QUIZ GAME",
    tech: "javascript",
    src: quiz,
    link: "https://to-quiz.netlify.com/",
  },
  {
    title: "PORTFOLIO",
    tech: "react",
    src: portfolio,
    link: "https://to-portfolio-react.netlify.app/",
  },
  {
    title: "ALGORYTHMS ADVANCED",
    tech: "javascript",
    src: advanced,
    link: "https://to-fcc-advanced.netlify.com/",
  },
  {
    title: "WAREHOUSE",
    tech: "database",
    src: warehouse,
    link: "https://to-instock.netlify.com/",
  },
  {
    title: "GAME OF LIFE",
    tech: "canvas",
    src: gol,
    link: "https://to-game-of-life.netlify.com/",
  },
  {
    title: "SIMPLE PAINT",
    tech: "canvas",
    src: paint,
    link: "https://to-paint.netlify.com/",
  },
  {
    title: "E-STORE",
    tech: "react",
    src: store,
    link: "https://to-store.netlify.com/",
  },
  {
    title: "MOVIES DB",
    tech: "react, api",
    src: "../images/bgmovies.png",
    link: "https://to-movies.netlify.com/",
  },
  {
    title: "CALCULATOR",
    tech: "react",
    src: "../images/bgcalculator.jpg",
    link: "https://to-calculator.netlify.com/",
  },
  {
    title: "LOL TRACKER",
    tech: "react, api",
    src: "../images/bglol.jpg",
    link: "https://to-lol-tracker.netlify.com/",
  },
  {
    title: "CSS GENERATOR",
    tech: "react",
    src: "../images/bggenerator.png",
    link: "https://to-css-generator.netlify.com/",
  },
  {
    title: "BATTLE ARENA",
    tech: "react",
    src: "../images/bgbattlearena.jpg",
    link: "https://to-react-battle.netlify.com/",
  },
  {
    title: "COVID-19",
    tech: "react",
    src: "../images/bgcovid.jpg",
    link: "https://to-covid.netlify.com/",
  },
  {
    title: "PIXEL ART",
    tech: "react",
    src: "../images/bgpixel.png",
    link: "https://to-pixel-art.netlify.com/",
  },
  {
    title: "GAME OF LIFE",
    tech: "react",
    src: "../images/bggame.png",
    link: "https://to-gol.netlify.com/",
  },
  {
    title: "AUTH TEST",
    tech: "react",
    src: "../images/bgauth.png",
    link: "https://to-auth.netlify.com/",
  },
  {
    title: "HANGMAN",
    tech: "react",
    src: "../images/bghangman.jpg",
    link: "https://to-hangman.netlify.com/",
  },
  {
    title: "TICK@POLI",
    tech: "react",
    src: "../images/bgpoli.jpg",
    link: "https://ticket-polimi.netlify.com/",
  },
]
