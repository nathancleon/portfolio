import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

const AboutContent = () => (
  <AboutContentWrapper>
    <AboutContentText>
      <Emojis>✌️🇵🇷</Emojis>
      <AboutTextMain>Saludos!</AboutTextMain>
      <AboutTextSmall>
        I’m a full stack developer with experience using React, Redux, Node, and
        MongoDB.
      </AboutTextSmall>
      <AboutTextMini>
        Things I love: national parks, traveling, hiking, design, dogs, and
        Puerto Rico.
      </AboutTextMini>
    </AboutContentText>
  </AboutContentWrapper>
)

export default AboutContent

const fadeIn = keyframes`
  from { opacity: 0 }
  to   { opacity: 1 }
`

const moveUp = keyframes`
  0% { 
    margin-bottom: -50px
  }
  75% {
    margin-bottom: 0px
  }
`

const AboutContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  min-width: 50%;
  height: 100%;
  z-index: 20;

  @media only screen and (max-width: 1024px) {
    min-width: 100%;
    height: 55%;
    left: 0;
    justify-content: center;
    align-items: center;
  }
`

const AboutContentText = styled.div`
  animation: ${fadeIn} 3s, ${moveUp} 2s;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    padding: 0 22.5%;
    margin-top: 8vmin;
    z-index: 10;
  }
  @media only screen and (max-width: 768px) {
    width: 90%;
    padding: 0;
  }
`

const Emojis = styled.p`
  font-size: 6vmin;
  text-align: center;
`

const AboutTextMain = styled.h1`
  font-size: 5.5vw;
  font-family: 'Dancing Script', sans-serif;
  width: 100%;
  color: #fff;
  text-align: center;
  @media only screen and (max-width: 1024px) {
    font-size: 3.5rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 3rem;
  }
`

const AboutTextSmall = styled.h2`
  font-size: 2.8vw;
  color: #fff;
  @media only screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`

const AboutTextMini = styled.p`
  font-size: 2vw;
  color: #fff;
  margin-top: 15px;
  @media only screen and (max-width: 1024px) {
    font-size: 1.25rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`
