import { css } from 'styled-components'

export const sizes = {
  Phone: 376,
  Tablet: 768,
  Desktop: 992,
}

const media = Object.keys(sizes).reduce((finalMedia, size) => ({
  ...finalMedia,
  [`upTo${size}`]: (...args) => css`
    @media(max-width: ${sizes[size]}px) {
      ${css(...args)}
    }
  `,
  [`from${size}`]: (...args) => css`
  @media(min-width: ${sizes[size]}px) {
    ${css(...args)}
  }
`,
}), {})

export default media
