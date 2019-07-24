import React from 'react'
import Helmet from 'react-helmet'
import { Global, css } from '@emotion/core'
import SEO from '../components/seo'
import Landing from '../components/Landing'

const IndexPage = () => (
  <>
    <Helmet meta={[{ name: 'description', content: 'Sample' }]}>
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
            font-family: 'Raleway', sans-serif;
            box-sizing: border-box;
          }
          @import url('https://fonts.googleapis.com/css?family=Bitter:700|Raleway:300,700,800,800i&display=swap');
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
      <>
        <SEO
          title="Nathaniel Collins Portfolio"
          keywords={[
            'gatsby',
            'portfolio',
            'react',
            'full stack',
            'web developer',
            'front end',
            'software engineer',
          ]}
        />
        <Landing />
      </>
    </div>
  </>
)

export default IndexPage
