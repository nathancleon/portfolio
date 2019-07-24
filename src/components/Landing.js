import React from 'react'
import styled from '@emotion/styled'
import Hero from './Hero'
import About from './About'
import Experience from './Experience'
import Contact from './Contact'

export default class Landing extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Wrapper>
        <Hero />
        <About />
        <Experience />
        <Contact />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  overflow: hidden;
`
