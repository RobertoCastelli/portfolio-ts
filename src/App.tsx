//--- COMPONENTS
import Explorer from "./components/Explorer"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Menu from "./components/Menu"
import Navbar from "./components/Navbar"
import Title from "./components/Title"

function App() {
  return (
    <div className="container">
      <div className="content">
        <Title />
        <Navbar />
        <Explorer />
        <Menu />
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default App
