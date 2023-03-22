import React from 'react'
import { graphql } from 'gatsby'
import { Layout, Hero, About, Projects, Contact, Howto } from '../components'
import { GatsbtProvider } from '../context/context'

const HomePage = () => {
  return (
    <GatsbtProvider>
      <Layout>
        <Hero />
        <About />
        <Projects />
        <Howto />
        <Contact />
      </Layout>
    </GatsbtProvider>
  )
}

export default HomePage
