import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from '../link'
import { primaryColorDark } from '../../style/colors'

const ParticipantsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;

  & > * {
    flex: 0 0 auto;
  }
`

const Participant = styled.div`
  margin: 1rem;
  border-radius: 1rem;
  width: 10rem;
  height: 5rem;
  position: relative;
  transition: transform 0.5s ease-in-out;
  box-shadow: 0px 0px 84px -26px rgba(0,0,0,0.53);  
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`

const ParticipantLink = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 10rem;
  transform: translate(-50%, -50%);
  color: ${primaryColorDark};

  &:hover {
    color: ${primaryColorDark};
    text-decoration: none;
  }
`

const Participants = ({ participants }) => (
  <ParticipantsContainer>
    {
      participants && participants.map(p => (
        <Participant>
          <ParticipantLink to={`/user/${p.id}`}>{p.nickname}</ParticipantLink>
        </Participant>
      ))
    }
  </ParticipantsContainer>
)

Participants.propTypes = {
  participants: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
  })),
}

export default Participants
