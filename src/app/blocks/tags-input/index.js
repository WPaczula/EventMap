import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  TagsContainer,
  Input,
  Tag,
  TagsList,
  X,
} from './style'

const ENTER_KEY = 13
const COMMA_KEY = 188
const BACKSPACE_KEY = 8

export default class Tags extends Component {
  static propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = { tags: [...props.tags], value: '' }
  }

  componentDidMount() {
    const { tags: passedTags } = this.props
    const { tags } = this.state

    if (passedTags !== tags) {
      this.setState({ tags: passedTags })
    }
  }

  /* eslint-disable */
  componentDidUpdate() {
    const { tags: passedTags } = this.props
    const { tags } = this.state

    if (passedTags !== tags) {
      this.setState({ tags: passedTags })
    }
  }
  /* eslint-enable */

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  handleKeyUp = (e) => {
    const key = e.keyCode

    if (key === ENTER_KEY || key === COMMA_KEY) {
      e.preventDefault()
      this.addTag()
    }
  }

  handleKeyDown = (e) => {
    const key = e.keyCode
    const { value } = this.state

    if (key === BACKSPACE_KEY && !value) {
      this.editPrevTag()
    }
  }

  addTag = () => {
    const { onChange } = this.props
    const { tags, value } = this.state
    let tag = value.trim()

    tag = tag.replace(/,/g, '')

    if (!tag) {
      return
    }

    const newTags = tags.find(t => t === tag) ? tags : [...tags, tag]

    this.setState({
      tags: newTags,
      value: '',
    }, () => onChange(newTags))
  }


  editPrevTag = () => {
    const { tags } = this.state
    const { onChange } = this.props

    const tag = tags.pop()

    this.setState({ tags, value: tag })
    onChange(tags)
  }

  handleDelete = (tag) => {
    const { tags } = this.state
    const { onChange } = this.props

    const newTags = tags.filter(t => t !== tag)

    this.setState({ tags: newTags },
      () => onChange(newTags))
  }

  render() {
    const { tags, value } = this.state
    return (
      <TagsContainer>
        <TagsList>
          {tags.map((tag, i) => (
            <Tag key={tag + i}>
              {tag}
              <X onClick={(e) => {
                e.preventDefault()
                this.handleDelete(tag)
              }}
              >
                X
              </X>
            </Tag>
          ))}
        </TagsList>
        <Input
          type="text"
          placeholder="Add tag..."
          value={value}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          onKeyDown={this.handleKeyDown}
        />
      </TagsContainer>
    )
  }
}
