import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CategoryTileContainer, CategoryTileLink, CategoryTitle } from './style'

class CategoryTile extends Component {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
  }

  render() {
    const { _id, name, photoUrl } = this.props

    return (
      <CategoryTileContainer photoUrl={photoUrl}>
        <CategoryTileLink to={`/categories/${_id}`} name={name}>
          <CategoryTitle>{name}</CategoryTitle>
        </CategoryTileLink>
      </CategoryTileContainer>
    )
  }
}

const Loading = () => <CategoryTileContainer loading>...</CategoryTileContainer>
CategoryTile.Loading = Loading

export default CategoryTile
