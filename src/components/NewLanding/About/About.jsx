import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import AboutContent from './AboutContent'
import imgOfMyself from '../../../images/me-hiking.jpg'

const About = () => (
  <>
    <AboutContent />
    <LandingImageContainer>
      <Polaroid>
        <ImageOfMyself src={imgOfMyself} />
        <PolaroidTextContainer>
          <PolaroidDate>Glacier National Park 2017</PolaroidDate>
          <PolaroidLocation>Twin Medicine Hike</PolaroidLocation>
        </PolaroidTextContainer>
      </Polaroid>
    </LandingImageContainer>
  </>
)

export default About

const fadeIn = keyframes`
  from { opacity: 0 }
  to   { opacity: 1 }
`

const moveUp = keyframes`
  0% { 
    margin-bottom: -20px
  }
  75% {
    margin-bottom: 0px
  }
`

const LandingImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 45%;
  z-index: -10;
  @media only screen and (max-width: 1024px) {
    min-width: 100%;
    margin-top: 40px;
  }
`

const Polaroid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 85%;
  max-width: 95%;
  height: 85%;
  min-width: 380px;
  background-color: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  transform: rotate(8deg);
  margin-right: 4vw;
  box-shadow: 0 12px 15px rgba(0, 0, 0, 0.2);
  z-index: -100;

  @media only screen and (max-width: 1024px) {
    max-width: 280px;
    min-width: 40%;
    min-height: 60%;
    max-height: 400px;
    margin-right: 0;
    transform: rotate(0deg);
  }
  @media only screen and (max-width: 400px) {
    min-width: 90%;
  }
`

const ImageOfMyself = styled.img`
  height: 80%;
  max-height: 90%;
  max-width: 90%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: auto;
  opacity: 0.75;
  z-index: -2;
  @media only screen and (max-width: 1024px) {
    max-height: 80%;
    min-height: 200px;
    margin-top: 10px;
    margin-bottom: 5px;
  }
`

const PolaroidTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 15%;
  width: 95%;
`
const PolaroidDate = styled.p`
  font-size: 2vmin;
  font-family: 'Merriweather', serif;
  color: #555;
  @media only screen and (max-width: 1024px) {
    font-size: 1rem;
  }
`
const PolaroidLocation = styled.p`
  font-size: 2vmin;
  font-family: 'Merriweather', serif;
  color: #555;
  @media only screen and (max-width: 1024px) {
    font-size: 0.75rem;
  }
`
