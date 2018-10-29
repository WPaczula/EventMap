import Home from './home'
import About from './about'
import Contact from './contact'

const homeRoute = {
  key: 'home',
  path: '/',
  component: Home,
  exact: true,
}

const aboutRoute = {
  key: 'about',
  path: '/about',
  component: About,
  exact: true,
}

const contactRoute = {
  key: 'contact',
  path: '/contact',
  component: Contact,
  exact: true,
}

export default [
  homeRoute,
  aboutRoute,
  contactRoute,
]
