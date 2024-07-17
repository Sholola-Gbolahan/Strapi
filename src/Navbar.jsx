import React from "react"
import { useGlobalContext } from "./Context"
import { FaBars } from "react-icons/fa"
import NavLinks from "./NavLinks"

const Navbar = () => {
  const { openSidebar } = useGlobalContext()
  return (
    <nav>
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
