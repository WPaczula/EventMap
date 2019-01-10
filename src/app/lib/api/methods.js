import queryString from 'query-string'
import { isNullOrUndefined } from 'util'

export const get = ({ url, query, ...rest }) => {
  let finalUrl = url

  if (query) {
    const filteredQuery = Object.keys(query)
      .filter(k => !isNullOrUndefined(query[k]))
      .reduce((agg, k) => ({ ...agg, [k]: query[k] }), {})
    const queryParams = queryString.stringify(filteredQuery)

    finalUrl = `${url}${queryParams ? `?${queryParams}` : ''}`
  }

  return fetch(finalUrl, {
    method: 'GET',
    ...rest,
  }).then((r) => {
    if (!r.ok) {
      throw new Error(r.message)
    }

    return r.json()
  }).catch((e) => { throw e })
}

const withBody = method => ({
  url, data = {}, headers = {}, noContent, ...rest
}) => fetch(url, {
  method,
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    ...headers,
  },
  redirect: 'follow',
  referrer: 'no-referrer',
  body: JSON.stringify(data),
  ...rest,
}).then((r) => {
  if (!r.ok) {
    throw new Error(r.message)
  }

  if (noContent) {
    return r
  }

  return r.json()
})


export const post = withBody('POST')

export const httpDelete = withBody('DELETE')

export const patch = withBody('PATCH')
