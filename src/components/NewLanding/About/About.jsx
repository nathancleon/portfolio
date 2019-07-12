import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import AboutContent from './AboutContent'
import imgOfMyself from '../../../images/me-hiking.jpg'

const About = () => (
  <AboutWrapper>
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
  </AboutWrapper>
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

const AboutWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 420px) {
    padding: 10px 0;
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

  @media only screen and (max-width: 768px) {
    order: 1;
    margin-top: -50px;
    margin-bottom: -10%;
  }
`

const Polaroid = styled.div`
  animation: ${fadeIn} 4s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 80%;
  max-width: 85%;
  height: auto;
  min-width: 380px;
  background-color: #efefef;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  transform: rotate(8deg);
  margin-right: 4vw;
  padding: 1vw 1vw 4vw 1vw;
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
    min-width: 70%;
  }
`

const ImageOfMyself = styled.img`
  width: 95%;
  max-width: 95%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: auto;
  margin-bottom: 20px;
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
