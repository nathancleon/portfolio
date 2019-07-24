import React from 'react'
import styled from '@emotion/styled'
import MentalNoteImg from '../images/mentalnotemockup.png'
import SproutLogImg from '../images/sproutlog-mockup.png'
import BarkLocal from '../images/barklocal-mockup.png'
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
    console.log(event.target)
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
    console.log('cycle ran')
    if (this.state.selectedIndex === this.state.projects.length - 1) {
      this.setState({
        selectedIndex: 0,
      })
    } else {
      console.log('cycle ran2')
      this.setState({ selectedIndex: this.state.selectedIndex + 1 })
    }
  }

  componentDidMount() {
    let projectCycle = () => this.cycleThroughProjects()
    this._isMounted = true
    this.intervalId = setInterval(projectCycle, 5000)
  }

  componentWillUnmount() {
    this._isMounted = false
    clearInterval(this.intervalId)
  }

  render() {
    const selectedProject = this.state.projects[this.state.selectedIndex]
    const sliderDots = this.generateDots()
    return (
      <Wrapper>
        <ContentWrapper>
          <HeaderText id="experience">Experience</HeaderText>
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
              <img src={selectedProject.image} alt="" />
              <ProjectLinks>
                {selectedProject.liveDemo ? (
                  <a href={selectedProject.liveDemo}>Live Demo</a>
                ) : null}
                {selectedProject.gitHub ? (
                  <a href={selectedProject.gitHub}>GitHub Link</a>
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
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 130vh;
  background-color: #fff;
  margin-top: 20vh;
  padding: 10vh 0;
`

const ContentWrapper = styled.div`
  display: flex;
  position: relative;
  width: 85%;
  height: 70%;
  border: 1px solid #444;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    height: 89%;
    min-width: 85%;
    max-width: 85%;
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
`

const InnerContentWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 5vw;
`

const InnerContentHeader = styled.div`
  height: 10vh;
  width: 50vw;
  display: flex;
  align-items: center;
  margin-left: -7vw;
  margin-top: 3vmin;
  background-color: #a20505;
  h3 {
    font-size: 2vw;
    font-family: 'Bitter', serif;
    color: #fff;
    margin-left: 7vw;
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
`

const TechStack = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 70%;
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
    z-index: 1000;
  }
`

const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 45%;
  right: 10vw;
  margin-left: 6vw;
  a {
    color: #444;
    font-size: 2vw;
    font-style: italic;
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
    font-size: 10vh;
    font-weight: 800;
    color: #a20505;

    &:first-of-type {
      z-index: 50;
    }

    &:nth-of-type(2),
    &:last-of-type {
      margin-top: -3.2vw;
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
`

const SliderNavigation = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: -5vh;
  left: 0;
  right: 0;
  img {
    width: 20px;
    cursor: pointer;
    margin-right: 25px;
  }
`
