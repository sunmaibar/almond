import React from 'react'
import { graphql } from 'gatsby'
import { Layout, Hero, About, Projects, Contact, Howto } from '../components'

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Howto />
      <Contact />
    </Layout>
  )
}

export default HomePage
