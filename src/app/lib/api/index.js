import { post, get } from './methods'
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

  getEvent = id => get({
    url: `${this.apiUrl}/events/${id}`,
  })
}
