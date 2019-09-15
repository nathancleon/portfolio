import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import ImgOfMyself from '../images/me-cropped-grainy-compressed3.png'
import LocationIcon from '../images/icons/map-marker-alt.svg'

const Hero = () => (
  <LandingWrapper>
    <ContentWrapper>
      <NameLarge>Nathan Collins León</NameLarge>
      <NameSmall>Nathan Collins León</NameSmall>
      <ImageOfMyself src={ImgOfMyself} alt="Nathan Collins Leon" />
      <HeroTextContainer>
        <HeroText>
          <li>Fullstack</li>
          <li />
          <li>Frontend</li>
          <li />
          <li>
            <img src={LocationIcon} alt="location symbol" />
            D.C.
          </li>
        </HeroText>
        <Navigation>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li />
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li />
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </Navigation>
      </HeroTextContainer>
      <DeveloperTextContainer>
        <h2>Developer</h2>
        <h2>Developer</h2>
        <h2>Developer</h2>
      </DeveloperTextContainer>
    </ContentWrapper>
  </LandingWrapper>
)

export default Hero

const skewUp = keyframes`
from {
  transform: translate3d(0, 200px, 0) skewY(6deg);
}
to {
  transform: translate3d(0) skewY(0deg);
}`

const fadeIn = keyframes`
  from { opacity: 0 }
  to   { opacity: 1 }
`
const fadeInDelayed = keyframes`
  0% { opacity: 0 }
  50% { opacity: 0 }
  100%   { opacity: 1 }
`

const fadeInImage = keyframes`
  0% { opacity: 0 }
  75% { opacity: 0 }
  100%   { opacity: 1 }
`

const moveUp = keyframes`
  from { 
    transform: translateY(80px);
  }
  to{
    transform: translateY(0);
  }
`

const moveUpBigText = keyframes`
  from { 
    transform: translateY(200px) scale(0.5) ;
  }
  to{
    transform: translateY(0) scale(1);
  }
`

const scaleX = keyframes`
  0% { 
    transform: scaleX(0);
  }
  100%{
    transform: scaleX(1);
  }
`

const moveUpRotated = keyframes`
from { 
  transform: rotate(-90deg) translateY(40px);
}
to{
  transform: rotate(-90deg) translateY(0);
}
`

const LandingWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
  z-index: 500;
`

const ContentWrapper = styled.div`
  display: flex;
  position: relative;
  min-width: 75%;
  height: 75%;
  margin-top: 5%;
  background-color: #eee;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    height: 75%;
    min-width: 65%;
    margin-bottom: 15vh;
  }
  @media only screen and (max-width: 600px) {
    height: 55%;
    min-width: 85%;
    margin-top: -15vh;
  }
`

const ImageOfMyself = styled.img`
  position: absolute;
  bottom: 0;
  right: 5%;
  width: 50vw;
  z-index: 10;
  @media only screen and (max-width: 1024px) {
    animation: ${fadeIn} 1s;
    min-width: 100%;
    right: 0;
    left: 0;
    margin: 0 auto;
  }
`

const NameLarge = styled.h2`
  position: absolute;
  top: -7.4vw;
  font-size: 7.96vw;
  font-weight: 800;
  font-style: italic;
  color: #eee;
  width: 110%;
  animation: ${moveUpBigText} 1s;
  z-index: -10;
  @media only screen and (max-width: 1024px) {
    top: -6.4vw;
    font-size: 6.9vw;
  }
  @media only screen and (max-width: 600px) {
    width: 180%;
    left: -34vw;
    text-align: center;
    top: -10vw;
    font-size: 10.65vw;
  }
`

const NameSmall = styled.h1`
  position: absolute;
  top: -3.5vw;
  font-size: 5vw;
  font-weight: 800;
  font-style: italic;
  color: #444;
  width: 100%;
  text-align: center;
  z-index: 50;
  animation: ${fadeIn} 2.5s;
  @media only screen and (max-width: 1024px) {
    top: -4.2vw;
    font-size: 4.5vw;
  }
  @media only screen and (max-width: 600px) {
    top: -6vmin;
    font-size: 6.5vw;
  }
