import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

const AboutContent = () => (
  <AboutContentWrapper>
    <AboutContentText>
      <Emojis>✌️🇵🇷</Emojis>
      <AboutTextMain>Saludos!</AboutTextMain>
      <AboutTextSmall>
        I’m a full-stack developer with a passion for design and accessibility.
        I grew up in Puerto Rico, and currently reside in Washington, D.C.
      </AboutTextSmall>
      <AboutTextMini>
        Things I love: traveling, hiking, design, dogs, and national parks.
      </AboutTextMini>
      <TechStack>
        <AboutTextMini>Things I know:</AboutTextMini>
        <ul>
          <li>
            <p>react</p>
          </li>
          <li>
            <p>redux</p>
          </li>
          <li>
            <p>mobX</p>
          </li>
          <li>
            <p>node</p>
          </li>
          <li>
            <p>mongoDB</p>
          </li>
          <li>
            <p>vue</p>
          </li>
          <li>
            <p>jQuery</p>
          </li>
          <li>
            <p>javaScript</p>
          </li>
          <li>
            <p>emotion</p>
          </li>
          <li>
            <p>sass</p>
          </li>
          <li>
            <p>css</p>
          </li>
        </ul>
      </TechStack>
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
    transform: translateY(20px);
  }
  75% {
    transform: translateY(0);
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
    height: 50%;
    left: 0;
    justify-content: center;
    align-items: center;
    margin-bottom: 5vmin;
    order: 2;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 2vmin;
    margin-bottom: 10px;
  }
`

const AboutContentText = styled.div`
  animation: ${fadeIn} 3s, ${moveUp} 2s;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    padding: 10px 10%;
    z-index: 10;
  }
`

const Emojis = styled.p`
  font-size: 4vmin;
  text-align: center;
`

const AboutTextMain = styled.h1`
  font-size: 5vw;
  font-family: 'Dancing Script', sans-serif;
  width: 100%;
  color: #fff;
  text-align: center;
  @media only screen and (max-width: 1024px) {
    font-size: 3rem;
  }
  @media only screen and (max-width: 420px) {
    font-size: 2rem;
  }
`

const AboutTextSmall = styled.h2`
  font-size: 1.8vw;
  color: #fff;
  @media only screen and (max-width: 1024px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
  @media only screen and (max-width: 420px) {
    font-size: 0.75rem;
  }
`

const AboutTextMini = styled.p`
  font-size: 1.5vw;
  color: #fff;
  margin-top: 5px;
  @media only screen and (max-width: 1024px) {
    font-size: 0.8rem;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 5px;
    font-size: 1rem;
  }
  @media only screen and (max-width: 420px) {
    font-size: 0.75rem;
  }
`

const TechStack = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-width: 800px;
    height: auto;
    margin-top: 10px;
    li {
      background-color: #fff;
      border-radius: 20px;
      list-style: none;
      margin-top: 15px;
      margin-right: 10px;
      p {
        display: block;
        padding: 2px 10px;
        font-size: 1.25vw;
        font-weight: bold;
        background: linear-gradient(#ff9f93, #fc5a72);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    ul {
      li {
        p {
          padding: 2px 6px;
          font-size: 0.5rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    ul {
      margin-top: 2px;
    }
  }
`
