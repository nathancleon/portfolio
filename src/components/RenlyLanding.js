import React from 'react'
import imgOfRenly from '../images/renly-color.png'
import styled from '@emotion/styled'

const LandingContainer = styled.div`
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 52vw;
    height: 100vh;
    position: relative;
    background-color: #8DE4F5;
    overflow: hidden;
  }
`;

const TextContainer = styled.div`
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 10vh;
  }
  h1 {
    color: #707070;
    font-family: 'Dancing Script', sans-serif;
    font-size: 5rem;
    text-shadow: 1px 2px 8px #707070;
    margin-bottom: 2.8rem;
    transform: rotate(-15deg);
  }
  p {
    color: #707070;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  span {
    font-family: 'Merriweather', serif;
    position: relative;
  }

`;

const TextIntro = styled.div`
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 40px;
    width: 85%;
    line-height: 35px;
  }
`

const ImageContainer = styled.div`
  {
    position: absolute;
    bottom: -1vh;
    width: 100%;
  }
`;

const RenlyWoofContainer = styled.div`
  {
    position: relative;
  }
  &:after {
    content: '~woof~';
    position: absolute;
    top: 50%;
    left: 65%;
    color: #707070;
    font-family: 'Merriweather', sans-serif;
    font-weight: bold;
    font-size: 2vw;
    font-size: 2vmin;
    transform: rotate(-15deg);
  }
`;

const Image = styled.img`
  {
    position: relative;
  }
`;

export default class MyselfLanding extends React.Component {
  render() {
    return (
      <LandingContainer>
        <TextContainer>
          <h1>Saludos!</h1>
          <TextIntro>
            <p>I work as a <span>full stack web developer</span> so that my dog can live a happy life.</p>
          </TextIntro>
        </TextContainer>
        <ImageContainer>
          <RenlyWoofContainer>
            <Image src={imgOfRenly} alt="picture of my dog" />
            {/* <RenlyWoof>~woof~</RenlyWoof> */}
          </RenlyWoofContainer>
        </ImageContainer>
      </LandingContainer>
    )
  }
}