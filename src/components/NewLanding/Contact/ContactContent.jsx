import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import PawPrintImg from '../../../images/paw2.svg'
import TwitterSvg from '../../../images/contact-icons/twitter-square.svg'
import LinkedInSvg from '../../../images/contact-icons/linkedin.svg'
import GitHubSvg from '../../../images/contact-icons/github-square.svg'
import EmailSvg from '../../../images/contact-icons/envelope-square.svg'
import ResumeSvg from '../../../images/contact-icons/arrow-alt-square-down.svg'
import Resume from '../../../images/NathanielCollinsLeonResume.pdf'

const ContactContent = () => (
  <ContentWrapper>
    <ContentText>
      <TextMain>
        <h1>Contact</h1>
        <img src={PawPrintImg} alt="paw print" />
      </TextMain>
      <ContactLinks>
        <li>
          <a href="https://www.twitter.com/nathancleon" target="_blank">
            <img src={TwitterSvg} />
            @nathancleon
          </a>
        </li>
        <li>
          <a href="https://www.github.com/nathancleon" target="_blank">
            <img src={GitHubSvg} />
            @nathancleon
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/nathancleon" target="_blank">
            <img src={LinkedInSvg} />
            @nathancleon
          </a>
        </li>
        <li>
          <a href="mailto:nathancleon@gmail.com" target="_blank">
            <img src={EmailSvg} />
            nathancleon@gmail.com
          </a>
        </li>
        <li>
          <a href={Resume} target="_blank">
            <img src={ResumeSvg} />
            My resumé
          </a>
        </li>
      </ContactLinks>
    </ContentText>
  </ContentWrapper>
)

export default ContactContent

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

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  min-width: 50%;
  height: 100%;
  z-index: 20;
  margin-top: -5vmin;

  @media only screen and (max-width: 1024px) {
    min-width: 100%;
    height: 60%;
    left: 0;
    justify-content: center;
    align-items: center;
    margin-top: 4vmin;
  }
`

const ContentText = styled.div`
  animation: ${fadeIn} 3s, ${moveUp} 2s;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    margin-top: 6vmin;
    z-index: 10;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    margin-top: -5vmin;
  }
`
const TextMain = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 80%;
  padding: 10px 10px;
  background-color: #fff;
  border-radius: 50px;
  h1 {
    font-size: 7vmin;
    width: auto;
    background: linear-gradient(#ff9f93, #fc5a72);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-right: 15px;
  }
  img {
    width: 5.5vmin;
    margin-top: 5px;
    transform: rotate(10deg);
    background: linear-gradient(#ff9f93, #fc5a72);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media only screen and (max-width: 1024px) {
    max-width: 350px;
    h1 {
      font-size: 2.5rem;
    }
    img {
      width: 2rem;
    }
  }
  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    img {
      width: 1.5rem;
    }
  }
  @media only screen and (max-width: 400px) {
    max-width: 200px;
  }
`

const TextSmall = styled.p`
  font-family: 'Merriweather', serif;
  font-size: 2.8vw;
  color: #fff;
  margin-top: 15px;
  @media only screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`

const ContactLinks = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: 20%;
  li {
    list-style: none;
    position: relative;
    margin-top: 10px;
    a {
      color: #fff;
      text-decoration: none;
      font-size: 4vmin;
      font-family: 'Merriweather', sans-serif;
    }
    img {
      position: absolute;
      left: -15%;
      top: 6%;
      width: 4vmin;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-left: 15%;
    li {
      a {
        font-size: 18px;
      }
      img {
        width: 18px;
      }
    }
  }
`
