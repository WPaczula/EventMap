import { post } from './methods'
/* eslint-disable camelcase */
import { clientId as client_id, clientSecret as client_secret } from '../../../../config'
/* eslint-enable */

export default class Api {
  constructor(apiUrl) {
    this.apiUrl = apiUrl
  }

  getTokens = () => post({
    url: `${this.apiUrl}/authorization`,
    data: {
      client_id,
      client_secret,
      email: 'user',
      password: 'pass',
      grant_type: 'password',
    },
  })
}
