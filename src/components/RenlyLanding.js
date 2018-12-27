import React from 'react'
import imgOfRenly from '../images/renly-color-min.png'
import bonepattern from '../images/icons/bonepatternpurple.svg'
import comment from '../images/icons/comment.svg'
import styled from '@emotion/styled'

const LandingContainer = styled.div`
  {
    min-width: 50%;
    min-height: 100%;
    position: relative;
    background-color: #8DE4F5;
    overflow: hidden;
  }
`;

const BoneBackground = styled.div`
  {
    height: 100%;
    width: 100%;
    background-image: url(${bonepattern});
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
    background-color: rgba(141,228,245,0.7);
  }
`;

const TextContainer = styled.div`
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 10vw;
  }
  h1 {
    color: #505050;
    font-family: 'Dancing Script', sans-serif;
    font-size: 6vw;
    text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.4);
    margin-bottom: 4vw;
    transform: rotate(-15deg);
  }
  @media only screen and (max-width: 1024px) {
    {
      margin-top: 8vw;
    }
    h1 {
      font-size: 7vw;
    }
  }
  @media only screen and (max-width: 550px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

const TextIntro = styled.div`
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    line-height: 3vw;
    z-index: 20;
  }
  p {
    color: #505050;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 1.5vw;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  }
  span {
    font-family: 'Merriweather', sans-serif;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    position: relative;
  }
  @media only screen and (max-width: 1024px) {
    p {
      font-size: 2vw;
    }
  }
  @media only screen and (max-width: 550px) {
    p {
      font-size: 0.75rem;
      line-height: 1rem;
    }
  }
`

const ImageContainer = styled.div`
  {
    position: absolute;
    bottom: -1vw;
  }
`;

const Image = styled.img`
  {
    max-width: 50vw;
    position: relative;
  }
`;

const RenlyWoofContainer = styled.div`
  {
    position: absolute;
    top: 48%;
    left: 68%;
    transform: rotate(-10deg);
  }
`;

const RenlyWoof =  styled.div`
  {
    position: relative;
    width: 6vw;
    height: 6vw;
  }
`;

const CommentBubble = styled.img`
  { 
    position: absolute;
    width: 100%;
    color: #707070;
    font-family: 'Merriweather', sans-serif;
    font-weight: bold;
    font-size: 2vw;
    z-index: -15;
  }
`;

const BubbleText = styled.p`
  {
    position: absolute;
    top: 34%;
    left: 12%;
    color: #8DE4F5;
    font-family: 'Merriweather', sans-serif;
    font-weight: bold;
    font-size: 1.3vw;
    z-index: 20;
  }

  @media only screen and (max-width: 600px) {
    {
      top: 30%;
    }
  }
`;

export default class MyselfLanding extends React.Component {
  render() {
    return (
      <LandingContainer>
        <BoneBackground>
          <BackgroundFilter>
            <TextContainer>
              <h1>Saludos!</h1>
              <TextIntro>
                <p>I work as a <span>full stack web developer</span> so that my dog Renly can live a happy life.</p>
              </TextIntro>
            </TextContainer>
            <ImageContainer>
              <Image src={imgOfRenly} alt="picture of my dog" />
              <RenlyWoofContainer>
                <RenlyWoof>
                  <CommentBubble src={comment} alt="comment bubble" />
                  <BubbleText>~woof~</BubbleText>
                </RenlyWoof>
              </RenlyWoofContainer>
            </ImageContainer>
          </BackgroundFilter>
        </BoneBackground>
      </LandingContainer>
    )
  }
}