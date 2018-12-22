import React from 'react'
import styled from '@emotion/styled'
import meWithComputer from '../../images/me-with-computer.png'
import twitterIcon from '../../images/icons/twitter-square.svg'
import linkedinIcon from '../../images/icons/linkedin.svg'
import githubIcon from '../../images/icons/github-square.svg'

const BioContainer = styled.div`
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15vh;
    background-color: #fefefe;
  }
`;

const Title = styled.h1`
  {
    font-family: 'Merriweather', serif;
    font-size: 4vmin;
    color: #fefefe;
    position: relative;
    transform: rotate(-5deg);
    margin-bottom: 6vw;
    margin-top: 5vw;
  }
  &:before {
    content: '';
    position: absolute;
    width: 12vmin;
    height: 6vmin;
    top: -1vmin;
    left: -2.5vmin;
    background-color: #715FB5;
    border-radius: 4px;
    z-index: -1;
  }
  &:after {
    content: '';
    position: absolute;
    width: 14vmin;
    height: 8vmin;
    top: -1.5vmin;
    left: -4vmin;
    background-color: #8DE4F5;
    border-radius: 4px;
    z-index: -2;
    transform: rotate(-8deg);
  }

  @media only screen and (max-width: 840px) {
    {
      margin-bottom: 10vw;
    }
  }
`

const BioText = styled.h3`
  {
    text-align: center;
    width: 70%;
    color: #505050;
    font-size: 2.5vmin;
    font-weight: normal;
    line-height: 4vmin;
  }
`;

const ContentContainer = styled.div`
   {
    display: flex;
    justify-content: space-between;
  }
`;

const MyselfImg = styled.img`
  {
    width: 60%;
    margin-bottom: -100px;
    align-self: center;
  }
`;

const Contact = styled.div`
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    height: 100%;
    margin-top: 20%;
    margin-bottom: -4vh;
  }
  h2 {
    text-align: center;
    color: #715FB5;
    font-size: 3vmin;
  }
  p {
    font-family: 'Open Sans', serif;
    font-size: 2vmin;
    text-align: center;
  }
  media only screen and (max-width: 840px) {
    {
      margin-top: 25%;
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
    width: 4vmin;
  }
`;



export default class Bio extends React.Component {
  render() {
    return(
      <BioContainer>
        <Title>Bio</Title>
        <BioText>Nice to meet you! I'm a full stack developer located in Washington D.C. 
          I love creating interesting websites and learning more about user experience and design. 
          I've had some freelance work and currently work as a TA for Thinkful at a weekly meetup for HTML, CSS, and JavaScript workshops.
          I'm currently looking for work and you can contact me below.</BioText>
        <ContentContainer>
          <MyselfImg src={meWithComputer} alt="myself with a computer" />
          <Contact>
            <h2>Contact</h2>
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
            <p>nathancleon@gmail.com</p>
          </Contact>
        </ContentContainer>
      </BioContainer>
    )
  }
}