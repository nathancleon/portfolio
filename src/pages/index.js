import React from 'react'
import Helmet from 'react-helmet'
import { Global, css } from '@emotion/core'
import SEO from '../components/seo'
import styled from '@emotion/styled'
import MyselfLanding from '../components/MyselfLanding'
import RenlyLanding from '../components/RenlyLanding'
import Projects from '../components/Projects/Projects'
import Experience from '../components/Experience/Experience'
import Bio from '../components/Bio/Bio'
import NewLanding from '../components/NewLanding/NewLanding'

const LandingWrapper = styled.div`
  display: flex;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  min-width: 100vw;
  max-width: 100vw;
  margin: 0;
  padding: 0;
  background: linear-gradient(to bottom right, #ff9f93, #fc5a72);
`

const IndexPage = () => (
  <>
    <Helmet meta={[{ name: 'description', content: 'Sample' }]}>
      <link href="./styles.css" rel="./styles.css" />
      <html lang="en" />
    </Helmet>
    <div>
      <Global
        styles={css`
          html,
          body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
          }
          * {
            margin: 0;
            padding: 0;
            font-family: 'Lato', sans-serif;
            box-sizing: border-box;
          }
          @import url('https://fonts.googleapis.com/css?family=Dancing+Script:700|Lato:700|Merriweather:700i&display=swap');
        `}
      />
      {/* <LandingWrapper>
        <SEO title="Nathaniel Collins Portfolio" keywords={['gatsby', 'portfolio', 'react', 'full stack', 'web developer', 'front end', 'software engineer']} />
        <MyselfLanding />
        <RenlyLanding />
      </LandingWrapper> */}
      {/* <Projects />
      <Experience />
      <Bio /> */}
      <LandingWrapper>
        <NewLanding />
      </LandingWrapper>
    </div>
  </>
)

export default IndexPage
