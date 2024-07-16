import React from "react"

import sublinks from "./src/data"

const Sidebar = () => {
  return (
    <aside>
      <div>
        {sublinks.map((sublink) => {
          const { page, pageId, links } = sublink
          return (
            <ul key={pageId}>
              <li>{page}</li>
              {links.map(({ id, label, icon, url }) => {
                return (
                  <div key={id}>
                    {icon}
                    {label}
                  </div>
                )
              })}
            </ul>
          )
        })}
      </div>
    </aside>
  )
}

export default Sidebar
