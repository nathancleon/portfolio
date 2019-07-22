import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import mentalnoteImg from '../../../images/mentalnotemockup-min.png'
import sproutlogImg from '../../../images/sproutlog-mockup-min.png'
import barklocalImg from '../../../images/barklocal-mockup-min.png'
import ArrowLeftImg from '../../../images/icons/chevron-left.svg'
import ArrowRightImg from '../../../images/icons/chevron-right.svg'

class Work extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [
        {
          title: 'MentalNote',
          description:
            'Mental Note is an online mental health tracker. The intention is to log how you’re doing every day. You can track your progress over time on the dashboard and view analytics on your mental health over the course of weeks, months, and years.',
          techStack: ['react', 'redux', 'node', 'mocha', 'chai', 'jest'],
          liveDemo: 'https://mentalnote.herokuapp.com/',
          gitHub: 'https://github.com/nathancleon/self-journal',
          image: mentalnoteImg,
        },
        {
          title: 'Sprout Log',
          description:
            'Mental Note is an online mental health tracker. The intention is to log how you’re doing every day. You can track your progress over time on the dashboard and view analytics on your mental health over the course of weeks, months, and years.',
          techStack: ['jQuery', 'node', 'mocha', 'chai'],
          liveDemo: 'https://sprout-log.herokuapp.com/',
          gitHub: 'https://github.com/nathancleon/sprout-log-app',
          image: sproutlogImg,
        },
        {
          title: 'Bark Local',
          description: "An application to track your plant's health",
          techStack: ['jQuery', 'node', 'mocha', 'chai'],
          liveDemo: 'https://sprout-log.herokuapp.com/',
          gitHub: 'https://github.com/nathancleon/sprout-log-app',
          image: barklocalImg,
        },
      ],
      selectedIndex: 0,
    }

    this.previousProject = this.previousProject.bind(this)
    this.nextProject = this.nextProject.bind(this)
  }

  previousProject() {
    this.setState({
      selectedIndex: this.state.selectedIndex - 1,
    })
  }

  nextProject() {
    this.setState({
      selectedIndex: this.state.selectedIndex + 1,
    })
  }

  render() {
    const selectedProject = this.state.projects[this.state.selectedIndex]
    return (
      <Wrapper>
        <ArrowLeft src={ArrowLeftImg} onClick={() => this.previousProject()} />
        <ArrowRight src={ArrowRightImg} onClick={() => this.nextProject()} />
        <ProjectText>
          <h1>{selectedProject.title}</h1>
          <p>{selectedProject.description}</p>
        </ProjectText>
        <SelectedProject>
          <SelectedImg src={selectedProject.image} alt="design mockup" />
          <LinkContainer>
            <LiveDemoLink
              href={selectedProject.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </LiveDemoLink>
            <LiveDemoLink
              href={selectedProject.gitHub}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Link
            </LiveDemoLink>
          </LinkContainer>
          <TechStack>
            {selectedProject.techStack.map((name, index) => (
              <li key={index}>
                <p>{name}</p>
              </li>
            ))}
          </TechStack>
        </SelectedProject>
      </Wrapper>
    )
  }
}

export default Work

const fadeIn = keyframes`
  from { opacity: 0 }
  to   { opacity: 1 }
`

const moveUp = keyframes`
  0% { 
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
  }
`

const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  z-index: 1;
  padding: 20px;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: space-around;
  }
`

const ProjectText = styled.div`
  animation: ${fadeIn} 3s, ${moveUp} 2s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  padding: 20px;
  h1 {
    font-size: 4vmin;
    color: #fff;
  }
  p {
    font-family: 'Merriweather', serif;
    font-size: 2.25vmin;
    color: #fff;
    line-height: 1.5rem;
  }
  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: 40%;
    order: 2;
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
      margin-top: 10px;
    }
  }
  @media only screen and (max-width: 768px) {
    p {
      line-height: 1.5rem;
    }
  }
`

const SelectedProject = styled.div`
  animation: ${fadeIn} 3s;
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: 60%;
    order: 1;
  }
`

const SelectedImg = styled.img`
  width: 100%;
  @media only screen and (max-width: 1024px) {
    max-width: 65vw;
  }
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 35%;
  margin-top: -5vmin;
  margin-left: 10%;
  z-index: 10;
  @media only screen and (max-width: 768px) {
    min-width: 50%;
  }
`

const LiveDemoLink = styled.a`
  text-decoration: none;
  font-family: 'Merriweather', serif;
  font-size: 2vmin;
  color: #fff;
  @media only screen and (max-width: 768px) {
    font-size: 0.75rem;
  }
`

const TechStack = styled.ul`
  max-width: 75%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  li {
    background-color: #fff;
    border-radius: 20px;
    list-style: none;
    margin-top: 15px;
    margin-right: 10px;
    p {
      display: block;
      padding: 2px 14px;
      font-size: 1.25vw;
      font-weight: bold;
      background: linear-gradient(#ff9f93, #fc5a72);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  @media only screen and (max-width: 768px) {
    max-width: 90%;
    li {
      p {
        font-size: 0.5rem;
      }
    }
  }
`

const ArrowLeft = styled.img`
  width: 30px;
  position: absolute;
  left: -5vmin;
  top: 50%;
  cursor: pointer;
`

const ArrowRight = styled.img`
  width: 30px;
  position: absolute;
  right: -5vmin;
  top: 50%;
  cursor: pointer;
`
