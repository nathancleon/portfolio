import React from 'react'
import Helmet from 'react-helmet'
import SEO from '../components/seo'
import styled from '@emotion/styled'
import MyselfLanding from '../components/MyselfLanding'
import RenlyLanding from '../components/RenlyLanding'
import Projects from '../components/Projects/Projects'
import Experience from '../components/Experience/Experience'
import Bio from '../components/Bio/Bio'

const LandingWrapper = styled.div`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  *{
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
  }
  {
    display: flex;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 1024px) and (orientation: portrait) {
    {
      height: 70vh;
    }
  }
  @media screen and (max-width: 540px){
    {
      height: 50vh;
    }
  }
`;

const IndexPage = () => (
  <>
    <Helmet
      meta={[
        { name: 'description', content: 'Sample' },
      ]}
    >
      <link href="https://fonts.googleapis.com/css?family=Dancing+Script:700|Merriweather:700i|Open+Sans:400,700" rel="stylesheet" />
      <html lang="en" />
    </Helmet>
    <LandingWrapper>
      <SEO title="Nathaniel Collins Portfolio" keywords={['gatsby', 'portfolio', 'react', 'full stack', 'web developer', 'front end', 'software engineer']} />
      <MyselfLanding />
      <RenlyLanding />
    </LandingWrapper>
    <Projects />
    <Experience />
    <Bio />
  </>
)

export default IndexPage
