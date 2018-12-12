import React from 'react'
import imgOfMyself from '../images/me-color.png'
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
    margin-top: 14vh;
  }
  h1 {
    color: #fff;
    font-family: 'Dancing Script', sans-serif;
    font-size: 8vw;
    text-shadow: 1px 5px 5px rgba(0, 0, 0, 0.4);
    margin-bottom: 1rem;
  }
  p {
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    text-shadow: 1px 2px 6px rgba(0, 0, 0, 0.4);
    margin-bottom: 0.5rem;
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
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.4);
  }

`;

const TextIntro = styled.div`
  {
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;
  }
`

const HeaderImage = styled.img`
  {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`;

export default class Landing1 extends React.Component {
  render() {
    return (
      <LandingContainer>
        <HeaderTextContainer>
          <h1>Greetings!</h1>
          <TextIntro>
            <p>My name is Nathan,</p>
            <p>but you can call me <span>Nate.</span></p>
          </TextIntro>
        </HeaderTextContainer>
        <HeaderImage src={imgOfMyself} alt="picture of my dog" />
      </LandingContainer>
    )
  }
}