import React from 'react'
import styled from '@emotion/styled'
import meWithComputer from '../../images/me-with-computer-min.png'
import twitterIcon from '../../images/icons/twitter-square.svg'
import linkedinIcon from '../../images/icons/linkedin.svg'
import githubIcon from '../../images/icons/github-square.svg'

const BioContainer = styled.div`
  {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5vw;
    margin-left: 10vw;
    background-color: #fefefe;
  }
  @media only screen and (max-width: 860px) {
    {
      padding-top: 5vw;
      width: 100%;
      margin-left: 0;
    }
  }
`;

const Title = styled.h1`
  {
    font-family: 'Merriweather', sans-serif;
    font-size: 2.5vw;
    color: #fefefe;
    position: relative;
    transform: rotate(-5deg);
    margin-bottom: 6vw;
    margin-top: 5vw;
  }
  &:before {
    content: '';
    position: absolute;
    width: 8vw;
    height: 5vw;
    top: -1vw;
    left: -2vw;
    background-color: #715FB5;
    border-radius: 4px;
    z-index: -1;
  }
  &:after {
    content: '';
    position: absolute;
    width: 10vw;
    height: 6vw;
    top: -1.5vw;
    left: -3vw;
    background-color: #8DE4F5;
    border-radius: 4px;
    z-index: -2;
    transform: rotate(-8deg);
  }

  @media only screen and (max-width: 860px) {
    {
      margin-bottom: 10vw;
    }
  }
  @media only screen and (max-width: 800px) {
    {
      font-size: 1.5rem;
    }
    &:before {
      content: '';
      position: absolute;
      width: 3.4rem;
      height: 2.5rem;
      top: -0.25rem;
      left: -0.5rem;
    }
    &:after {
      content: '';
      position: absolute;
      width: 4rem;
      height: 3rem;
      top: -0.5rem;
      left: -0.8rem;
    }
  }
`

const BioGreeting = styled.h2`
  {
    font-size: 2.5vw;
    font-family: 'Merriweather', sans-serif;
    color: #505050;
    margin-bottom: 2vw;
  }
  @media only screen and (max-width: 860px) {
    {
      font-size: 16px;
    }
  }
`;

const BioText = styled.h3`
  {
    text-align: justify;
    width: 80%;
    color: #505050;
    font-size: 2vmin;
    font-weight: normal;
    line-height: 4vmin;
  }
  a {
    color: #715FB5;
    text-decoration: none;
    font-weight: bold;
  }
  a:hover {
    color: #2BE0F5;
  }
  @media only screen and (max-width: 860px) {
    {
      font-size: 1rem;
      line-height: 2rem;
    }
  }
`;

const ContentContainer = styled.div`
   {
    display: flex;
    justify-content: space-between;
    width: 80%;
  }
  @media only screen and (max-width: 860px) {
    {
      flex-direction: column;
    }
  }
`;

const MyselfImg = styled.img`
  {
    width: 60%;
    margin-bottom: -100px;
    align-self: center;
  }
  @media only screen and (max-width: 860px) {
    {
      order: 2;
      margin-top: 10vw;
    }
  }
`;

const Contact = styled.div`
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    margin-top: 20%;
  }
  h2 {
    text-align: center;
    color: #715FB5;
    font-family: 'Dancing Script', sans-serif;
    font-size: 3vw;
    margin-bottom: 4vw;
  }
  a:last-of-type {
    text-decoration: none;
  }
  a p {
    font-family: 'Merriweather', sans-serif;
    font-size: 1.5vw;
    text-align: center;
    color: #505050;
    font-weight: bold;
    margin-top: 4vw;
  }
  a p:hover {
    color: #2BE0F5;
  }
  @media only screen and (max-width: 860px) {
    {
      margin-top: 15vw;
      width: 100%;
    }
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 14px;
    }
  }
`;

const Social = styled.div`
  {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
  }
  a {
    width: 30px;
  }
`;



export default class Bio extends React.Component {
  render() {
    return(
      <BioContainer>
        <Title>Bio</Title>
        <BioGreeting>Nice to meet you!</BioGreeting>
        <BioText> I'm a full stack developer located in Washington D.C. 
          I love creating interesting websites and learning more about user experience and design. 
          I've done some freelance work and currently work as a TA for <a href="https://www.thinkful.com/" target="_blank" rel="noopener noreferrer">Thinkful</a> at a weekly meetup for HTML, CSS, and JavaScript workshops.
          I'm currently looking for work and you can contact me below.</BioText>
        <ContentContainer>
          <MyselfImg src={meWithComputer} alt="myself with a computer" />
          <Contact>
            <h2>Say Hello!</h2>
            <Social>
              <a href="https://twitter.com/NathanCLeon" target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="twitter link" />
              </a>
              <a href="https://www.linkedin.com/in/nathancleon/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="linkedin link" />
              </a>
              <a href="https://github.com/nathancleon" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="github link" />
              </a>
            </Social>
            <a href="mailto:nathancleon@gmail.com"><p>nathancleon@gmail.com</p></a>
          </Contact>
        </ContentContainer>
      </BioContainer>
    )
  }
}