import React from "react"

import sublinks from "./src/data"
import { FaTimes } from "react-icons/fa"

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        <button>
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
