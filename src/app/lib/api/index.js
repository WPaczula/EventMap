import { post, get, httpDelete } from './methods'
/* eslint-disable camelcase */
import { clientId as client_id, clientSecret as client_secret } from '../../../../config'
/* eslint-enable */

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
}
