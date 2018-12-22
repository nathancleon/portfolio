import React from 'react'
import imgOfMyself from '../images/me-color.png'
import codepattern from '../images/icons/codepattern.svg'
import downArrow from '../images/icons/long-arrow-down.svg'
import {keyframes} from '@emotion/core'
import styled from '@emotion/styled'

const LandingContainer = styled.div`
  {
    width: 50%;
    height: 100%;
    position: relative;
    background-color: #715FB5;
  }
`;

const CodeBackground = styled.div`
  {
    height: 100%;
    width: 100%;
    background-image: url(${codepattern});
    background-size: 200px;
    background-repeat: repeat;
  }
  @media screen and (max-width: 1024px) and (orientation: portrait) {
    {
      background-size: 100px;
    }
  }
`;

const BackgroundFilter = styled.div`
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(113,95,181,0.7);
  }
`;

const HeaderTextContainer = styled.div`
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 10vh;
  }
  h1 {
    color: #f2f2f2;
    font-family: 'Dancing Script', sans-serif;
    font-size: 10vmin;
    text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.4);
    margin-bottom: 5vmin;
    transform: rotate(-15deg);
  }
`;

const TextIntro = styled.div`
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    line-height: 4vmin;
    z-index: 20;
  }
  p {
    color: #f2f2f2;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 3vmin;
    text-shadow: 1px 2px 6px rgba(0, 0, 0, 0.4);
  }
  span {
    font-family: 'Merriweather', serif;
    position: relative;
  }
  span:after {
    content: '';
    position: absolute;
    bottom: -0.5vmin;
    left: 0;
    width: 100%;
    height: 0.4vmin;
    background-color: #fafafa;
    border-radius: 4px;
    box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.4);
  }
`

const HeaderImage = styled.img`
  {
    position: absolute;
    bottom: 0;
    max-width: 50vw;
    max-height: 50vh;
  }
`;

const Logo = styled.div`
  {
    position: absolute;
    top: 50%;
    right: -29px;
    width: 58px; 
    height: 88px;
    background-color: #fefefe;
    margin: 28px 0;
    border-radius: .5em;
    transform: rotate(90deg);
    z-index: 10;
  }
  &:before, &:after{
    position: absolute;
    width: inherit; 
    height: inherit;
    border-radius: inherit;
    background: inherit;
    content: '';
  }
  &:before {
    transform: rotate(60deg);
  }
  &:after {
    transform: rotate(-60deg);
  }
  span {
    position: absolute;
    width: inherit; 
    height: inherit;
    padding-top: 30%;
    font-size: 1.3vmin;
    font-weight: bold;
    text-align: center;
    font-family: 'Merriweather', serif;
    color: #715FB5;
    transform: rotate(-90deg);
    z-index: 12;
  }

  @media only screen and (max-width: 600px) {
    {
      width: 36px;
      height: 52px;
      right: -18px;
    }
    span {
      padding-top: 25%;
      font-size: 0.3rem;
      line-height: 1rem;
    }
  }
`;

const bounce = keyframes`
  {
    0% { bottom: -13px; }
    50% { bottom: -8px; }
    100% { bottom: -13px; }
  }
`;

const ScrollContainer = styled.div`
  {
    position: absolute;
    width: 3vmin;
    bottom: 3vh;
    right: -1.5vmin;
    z-index: 10;
  }

  @media only screen and (max-width: 1024px) {
    {
      display: none
    }
  }
`;

const ScrollDown = styled.div`
  {
    position: relative;
  }
`;

const ScrollIcon = styled.img`
  {
    position: absolute;
    filter: drop-shadow(1px 3px 8px rgba(0, 0, 0, 0.6));
    animation: ${bounce} 1s infinite;
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
`;

export default class MyselfLanding extends React.Component {
  render() {
    return (
      <LandingContainer>
        <CodeBackground>
          <BackgroundFilter>
            <HeaderTextContainer>
              <h1>Welcome!</h1>
              <TextIntro>
                <p>My name is Nathaniel Alexander Collins León, but you can call me <span>Nathan.</span></p>
              </TextIntro>
            </HeaderTextContainer>
            <HeaderImage src={imgOfMyself} alt="picture of myself" />
            <Logo>
              <span>Nathan León</span>
            </Logo>
            <ScrollContainer>
              <ScrollDown>
                <ScrollIcon src={downArrow} alt="downward facing arrow" />
              </ScrollDown>
            </ScrollContainer>
          </BackgroundFilter>
        </CodeBackground>
      </LandingContainer>
    )
  }
}