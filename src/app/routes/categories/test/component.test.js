import { shallow } from 'enzyme'
import React from 'react'
import CategoriesPage from '../component'
import CategoryTile from '../../../blocks/category-tile'

describe('Categories Page', () => {
  it('should show loading categories if they are not loaded yet.', () => {
    const categories = undefined

    const loadingTiles = shallow(<CategoriesPage categories={categories} />)
      .find(CategoryTile.Loading)

    expect(loadingTiles.length).toBe(12)
  })

  it('should render categories if they are specified', () => {
    const categories = [
      { _id: '1', name: '1', photoUrl: 'url' },
      { _id: '2', name: '1', photoUrl: 'url' },
      { _id: '3', name: '1', photoUrl: 'url' },
    ]

    const categoryTiles = shallow(<CategoriesPage categories={categories} />)
      .find(CategoryTile)

    expect(categoryTiles.length).toBe(3)
    expect(categoryTiles.first().props()).toEqual({ _id: '1', name: '1', photoUrl: 'url' })
  })
})
