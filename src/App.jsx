import Sidebar from "../Sidebar"
import Submenu from "../Submenu"
import { useGlobalContext } from "./Context"
import Hero from "./Hero"
import Navbar from "./Navbar"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </div>
  )
}
export default App
