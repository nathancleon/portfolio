import React from 'react'
import styled from '@emotion/styled'

const ProjectsContainer = styled.div`
  {
    height: 90vh;
    width: 100vw;
    background-color: #f2f2f2;
  }
`;

const ContentContainer = styled.div`
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    padding-top: 15vh;
  }
`;

const Title = styled.h1`
  {
    font-family: 'Merriweather', serif;
    font-size: 5vmin;
    color: #f2f2f2;
    position: relative;
    transform: rotate(-5deg);
  }
  &:before {
    content: '';
    position: absolute;
    width: 23vmin;
    height: 8vmin;
    top: -1.5vmin;
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
    top: -2vmin;
    left: -2vmin;
    background-color: #8DE4F5;
    border-radius: 4px;
    z-index: -2;
    transform: rotate(-8deg);
  }
`

export default class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return(
      <ProjectsContainer>
        <ContentContainer>
        <Title>Projects</Title>
        </ContentContainer>
      </ProjectsContainer>
    )
  }
}