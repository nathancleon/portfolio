import React from 'react'
import styled from '@emotion/styled'
import greenroofImg from '../../images/greenroof-diagnostics-mockup.png'
import htmlIcon from '../../images/icons/html-5.svg'
import cssIcon from '../../images/icons/css-3.svg'
import jqueryIcon from '../../images/icons/jquery.svg'
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
  @media only screen and (max-width: 740px) {
    {
      flex-direction: column;
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
    margin-top: 5vw;
  }
  &:before {
    content: '';
    position: absolute;
    width: 25vmin;
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
    width: 29vmin;
    height: 8vmin;
    top: -1.5vmin;
    left: -4vmin;
    background-color: #8DE4F5;
    border-radius: 4px;
    z-index: -2;
    transform: rotate(-8deg);
  }
  @media only screen and (max-width: 740px) {
    {
      margin-bottom: 5vh;
    }
  }
`

const ProjectListContainer = styled.div`
{
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10vw;
}
h2 {
  color: #715FB5;
}
p {
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  color: #888;
}
@media only screen and (max-width: 740px) {
  {
    width: 90%;
    padding-left: 5vw;
    margin-top: 5vh;
    margin-bottom: 5vh;
    align-self: center;
  }
  p {
    font-size: 2vmin;
  }
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
  a {
    width: 80%;
    cursor: pointer;
  }
  img:hover {
    background-color: #eee;
    border-radius: 4px;
  }
  @media only screen and (max-width: 740px) {
    {
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
    }
  }
`;

const TechStack = styled.div`
  {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: -3vh;
    margin-left: 10%;
  }
  img {
    width: 4vw;
    max-height: 4vw;
    cursor: pointer;
    padding: 5px;
    margin-right: 2vw;
  }
  @media only screen and (max-width: 740px) {
    {
      width: 80%;
      margin-top: 0;
      margin-left: 50%;
    }
    img {
      width: 7vw;
      max-height: 7vw;
    }
  }
`;


export default class Projects extends React.Component {
  constructor(props) {
    super(props)

    this.selectProject = this.selectProject.bind(this);
  }

  selectProject(index) {
      this.setState({
        selectedIndex: index
      })
  }

  render() {
    return(
      <ProjectsContainer>
        <Title>Experience</Title>
        <ContentContainer>
          <ProjectListContainer>
            <h2>Green Roof Diagnostics Redesign</h2>
            <p>Worked alongside the software engineer at Green Roof Diagnostics to completely redesign their site to engineer's spec. Created initial mockup and implemented site based on agreed upon design</p>
          </ProjectListContainer>
        <SelectedProject>
          <a href="https://github.com/nathancleon/green-roof-diagnostics" target="_blank" rel="noopener noreferrer">
            <img src={greenroofImg} alt="design mockup" />
          </a>
          <TechStack>
            <img src={htmlIcon} alt="html" title="html" />
            <img src={cssIcon} alt="css" title="css"/>
            <img src={jqueryIcon} alt="jquery" title="jquery" />
            <a href="https://github.com/nathancleon/green-roof-diagnostics" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="github" title="github"/>
            </a>
          </TechStack>
        </SelectedProject>
        </ContentContainer>
      </ProjectsContainer>
    )
  }
}