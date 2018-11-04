import React, { Component } from 'react'
import { StyledAccountLink } from '../style'
import LoginPopup from '../../../login-popup/index'

class LogIn extends Component {
    state = { popup: false }


    popupHandler = () => {
      const { popup } = this.state
      this.setState({ popup: !popup })
    };

    render() {
      const { popup } = this.state
      return (
          <>
            <StyledAccountLink onClick={this.popupHandler}>
            Login 🚀 or Register
            </StyledAccountLink>
            {popup && <LoginPopup popupHandler={this.popupHandler} />}
        </>
      )
    }
}

export default LogIn
