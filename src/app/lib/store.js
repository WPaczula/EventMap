import Immutable from 'seamless-immutable'

const makeReducer = (actionHandlers, initialState) => (state = Immutable(initialState), action) => {
  const handler = actionHandlers[action.type]
  return handler ? handler(state, action) : state
}

export default makeReducer
