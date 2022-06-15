//--- CONTEXT
import ContextProvider from "./context"
//--- ROUTER
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Title from "./components/Title"
import Menu from "./components/Menu"
import Explorer from "./components/Explorer"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
//--- PAGES ROUTE ELEMENT
import Home from "./components/pages/Home"
import Projects from "./components/pages/Projects"
import Posts from "./components/pages/Posts"
import About from "./components/pages/About"
import Tools from "./components/pages/Tools"

function App() {
  return (
    <ContextProvider>
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
              <Route path="/Blog" element={<Posts />} />
              <Route path="/about" element={<About />} />
              <Route path="/tools" element={<Tools />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ContextProvider>
  )
}

export default App
