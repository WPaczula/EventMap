import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router'
import { selectCategories } from '../../../data/category/selectors'
import { fetchCategoriesList } from '../../../data/category/actions'
import Header from '../component'
import { createMockStore } from '../../../../../test/store'
import { NOOPComponent } from '../../../../../test/components'
import HeaderContainer from '../index'

jest.mock('../../../data/category/selectors')
jest.mock('../../../data/category/actions')
jest.mock('../component')

Header.mockImplementation(NOOPComponent)

describe('header container', () => {
  it('should pass correct state props.', () => {
    const categories = [{}, {}, {}]
    selectCategories.mockReturnValue(categories)
    const { wrapper } = setup()

    const props = wrapper.find(Header).props()

    expect(props).toEqual(expect.objectContaining({ categories }))
  })

  it('should pass correct dispatch props.', () => {
    const { wrapper, store } = setup()
    const props = wrapper.find(Header).props()

    props.loadCategories()

    expect(store.dispatch).toHaveBeenCalledWith(fetchCategoriesList())
  })
})

const setup = () => {
  const store = createMockStore()

  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <HeaderContainer />
      </MemoryRouter>
    </Provider>,
  )

  return { wrapper, store }
}
