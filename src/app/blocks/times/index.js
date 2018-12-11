import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const DatePreview = styled.span`
  font-weight: bold;
`

const formatDate = (epoch) => {
  const monthNames = [
    'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December',
  ]

  const date = new Date(epoch)
  const day = date.getDate()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()

  return `${day} ${monthNames[monthIndex]} ${year}`
}

const Times = ({ start, end }) => (
  <div>
    <div>
      Start: <DatePreview>{formatDate(start)}</DatePreview>
    </div>
    <div>
      End: <DatePreview>{formatDate(end)}</DatePreview>
    </div>
  </div>
)

Times.propTypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
}

export default Times
