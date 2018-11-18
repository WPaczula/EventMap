import Home from './home'
import Categories from './categories'

const homeRoute = {
  key: 'home',
  path: '/',
  component: Home,
  exact: true,
}

const categoriesRoute = {
  key: 'categories',
  path: '/categories',
  component: Categories,
  exact: true,
}

export default [
  homeRoute,
  categoriesRoute,
]
