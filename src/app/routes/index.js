import Home from './home'
import Categories from './categories'
import Category from './category/component'

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

export default [
  homeRoute,
  categoriesRoute,
  categoryRoute,
]
