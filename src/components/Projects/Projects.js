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
`;

const ContentContainer = styled.div`
  {
    display: flex;
    align-items: top;
    justify-content: space-between;
    height: 80%;
    width: 100%;
    padding-left: 5vw;
  }
`;

const Title = styled.h1`
  {
    font-family: 'Merriweather', serif;
    font-size: 4vmin;
    color: #fefefe;
    position: relative;
    transform: rotate(-5deg);
    margin-bottom: 10vh;
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
`

const ProjectListContainer = styled.div`
{
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
`;

const SelectedProject = styled.div`
  {
    height: 100%;
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    width: 80%;
  }
`;

const TechStack = styled.div`
  {
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin-top: -5vh;
  }
  img {
    width: 3vw;
    max-height: 3vw;
  }
`;


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
              link: ''
            }
          ],
          image: mentalnoteImg
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
              link: ''
            }
          ],
          image: sproutlogImg
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
              link: ''
            }
          ],
          image: barklocalImg
        },
      ],
      selectedIndex: 0
    }

    this.selectedProject = this.selectedProject.bind(this);
  }

  selectedProject(index) {
      this.setState({
        selectedIndex: index
      })
  }

  render() {
    return(
      <ProjectsContainer>
        <Title>Projects</Title>
        <ContentContainer>
          <ProjectListContainer>
            {
            this.state.projects.map((project, index) => {
              return (
                <ProjectList key={index}>
                  <li onClick={() => this.selectedProject(index)}>
                    <span>{project.title}</span>
                    <p>{project.description}</p>
                  </li>
                </ProjectList>
              )
              })
            }
          </ProjectListContainer>
        <SelectedProject>
          <img src={this.state.projects[this.state.selectedIndex].image} alt="design mockup" />
          <TechStack>
          {
            this.state.projects[this.state.selectedIndex].techStack.map((stack, index) => {
              return (
                <img key={index} src={stack.icon} alt={stack.altText} title={stack.altText} />
              )
            })
          }
          </TechStack>
        </SelectedProject>
        </ContentContainer>
      </ProjectsContainer>
    )
  }
}