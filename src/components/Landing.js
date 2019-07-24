import React from 'react'
import styled from '@emotion/styled'
import Hero from './Hero'
import About from './About'
import Experience from './Experience'
import Contact from './Contact'

const Landing = () => (
  <Wrapper>
    <Hero />
    <About />
    <Experience />
    <Contact />
  </Wrapper>
)

export default Landing

const Wrapper = styled.div`
  overflow: hidden;
`
