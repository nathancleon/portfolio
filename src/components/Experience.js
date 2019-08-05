import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import MentalNoteImg from '../images/mentalnotemockup-compressed.png'
import SproutLogImg from '../images/sproutlog-mockup-compressed.png'
import BarkLocal from '../images/barklocal-mockup-compressed.png'
import CircleSvg from '../images/icons/circle.svg'
import CircleOutlineSvg from '../images/icons/circle-outline.svg'

export default class Experience extends React.Component {
  _isMounted = false
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
          image: MentalNoteImg,
        },
        {
          title: 'SproutLog',
          description:
            "Sprout Log is a plant log where you can take notes on each of your plants and keep track of the health of your plant by logging when you watered the plant and keeping track of it's sun exposure.",
          techStack: ['jQuery', 'node', 'mocha', 'chai'],
          liveDemo: 'https://sprout-log.herokuapp.com/',
          gitHub: 'https://github.com/nathancleon/sprout-log-app',
          image: SproutLogImg,
        },
        {
          title: 'Bark Local',
          description:
            'Bark Local is a simple app to find dog parks by utilizing the Google Maps and Foursquare APIs. Enter your zipcode to find dog parks near you!',
          techStack: ['jQuery', 'node', 'mocha', 'chai'],
          liveDemo: 'https://sprout-log.herokuapp.com/',
          gitHub: 'https://github.com/nathancleon/sprout-log-app',
          image: BarkLocal,
        },
      ],
      selectedIndex: 0,
      intervalId: null,
    }
  }

  selectProject(event) {
    this.setState({
      selectedIndex: event.target.id,
    })
    clearInterval(this.intervalId)
  }

  generateDots() {
    let dots = []
    for (let i = 0; i < this.state.projects.length; i++) {
      dots.push(
        <img
          key={i}
          id={i}
          alt="navigation dot"
          onClick={this.selectProject.bind(this)}
          src={CircleOutlineSvg}
        />
      )
    }
    dots[this.state.selectedIndex] = (
      <img
        key={this.state.selectedIndex}
        id={this.state.selectedIndex}
        alt="selected navigation dot"
        onClick={this.selectProject.bind(this)}
        src={CircleSvg}
      />
    )
    return dots
  }

  cycleThroughProjects() {
    if (this.state.selectedIndex === this.state.projects.length - 1) {
      this.setState({
        selectedIndex: 0,
      })
    } else {
      this.setState({ selectedIndex: this.state.selectedIndex + 1 })
    }
  }

  componentDidMount() {
    let projectCycle = () => this.cycleThroughProjects()
    this._isMounted = true
    setTimeout(() => {
      this.intervalId = setInterval(projectCycle, 6000)
    }, 1000)
  }

  componentWillUnmount() {
    this._isMounted = false
    clearInterval(this.intervalId)
  }

  render() {
    const selectedProject = this.state.projects[this.state.selectedIndex]
    const sliderDots = this.generateDots()
    return (
      <Wrapper id="experience">
        {this.props.inView ? (
          <ContentWrapper>
            <HeaderText>Experience</HeaderText>
            <InnerContentWrapper>
              <InnerContentText>
                <InnerContentHeader>
                  <h3>{selectedProject.title}</h3>
                </InnerContentHeader>
                <p>{selectedProject.description}</p>
                <TechStack>
                  {selectedProject.techStack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </TechStack>
              </InnerContentText>
              <ProjectImgContainer>
                <img
                  src={selectedProject.image}
                  alt="desktop and mobile view of the project"
                />
                <ProjectLinks>
                  {selectedProject.liveDemo ? (
                    <a
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  ) : null}
                  {selectedProject.gitHub ? (
                    <a
                      href={selectedProject.gitHub}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Link
                    </a>
                  ) : null}
                </ProjectLinks>
              </ProjectImgContainer>
              <SliderNavigation>{sliderDots}</SliderNavigation>
              <ExperienceText>
                <h3>Experience</h3>
                <h3>Experience</h3>
                <h3>Experience</h3>
              </ExperienceText>
            </InnerContentWrapper>
          </ContentWrapper>
        ) : null}
      </Wrapper>
    )
  }
}

const skewUp = keyframes`
from {
  transform: translate3d(0, 100px, 0) skewY(6deg);
}
to {
  transform: translate3d(0) skewY(0deg);
}
`

const fadeIn = keyframes`
  from { opacity: 0 }
  to   { opacity: 1 }
`

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 130vh;
  background-color: #fff;
  margin-top: 20vh;
  padding: 10vh 0;
  @media only screen and (max-width: 1024px) {
    padding: 0;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  position: relative;
  width: 80%;
  height: 60%;
  border: 1px solid #444;
  animation: ${fadeIn} 2s, ${skewUp} 1s;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: auto;
    border: none;
  }
  @media only screen and (max-width: 600px) {
    height: 580px;
  }
  @media only screen and (max-width: 320px) {
    height: 500px;
  }
