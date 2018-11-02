import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from '../app'
import createStore from '../app/data/store'
import withTemplate from './withTemplate'
import routes from '../app/routes'

const createHtml = (url) => {
  const sheet = new ServerStyleSheet()

  const AppWrapper = (
    <Provider store={createStore({ isSSR: true })}>
      <StyleSheetManager sheet={sheet.instance}>
        <StaticRouter location={url} context={{}}>
          <App routes={routes} />
        </StaticRouter>
      </StyleSheetManager>
    </Provider>
  )

  const html = renderToString(AppWrapper)
  const styles = sheet.getStyleTags()

  return withTemplate(html, styles)
}

export default createHtml
