import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from '../app'
import routes from '../app/routes'
import createScore from '../app/data/store'

const preloadedState = window.__PRELOADED_STATE__
const isProd = window.__PROD__

const AppWrapper = () => (
  <Provider store={createScore({ isSSR: false, preloadedState })}>
    <Router>
      <App routes={routes} />
    </Router>
  </Provider>
)

hydrate(<AppWrapper />, document.getElementById('root'))

if ('serviceWorker' in navigator && isProd) {
  navigator.serviceWorker.register('/sw.js')
} else {
  console.log('Cannot register a service worker')
}

window.addEventListener('beforeinstallprompt', (e) => {
  e.prompt()
})
