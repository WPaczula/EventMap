import {
  post, get, httpDelete, patch,
} from './methods'
/* eslint-disable camelcase */
import { clientId as client_id, clientSecret as client_secret } from '../../../../config'

export default class Api {
  constructor(apiUrl) {
    this.apiUrl = apiUrl
  }

  getTokens = (email, password) => post({
    url: `${this.apiUrl}/authorization`,
    data: {
      client_id,
      client_secret,
      email,
      password,
      grant_type: 'password',
    },
  })

  createAccount = (email, nickname, password) => post({
    url: `${this.apiUrl}/register`,
    data: {
      client_id,
      client_secret,
      email,
      nickname,
      password,
    },
    noContent: true,
  })

  getCategories = () => get({
    url: `${this.apiUrl}/events/categories`,
  })

  getCategoryEvents = categoryId => get({
    url: `${this.apiUrl}/events/categories/${categoryId}`,
  })

  getEvent = (id, token) => get({
    url: `${this.apiUrl}/events/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  loadEventParticipants = id => get({
    url: `${this.apiUrl}/events${id}/participants`,
  })

  signUpForEvent = (id, token) => post({
    url: `${this.apiUrl}/events/${id}/participants`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    noContent: true,
  })

  giveUpEvent = (id, token) => httpDelete({
    url: `${this.apiUrl}/events/${id}/participants`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    noContent: true,
  })

  getUsersData = id => get({
    url: `${this.apiUrl}/users/${id}`,
  })

  getMapEvents = (lat, lng, rad) => get({
    url: `${this.apiUrl}/map/events/area?lat=${lat}&lng=${lng}&rad=${rad}`,
  })

  createNewEvent = (params, token) => post({
    url: `${this.apiUrl}/events/add`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: params,
  })

  updateEvent = (id, params, token) => patch({
    url: `${this.apiUrl}/events/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: params,
    noContent: true,
  })

  searchEvents = params => get({
    url: `${this.apiUrl}/events`,
    query: params,
  })

  deleteUsersAccount = token => httpDelete({
    url: `${this.apiUrl}/users`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    noContent: true,
  })

  socialLogin = (name, email, userId) => post({
    url: `${this.apiUrl}/authorization/social`,
    data: {
      name,
      email,
      userId,
      client_id,
      client_secret,
    },
  })

  logoutUser = token => post({
    url: `${this.apiUrl}/authorization/logout`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    noContent: true,
  })

  popularEvents = () => get({
    url: `${this.apiUrl}/events/popular`,
  })
}
