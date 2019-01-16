import styled from 'styled-components'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { secondaryColor, secondaryColorDark } from '../../style/colors'

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background: ${props => (props.checked ? secondaryColor : 'white')};
  border-radius: 3px;
  transition: all 150ms;
  border: thin solid hsl(0,0%,80%); 

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${secondaryColorDark};
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }
`

const CheckboxContainer = styled.div`
  display: block;
  margin-top: 0.5rem;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

export default class Checkbox extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      checked: props.checked,
    }
  }

  componentDidUpdate() {
    const { checked } = this.state
    const { checked: propsChecked } = this.props

    /* eslint-disable */
    if (checked !== propsChecked) {
      this.setState({ checked: propsChecked })
    }
    /* eslint-enable */
  }

  handleChange = (e) => {
    const { onChange } = this.props
    this.setState({ checked: e.target.checked })

    onChange(event.target.checked)
  }

  render() {
    const { checked } = this.state

    return (
      <CheckboxContainer>
        <HiddenCheckbox {...this.props} checked={checked} onChange={this.handleChange} />
        <StyledCheckbox checked={checked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
    )
  }
}
