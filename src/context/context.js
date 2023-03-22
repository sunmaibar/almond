import React, { useState } from 'react'
import sublinks from '../constants/links'

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
