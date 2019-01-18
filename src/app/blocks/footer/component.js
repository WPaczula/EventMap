import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyledFooter,
  TermsButton,
  StyledPopup,
} from './style'
import Modal from '../modal'
import { X } from '../account-popup/style'

export default class Footer extends Component {
  static propTypes = {
    terms: PropTypes.object,
    loadTerms: PropTypes.func.isRequired,
  }

  state = {
    termsVisible: false,
  }

  componentDidMount() {
    const { terms, loadTerms } = this.props

    if (!terms) {
      loadTerms()
    }
  }

  render() {
    const { termsVisible } = this.state
    const { terms } = this.props

    return (
      <StyledFooter>
        <TermsButton onClick={() => this.setState({ termsVisible: true })}>
          Open terms
        </TermsButton>
        { termsVisible && terms && terms.agreementContent
          && (
          <Modal>
            <StyledPopup>
              <X onClick={() => this.setState({ termsVisible: false })} />
              { terms.agreementContent }
            </StyledPopup>
          </Modal>
          )
        }
      </StyledFooter>
    )
  }
}
