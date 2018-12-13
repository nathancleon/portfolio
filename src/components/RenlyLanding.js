import React from 'react'
import imgOfRenly from '../images/renly-color.png'
import bonepattern from '../images/icons/bonepatternpurple.svg'
import comment from '../images/icons/comment.svg'
import styled from '@emotion/styled'

const LandingContainer = styled.div`
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 52%;
    height: 100%;
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
`;

const BackgroundFilter = styled.div`
  {
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
    padding-top: 10vh;
  }
  h1 {
    color: #707070;
    font-family: 'Dancing Script', sans-serif;
    font-size: 10vmin;
    text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.4);
    margin-bottom: 2.6rem;
    transform: rotate(-15deg);
  }
  p {
    color: #707070;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 3vmin;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    margin-bottom: 0.5rem;
  }
  span {
    font-family: 'Merriweather', serif;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    position: relative;
  }

`;

const TextIntro = styled.div`
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 40px;
    margin-right: 40px;
    width: 85%;
    line-height: 35px;
  }
`

const ImageContainer = styled.div`
  {
    position: absolute;
    bottom: -1vh;
    min-width: 100%;
  }
`;

const Image = styled.img`
  {
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
    width: 9.5vmin;
    height: 9.5vmin;
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
    font-size: 2vmin;
    z-index: -15;
  }
`;

const BubbleText = styled.p`
  {
    position: absolute;
    top: 35%;
    left: 12%;
    color: #8DE4F5;
    font-family: 'Merriweather', sans-serif;
    font-weight: bold;
    font-size: 2vmin;
    z-index: 20;
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
                <p>I work as a <span>full stack web developer</span> so that my dog can live a happy life.</p>
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