import React, { useState } from 'react'

const GatsbyContext = React.createContext()

const GatsbtProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  return (
    <GatsbyContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbtProvider }
