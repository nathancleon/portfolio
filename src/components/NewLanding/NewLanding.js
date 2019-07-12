import React from 'react'
import styled from '@emotion/styled'
import pawSvg from '../../images/paw.svg'
import Bio from './Bio/Bio'
import Renly from './Renly/Renly'
import About from './About/About'

export default class NewLanding extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      renlyVisible: false,
      currentPage: null,
    }

    this.renderPage = this.renderPage.bind(this)
  }

  renderRenly() {
    console.log('this ran')
    this.setState({
      renlyVisible: true,
      currentPage: null,
    })
  }

  renderPage(page) {
    console.log('ran renderPage')
    this.setState({
      currentPage: page,
    })
    console.log(this.state.currentPage)
  }

  render() {
    return (
      <LandingWrapper>
        <ContentWrapper>
          <PawTopLeft onClick={this.renderRenly.bind(this)} src={pawSvg} />
          <PawBottomRight onClick={this.renderRenly.bind(this)} src={pawSvg} />
          {this.state.currentPage === 'about' ? (
            <>
              <Navigation about="true">
                <ul>
                  <li>About</li>
                  <li>Work</li>
                  <li>Contact</li>
                </ul>
              </Navigation>
              <About />
            </>
          ) : this.state.renlyVisible ? (
            <>
              <Navigation>
                <ul>
                  <li onClick={() => this.renderPage('about')}>About</li>
                  <li>Work</li>
                  <li>Contact</li>
                </ul>
              </Navigation>
              <Renly />
            </>
          ) : (
            <>
              <Navigation>
                <ul>
                  <li onClick={() => this.renderPage('about')}>About</li>
                  <li>Work</li>
                  <li>Contact</li>
                </ul>
              </Navigation>
              <Bio />
            </>
          )}
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
  @media only screen and (max-width: 768px) {
    height: 45px;
    top: -30px;
    left: -25px;
  }
`

const PawBottomRight = styled.img`
  height: 85px;
  position: absolute;
  bottom: -50px;
  right: -40px;
  transform: rotate(-216deg);
  z-index: 500;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    height: 45px;
    bottom: -30px;
    right: -25px;
  }
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
      list-style: none;
      font-size: 1.8rem;
      font-family: 'Merriweather', serif;
      font-weight: normal;
      color: #fff;
      cursor: pointer;
      &:hover {
        transform: scale(1.25);
      }
    }
    li:first-of-type {
      transform: ${props =>
        props.about === 'true' ? `scale(1.5)` : `scale(1)`};
      margin-right: ${props => (props.about === 'true' ? `10px` : `0`)};
      &:hover {
        transform: ${props =>
          props.about === 'true' ? `scale(1.5)` : `scale(1.25)`};
        margin-left: 0px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    top: 30%;
    left: -70px;
    right: 0;
    height: 300px;
    ul {
      height: 100%;
      flex-direction: column;
      li {
        width: 100px;
        transform: rotate(-90deg);
        font-size: 1.75rem;
        &:hover {
          transform: rotate(-90deg);
          margin-left: 0;
          margin-right: 0;
        }
      }
      li:first-of-type {
        transform: rotate(-90deg);
        &:hover {
          transform: rotate(-90deg);
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    ul {
      li {
        font-size: 1.5rem;
      }
      li:first-of-type {
        transform: rotate(-90deg);
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
