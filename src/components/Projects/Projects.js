import React from 'react'
import styled from '@emotion/styled'
import mentalnoteImg from '../../images/mentalnotemockup@2x.png'
import imgOfRenly from '../../images/renly-color.png'
import imgOfMyself from '../../images/me-color.png'

const ProjectsContainer = styled.div`
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 110vh;
    width: 100vw;
    padding-top: 15vh;
    background-color: #fefefe;
  }
`;

const ContentContainer = styled.div`
  {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: 100%;
  }
`;

const Title = styled.h1`
  {
    font-family: 'Merriweather', serif;
    font-size: 5vmin;
    color: #fefefe;
    position: relative;
    transform: rotate(-5deg);
    margin-bottom: 10vh;
  }
  &:before {
    content: '';
    position: absolute;
    width: 23vmin;
    height: 8vmin;
    top: -1vmin;
    left: -2.5vmin;
    background-color: #715FB5;
    border-radius: 4px;
    z-index: -1;
  }
  &:after {
    content: '';
    position: absolute;
    width: 23vmin;
    height: 8vmin;
    top: -1.5vmin;
    left: -2vmin;
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
  &:first-child {
    margin-top: 20%;
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
  li:hover {
    background-color: #f8f8f8;
  }
  li span {
    font-size: 1.5rem;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    color: #715FB5;
  }
  li p {
    font-size: 1rem;
    font-family: "Open Sans", sans-serif;
  }
`;

const SelectedProject = styled.div`
  {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
  }
`;

const TechStack = styled.div`
  {
    width: 60%;
    display: flex;
    justify-content: space-between;
  }
`;


export default class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [
        {
          title: "mentalnote",
          description: "an online mental health journal",
          techStack: ["react", "node", "mocha", "chai", "enzyme", "github"],
          image: mentalnoteImg
        },
        {
          title: "mentalnote",
          description: "an online mental health journal",
          techStack: ["react", "node", "mocha", "chai", "enzyme", "github"],
          image: imgOfMyself
        },
        {
          title: "mentalnote",
          description: "an online mental health journal",
          techStack: ["react", "node", "mocha", "chai", "enzyme", "github"],
          image: imgOfRenly
        },
      ],
      selected: null
    }
  }
  render() {
    return(
      <ProjectsContainer>
        <Title>Projects</Title>
        <ContentContainer>
          <ProjectListContainer>
            {
            this.state.projects.map(project => {
              return (
                <ProjectList>
                  <li>
                    <span>{project.title}</span>
                    <p>{project.description}</p>
                  </li>
                </ProjectList>
              )
              })
            }
          </ProjectListContainer>
        <SelectedProject>
          <img src={this.state.projects[0].image} alt="design mockup" />
          <TechStack>
          {
            this.state.projects[0].techStack.map(stack => {
              return (
                <span>{stack}</span>
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