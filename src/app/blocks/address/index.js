import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import media from '../../style/media'

const AddressContainer = styled.div`
  text-align: left;
  margin: 1em auto;

  ${media.fromDesktop`
    margin: 1em 0.5em;
  `}
`

const Address = ({
  city, street, postalCode, buildingNumber, country,
}) => (
  <AddressContainer>
    <p>{country}</p>
    <p>{street} {buildingNumber}</p>
    <p>{postalCode} {city}</p>
  </AddressContainer>
)

Address.propTypes = {
  city: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  buildingNumber: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
}

export default Address
