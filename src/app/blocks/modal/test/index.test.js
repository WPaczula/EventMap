import { mount } from 'enzyme'
import React from 'react'
import Modal from '../index'


describe('Portal test', () => {
  const child = <div className="test-div"><h1>Test title</h1><p>Test div</p></div>
  const modalRoot = global.document.createElement('div')
  modalRoot.setAttribute('id', 'modal-root')
  const body = global.document.querySelector('body')
  body.appendChild(modalRoot)

  it('jsdom should work', () => {
    expect(global.document.querySelector('#modal-root').id).toEqual('modal-root')
  })
  it('should render all the children', () => {
    // given
    // when
    mount(<Modal>{child}</Modal>)
    // then
    expect(body !== null).toBe(true)
    expect(body.querySelector('#modal-root div') !== null).toBe(true)
    expect(body.querySelector('#modal-root div h1').textContent).toEqual('Test title')
    expect(body.querySelector('#modal-root div p').textContent).toEqual('Test div')
  })
})
