import React from "react"
import { useGlobalContext } from "./Context"
import { FaBars } from "react-icons/fa"
import NavLinks from "./NavLinks"

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext()

  const handleSubmenu = (e) => {
    console.log(e.target)
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null)
    }
  }
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3 className="logo">Strapi</h3>
        <NavLinks />
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
