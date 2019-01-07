export const get = ({ url, ...rest }) => fetch(url, {
  method: 'GET',
  ...rest,
}).then(r => r.json())

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
  if (noContent) {
    return r
  }

  return r.json()
})

export const post = withBody('POST')

export const httpDelete = withBody('DELETE')

export const patch = withBody('PATCH')
