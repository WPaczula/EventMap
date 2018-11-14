export const get = ({ url, ...rest }) => fetch(url, {
  method: 'GET',
  ...rest,
}).then(r => r.json())

export const post = ({ url, data = {}, ...rest }) => fetch(url, {
  method: 'POST',
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  redirect: 'follow',
  referrer: 'no-referrer',
  body: JSON.stringify(data),
  ...rest,
}).then((r) => {
  if (r.status === 201) {
    return r
  }
  return r.json()
})
