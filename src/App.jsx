import Sidebar from "../Sidebar"
import { useGlobalContext } from "./Context"
import Hero from "./Hero"
import Navbar from "./Navbar"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Sidebar />
    </div>
  )
}
export default App
