import React from "react"
import sublinks from "./src/data"
import { useGlobalContext } from "./src/Context"

const Submenu = () => {
  const { pageId } = useGlobalContext()

  const currentPage = sublinks.find((item) => item.pageId === pageId)

  console.log(currentPage)
  return (
    <div className={currentPage ? "submenu show-submenu" : "submenu"}>
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1afr" : "1fr",
        }}
      >
        {currentPage?.links?.map(({ id, url, icon, label }) => {
          return (
            <a key={id} href={url}>
              {icon} {label}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Submenu
