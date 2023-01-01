import Intro from "./components/Intro"
import Portfolio from "./components/Portfolio"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

function App() {
  let search = window.location.search 
  if(search.split("?")[1] == "portfolio"){
    window.location.replace('https://todolist-production-35cc.up.railway.app/');
  }
  
  if(search.split("?")[1] == "todolist"){
    window.location.replace('https://todolist-production-35cc.up.railway.app/');
  }

  if(search.split("?")[1] == "clonegram"){
    window.location.replace('https://clonegram-ushiradineth.vercel.app/');
  }

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
