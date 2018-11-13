import React from 'react'
import { shallow } from 'enzyme'
import RegisterForm from '..'
import MessagePopup from '../../../message-popup'

describe('register form', () => {
  it('should show errormessage when specified by props', () => {
    const errorMessage = 'message'
    const shouldShowError = true
    const wrapper = shallow(<RegisterForm onSubmit={jest.fn()} />)

    wrapper.setState({ shouldShowError, errorMessage })
    const popup = wrapper.find(MessagePopup)

    expect(popup.exists()).toBe(true)
    expect(popup.prop('children')).toBe(errorMessage)
  })
})
