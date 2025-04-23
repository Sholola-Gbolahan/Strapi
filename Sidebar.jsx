import React from "react"

import sublinks from "./src/data"
import { FaTimes } from "react-icons/fa"
import { useGlobalContext } from "./src/Context"

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext()

  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar " : "sidebar"}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map(({ page, pageId, links }) => {
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map(({ id, label, icon, url }) => {
                    return (
                      <a href={url} key={id}>
                        {icon}
                        {label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
