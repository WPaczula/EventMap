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
    {country && <p>{country}</p>}
    {street && buildingNumber && <p>{street} {buildingNumber}</p>}
    {postalCode && city && <p>{postalCode} {city}</p>}
  </AddressContainer>
)

Address.propTypes = {
  city: PropTypes.string,
  street: PropTypes.string,
  postalCode: PropTypes.string,
  buildingNumber: PropTypes.string,
  country: PropTypes.string,
}

export default Address
