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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
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
    height: 89%;
    min-width: 85%;
    max-width: 85%;
  }
`

const ImageOfMyself = styled.img`
  position: absolute;
  bottom: 0;
  right: 5%;
  width: 50vw;
  max-width: 80%;
  z-index: 10;
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
  animation: ${fadeInDelayed} 0.5s, ${moveUp} 1s;
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
  animation: ${fadeIn} 2s, ${scaleX} 1s;
  @media only screen and (max-width: 1200px) {
    left: -12%;
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
    &:nth-of-type(2),
    &:nth-of-type(4) {
      background-color: #fff;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      margin: auto 0;
    }
    &:last-of-type img {
      width: 0.7rem;
      margin-right: 10px;
    }
  }
  @media only screen and (max-width: 1200px) {
    margin-right: 20vw;
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
    height: 20px;
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
`

const DeveloperTextContainer = styled.div`
  position: absolute;
  right: -14vw;
  bottom: 0;
  top: 0;
  margin: auto 0;
  height: 8vw;
  max-width: 40vw;
  transform: rotate(-90deg);
  animation: ${fadeIn} 2s, ${moveUpRotated} 1s;
  h2 {
    font-size: 12vh;
    font-weight: 800;
    color: #a20505;
    &:nth-of-type(2),
    &:last-of-type {
      margin-top: -3.5vw;
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
`
