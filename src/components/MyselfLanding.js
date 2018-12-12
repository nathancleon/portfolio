import React from 'react'
import imgOfMyself from '../images/me-color.png'
import downArrow from '../images/icons/long-arrow-down.svg'
import {keyframes} from '@emotion/core'
import styled from '@emotion/styled'

const LandingContainer = styled.div`
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 48vw;
    height: 100vh;
    position: relative;
    background-color: #715FB5;
  }
`;

const HeaderTextContainer = styled.div`
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 10vh;
  }
  h1 {
    color: #f2f2f2;
    font-family: 'Dancing Script', sans-serif;
    font-size: 5rem;
    text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.4);
    margin-bottom: 3rem;
    transform: rotate(-15deg);
  }
  p {
    color: #f2f2f2;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 0.6rem;
  }
  span {
    font-family: 'Merriweather', serif;
    position: relative;
  }
  span:after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: -2px;
    width: 100%;
    height: 4px;
    background-color: #fafafa;
    border-radius: 4px;
  }

`;

const TextIntro = styled.div`
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`

const HeaderImage = styled.img`
  {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`;

const Logo = styled.div`
  {
    position: absolute;
    top: 50%;
    right: -29px;
    width: 58px; 
    height: 88px;
    background-color: #f2f2f2;
    margin: 28.87px 0;
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
    padding-top: 50%;
    padding-left: 27%;
    font-size: 1rem;
    font-weight: bold;
    color: #715FB5;
    transform: rotate(-90deg);
    z-index: 12;
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
    width: 40px;
    bottom: 2vh;
    right: -22px;
    z-index: 10;
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
    width: 35px;
    filter: drop-shadow(1px 3px 8px rgba(0, 0, 0, 0.6));
    animation: ${bounce} 1s infinite;
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
`;

export default class MyselfLanding extends React.Component {
  render() {
    return (
      <LandingContainer>
        <HeaderTextContainer>
          <h1>Welcome!</h1>
          <TextIntro>
            <p>My name is Nathan,</p>
            <p>but you can call me <span>Nate.</span></p>
          </TextIntro>
        </HeaderTextContainer>
        <HeaderImage src={imgOfMyself} alt="picture of myself" />
        <Logo>
          <span>N8</span>
        </Logo>
        <ScrollContainer>
          <ScrollDown>
            <ScrollIcon src={downArrow} alt="icon of an actual old school scroll document" />
          </ScrollDown>
        </ScrollContainer>
      </LandingContainer>
    )
  }
}