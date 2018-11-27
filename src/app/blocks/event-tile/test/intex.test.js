import React from 'react'
import { shallow } from 'enzyme'
import EventTile from '../index'

describe('event tile', () => {
  const renderEventTile = (opts = {}) => {
    const {
      id = 'id',
      title = 'title',
      description = 'description',
      photoUrl = 'photoUrl',
      ownerName = 'ownerName',
      setVisible = jest.fn(),
      navigate = jest.fn(),
      isVisible = false,
    } = opts

    return shallow(<EventTile
      id={id}
      title={title}
      description={description}
      photoUrl={photoUrl}
      ownerName={ownerName}
      setVisible={setVisible}
      navigate={navigate}
      isVisible={isVisible}
    />)
  }
  it('should set visible if clicked and invisible.', () => {
    const setVisible = jest.fn()
    const wrapper = renderEventTile({ isVisible: false, setVisible })

    wrapper.simulate('click')

    expect(setVisible).toBeCalled()
  })

  it('should navigate if clicked and visible.', () => {
    const navigate = jest.fn()
    const wrapper = renderEventTile({ isVisible: true, navigate })

    wrapper.simulate('click')

    expect(navigate).toBeCalled()
  })
})
