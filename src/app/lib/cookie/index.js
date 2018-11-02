import Cookie from 'js-cookie'

const DummyCookie = {
  get: () => undefined,
  set: () => {},
}

export default typeof window === 'undefined'
  ? DummyCookie
  : Cookie