`

const HeroTextContainer = styled.div`
  position: absolute;
  left: -6%;
  top: 34%;
  width: 58vw;
  height: 42%;
  background-color: #a20505;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 100% 50%;
  animation: ${scaleX} 1s;
  @media only screen and (max-width: 1200px) {
    left: -12%;
  }
  @media only screen and (max-width: 1024px) {
    min-width: 120vw;
    top: 0;
    left: -30%;
    height: 10%;
  }
`

const HeroText = styled.ul`
  display: flex;
  justify-content: space-around;
  min-width: 60%;
  margin-right: 15vw;
  animation: ${fadeInDelayed} 1.5s;
  li {
    position: relative;
    font-size: 1.25rem;
    font-family: 'Bitter', serif;
    color: #fff;
    list-style: none;
    margin: auto 0;
    &:nth-of-type(2),
    &:nth-of-type(4) {
      background-color: #fff;
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
    &:last-of-type img {
      width: 0.7rem;
      margin-right: 10px;
    }
  }
  @media only screen and (max-width: 1200px) {
    margin-right: 20vw;
  }

  @media only screen and (max-width: 1024px) {
    min-width: 50%;
    margin-right: 15vw;
    height: 3vh;
    li {
      font-size: 2vw;
      margin: auto 0;
      &:nth-of-type(2),
      &:nth-of-type(4) {
        width: 1vw;
        height: 1vw;
      }
      &:last-of-type img {
        width: 1.15vw;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    margin-right: -15vw;
    li {
      font-size: 10px;
      margin: auto 0;
      &:nth-of-type(2),
      &:nth-of-type(4) {
        width: 5px;
        height: 5px;
      }
      &:last-of-type img {
        height: 8px;
        width: auto;
        margin-right: 5px;
      }
    }
  }
`

const Navigation = styled.nav`
  position: absolute;
  max-width: 30vw;
  min-width: 240px;
  height: 62vw;
  transform: rotate(-90deg);
  animation: ${fadeInDelayed} 1.5s;
  ul {
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    li {
      a {
        text-decoration: none;
        font-size: 1rem;
        font-weight: 800;
        color: #444;
        &:hover {
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #444;
        }
      }
      list-style: none;
      &:nth-of-type(2),
      &:nth-of-type(4) {
        display: inline-block;
        background-color: #444;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        margin: auto 0;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    height: 20px;
    margin-top: 35vh;
    margin-left: -35%;
  }
  @media only screen and (max-width: 600px) {
    margin-top: 25vh;
    margin-left: -31%;
  }
`

const DeveloperTextContainer = styled.div`
  position: absolute;
  right: -13vw;
  bottom: 0;
  top: 0;
  margin: auto 0;
  height: 8vw;
  max-width: 40vw;
  transform: rotate(-90deg);
  animation: ${fadeIn} 2s, ${moveUpRotated} 1s;
  h2 {
    font-size: 10vh;
    font-weight: 800;
    color: #a20505;
    &:nth-of-type(2),
    &:last-of-type {
      margin-top: -6vmin;
    }

    &:nth-of-type(2) {
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: #a20505;
      margin-left: 1px;
    }

    &:last-of-type {
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #a20505;
      margin-left: 1px;
    }
  }

  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    right: 0;
    left: 0;
    top: 94%;
    margin: 0 auto;
    transform: rotate(0deg);
    animation: ${fadeIn} 2s, ${moveUp} 1s;
    z-index: 500;
    h2 {
      font-size: 8vw;
      &:nth-of-type(2),
      &:last-of-type {
        margin-top: -6.5vmin;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 14vw;
      &:nth-of-type(2),
      &:last-of-type {
        margin-top: -6.5vmin;
      }
    }
  }
`
