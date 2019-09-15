import React from 'react'
import styled from '@emotion/styled'
import Hero from './Hero'
import About from './About'
import Freelance from './Freelance'
import Projects from './Projects'
import Contact from './Contact'

class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      aboutIsInView: false,
      experienceIsInView: false,
      projectsIsInView: false,
      contactIsInView: false,
    }
  }

  componentDidMount() {
    const io = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting && entry.target.id === 'about') {
          this.setState({
            aboutIsInView: true,
          })
        } else if (entry.isIntersecting && entry.target.id === 'experience') {
          this.setState({
            experienceIsInView: true,
          })
        } else if (entry.isIntersecting && entry.target.id === 'projects') {
          this.setState({
            projectsIsInView: true,
          })
        } else if (entry.isIntersecting && entry.target.id === 'contact') {
          console.warn('contact logic ran')
          this.setState({
            contactIsInView: true,
          })
        }
      }
    })

    document.querySelectorAll('section').forEach(element => io.observe(element))
  }

  render() {
    return (
      <Wrapper>
        <Hero />
        <About inView={this.state.aboutIsInView} />
        <Freelance inView={this.state.experienceIsInView} />
        <Projects inView={this.state.projectsIsInView} />
        <Contact inView={this.state.contactIsInView} />
      </Wrapper>
    )
  }
}

export default Landing

const Wrapper = styled.div`
  overflow: hidden;
`
