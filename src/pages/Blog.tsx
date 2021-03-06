import React from "react"
//--- ROUTER
import { Link } from "react-router-dom"
//--- IMAGES
import sheep from "../images/impostor.png"

const Blog = () => {
  return (
    <div className="blog__container">
      <div className="blog__content">
        {/* eslint-disable-next-line */}
        <h1>// diary of an impostor</h1>
        <div>{"<img src={impostor} alt='logo' />"}</div>
        <Link to="/posts">
          <img src={sheep} alt="sheep" />
        </Link>

        <section>
          <div>{"<div className='wiki'>"}</div>
          <div className="blog__text">
            "Impostor syndrome is a psychological pattern in which an individual
            doubts their accomplishments despite external evidence of their
            competence".
          </div>
        </section>

        <section>
          <div className="blog__text">
            This blog is a story in continuous evolution to keep track of my
            progress, paths, errors, achievements in the hopes of helping other
            people to share this adventure. Special thanks to Daniele Di Lucido
            & Jaga Santagostino, my mentors.
          </div>
          <div>{"</div>"}</div>
        </section>

        <section></section>

        <div>{"<button onClick={goToPosts}>"}</div>
        <Link to="/posts">
          <button>posts</button>
        </Link>
        <div>{"</button>"}</div>
      </div>
    </div>
  )
}

export default Blog
