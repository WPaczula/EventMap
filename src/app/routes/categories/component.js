import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  CategoriesPageLayout,
} from './style'
import CategoryTile from '../../blocks/category-tile'

class CategoriesPage extends Component {
  static propTypes = {
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        photoUrl: PropTypes.string.isRequired,
      }),
    ),
  }

  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { categories } = this.props

    return (
      <CategoriesPageLayout>
        {
          (
            categories
            || new Array(12).fill().map((e, i) => i)
          ).map(
            c => (c._id
              ? <CategoryTile key={c._id} {...c} />
              : <CategoryTile.Loading key={`loading-category-tile-${c}`} />),
          )
        }
      </CategoriesPageLayout>
    )
  }
}

export default CategoriesPage
