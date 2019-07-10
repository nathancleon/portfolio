import React from 'react'
import styled from '@emotion/styled'
import pawSvg from '../../images/paw.svg'
import Bio from './Bio/Bio'
import Renly from './Renly/Renly'

export default class NewLanding extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      renlyVisible: false,
    }
  }

  renderRenly() {
    this.setState({
      renlyVisible: true,
    })
  }

  render() {
    return (
      <LandingWrapper>
        <ContentWrapper>
          <PawTopLeft onClick={this.renderRenly.bind(this)} src={pawSvg} />
          <PawBottomRight onClick={this.renderRenly.bind(this)} src={pawSvg} />
          <Navigation>
            <ul>
              <li>About</li>
              <li>Work</li>
              <li>Contact</li>
            </ul>
          </Navigation>
          {this.state.renlyVisible ? <Renly /> : <Bio />}
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
  transform: rotate(-36deg);
  cursor: pointer;
  z-index: 500;
`

const PawBottomRight = styled.img`
  height: 85px;
  position: absolute;
  bottom: -50px;
  right: -40px;
  transform: rotate(-216deg);
  z-index: 500;
  cursor: pointer;
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
    top: 30%;
    left: -200px;
    right: 0;
    height: 70%;
    ul {
      flex-direction: column;
      height: 300px;
      li {
        text-align: center;
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
    left: -70px;
    ul {
      height: 350px;
      li {
        margin: auto 0;
        width: 100px;
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
