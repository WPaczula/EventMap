import { renderToString } from 'react-dom/server'
import App from '../app'
import withTemplate from './withTemplate'

const createHtml = () => {
  const html = renderToString(App)
  return withTemplate(html)
}

export default createHtml
