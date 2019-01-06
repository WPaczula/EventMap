export const get = ({ url, ...rest }) => fetch(url, {
  method: 'GET',
  ...rest,
}).then(r => r.json())

export const post = ({
  url, data = {}, headers = {}, noContent, ...rest
}) => fetch(url, {
  method: 'POST',
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

export const httpDelete = ({
  url, data = {}, headers = {}, noContent, ...rest
}) => fetch(url, {
  method: 'DELETE',
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
  if (noContent || r.status === 201) {
    return r
  }
  return r.json()
})
