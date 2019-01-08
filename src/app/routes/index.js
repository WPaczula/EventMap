import Home from './home'
import Categories from './categories'
import Category from './category'
import Event from './event'
import User from './user'
import AddEvent from './new-event'
import EditEvent from './edit-event'

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
  path: '/events/:eventId',
  component: Event,
  exact: true,
}

const userRoute = {
  key: 'user',
  path: '/user/:userId',
  component: User,
  exact: true,
}

const addEventRoute = {
  key: 'add-event',
  path: '/new-event',
  component: AddEvent,
  exact: true,
}

const editEventRouter = {
  key: 'edit-event',
  path: '/edit-event/:eventId',
  component: EditEvent,
  exact: true,
}

export default [
  homeRoute,
  categoriesRoute,
  categoryRoute,
  eventRoute,
  userRoute,
  addEventRoute,
  editEventRouter,
]