`

const HeaderText = styled.h1`
  position: absolute;
  top: -10vmin;
  left: 8vmin;
  font-size: 14vmin;
  font-style: italic;
  color: #444;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #a20505;
  background-color: #fff;
  padding: 0 10px;
  @media only screen and (max-width: 1024px) {
    top: -15vmin;
    left: 0;
    right: 0;
    display: inline-block;
    text-align: center;
    font-size: 9vmin;
    -webkit-text-stroke-width: 2px;
  }
  @media only screen and (max-width: 420px) {
    top: -26vmin;
    font-size: 18vmin;
    -webkit-text-stroke-width: 1px;
  }
`

const InnerContentWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2vw;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 0;
  }
`

const InnerContentText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 9vmin;
  width: 45%;
  p {
    font-size: 1.25vw;
    font-weight: 300;
    line-height: 2vw;
    color: #444;
    margin-top: 15px;
    width: 80%;
  }
  @media only screen and (max-width: 1024px) {
    width: 100%;
    margin-top: 0;
    p {
      margin-left: 5vw;
      font-size: 14px;
      line-height: 18px;
    }
  }
  @media only screen and (max-width: 420px) {
    height: 300px;
  }
`

const InnerContentHeader = styled.div`
  height: 10vh;
  width: 50vw;
  display: flex;
  align-items: center;
  margin-left: -5vw;
  margin-top: 3vmin;
  background-color: #a20505;
  h3 {
    font-size: 2vw;
    font-family: 'Bitter', serif;
    color: #fff;
    margin-left: 5vw;
  }
  @media only screen and (max-width: 1024px) {
    height: 8vh;
    width: 100%;
    margin: 0;
    h3 {
      font-size: 2rem;
    }
  }
`

const TechStack = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 90%;
  margin-top: 10px;
  li {
    display: inline-block;
    list-style: none;
    font-size: 1vw;
    color: #fff;
    font-weight: bold;
    background-color: #444;
    padding: 6px 12px;
    border-radius: 20px;
    margin-right: 5px;
    margin-top: 5px;
  }
  @media only screen and (max-width: 1024px) {
    margin-left: 5vw;
    li {
      font-size: 12px;
    }
  }
`

const ProjectImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: -8vw;
  img {
    width: 55vw;
    filter: drop-shadow(20px 12px 20px rgba(0, 0, 0, 0.6));
    z-index: 50;
  }
  @media only screen and (max-width: 1024px) {
    margin-top: 4vh;
    margin-bottom: 4vh;
    padding: 2vw;
    img {
      width: 90%;
      filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.3));
    }
  }
`

const ProjectLinks = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-left: 6vw;
  margin-top: -4vh;
  z-index: 60;
  a {
    color: #444;
    font-size: 1.5vw;
    font-style: italic;
    margin-right: 25px;
  }

  @media only screen and (max-width: 1024px) {
    margin-top: -2vh;
    a {
      font-size: 1rem;
    }
  }
  @media only screen and (max-width: 600px) {
    margin-top: 5px;
  }
`

const ExperienceText = styled.div`
  position: absolute;
  right: -13.5vw;
  bottom: 0;
  top: 0;
  margin: auto 0;
  height: 8vw;
  max-width: 40vw;
  transform: rotate(-90deg);
  z-index: 1;

  h3 {
    position: relative;
    font-size: 8vh;
    font-weight: 800;
    color: #a20505;

    &:first-of-type {
      z-index: 50;
    }

    &:nth-of-type(2),
    &:last-of-type {
      margin-top: -4.8vmin;
    }

    &:nth-of-type(2) {
      -webkit-text-fill-color: #fff;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: #a20505;
      margin-left: 1px;
      z-index: 4;
    }

    &:last-of-type {
      -webkit-text-fill-color: #fff;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #a20505;
      margin-left: 1px;
      z-index: 3;
    }
  }

  @media only screen and (max-width: 1024px) {
    right: 0;
    left: 0;
    bottom: 0;
    min-width: 100%;
    top: 130%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: rotate(0deg);
    h3 {
      font-size: 7vh;
    }
  }
`

const SliderNavigation = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  height: 30px;
  bottom: -50px;
  left: 0;
  right: 0;
  img {
    width: 20px;
    cursor: pointer;
    &:nth-of-type(2) {
      margin-right: 25px;
      margin-left: 25px;
    }
  }
  @media only screen and (max-width: 1024px) {
    bottom: -30px;
    img {
      width: 15px;
    }
  }
`
