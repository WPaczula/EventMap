import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import { StaticRouter } from 'react-router-dom'
import App from '../app'
import withTemplate from './withTemplate'
import routes from '../app/routes'

const createHtml = (url) => {
  const sheet = new ServerStyleSheet()

  const AppWrapper = (
    <StyleSheetManager sheet={sheet.instance}>
      <StaticRouter location={url} context={{}}>
        <App routes={routes} />
      </StaticRouter>
    </StyleSheetManager>
  )

  const html = renderToString(AppWrapper)
  const styles = sheet.getStyleTags()

  return withTemplate(html, styles)
}

export default createHtml
