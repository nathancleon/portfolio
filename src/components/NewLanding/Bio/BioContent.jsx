import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

export default class BioContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      animationComplete: false,
    }

    this.typingAnimation = this.typingAnimation.bind(this)
    this.changeText = this.changeText.bind(this)
  }

  componentDidMount() {
    this.typingAnimation()
    setTimeout(() => {
      this.changeText()
    }, 3750)
  }

  typingAnimation() {
    let i = 0
    let text = 'My name is Nathaniel Alexander Collins León Torres Sanchez'
    let timer

    function typingEffect() {
      let word = text.split('')
      var loopTyping = function() {
        if (word.length > 0) {
          document.getElementById('bio-text').innerHTML += word.shift()
        } else {
          deletingEffect()
          return false
        }
        timer = setTimeout(loopTyping, 40)
      }
      loopTyping()
    }

    function deletingEffect() {
      let word = text.split('')
      var loopDeleting = function() {
        if (word.length > 0) {
          word.pop()
          document.getElementById('bio-text').innerHTML = word.join('')
        }
        timer = setTimeout(loopDeleting, 20)
      }
      loopDeleting()
    }

    typingEffect()
  }

  changeText() {
    document.getElementById('bio-text').innerHTML = ''
    let i = 0
    let text = `My name is Nathan`
    let timer
    function typingEffect() {
      let word = text.split('')
      var loopTyping = function() {
        if (word.length > 0) {
          document.getElementById('bio-text').innerHTML += word.shift()
        }
        timer = setTimeout(loopTyping, 40)
      }
      loopTyping()
    }
    typingEffect()
    this.setState({
      animationComplete: true,
    })
  }

  render() {
    return (
      <BioContentWrapper>
        {this.state.animationComplete === false ? (
          <BioContentText>
            <BioTextHi>Hi,</BioTextHi>
            <BioTextLarge id="bio-text" />
          </BioContentText>
        ) : (
          <BioContentText>
            <BioTextHi>Hi,</BioTextHi>
            <BioTextLarge id="bio-text" />
            <BioTextSmall fade>
              I'm a fullstack developer based in Washington, D.C.
            </BioTextSmall>
          </BioContentText>
        )}
      </BioContentWrapper>
    )
  }
}
const fadeIn = keyframes`
  from { opacity: 0 }
  to   { opacity: 1 }
`

const fadeOut = keyframes`
  from { opacity: 1 }
  to   { opacity: 0 }
`

const moveUp = keyframes`
  0% { 
    margin-bottom: -50px
  }
  100% {
    margin-bottom: 0px
  }
`

const BioContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  min-width: 50%;
  height: 100%;
  z-index: 20;

  @media only screen and (max-width: 1024px) {
    min-width: 100%;
    height: 60%;
    left: 0;
    justify-content: center;
    align-items: center;
  }
`

const BioContentText = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px;
  @media only screen and (max-width: 1024px) {
    max-width: 100%;
    padding: 0 22.5%;
  }
  @media only screen and (max-width: 768px) {
    max-width: 80%;
    padding: 0;
  }
`

const BioTextHi = styled.h1`
  font-size: 8vw;
  width: 100%;
  color: #fff;
  @media only screen and (max-width: 1024px) {
    font-size: 3.5rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 3rem;
  }
`

const BioTextLarge = styled.h2`
  font-family: 'Merriweather', serif;
  font-size: 3.5vw;
  width: 100%;
  color: #fff;
  @media only screen and (max-width: 1024px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }

  span {
    position: relative;
    font-family: 'Merriweather', serif;
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 0.5vw;
      border-radius: 8px;
      background-color: #fff;
      bottom: -4px;
      left: 0;
    }
  }
`

const BioTextSmall = styled.h2`
  animation: ${fadeIn} 6s, ${moveUp} 4s;
  font-family: 'Merriweather', serif;
  font-size: 2.8vw;
  color: #fff;
  margin-top: 15px;
  @media only screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`
const Name = styled.span`
  position: relative;
  font-family: 'Merriweather', serif;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 0.5vw;
    border-radius: 8px;
    background-color: #fff;
    bottom: -4px;
    left: 0;
  }
`
