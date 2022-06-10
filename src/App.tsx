//--- CONTEXT
import ContextProvider from "./context";
//--- ROUTER
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//--- COMPONENTS
import Title from "./components/Title";
import Menu from "./components/Menu";
import Explorer from "./components/Explorer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//--- PAGES ROUTE ELEMENT
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Blog from "./components/pages/Blog";
import Github from "./components/pages/Github";
import About from "./components/pages/About";
import Drawings from "./components/pages/Drawings";

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
              <Route path="/Blog" element={<Blog />} />
              <Route path="/github" element={<Github />} />
              <Route path="/about" element={<About />} />
              <Route path="/drawings" element={<Drawings />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
