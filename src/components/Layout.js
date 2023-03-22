/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { GatsbyContext } from '../context/context'
import SEO from '../components/SEO'
const Layout = ({ children }) => {
  const { isSidebarOpen } = useContext(GatsbyContext)
  console.log(isSidebarOpen)
  return (
    <>
      <SEO />
      <Navbar />
      {isSidebarOpen && <Sidebar />}
      {children}
      <Footer />
    </>
  )
}

export default Layout
