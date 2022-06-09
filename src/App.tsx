//--- ROUTER
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
//--- COMPONENTS
import Title from "./components/Title"
import Menu from "./components/Menu"
import Explorer from "./components/Explorer"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
//--- ROUTE ELEMENT
import Home from "./components/Home"
import Projects from "./components/Projects"
import Blog from "./components/Blog"
import Github from "./components/Github"

function App() {
  return (
    <Router>
      <div className="container">
        <div className="content">
          <Title />
          <Navbar />
          <Explorer />
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/github" element={<Github />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
