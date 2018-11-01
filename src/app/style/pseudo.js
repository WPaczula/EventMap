import { css } from 'styled-components'
import media from './media'

export const hover = (...args) => css`
  ${media.fromDesktop`
    &:hover {
      ${css(...args)}
    }
  `}
`
