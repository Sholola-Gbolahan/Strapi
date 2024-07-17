import React, { createContext, useContext, useState } from "react"

const AppContext = createContext()
export const useGlobalContext = () => useContext(AppContext)

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [pageId, setPageId] = useState(null)
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  return (
    <AppContext.Provider
      value={{ isSidebarOpen, closeSidebar, openSidebar, pageId, setPageId }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
