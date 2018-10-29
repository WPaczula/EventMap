import React from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route } from 'react-router'
import PropTypes from 'prop-types'
import GlobalStyle from './style'
import Header from './blocks/header'
import Footer from './blocks/footer'
import Page from './blocks/page'

const defaultTitle = 'EventMap'

const App = ({ routes }) => (
  <Page>
    <GlobalStyle />
    <Helmet titleTemplate={`%s - ${defaultTitle}`} defaultTitle={defaultTitle} />
    <Header />
    <Page.Content>
      <Switch>
        {routes.map(r => <Route {...r} />)}
      </Switch>
    </Page.Content>
    <Footer />
  </Page>
)

App.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.objectOf({
    key: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired,
  })),
}

export default App
