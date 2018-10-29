import React from 'react'
import PropTypes from 'prop-types'
import Content from './content'
import StyledPage from './style'

const Page = ({ children }) => (
  <StyledPage>
    {children}
  </StyledPage>
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

Page.Content = Content

export default Page
