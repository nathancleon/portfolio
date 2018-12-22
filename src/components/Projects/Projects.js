import React from 'react'
import styled from '@emotion/styled'
import mentalnoteImg from '../../images/mentalnotemockup.png'
import sproutlogImg from '../../images/sproutlog-mockup.png'
import barklocalImg from '../../images/barklocal-mockup.png'
import htmlIcon from '../../images/icons/html-5.svg'
import cssIcon from '../../images/icons/css-3.svg'
import jqueryIcon from '../../images/icons/jquery.svg'
import nodeJSIcon from '../../images/icons/nodejs-icon.svg'
import reactIcon from '../../images/icons/react.svg'
import reduxIcon from '../../images/icons/redux.svg'
import jestIcon from '../../images/icons/jest.svg'
import mochaIcon from '../../images/icons/mocha.svg'
import chaiIcon from '../../images/icons/chai.svg'
import githubIcon from '../../images/icons/github-icon.svg'

const ProjectsContainer = styled.div`
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15vh;
    background-color: #fefefe;
  }
  @media only screen and (max-width: 860px) {
    {
      padding-top: 10vh;
    }
  }
`;

const ContentContainer = styled.div`
  {
    display: flex;
    align-items: top;
    justify-content: space-between;
    width: 80%;
    padding-left: 5vw;
  }
  @media only screen and (max-width: 860px) {
    {
      flex-direction: column;
      align-items: center;
      padding-left: 0;
    }
  }
`;

const Title = styled.h1`
  {
    font-family: 'Merriweather', serif;
    font-size: 4vmin;
    color: #fefefe;
    position: relative;
    transform: rotate(-5deg);
    margin-bottom: 5vw;
  }
  &:before {
    content: '';
    position: absolute;
    width: 20vmin;
    height: 8vmin;
    top: -2vmin;
    left: -2.5vmin;
    background-color: #715FB5;
    border-radius: 4px;
    z-index: -1;
  }
  &:after {
    content: '';
    position: absolute;
    width: 24vmin;
    height: 8vmin;
    top: -1.5vmin;
    left: -4vmin;
    background-color: #8DE4F5;
    border-radius: 4px;
    z-index: -2;
    transform: rotate(-8deg);
  }
  @media only screen and (max-width: 860px) {
    {
      margin-bottom: 5vh;
    }
  }
`

const ProjectListContainer = styled.div`
{
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
@media only screen and (max-width: 860px) {
  {
    flex-direction: row;
    width: 100%;
    padding-left: 5vw;
  }
}
`;

const ProjectList = styled.ul`
  {
    margin: 0;
    margin-left: -1%;
  }
  li {
    margin: 0;
    width: 100%;
    padding: 10px;
    padding-top: 40px;
    padding-bottom: 40px;
    position: relative;
    list-style: none;
    cursor: pointer;
  }
  li:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #eee;
  }
  li span {
    font-size: 1.125rem;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    color: #715FB5;
  }
  li p {
    font-size: 0.75rem;
    font-family: "Open Sans", sans-serif;
    color: #888;
  }
  @media only screen and (max-width: 860px) {
    {
      width: 100%;
    }
    li:after {
      display: none;
    }
    li span {
      text-align: center;
      font-size: 4vmin;
    }
    li p {
      font-size: 2vmin;
    }
  }
`;

const SelectedProject = styled.div`
  {
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  a {
    width: 80%;
    cursor: pointer;
  }
  img:hover {
    background-color: #eee;
    border-radius: 4px;
  }
  @media only screen and (max-width: 860px) {
    {
      width: 90%;
    }
    img {
      width: 100%;
    }
  }
`;

const TechStack = styled.div`
  {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: -2vh;
    margin-left: 10%;
  }
  img {
    width: 3vw;
    max-height: 3vw;
    cursor: pointer;
    padding: 5px;
  }
  @media only screen and (max-width: 860px) {
    {
      width: 100%;
      margin-top: 0;
      align-self: center;
    }
    img {
      width: 7vw;
      max-height: 7vw;
    }
  }
`;

const selectedColor = {
  color: '#2BE0F5'
}


export default class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [
        {
          title: "Mentalnote",
          description: "An online mental health journal",
          techStack: [
            {
              icon: reactIcon,
              altText: 'react'
            },
            {
              icon: reduxIcon,
              altText: 'redux'
            },
            {
              icon: nodeJSIcon,
              altText: 'node'
            },
            {
              icon: mochaIcon,
              altText: 'mocha'
            },
            {
              icon: chaiIcon,
              altText: 'chai'
            },
            {
              icon: jestIcon,
              altText: 'jest'
            },
            {
              icon: githubIcon,
              altText: 'github',
              link: 'https://github.com/nathancleon/self-journal'
            }
          ],
          image: mentalnoteImg,
          liveDemo: "https://mentalnote.herokuapp.com/"
        },
        {
          title: "Sprout Log",
          description: "An application to track your plant's health",
          techStack: [
            {
              icon: jqueryIcon,
              altText: 'jQuery'
            },
            {
              icon: nodeJSIcon,
              altText: 'node'
            },
            {
              icon: mochaIcon,
              altText: 'mocha'
            },
            {
              icon: chaiIcon,
              altText: 'chai'
            },
            {
              icon: githubIcon,
              altText: 'github',
              link: 'https://github.com/nathancleon/sprout-log-app'
            }
          ],
          image: sproutlogImg,
          liveDemo: "https://sprout-log.herokuapp.com/"
        },
        {
          title: "Bark Local",
          description: "Enter your zipcode local dog parks using Google Maps & Foursquare",
          techStack: [
            {
              icon: htmlIcon,
              altText: 'react'
            },
            {
              icon: cssIcon,
              altText: 'css'
            },
            {
              icon: jqueryIcon,
              altText: 'jQuery'
            },
            {
              icon: githubIcon,
              altText: 'github',
              link: 'https://github.com/nathancleon/bark-local'
            }
          ],
          image: barklocalImg,
          liveDemo: "https://nathancleon.github.io/bark-local/"
        },
      ],
      selectedIndex: 0
    }

    this.selectProject = this.selectProject.bind(this);
  }

  selectProject(index) {
      this.setState({
        selectedIndex: index
      })
  }

  render() {
      const selectedProject = this.state.projects[this.state.selectedIndex];
    return(
      <ProjectsContainer>
        <Title>Projects</Title>
        <ContentContainer>
          <ProjectListContainer>
            {
            this.state.projects.map((project, index) => {
              return (
                <ProjectList key={index}>
                  <li onClick={() => this.selectProject(index)}>
                    {
                      index !== this.state.selectedIndex ?
                      <span>{project.title}</span>:
                      <span style={selectedColor}>{project.title}</span>
                    }
                    <p>{project.description}</p>
                  </li>
                </ProjectList>
              )
              })
            }
          </ProjectListContainer>
        <SelectedProject>
          <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer">
            <img src={selectedProject.image} alt="design mockup" />
          </a>
          <TechStack>
          {
            selectedProject.techStack.map((stack, index) => {
              return index === selectedProject.techStack.length ?
                <img src={stack.icon} alt={stack.altText} title={stack.altText} />:
                <a href={stack.link} target="_blank" rel="noopener noreferrer" key={index}>
                  <img src={stack.icon} alt={stack.altText} title={stack.altText} />
                </a>
            
            })
          }
          </TechStack>
        </SelectedProject>
        </ContentContainer>
      </ProjectsContainer>
    )
  }
}