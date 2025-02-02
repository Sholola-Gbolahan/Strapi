import React, { createContext, useContext, useState } from "react"

const AppContext = createContext()
export const useGlobalContext = () => useContext(AppContext)

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const openSidebar = () => {
    setIsSidebarOpen(true)
    return
  }
  return (
    <AppContext.Provider value={{ isSidebarOpen, closeSidebar, openSidebar }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
