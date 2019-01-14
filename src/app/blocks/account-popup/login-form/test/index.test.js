import React from 'react'
import { shallow } from 'enzyme'
import LoginForm from '../index'
import { SubmitButton } from '../../style'

describe('Login form', () => {
  it('should pass email and password with login fn.', () => {
    const logIn = jest.fn()
    const wrapper = shallow(<LoginForm onSubmit={logIn} socialLogin={jest.fn()} />)
    wrapper.instance().setPassword('password')
    wrapper.instance().setEmail('email')

    wrapper.find(SubmitButton).simulate('click')

    expect(logIn).toBeCalledWith('email', 'password')
  })
})
