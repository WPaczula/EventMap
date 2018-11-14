import React from 'react'
import { Helmet } from 'react-helmet'
import GlobalStyle from '../app/style'
import Page from '../app/blocks/page'
import { HeaderComponent as Header } from '../app/blocks/header'
import Footer from '../app/blocks/footer'
import ErrorPage from './error-message'

const StaticErrorPage = () => (
  <Page>
    <GlobalStyle />
    <Helmet>
      <title>No connection</title>
    </Helmet>
    <Header short />
    <Page.Content short>
      <ErrorPage />
    </Page.Content>
    <Footer />
  </Page>
)

export default StaticErrorPage
