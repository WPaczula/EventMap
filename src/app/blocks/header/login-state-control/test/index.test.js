import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router'
import LoginStateControl from '../component'
import { selectIsUserSignedIn } from '../../../../data/user/selectors'
import { getAccessToken, clearTokens } from '../../../../data/user/actions'
import { createMockStore } from '../../../../../../test/store'
import { NOOPComponent } from '../../../../../../test/components'
import LoginStateControlContainer from '../index'

jest.mock('../../../../data/user/selectors')
jest.mock('../../../../data/user/actions')
jest.mock('../component')

LoginStateControl.mockImplementation(NOOPComponent)

describe('notification-cta', () => {
  it('should pass correct state props.', () => {
    const isUserLoggedIn = true
    selectIsUserSignedIn.mockReturnValue(isUserLoggedIn)
    const { wrapper } = setup()

    const props = wrapper.find(LoginStateControl).props()

    expect(props).toEqual(expect.objectContaining({ isUserLoggedIn }))
  })

  it('should pass correct dispatch props.', () => {
    const { wrapper, store } = setup()
    const props = wrapper.find(LoginStateControl).props()

    props.logIn()
    props.logOut()

    expect(store.dispatch).toHaveBeenCalledWith(getAccessToken())
    expect(store.dispatch).toHaveBeenCalledWith(clearTokens())
  })
})

const setup = () => {
  const store = createMockStore()

  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <LoginStateControlContainer />
      </MemoryRouter>
    </Provider>,
  )

  return { wrapper, store }
}
