//--- CONTEXT
import ContextProvider from "./context";
//--- ROUTER
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Title from "./components/Title";
import Menu from "./components/Menu";
import Explorer from "./components/Explorer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//--- PAGES ROUTE ELEMENT
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Posts from "./pages/Posts";
import About from "./pages/About";
import Tools from "./pages/Tools";

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
  );
}

export default App;
