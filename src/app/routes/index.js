import Home from './home'
import Categories from './categories'
import Category from './category'
import Event from './event'

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

const categoryRoute = {
  key: 'category',
  path: '/categories/:categoryId',
  component: Category,
  exact: false,
}

const eventRoute = {
  key: 'event',
  path: '/:eventId',
  component: Event,
  exact: true,
}

export default [
  homeRoute,
  categoriesRoute,
  categoryRoute,
  eventRoute,
]
