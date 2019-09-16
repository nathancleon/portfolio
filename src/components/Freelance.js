import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import GreenRoof from '../images/greenroofdiagnostics.svg'
import MuteSix from '../images/mutesix.png'
import Tagflix from '../images/tagflix.svg'

export default class Projects extends React.Component {
  _isMounted = false
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Wrapper id="experience">
        {this.props.inView ? (
          <ContentWrapper>
            <HeaderText>Freelance</HeaderText>
            <InnerContentWrapper>
              <InnerContent>
                <InnerContentText>
                  <InnerContentHeader>
                    <h3>Clients I've Worked With</h3>
                  </InnerContentHeader>
                </InnerContentText>
                <ProjectImgContainer>
                  <img src={Tagflix} alt="tagflix logo" />
                  <img src={MuteSix} alt="mutesix logo" />
                  <img src={GreenRoof} alt="greenroof logo" />
                </ProjectImgContainer>
              </InnerContent>
            </InnerContentWrapper>
            <ExperienceText>
              <h3>Freelance</h3>
              <h3>Freelance</h3>
              <h3>Freelance</h3>
            </ExperienceText>
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

const slideIn = keyframes`
from { transform: translateX(-300px)}
  to   { transform: translateX(0)}
`

const fadeOut = keyframes`
  from { opacity: 1 }
  to   { opacity: 0 }
`

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 130vh;
  background-color: #fff;
  margin-bottom: -20vh;
  @media only screen and (max-width: 1024px) {
    padding: 0;
    height: 80vh;
    margin-top: 15vh;
    margin-bottom: 0;
  }
  @media only screen and (max-width: 600px) {
    padding: 0;
    height: 30vh;
    margin-bottom: 25vh;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  position: relative;
  width: 80%;
  height: 40%;
  border: 1px solid #444;
  animation: ${fadeIn} 3s, ${skewUp} 1s;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: auto;
    border: none;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: auto;
    border: none;
    margin-top: 10vh;
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
    top: -26vmin;
    left: 0;
    right: 0;
    display: inline-block;
    text-align: center;
    font-size: 18vmin;
    -webkit-text-stroke-width: 2px;
  }
  @media only screen and (max-width: 420px) {
    -webkit-text-stroke-width: 1px;
  }
`

const InnerContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2vw;
  z-index: 5;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 0;
  }
`
const InnerContent = styled(InnerContentWrapper)`
  animation: ${fadeIn} 2s ease, ${slideIn} 1s ease;
`

const InnerContentText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 4vmin;
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
  @media only screen and (max-width: 600px) {
    h3 {
      font-size: 1.5rem;
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
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  margin-top: 5vh;
  img {
    width: 20vmin;
    z-index: 50;
  }
  @media only screen and (max-width: 1024px) {
    width: 100%;
    img {
      width: 20vmin;
      margin-left: -3vw;
    }
  }
  @media only screen and (max-width: 600px) {
    margin-top: 10px;
  }
`

const ProjectLinks = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-left: 8vw;
  margin-top: -4vh;
  z-index: 60;
  a {
    color: #444;
    font-size: 1.5vw;
    font-style: italic;
    &:first-of-type {
      margin-right: 25px;
    }
  }
  @media only screen and (max-width: 1024px) {
    margin-top: -4vh;
    margin-bottom: 2vh;
    margin-left: 0;
    width: auto;
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
  right: -10vw;
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
      margin-top: -3.8vmin;
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
    display: none;
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
