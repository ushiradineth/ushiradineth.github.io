import Intro from "./components/Intro"
import Portfolio from "./components/Portfolio"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App bg-[#121212]">
      <div className="max-w-5xl w-11/12 mx-auto">
        <Intro />
        <Portfolio />
        <Projects />
        <Footer />
        </div>
    </div>
  )
}

export default App
