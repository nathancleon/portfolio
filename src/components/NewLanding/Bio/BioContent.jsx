import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

export default class BioContent extends React.Component {
  _isMounted = false
  constructor(props) {
    super(props)
    this.state = {
      animationComplete: false,
    }

    this.typingAnimation = this.typingAnimation.bind(this)
    this.changeText = this.changeText.bind(this)
  }

  componentDidMount() {
    this._isMounted = true
    let bioTextExists = document.getElementById('bio-text')
    if (!bioTextExists) {
      return
    } else if (this._isMounted) {
      this.typingAnimation()
    }
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  changeText() {
    let bioText = document.getElementById('bio-text')
    let text = `My name is Nathan`
    let timer
    let typing = () => {
      let word = text.split('')
      var loop = () => {
        if (word.length > 0) {
          bioText.innerHTML += word.shift()
          timer = setTimeout(loopTyping, 40)
        } else {
          return
        }
      }
      let loopTyping = loop.bind(this)
      loopTyping()
    }
    let typingEffect = typing.bind(this)

    if (bioText) {
      bioText.innerHTML = ''
      typingEffect()
    } else {
      return
    }

    this.setState({
      animationComplete: true,
    })
  }
  typingAnimation() {
    let text = 'My name is Nathaniel Alexander Collins León Torres Sanchez'
    let timer
    let bioText = document.getElementById('bio-text')
    let typing = () => {
      let word = text.split('')
      var loopTyping = () => {
        if (this._isMounted) {
          if (word.length > 0) {
            bioText.innerHTML += word.shift()
          } else {
            deletingEffect()
            return
          }
          timer = setTimeout(loopTyping, 40)
        } else {
          return
        }
      }
      loopTyping()
    }
    let deleting = () => {
      let word = text.split('')
      var loopDeleting = () => {
        if (this._isMounted) {
          if (word.length > 0) {
            word.pop()
            bioText.innerHTML = word.join('')
          }
          if (word.length <= 1 && bioText) {
            bioText.innerHTML = ''
            this.changeText()
            return
          }
          timer = setTimeout(loopDeleting, 20)
        } else {
          return
        }
      }
      loopDeleting()
    }
    let typingEffect = typing.bind(this)
    let deletingEffect = deleting.bind(this)

    if (!bioText) {
      return
    } else {
      typingEffect()
    }
  }

  render() {
    return (
      <BioContentWrapper>
        <BioContentText>
          <BioTextHi>Hi,</BioTextHi>
          {this.state.animationComplete === false ? (
            <>
              <BioTextLarge id="bio-text" />
            </>
          ) : (
            <>
              <BioTextLarge id="bio-text" />
              <BioTextSmall fade>
                I'm a fullstack developer based in Washington, D.C.
              </BioTextSmall>
            </>
          )}
        </BioContentText>
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
  75% {
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
  animation: ${fadeIn} 4s, ${moveUp} 4s;
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
