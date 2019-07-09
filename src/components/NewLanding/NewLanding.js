import React from 'react'
import styled from '@emotion/styled'
import pawSvg from '../../images/paw.svg'
import Bio from './Bio/Bio'
import Renly from './Renly/Renly'

export default class NewLanding extends React.Component {
  render() {
    return (
      <LandingWrapper>
        <ContentWrapper>
          <PawTopLeft src={pawSvg} />
          <PawBottomRight src={pawSvg} />
          <Navigation>
            <ul>
              <li>About</li>
              <li>Work</li>
              <li>Contact</li>
            </ul>
          </Navigation>
          <Renly />
        </ContentWrapper>
      </LandingWrapper>
    )
  }
}

const LandingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`

const ContentWrapper = styled.div`
  display: flex;
  position: relative;
  max-width: 90%;
  min-width: 90%;
  height: 75%;
  border: 3px solid #fff;
  z-index: 1;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    height: 85%;
    min-width: 80%;
    max-width: 80%;
  }
`

const PawTopLeft = styled.img`
  height: 85px;
  position: absolute;
  top: -50px;
  left: -40px;
  z-index: 2;
  transform: rotate(-36deg);
`

const PawBottomRight = styled.img`
  height: 85px;
  position: absolute;
  bottom: -50px;
  right: -40px;
  z-index: 2;
  transform: rotate(-216deg);
  z-index: 20;
`

const Navigation = styled.nav`
  position: absolute;
  top: -45px;
  right: 80px;
  width: 350px;

  ul {
    display: flex;
    justify-content: space-between;
    li {
      font-family: 'Merriweather', serif;
      list-style: none;
      font-size: 2rem;
      font-weight: normal;
      color: #fff;
      cursor: pointer;
      padding-right: 40px;
      &:hover {
        transform: scale(1.25);
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    top: 40%;
    left: -50px;
    max-width: 50px;
    height: 70%;
    ul {
      flex-direction: column;
      height: 300px;
      li {
        transform: rotate(-90deg);
        padding-right: 0;
        font-size: 1.75rem;
        &:hover {
          transform: rotate(-90deg);
          margin-left: 0;
          margin-right: 0;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    ul {
      li {
        font-size: 1.5rem;
        padding-right: 0;
      }
    }
  }
`

const LandingImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 50%;
  z-index: -1;
  @media only screen and (max-width: 1024px) {
    min-width: 100%;
  }
`

const ImageOfMyself = styled.img`
  max-height: 40vh;
  min-height: 60vh;
  position: absolute;
  bottom: 0;
  right: -3vw;
  z-index: -2;
  @media only screen and (max-width: 1024px) {
    min-height: 45vh;
    right: 0;
    margin: 0 auto;
  }
`

const ImageOfRenly = styled(ImageOfMyself)`
  right: 0vw;
  min-height: 80vh;
  @media only screen and (max-width: 1024px) {
    min-height: 50vh;
    right: 0;
    margin: 0 auto;
  }
`
